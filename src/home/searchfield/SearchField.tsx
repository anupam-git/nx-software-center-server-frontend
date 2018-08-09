import * as React from "react";
import { Button, Dropdown, DropdownProps, Icon, Input, InputOnChangeData } from "semantic-ui-react";

import "./SearchField.scss";

interface ISearchFieldPropTypes extends React.Props<SearchField> {
  fetchAppsList: (search: {
    text: string,
    category: string
  }) => void;
  updateSearch: (search: {
    text: string,
    category: string
  }) => void;
}

interface ISearchFieldState {
  search: {
    text: string,
    category: string
  };
}

export default class SearchField extends React.Component<ISearchFieldPropTypes, ISearchFieldState> {
  private options = [
    { key: "SearchField--dropdown--all", text: "All", value: "" },
    { key: "SearchField--dropdown--audiovideo", text: "Audio/Video", value: "audiovideo" },
    { key: "SearchField--dropdown--audio", text: "Audio", value: "audio" },
    { key: "SearchField--dropdown--video", text: "Video", value: "video" },
    { key: "SearchField--dropdown--development", text: "Development", value: "development" },
    { key: "SearchField--dropdown--education", text: "Education", value: "education" },
    { key: "SearchField--dropdown--game", text: "Game", value: "game" },
    { key: "SearchField--dropdown--graphics", text: "Graphics", value: "graphics" },
    { key: "SearchField--dropdown--network", text: "Network", value: "network" },
    { key: "SearchField--dropdown--office", text: "Office", value: "office" },
    { key: "SearchField--dropdown--science", text: "Science", value: "science" },
    { key: "SearchField--dropdown--settings", text: "Settings", value: "settings" },
    { key: "SearchField--dropdown--system", text: "System", value: "system" },
    { key: "SearchField--dropdown--utility", text: "Utility", value: "utility" },
  ];

  constructor(props: ISearchFieldPropTypes) {
    super(props);

    this.state = {
      search: {
        text: "",
        category: this.options[0].value
      }
    };

    /** Bind attached handlers to `this` */
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSearchCategoryChange = this.handleSearchCategoryChange.bind(this);
    this.handleInputKeydown = this.handleInputKeydown.bind(this);
    /** */
  }

  public render() {
    // TODO: Set default value from Store
    return (
      <Input
        fluid={true}
        autoFocus={true}
        label={
          <Button.Group color="teal" size="large">
            <Dropdown
              button={true}
              placeholder="Categories"
              header="Categories"
              options={this.options}
              defaultValue={this.options[0].value}
              className="SearchField--Input--dropdown"
              onChange={this.handleSearchCategoryChange}
            />
          </Button.Group>
        }
        labelPosition="left"
        placeholder="Search Appimages"
        className="SearchField"
        size="big"
        icon={
          <Icon
            circular={true}
            link={true}
            className="SearchField--Input--search-button"
            name="search"
            color="teal"
            onClick={this.props.fetchAppsList}
          />}
        onChange={this.handleSearchTextChange}
        onKeyPress={this.handleInputKeydown}
      />
    );
  }

  private handleSearchTextChange(event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) {
    const search = {
      ...this.state.search,
      text: data.value as string
    };

    this.setState({
      ...this.state,
      search
    });
  }

  private handleSearchCategoryChange(event: React.SyntheticEvent<HTMLInputElement>, data: DropdownProps) {
    const search = {
      ...this.state.search,
      category: data.value as string
    };

    this.setState({
      ...this.state,
      search
    });
  }

  private handleInputKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      this.props.updateSearch(this.state.search);
      this.props.fetchAppsList(this.state.search);
    }
  }
}