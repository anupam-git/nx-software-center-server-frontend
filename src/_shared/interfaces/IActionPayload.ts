import { IApp } from "./IApp";

export interface IActionPayload {
  /** ActionType as defined in _shared/ActionTypes.ts */
  type: string;
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