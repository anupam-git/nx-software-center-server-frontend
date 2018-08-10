import * as React from "react";
import ReactImageFallback from "react-image-fallback";
import { Grid, Icon, Label, List, Pagination, PaginationProps, Popup } from "semantic-ui-react";

import { IApp } from "../../../interfaces/IApp";

import DownloadsDropdown from "../downloads-dropdown/DownloadsDropdown";
import "./ListView.scss";

interface IListViewPropTypes {
  apps: IApp[];
}

interface IListViewState {
  page: number;
  appsPerPage: number;
}

export default class ListView extends React.Component<IListViewPropTypes, IListViewState> {
  constructor(props: IListViewPropTypes) {
    super(props);

    /* Bind attached handlers to `this` */
    this.handlePageChange = this.handlePageChange.bind(this);
    /* */

    this.state = {
      page: 0,
      appsPerPage: 10
    };
  }

  public render() {
    return (
      <List>
        {
          this.props.apps.slice(this.state.page * this.state.appsPerPage, this.state.page * this.state.appsPerPage + this.state.appsPerPage).map((app, index: number) => {
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
        {
          Math.ceil(this.props.apps.length / this.state.appsPerPage) > 1 ?
            <List.Item className="center">
              <Pagination
                defaultActivePage={this.state.page + 1}
                ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                prevItem={{ content: <Icon name="angle left" />, icon: true }}
                nextItem={{ content: <Icon name="angle right" />, icon: true }}
                totalPages={Math.ceil(this.props.apps.length / this.state.appsPerPage)}
                onPageChange={this.handlePageChange}
              />
            </List.Item>
            : null
        }
      </List>
    );
  }

  private handlePageChange(event: React.MouseEvent<HTMLAnchorElement>, data: PaginationProps) {
    this.setState({
      ...this.state,
      page: data.activePage as number - 1
    });
  }
}