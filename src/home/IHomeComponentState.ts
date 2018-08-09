import { IApp } from "../_shared/interfaces/IApp";

export default interface IHomeComponentState {
  apps: IApp[];
  search: {
    text: string,
    category: string
  };
}