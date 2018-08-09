import { Dispatch } from "react-redux";
import * as ActionTypes from "../_shared/ActionTypes";
import { IActionPayload } from "../_shared/interfaces/IActionPayload";
import { IApp } from "../_shared/interfaces/IApp";
import { IThunkActionType } from "../_shared/interfaces/IThunkActionType";

function updateAppsList(apps: IApp[]): IActionPayload {
  return {
    type: ActionTypes.ACTION_HOME_UPDATE_APPS_LIST,
    data: { apps }
  };
}

export function fetchAppsList(search = {
  text: "",
  category: ""
}): IThunkActionType {
  return (dispatch: Dispatch<IActionPayload>) => {
    fetch(
      `http://apps.nxos.org/api/applications/search?query=${search.text}&category=${search.category}&offset=&limit=`,
      { headers: { "Cache-Control": "no-cache" } }
    )
      .then((response: Response) => {
        response
          .json()
          .then((apps: IApp[]) => {
            dispatch(updateAppsList(apps));
          });
      });

    return;
  };
}

export function updateSearch(search: {
  text: string,
  category: string
}): IActionPayload {
  return {
    type: ActionTypes.ACTION_HOME_UPDATE_SEARCH_TEXT,
    data: {
      search
    }
  };
}