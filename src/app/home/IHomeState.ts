import { IApp } from "../../_shared/interfaces/IApp";

export default interface IHomeState {
  apps: IApp[];
  search: {
    text: string,
    category: string
  };
}