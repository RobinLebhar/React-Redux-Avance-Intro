import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../components/todo-app';
import { shallow, mount } from 'enzyme';

describe("Test TodoApp fonctionnement", () => {


    /*
    it('Render du composant app sans erreur', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TodoApp />, div);
        console.log(div.innerHTML)
    });
    
    it('Contient la chaine "Nouvelle tâche"', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TodoApp />, div);
        expect(div.innerHTML).toContain("Nouvelle tâche");
    });
    */
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TodoApp />);
        //  wrapper = mount(<TodoApp />);

    });
    /*
    afterEach(() => {
        // wrapper = shallow(<TodoApp />);
        wrapper.unmount()
    
    });
    */
    /*
    
    it('Render du composant app sans erreur', () => {
        const wrapper = shallow(<TodoApp />);
    });
    */
    it('Contient la chaine "Nouvelle tâche"', () => {
        //  const wrapper = shallow(<TodoApp />);
        expect(wrapper.html()).toContain("Nouvelle tâche");
    });

    it('Deux classes css "row" existe', () => {
        //   const wrapper = shallow(<TodoApp />);
        expect(wrapper.find('.row').length).toEqual(2);
    });

    it('attribut id addButton unique', () => {
        //  const wrapper = shallow(<TodoApp />);
        expect(wrapper.find('#addButton').length).toEqual(1);
    });

    it('Contient un seul bouton', () => {
        //  const wrapper = shallow(<TodoApp />);
        expect(wrapper.find('button').length).toEqual(1);
    });

    it('Change la valeur de l input', () => {
        //  const wrapper = shallow(<TodoApp />);
        wrapper.find('input').simulate("change", {
            target: { value: "Yo" }
        })
        // wrapper.update();
        expect(wrapper.find('input').prop("value")).toEqual("Yo")
    });

    it('Saisie une valeur dans input, clique sur le bouton et vérifie que le texte est dans la liste', () => {
        wrapper.find('input').simulate("change", {
            target: { value: "Yo" }
        })
        //  wrapper.update();
        wrapper.find('button').simulate("click");
        // wrapper.update();
        //  console.log(wrapper.debug());
        expect(wrapper.find('.list-group-item').text()).toContain("Yo")

    });

})