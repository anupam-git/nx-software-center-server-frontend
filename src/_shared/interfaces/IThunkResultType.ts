import { ThunkAction } from "redux-thunk";
import { IActionPayload } from "./IActionPayload";
import IRootState from "./IRootState";

export type IThunkResultType = ThunkAction<any, IRootState, void, IActionPayload>;