import { Role } from "src/app/models/role";

export interface UserResponse {
  id: number,
  fullname: string,
  phone_number: string,
  address: string,
  active: boolean,
  dateOfBirth: Date,
  role: Role,
  facebook_account_id: number,
  google_account_id: number
}
