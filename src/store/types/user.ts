export type UserStateType = {
  token: string | null;
  student: IStudent | null;
};

export interface IStudent {
  first_name: string;
  last_name: string;
  address: string;
  phone_number: string;
  date_of_birth: Date;
  student_id: number;
}
