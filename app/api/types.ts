export interface Entity {
  id: string;
  [key: string]: string | number | boolean | undefined | null;
}

export interface User extends Entity {
  email: string;
}