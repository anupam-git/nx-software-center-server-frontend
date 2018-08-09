import { IApp } from "./IApp";

export interface IActionPayload {
  /** ActionType as defined in _shared/ActionTypes.ts */
  type: string;
  /** Payload to be sent to the reducer */
  data: {
    apps?: IApp[],
    search?: {
      text: string,
      category: string
    },
  };
}