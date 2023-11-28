export interface UserRegistrationData {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

// Type for user data as it exists on the server (includes 'id')
export interface ServerUserData extends UserRegistrationData {
  id: number; // Assuming 'id' is a number, adjust accordingly
}