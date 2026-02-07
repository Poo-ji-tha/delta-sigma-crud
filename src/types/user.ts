/**
 * User Interface
 *
 * Defines the shape of a User object used throughout the application.
 * Ensures type safety for user-related components, forms, and API calls.
 *
 * Fields:
 *  - id? (string, optional): Unique identifier of the user. Optional because new users may not have an ID yet.
 *  - firstName (string): User's first name.
 *  - lastName (string): User's last name.
 *  - email (string): User's email address.
 *  - phone (string): User's phone number.
 *
 * Notes:
 *  - The ID is a string because APIs like JSON-server or MockAPI often return string IDs.
 *  - Can be used for type-checking form data, API responses, and table rendering.
 *
 * Usage Example:
 *  const newUser: User = {
 *    firstName: "John",
 *    lastName: "Doe",
 *    email: "john.doe@example.com",
 *    phone: "1234567890",
 *  };
 */

export interface User {
  id?: string; // <--- string, because JSON-server uses string IDs
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
