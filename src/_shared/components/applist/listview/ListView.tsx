import * as React from "react";
import ReactImageFallback from "react-image-fallback";
import { Grid, Label, List, Popup } from "semantic-ui-react";

import { IApp } from "../../../interfaces/IApp";

import DownloadsDropdown from "../downloads-dropdown/DownloadsDropdown";
import "./ListView.scss";

interface IListViewPropTypes {
  apps: IApp[];
}

export default class ListView extends React.Component<IListViewPropTypes, any> {
  constructor(props: IListViewPropTypes) {
    super(props);
  }

  public render() {
    return (
      // <Visibility onUpdate={this.handleVisibilityUpdate} data-appcount={this.props.apps.length}>
      <List>
        {
          this.props.apps.map((app, index: number) => {
            return (
              <List.Item key={"ListView--col-" + index} className={"ListView--app-details " + (app.isDummy ? "dummy" : "")}>
                <Grid>
                  <Grid.Row stretched={true}>
                    <Grid.Column className="ListView--app-details--icon-container" width={2} verticalAlign="middle">
                      <ReactImageFallback
                        src={app.isDummy ? "/placeholder-app-icon.png" : app.icon}
                        fallbackImage="/no-image.png"
                        initialImage="/loader.svg"
                        alt={app.name.null}
                        draggable={false}
                        className="ListView--app-details--icon-container--icon" />
                    </Grid.Column>
                    <Grid.Column width={11}>
                      <List.Content className="ListView--app-details--content">
                        <List.Header as="a" className="ListView--app-details--content--app-name">{app.name.null}</List.Header>
                        <List.Description className="ListView--app-details--content--description">
                          {
                            app.abstract ?
                              app.abstract.null :
                              <i className="ListView--app-details--content--no-description">No Description Available</i>
                          }
                        </List.Description>
                        <List.Description className="ListView--app-details--content--keywords">
                          {
                            app.keywords
                              ? app.keywords.slice(0, 5).map((keyword, keywordIndex: number) => {
                                if (keyword.length > 10) {
                                  return (
                                    <Popup
                                      content={keyword}
                                      inverted={true}
                                      key={"ListView--app-details--content--keyword" + keywordIndex}
                                      size="mini"
                                      trigger={
                                        <Label
                                          basic={true}
                                          content={keyword.substr(0, 10) + "..."}
                                          as="a"
                                          size="tiny"
                                          color="teal"
                                          className="ListView--app-details--content--keyword" />
                                      } />
                                  );
                                } else {
                                  return (
                                    <Label
                                      basic={true}
                                      key={"ListView--app-details--content--keyword" + keywordIndex}
                                      content={keyword.substr(0, 10)}
                                      as="a"
                                      size="tiny"
                                      color="teal"
                                      className="ListView--app-details--content--keyword" />
                                  );
                                }
                              })
                              : ""
                          }
                        </List.Description>
                      </List.Content>
                    </Grid.Column>
                    {
                      (() => {
                        if (!app.isDummy) {
                          return (
                            <Grid.Column width={3} verticalAlign="middle" floated="right">
                              <DownloadsDropdown app={app} />
                            </Grid.Column>
                          );
                        } else {
                          return null;
                        }
                      })()
                    }
                  </Grid.Row>
                </Grid>
              </List.Item>
            );
          })
        }
      </List>
      // </Visibility>
    );
  }

  // private handleVisibilityUpdate(event: any, data: VisibilityEventData) {
  //   const appcount = this["data-appcount"];
  //   console.log(appcount, data.calculations);
  // }
}