export interface ITeam {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: "manager" | "admin" | "user",
}