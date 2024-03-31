"use server";
import axios from "axios";

export async function register(formData) {
  const name = formData.get("fullname");
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const response = await axios
      .post(`${process.env.NEXTAUTH_URL}/api/signup`, {
        name,
        email,
        password,
      })
      .then((res) => {
        return res.data;
      });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
