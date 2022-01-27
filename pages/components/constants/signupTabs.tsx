export interface Tab {
  id: number;
  name: string;
  value: string;
}
export const signupTabs: Tab[] = [
  {
    id: 1,
    name: "Email",
    value: "email",
  },
  {
    id: 2,
    name: "Phone",
    value: "phone",
  },
];
