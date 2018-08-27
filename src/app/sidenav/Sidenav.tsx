import * as React from "react";
import { Icon, Menu, MenuItemProps } from "semantic-ui-react";

import { Link } from "react-router-dom";
import { routePaths } from "../routes";
import "./Sidenav.scss";

interface ISidenavPropTypes extends React.Props<Sidenav> { }

interface ISidenavState extends React.Props<Sidenav> {
  menuOptions: Array<{
    key: string,
    icon: string,
    text: string,
    href: string,
    active?: boolean,
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
        { key: "home", icon: "home", text: "Home", active: true, href: routePaths.Home },
        { key: "categories", icon: "grid layout", text: "Categories", href: routePaths.Categories },
        { key: "About", icon: "info circle", text: "About", href: routePaths.About }
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
              <Menu.Item
                as={Link}
                key={"Sidenav--" + menu.key}
                data-menu-key={menu.key}
                active={menu.active}
                color={menu.active ? "teal" : "grey"}
                onClick={this.onMenuItemClick}
                name={menu.href}
                to={menu.href}
              >
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