import classNames from "classnames";
import * as React from "react";
import { Icon, Label, Segment, Transition } from "semantic-ui-react";

import { IApp } from "../../interfaces/IApp";
import GridView from "./gridview/GridView";
import ListView from "./listview/ListView";


import "./AppList.scss";

interface IAppListPropTypes extends React.Props<AppList> {
  /** Addition Classes to be appended. Default: "" */
  className?: string;
  /** Heading of the AppList. Default : "" */
  listName: string;
  apps: IApp[];
  /** Render App List as Grid. Default : false */
  grid?: boolean;
  icon?: {
    name: string;
    color?: string;
  };
  visible?: boolean;
}

export default class AppList extends React.Component<IAppListPropTypes, any> {
  public static defaultProps: Partial<IAppListPropTypes> = {
    className: "",
    grid: false,
    visible: true
  };

  constructor(props: IAppListPropTypes) {
    super(props);
  }

  public render() {
    const rootClassNames = classNames(
      "AppList",
      this.props.className
    );

    return (
      <Transition
        unmountOnHide={true}
        transitionOnMount={true}
        visible={this.props.visible}
        animation="fade down"
        duration={500}
      >
        <Segment className={rootClassNames} raised={true}>
          {
            this.props.listName ?
              <Label as="a" color="teal" ribbon={true} size="massive">
                {
                  this.props.icon
                    ? this.props.icon.color
                      ? <Icon name={this.props.icon.name as any} color={this.props.icon.color as any} />
                      : <Icon name={this.props.icon.name as any} />
                    : ""
                }
                {this.props.listName}
              </Label> :
              ""
          }

          {
            this.props.grid ?
              <GridView apps={this.props.apps} /> :
              <ListView apps={this.props.apps} />
          }
        </Segment>
      </Transition>
    );
  }
}