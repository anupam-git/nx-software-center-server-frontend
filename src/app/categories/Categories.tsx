import * as React from "react";
import { connect } from "react-redux";

// import AppList from "../../_shared/components/applist/AppList";
import { IActionPayload } from "../../_shared/interfaces/IActionPayload";
import { IApp } from "../../_shared/interfaces/IApp";
import IRootState from "../../_shared/interfaces/IRootState";
import * as Actions from "./CategoriesAction";
import ICategoriesState from "./ICategoriesState";

import { ThunkDispatch } from "redux-thunk";
import AppList from "../../_shared/components/applist/AppList";
import "./Categories.scss";

interface ICategoriesComponentPropTypes extends React.Props<CategoriesComponent>, ICategoriesState {
  apps: {
    Audio: IApp[],
    "Audio/Video": IApp[],
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
    Video: IApp[],
  };
}

export class CategoriesComponent extends React.Component<ICategoriesComponentPropTypes, any> {
  public render() {
    const audioIcon = { name: "sound" };
    // const audioVideoIcon = { name: "setting" };
    const developmentIcon = { name: "code" };
    const educationIcon = { name: "book" };
    const gameIcon = { name: "gamepad" };
    const graphicsIcon = { name: "picture" };
    const networkIcon = { name: "globe" };
    const officeIcon = { name: "pencil" };
    const scienceIcon = { name: "lab" };
    const settingsIcon = { name: "setting" };
    const systemIcon = { name: "desktop" };
    const utilityIcon = { name: "wrench" };
    const videoIcon = { name: "video" };

    return (
      <div className="Categories">
        <AppList
          apps={this.props.apps.Audio}
          listName="Audio"
          icon={audioIcon}
          className="Categories--Applist--Audio" />

        {/* <AppList
          apps={this.props.apps["Audio/Video"]}
          listName="Audio/Video"
          icon={audioVideoIcon}
          className="Categories--Applist--Audio-Video" /> */}

        <AppList
          apps={this.props.apps.Development}
          listName="Development"
          icon={developmentIcon}
          className="Categories--Applist--Development" />

        <AppList
          apps={this.props.apps.Education}
          listName="Education"
          icon={educationIcon}
          className="Categories--Applist--Education" />

        <AppList
          apps={this.props.apps.Game}
          listName="Game"
          icon={gameIcon}
          className="Categories--Applist--Game" />

        <AppList
          apps={this.props.apps.Graphics}
          listName="Graphics"
          icon={graphicsIcon}
          className="Categories--Applist--Graphics" />

        <AppList
          apps={this.props.apps.Network}
          listName="Network"
          icon={networkIcon}
          className="Categories--Applist--Network" />

        <AppList
          apps={this.props.apps.Office}
          listName="Office"
          icon={officeIcon}
          className="Categories--Applist--Office" />

        <AppList
          apps={this.props.apps.Science}
          listName="Science"
          icon={scienceIcon}
          className="Categories--Applist--Science" />

        <AppList
          apps={this.props.apps.Settings}
          listName="Settings"
          icon={settingsIcon}
          className="Categories--Applist--Settings" />

        <AppList
          apps={this.props.apps.System}
          listName="System"
          icon={systemIcon}
          className="Categories--Applist--System" />

        <AppList
          apps={this.props.apps.Utility}
          listName="Utility"
          icon={utilityIcon}
          className="Categories--Applist--Utility" />

        <AppList
          apps={this.props.apps.Video}
          listName="Video"
          icon={videoIcon}
          className="Categories--Applist--Video" />
      </div>
    );
  }
}

function mapStateToProps(state: IRootState, ownProps: any) {
  return state.Categories;
}
function mapDispatchToProps(dispatch: ThunkDispatch<IRootState, void, IActionPayload>, ownProps: any) {
  dispatch(Actions.fetchAppsList());

  return {};
}

const Categories = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesComponent);

export default Categories;