import { IApp } from "../../_shared/interfaces/IApp";

export default interface ICategoriesState {
  apps: {
    "Audio/Video": IApp[],
    Audio: IApp[],
    Video: IApp[],
    Development: IApp[],
    Education: IApp[],
    Game: IApp[],
    Graphics: IApp[],
    Network: IApp[],
    Office: IApp[],
    Science: IApp[],
    Settings: IApp[],
    System: IApp[],
    Utility: IApp[],
  };
}