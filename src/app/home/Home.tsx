import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import AppList from "../../_shared/components/applist/AppList";
import { IActionPayload } from "../../_shared/interfaces/IActionPayload";
import { IApp } from "../../_shared/interfaces/IApp";
import IRootState from "../../_shared/interfaces/IRootState";
import * as Actions from "./HomeAction";
import IHomeState from "./IHomeState";
import SearchField from "./searchfield/SearchField";

import "./Home.scss";

interface IHomeComponentPropTypes extends React.Props<HomeComponent>, IHomeState {
  apps: IApp[];
  fetchAppsList: (search: {
    text: string,
    category: string
  }) => void;
  updateSearch: (search: {
    text: string,
    category: string
  }) => void;
}

class HomeComponent extends React.Component<IHomeComponentPropTypes, any> {
  constructor(props: IHomeComponentPropTypes) {
    super(props);
  }

  public render() {
    const featuredIcon = {
      name: "heart outline"
    };

    const popularIcon = {
      name: "star outline"
    };

    const allIcon = {
      name: "grid layout"
    };

    const showOtherList = this.props.search.text.length === 0 && this.props.search.category === "";

    return (
      <div className="Home">
        <div className="Home--search-container">
          <SearchField fetchAppsList={this.props.fetchAppsList} updateSearch={this.props.updateSearch} />
        </div>

        <AppList apps={this.props.apps.slice(0, 5)} visible={showOtherList} listName="Featured" icon={featuredIcon} className="Applist--featured" />
        <AppList apps={this.props.apps.slice(5, 10)} visible={showOtherList} listName="Popular" icon={popularIcon} className="Applist--popular" />
        <AppList apps={this.props.apps} listName="All" icon={allIcon} className="Applist--all" />
      </div>
    );
  }
}

function mapStateToProps(state: IRootState, ownProps: any) {
  return state.Home;
}
function mapDispatchToProps(dispatch: Dispatch<IActionPayload> | any, ownProps: any) {
  dispatch(Actions.fetchAppsList());

  return {
    fetchAppsList: (search: {
      text: string,
      category: string
    }) => {
      dispatch(Actions.fetchAppsList(search));
    },
    updateSearch: (search: {
      text: string,
      category: string
    }) => {
      dispatch(Actions.updateSearch(search));
    }
  };
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default Home;