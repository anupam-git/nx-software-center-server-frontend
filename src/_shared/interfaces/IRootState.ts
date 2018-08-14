import ICategoriesState from "../../app/categories/ICategoriesState";
import IHomeState from "../../app/home/IHomeState";

export default interface IRootState {
  Home: IHomeState;
  Categories: ICategoriesState;
}