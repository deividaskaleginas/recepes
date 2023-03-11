export type UserData = {
  id: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  confirmPassword: string;
  favorites: string[];
};

export type LoggedUserData = {
  id: string;
  username: string;
  avatar: string;
  favorites: string[];
};

export type DishData = {
  id: string;
  comment: string;
  ingridents: IngredientType[];
  photo: string;
  procedure: ProcedureType[];
  time: string;
  title: string;
};

export interface IngredientType {
  ingredient: string;
  amount: string;
  measure?: string;
}

export interface ProcedureType {
  step: string;
}
