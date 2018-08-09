import * as React from "react";
import { Icon, Menu, MenuItemProps } from "semantic-ui-react";

import "./Sidenav.scss";

interface ISidenavPropTypes extends React.Props<Sidenav> { }

interface ISidenavState extends React.Props<Sidenav> {
  menuOptions: Array<{
    key: string,
    icon: string,
    text: string,
    active?: boolean
  }>;
}

export default class Sidenav extends React.Component<ISidenavPropTypes, ISidenavState> {
  constructor(props: ISidenavPropTypes) {
    super(props);

    /**
     * Bind Attached EventHandlers to `this`
     */
    this.onMenuItemClick = this.onMenuItemClick.bind(this);

    this.state = {
      menuOptions: [
        { key: "home", icon: "home", text: "Home", active: true },
        { key: "categories", icon: "grid layout", text: "Categories" },
        { key: "About", icon: "info circle", text: "About" }
      ]
    };
  }

  public render() {
    return (
      <Menu
        fixed="left"
        inverted={false}
        icon="labeled"
        vertical={true}
        className="Sidenav"
        pointing={true}
      >
        {
          this.state.menuOptions.map((menu) => {
            return (
              <Menu.Item key={"Sidenav--" + menu.key} data-menu-key={menu.key} active={menu.active} color={menu.active ? "teal" : "grey"} onClick={this.onMenuItemClick}>
                <Icon name={menu.icon as any} color={menu.active ? "teal" : "grey"} />
                <div className="Sidenav--menu-text">{menu.text}</div>
              </Menu.Item>
            );
          })
        }
      </Menu>
    );
  }

  private onMenuItemClick(event: React.MouseEvent<HTMLAnchorElement>, props: MenuItemProps) {
    const menuOptions = this.state.menuOptions.map((menu) => {
      if (menu.active) {
        menu.active = false;
      } else if (menu.key === props["data-menu-key"]) {
        menu.active = true;
      }

      return menu;
    });

    this.setState({ ...this.state, menuOptions });
  }
}