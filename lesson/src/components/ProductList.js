import React, { Component } from 'react'

export default class ProductList extends Component {

    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (
            <div>
                    <h2>{this.props.info.title}</h2>
            </div>
        )
    }
}
