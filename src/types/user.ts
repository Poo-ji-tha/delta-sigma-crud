export interface User {
  id?: string; // <--- string, because JSON-server uses string IDs
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
