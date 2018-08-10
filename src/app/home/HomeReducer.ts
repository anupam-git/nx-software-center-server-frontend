import * as ActionTypes from "../../_shared/ActionTypes";
import { IActionPayload } from "../../_shared/interfaces/IActionPayload";
import IHomeComponentState from "./IHomeComponentState";

const defaultState: IHomeComponentState = {
  search: {
    text: "",
    category: ""
  },
  apps: [{ "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category1"], "format": 1, "icon": "icon1", "id": "1", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category2"], "format": 1, "icon": "icon2", "id": "2", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category3"], "format": 1, "icon": "icon3", "id": "3", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category4"], "format": 1, "icon": "icon4", "id": "4", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category5"], "format": 1, "icon": "icon5", "id": "5", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category6"], "format": 1, "icon": "icon6", "id": "6", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category7"], "format": 1, "icon": "icon7", "id": "7", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category8"], "format": 1, "icon": "icon8", "id": "8", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category9"], "format": 1, "icon": "icon9", "id": "9", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }, { "abstract": { "null": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, "categories": ["Category10"], "format": 1, "icon": "icon10", "id": "10", "keywords": [], "name": { "null": "SomeBigName of App" }, "isDummy": true }]
};

export default function homeReducer(state = defaultState, action: IActionPayload) {
  switch (action.type) {
    case ActionTypes.ACTION_HOME_UPDATE_APPS_LIST: {
      return {
        ...state,
        apps: action.data.apps
      };
    }

    case ActionTypes.ACTION_HOME_UPDATE_SEARCH_TEXT: {
      return {
        ...state,
        search: action.data.search
      };
    }

    default: {
      return state;
    }
  }
}