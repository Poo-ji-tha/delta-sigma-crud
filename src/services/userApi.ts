import axios from "axios";
import type { User } from "../types/user";

// Replace with your MockAPI URL
const API_URL = "https://698669138bacd1d773eaed5a.mockapi.io/delts/user/users";

// Fetch all users
export const getUsers = () => axios.get<User[]>(API_URL);

// Fetch single user by ID
export const getUserById = (id: string) => axios.get<User>(`${API_URL}/${id}`);

// Create a new user
export const createUser = (data: User) => axios.post<User>(API_URL, data);

// Update an existing user
export const updateUser = (id: string, data: User) =>
  axios.put<User>(`${API_URL}/${id}`, data);

// Delete a user
export const deleteUser = (id: string) => axios.delete(`${API_URL}/${id}`);
