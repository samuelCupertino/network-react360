import React from "react";
import { AppRegistry } from "react-360";

import SocialMedias from "./components/templates/SocialMedias";

export default class network_react360 extends React.Component {
  render() {
    return <SocialMedias />;
  }
}

AppRegistry.registerComponent("network_react360", () => network_react360);
