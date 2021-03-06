import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "İçecek" },
        { categoryId: 2, categoryName: "Çeşni" },
        { categoryId: 3, categoryName: "Çeşni" },
        { categoryId: 4, categoryName: "Çeşni" },
        { categoryId: 5, categoryName: "Çeşni" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem key={category.categoryId}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
