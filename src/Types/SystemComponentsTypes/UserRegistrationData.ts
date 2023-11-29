export interface UserRegistrationData {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  userType: string;
}

// Type for user data as it exists on the server (includes 'id')
export interface ServerUserData extends Omit<UserRegistrationData, 'userType'> {
  id: number;
  userType: { id: number; name: string }[]; // UserType is an array of objects
}