import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import logo from "../assets/load.gif";

class Spinner extends Component {
  render() {
    return this.props.loading && <img src={logo} alt="loading..." />;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading.loading
  };
};
export default connect(mapStateToProps, actions)(Spinner);
