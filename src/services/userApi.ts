/**
 * userApi Service
 *
 * Provides functions to interact with the User API for CRUD operations.
 * Uses Axios for HTTP requests.
 *
 * Functions:
 *  - getUsers(): Fetch all users.
 *  - getUserById(id: string): Fetch a single user by ID.
 *  - createUser(data: User): Create a new user.
 *  - updateUser(id: string, data: User): Update an existing user.
 *  - deleteUser(id: string): Delete a user by ID.
 *
 * Notes:
 *  - API_URL should point to your backend or mock API endpoint.
 *  - Each function returns a Promise that resolves with Axios response data.
 *
 * Usage Example:
 *  import { getUsers, createUser } from "../services/userApi";
 *
 *  getUsers().then(res => console.log(res.data));
 */

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
