import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthentification } from "../actions/index";

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
                    <a className="nav-link" href="#">Accueil</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contenu</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={this.setAuthentification}>{this.renderAuthentificationLabel()}</a>
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
