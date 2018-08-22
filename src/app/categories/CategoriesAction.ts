import { Dispatch } from "react-redux";
import { ActionTypes } from "../../_shared/ActionTypes";
import { IActionPayload } from "../../_shared/interfaces/IActionPayload";
import { IApp } from "../../_shared/interfaces/IApp";
import { IThunkResultType } from "../../_shared/interfaces/IThunkResultType";

function updateAppsList(apps: IApp[] | {
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
}): IActionPayload {
  return {
    type: ActionTypes.ACTION_CATEGORIES_UPDATE_APPS_LIST,
    data: { apps }
  };
}

export function fetchAppsList(): IThunkResultType {
  return (dispatch: Dispatch<IActionPayload>) => {
    fetch(
      `http://apps.nxos.org/api/applications/search?query=&category=&offset=&limit=`,
      { headers: { "Cache-Control": "no-cache" } }
    )
      .then((response: Response) => {
        response
          .json()
          .then((apps: IApp[]) => {
            const categorisedApps = {
              "Audio/Video": [],
              Audio: [],
              Video: [],
              Development: [],
              Education: [],
              Game: [],
              Graphics: [],
              Network: [],
              Office: [],
              Science: [],
              Settings: [],
              System: [],
              Utility: [],
            };

            apps.map((app) => {
              if (app.categories) {
                app.categories.map((category) => {
                  if (category && Object.keys(categorisedApps).indexOf(category) >= 0) {
                    categorisedApps[category].push(app);
                  }
                });
              }
            });

            dispatch(updateAppsList(categorisedApps));
          });
      });

    return;
  };
}