import axios from "axios";

const API_KEY = "AIzaSyDF51Pd4J6mfyjo9LZf0JYkfi8EifmbIMw";

export const createUser = async (email, password) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  console.log(response)
};
