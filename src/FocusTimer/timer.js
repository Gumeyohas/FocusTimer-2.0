import state from './state.js'; 
import * as el from './elements.js';
import { reset } from './actions.js';
import * as events from './events.js';

// se eu passar os minutes aqui ele vai pegar os minutes que eu adicionar, se eu não passar, a gente usa o nullish coalesing operator que faz com que ele pegue o state.minutes caso os minutes seja null, ou seja, caso eu não passe nenhum valor para minutes.

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes; // nullish coalesing operator; pesquisar
    seconds = seconds ?? state.seconds;

    el.minutes.textContent = String(minutes).padStart("2", 0);
    el.seconds.textContent = String(seconds).padStart("2", 0);
}

export function countdown() {
    if(!state.isRunning){
        return;
    }
    
    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    seconds--;

    if(seconds < 0) {
        seconds = 59;
        minutes--;
     }

    if(minutes < 0) {
        reset();
        return;
    }

    updateDisplay(minutes, seconds);

    setTimeout(() => countdown(), 1000)
}