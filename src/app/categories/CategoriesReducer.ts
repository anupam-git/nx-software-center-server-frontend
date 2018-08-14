import * as ActionTypes from "../../_shared/ActionTypes";
import { IActionPayload } from "../../_shared/interfaces/IActionPayload";
import ICategoriesState from "./ICategoriesState";

const defaultAppsList = [{ "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category1"], "format": 1, "icon": "icon1", "id": "1", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category2"], "format": 1, "icon": "icon2", "id": "2", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category3"], "format": 1, "icon": "icon3", "id": "3", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category4"], "format": 1, "icon": "icon4", "id": "4", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category5"], "format": 1, "icon": "icon5", "id": "5", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category6"], "format": 1, "icon": "icon6", "id": "6", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category7"], "format": 1, "icon": "icon7", "id": "7", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category8"], "format": 1, "icon": "icon8", "id": "8", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category9"], "format": 1, "icon": "icon9", "id": "9", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category10"], "format": 1, "icon": "icon10", "id": "10", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }];

const defaultState: ICategoriesState = {
  apps: {
    "Audio/Video": defaultAppsList,
    Audio: defaultAppsList,
    Video: defaultAppsList,
    Development: defaultAppsList,
    Education: defaultAppsList,
    Game: defaultAppsList,
    Graphics: defaultAppsList,
    Network: defaultAppsList,
    Office: defaultAppsList,
    Science: defaultAppsList,
    Settings: defaultAppsList,
    System: defaultAppsList,
    Utility: defaultAppsList,
  }
};

export default function categoriesReducer(state = defaultState, action: IActionPayload) {
  switch (action.type) {
    case ActionTypes.ACTION_CATEGORIES_UPDATE_APPS_LIST: {
      return {
        ...state,
        apps: action.data.apps
      };
    }

    default: {
      return state;
    }
  }
}