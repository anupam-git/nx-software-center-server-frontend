import { Action } from "redux";
import { ActionTypes } from "../ActionTypes";
import { IApp } from "./IApp";

export interface IActionPayload extends Action<any> {
  type: ActionTypes;
  /** Payload to be sent to the reducer */
  data: {
    apps?: IApp[] | {
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
    },
    search?: {
      text: string,
      category: string
    }
  };
}