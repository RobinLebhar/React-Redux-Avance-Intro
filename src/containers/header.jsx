import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthentification } from "../actions/index";
import { Link } from "react-router-dom";

export class Header extends Component {

  setAuthentification = () => {
    this.props.setAuthentification(!this.props.isLoggedIn);
  }

  renderAuthentificationLabel = () => {
    if (this.props.isLoggedIn) {
      return "Deconnexion"
    }
    return "Connexion"
  }

  render() {
    return (
          <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"} >Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/ressources"} >Ressources</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={this.setAuthentification} >{this.renderAuthentificationLabel()}</a>
            </li>
          </ul>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn
});

const mapDispatchToProps = {
  setAuthentification
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
