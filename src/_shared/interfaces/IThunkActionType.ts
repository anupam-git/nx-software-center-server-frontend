import { Dispatch } from "redux";
import { IActionPayload } from "./IActionPayload";

export type IThunkActionType = (dispatch: Dispatch<IActionPayload>) => void;