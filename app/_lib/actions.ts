"use server";

import { type User, formSignUpSchema, loginSchema } from "./types";

type LoginUser = {
  email: string;
  password: string;
};

let users: User[] = [];

export async function getExistingUser(user: User | LoginUser) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const existingUser = users.find(
    (el) => el.email.toLowerCase() === user.email.toLowerCase()
  );
  return existingUser;
}

export async function createUser(user: User): Promise<User | null> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  try {
    formSignUpSchema.parse(user);
    const userExists = await getExistingUser(user);
    if (userExists) throw new Error("A user with this email already exists!");
    users.push(user);
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getLoginUser(user: LoginUser): Promise<User | null> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    loginSchema.parse(user);
    const loggedInUser = await getExistingUser(user);
    if (!loggedInUser) throw new Error("Register first");
    if (loggedInUser.password !== user.password)
      throw new Error("Invalid credentials");

    return loggedInUser;
  } catch (error) {
    console.log(error);
    return null;
  }
}
