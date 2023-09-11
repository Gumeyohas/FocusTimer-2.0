import { controls, cardButtons, buttonToggle } from './elements.js';
import * as actions from './actions.js';

const soundButtons = cardButtons.getElementsByClassName("soundButtons");

export function registerControls() {
   controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action]() != "function") {
        return;
    }    
    
    actions[action]()
   })

   cardButtons.addEventListener('click', (event) => {

    const action = event.target.dataset.action
    
    if(typeof actions[action]() != "function") {
        return;
    }    
    
    actions[action]()
   })

   buttonToggle.addEventListener('click', (event) => {

    const action = event.target.dataset.action
    
    if(typeof actions[action]() != "function") {
        return;
    }    
    
    actions[action]()
   })
}