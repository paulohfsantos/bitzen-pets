export interface User {
  id: number;
  name: string;
  email: string;
  document: string;
  phone_number: string;
  email_verified_at: string;
  profile_photo_url: string;
  type: {
    id: number;
    description: string;
  };
}
