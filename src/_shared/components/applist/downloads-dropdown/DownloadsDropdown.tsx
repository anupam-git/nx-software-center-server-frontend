import * as React from "react";
import { Button, Dropdown, DropdownItemProps } from "semantic-ui-react";
import { IApp } from "../../../interfaces/IApp";
import { FileDownloader } from "../../../utils/FileDownloader";

interface IDownloadsDropdownPropTypes {
  app: IApp;
}

interface IDownloadsDropdownState {
  isFetching: boolean;
  shouldOpen: boolean;
  "x86": Array<{
    filename: string,
    architecture: string;
    id: string;
    releaseId: string;
    sha512checksum: string;
    size: number;
    type: number;
    url: string;
  }>;
  "x64": Array<{
    filename: string,
    architecture: string;
    id: string;
    releaseId: string;
    sha512checksum: string;
    size: number;
    type: number;
    url: string;
  }>;
}

export default class DownloadsDropdown extends React.Component<IDownloadsDropdownPropTypes, IDownloadsDropdownState> {
  constructor(props: IDownloadsDropdownPropTypes) {
    super(props);

    /* Bind attached handlers to `this` */
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    /* */

    this.state = {
      isFetching: false,
      shouldOpen: false,
      x86: [],
      x64: []
    };
  }
  public render() {
    return (
      <Button.Group fluid={true} color="teal">
        <Dropdown
          button={true}
          fluid={true}
          className="ListView--app-details--content--download-button"
          icon={this.state.shouldOpen ? "close" : "download"}
          text="Download"
          open={!this.state.isFetching && this.state.shouldOpen}
          disabled={this.state.isFetching}
          loading={this.state.isFetching}
          onClick={this.handleDropdownClick}
        >
          <Dropdown.Menu>
            <Dropdown.Header>x86</Dropdown.Header>
            <Dropdown.Divider />
            {
              (() => {
                const x86Files = this.state.x86.map((file, fileIndex) => {
                  return (
                    <Dropdown.Item
                      key={"ListView--app-details--content--files--x86--" + fileIndex}
                      data-file-url={file.url}
                      onClick={this.downloadFile}
                    >
                      {file.filename}
                    </Dropdown.Item>
                  );
                });

                return this.state.x86.length > 0
                  ? x86Files
                  : <Dropdown.Item className="ListView--app-details--content--files--no-files" disabled={true}>No Files Available</Dropdown.Item>;
              })()
            }
            <Dropdown.Header>x86-64</Dropdown.Header>
            <Dropdown.Divider />
            {
              (() => {
                const x64Files = this.state.x64.map((file, fileIndex) => {
                  return (
                    <Dropdown.Item
                      key={"ListView--app-details--content--files--x64--" + fileIndex}
                      data-file-url={file.url}
                      onClick={this.downloadFile}
                    >
                      {file.filename}
                    </Dropdown.Item>
                  );
                });

                return this.state.x64.length > 0
                  ? x64Files
                  : <Dropdown.Item className="ListView--app-details--content--files--no-files" disabled={true}>No Files Available</Dropdown.Item>;
              })()
            }
          </Dropdown.Menu>
        </Dropdown>
      </Button.Group>
    );
  }

  private downloadFile(event: React.MouseEvent<HTMLDivElement>, data: DropdownItemProps) {
    FileDownloader(data["data-file-url"]);
    event.stopPropagation();
    event.preventDefault();
  }

  private handleDropdownClick() {
    if (!this.state.isFetching) {
      if (!this.state.shouldOpen) {
        const filter = {
          where: {
            id: this.props.app.id
          },
          include: [
            {
              releases: {
                files: {}
              }
            }
          ]
        };

        this.setState({
          ...this.state,
          isFetching: true
        });

        if (this.state.x86.length === 0 && this.state.x64.length === 0) {
          fetch(`http://apps.nxos.org/api/applications/findOne?filter=${JSON.stringify(filter)}`)
            .then((response: Response) => {
              response
                .json()
                .then((app: IApp) => {
                  const files = {
                    x86: [...this.state.x86],
                    x64: [...this.state.x64]
                  };

                  if (app.releases) {
                    app.releases = app.releases.sort((a, b) => {
                      return new Date(a.date) > new Date(b.date) ? -1 : 1;
                    });

                    app.releases.splice(1);

                    if (app.releases[0] && app.releases[0].files) {
                      app.releases[0].files.map((file) => {
                        if (file.architecture === "x86" || file.architecture === "Intel 80386") {
                          files.x86.push({
                            filename: file.url.split("/").pop() || "File.AppImage",
                            ...file
                          });
                        } else if (file.architecture === "x86-64") {
                          files.x64.push({
                            filename: file.url.split("/").pop() || "File.AppImage",
                            ...file
                          });
                        }
                      });
                    }
                  }

                  this.setState({
                    ...this.state,
                    ...files,
                    isFetching: false,
                    shouldOpen: true
                  });
                });
            });
        } else {
          this.setState({
            ...this.state,
            isFetching: false,
            shouldOpen: true
          });
        }
      } else {
        this.setState({
          ...this.state,
          shouldOpen: false
        });
      }
    }
  }
}