import React from "react";
import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          size: "small",
          id: "1",
        },
        {
          title: "Jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          size: "small",
          id: "2",
        },
        {
          title: "Sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          size: "small",
          id: "3",
        },
        {
          title: "Womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womans.png",
          size: "large",
          id: "4",
        },
        {
          title: "MENS",
          imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
          size: "large",
          id: "5",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
