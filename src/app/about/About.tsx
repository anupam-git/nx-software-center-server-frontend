import * as React from "react";
import { Container, Header, Image, Segment } from "semantic-ui-react";

import "./About.scss";
import appimageLogo from "./appimage-logo.png";
import nitruxLogo from "./nitrux-logo.png";

interface IAboutPropTypes {
}

export default class About extends React.Component<IAboutPropTypes, any> {
  public render() {
    return (
      <div className="About">
        <Segment padded="very" piled={true} >
          <Container text={true} textAlign="justified">
            <a href="https://appimage.org" target="blank">
              <Header as="h1">
                <Image src={appimageLogo} />
                <Header.Content><u>AppImage</u></Header.Content>
              </Header>
            </a>
            <br /><br />
            <p >
              AppImage provides a way for upstream developers to provide “native” binaries for Linux users just the same way they could do for other operating systems. It allow packaging applications for any common Linux based operating system, e.g., Ubuntu, Debian, openSUSE, RHEL, CentOS, Fedora etc. Properly built AppImages come with all their dependencies and will run on most Linux distributions without further modifications.
              <br /><br />
              AppImage is designed to be a standalone standard, implemented in a so-called reference implementation provided in AppImageKit.
          </p>
          </Container>
        </Segment>
        <Segment padded="very" piled={true}>
          <Container text={true} textAlign="justified">
            <a href="https://nxos.org" target="blank">
              <Header as="h1">
                <Image src={nitruxLogo} />
                <Header.Content><u>Nitrux</u></Header.Content>
              </Header>
            </a>
            <br /><br />
            <p>
              Nitrux is a Linux distribution based on Ubuntu suitable for laptops and desktop computers. Nitrux provides all the benefits of the Ubuntu operating system combined with a focus on portable, redistributable application formats like AppImages. Nitrux uses the development branch of Ubuntu as a basis using only the core system and then slowly building up to ensure a clean user experience. Nitrux is suitable for newcomers to Linux as well as *nix experienced users. Nitrux uses KDE Plasma 5 and KDE Applications, we also use our in-house software suite Nomad Desktop adding to the user experience.

              <br /><br />
              Nitrux is a complete Operating System that ships the essential apps and services for the daily use: office applications, PDF reader, image editor,
              music and video players, etc. Nitrux ships with select KDE Applications by default along our own custom applications. KDE Applications are a set
              of applications and supporting libraries that are designed for KDE Plasma 5. We also include non-KDE or Qt applications like Chromium and LibreOffice
              that together create a friendly user experience.
            </p>
          </Container>
        </Segment>
      </div>
    );
  }
}