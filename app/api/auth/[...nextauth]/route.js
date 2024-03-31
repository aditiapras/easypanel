import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          const user = await fetch(`${process.env.NEXTAUTH_URL}/api/signin`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }).then((data) => data.json());

          console.log(user);
          const matchPassword = await bcrypt.compare(password, user.password);

          if (!user) {
            console.log("user not found");
            return null;
          }
          if (!matchPassword) {
            console.log("password not match");
            return null;
          }
          return {
            id: user.id,
            name: user.username,
            email: user.email,
          };
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
};

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
