import * as React from "react";
import Columns from "react-columns";
import ReactImageFallback from "react-image-fallback";

import { IApp } from "../../../interfaces/IApp";

import "./GridView.scss";

interface IGridViewPropTypes {
  apps: IApp[];
}

export default class GridView extends React.Component<IGridViewPropTypes, any> {
  constructor(props: IGridViewPropTypes) {
    super(props);
  }

  public render() {
    return (
      <Columns columns={5}>
        {
          this.props.apps.map((app, index: number) => {
            return (
              <div key={"GridView--col-" + index} className={"GridView--app-details " + (app.isDummy ? "dummy" : "")}>
                <ReactImageFallback
                  src={app.isDummy ? "/placeholder-app-icon.png" : app.icon}
                  fallbackImage="/no-image.png"
                  initialImage="/loader.svg"
                  alt={app.name.null}
                  draggable={false}
                  className="GridView--app-details--icon" />
                <div className="GridView--app-details--app-name">{app.name.null}</div>
              </div>
            );
          })
        }
      </Columns>
    );
  }
}