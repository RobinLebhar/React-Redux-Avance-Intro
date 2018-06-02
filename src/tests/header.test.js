import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../containers/header';
import { shallow, mount } from 'enzyme';
import RootTest from "./root-test"
import { setAuthentification } from "../actions";
import AuthentificationReducer from "../reducers/authentification";
import { SET_AUTHENTIFICATION } from "../actions/action-types"
/*
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers)
*/


describe("Test Header", () => {
    /* it('Render du composant connecté sans erreur', () => {
          // un peu long 
          const wrapper = shallow( // tester difference entre shallow et mount
              <Provider
                  store={store}
              >
                  <MemoryRouter>
                      <Header />
                  </MemoryRouter>
              </Provider>,
          )
          console.log(wrapper.debug())
      });
  */
    it('Render du composant connecté avec RootTest', () => {
        // un peu long 
        const wrapper = shallow(
            <RootTest>
                <Header />
            </RootTest>
        )
    });
    it("Test le payload de setAuthentification lors d'une connexion", () => {
        const action = setAuthentification(true);
        expect(action.payload).toEqual(true)
    })

    it("Test le action type de setAuthentification", () => {
        const action = setAuthentification(true);
        expect(action.type).toEqual(SET_AUTHENTIFICATION)
    })

    it("Test le reducer authentification sans action type", () => {
        const initialState = {
            isLoggedIn: false
        }
        expect(AuthentificationReducer(initialState, {}).isLoggedIn).toEqual(false);
    })

    it("Test le reducer authentification avec action type défini", () => {
        const action = { type: SET_AUTHENTIFICATION, payload: true }
        const initialState = {
            isLoggedIn: false
        }
        expect(AuthentificationReducer(initialState, action).isLoggedIn).toEqual(true);
    })

    it("Test que le libéllé du bouton connexion est bien 'connexion' puis déconnexion apres clique", () => {
        const wrapper = mount(
            <RootTest>
                <Header />
            </RootTest>
        )
        expect(wrapper.find("a").at(2).text()).toEqual("Connexion");
        wrapper.find("a").at(2).simulate("click")
        expect(wrapper.find("a").at(2).text()).toEqual("Deconnexion");

    })

    it("Test que isLoggedIn a true affiche bien le bouton deconnexion", () => {
        const wrapper = mount(
            <RootTest>
                <Header isLoggedIn={true} />
            </RootTest>
        )
        expect(wrapper.find("a").at(2).text()).toEqual("Deconnexion");
    })

});