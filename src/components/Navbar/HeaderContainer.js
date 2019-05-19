import React, { Component } from "react";
import HeaderPresenter from "./HeaderPresenter";

class HeaderContainer extends Component {
  constructor(props){
    super(props)
  }
  static propTypes = {};
  state = {};
  
  render() {
    
    return <HeaderPresenter {...this.state} color={this.props.color} />;
  }
}

export default HeaderContainer;