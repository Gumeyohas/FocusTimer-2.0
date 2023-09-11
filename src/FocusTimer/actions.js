import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';
import * as sounds from './sounds.js';

export function toggleRunning() {

    state.isRunning = document.documentElement.classList.toggle("running")

    timer.countdown();
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove("running");
    timer.updateDisplay(0,0)
}

export function plus() {

    if(state.isRunning === true){
        return;
    }

    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    if(minutes === 60) {
        return;
    }

    minutes += 5;
    timer.updateDisplay(minutes,seconds);
}

export function minus() {

    if(state.isRunning === true){
        return;
    }

    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    if(minutes === 0) {
        return;
    }

    minutes -= 5;
    timer.updateDisplay(minutes,seconds);
}

export function toggleMusicForest() {
    el.forestSoundButton.classList.toggle('active')
    if(el.forestSoundButton.classList.contains('active')) {
        sounds.forestSound.play();
        document.documentElement.classList.add("music-on");
    } else {
        sounds.forestSound.pause();
        document.documentElement.classList.remove("music-on");
    }

}

export function toggleMusicRain() {
    el.rainSoundButton.classList.toggle('active')
    if(el.rainSoundButton.classList.contains('active')) {
        sounds.rainSound.play();
        document.documentElement.classList.add("music-on");
    } else {
        sounds.rainSound.pause();
        document.documentElement.classList.remove("music-on");
    }
}
export function toggleMusicWait() {
    el.waitSoundButton.classList.toggle('active')
    if(el.waitSoundButton.classList.contains('active')) {
        sounds.waitSound.play();
        document.documentElement.classList.add("music-on");
    } else {
        sounds.waitSound.pause();
        document.documentElement.classList.remove("music-on");
    }
}
export function toggleMusicFire() {
    el.fireSoundButton.classList.toggle('active')
    if(el.fireSoundButton.classList.contains('active')) {
        sounds.fireSound.play();
        document.documentElement.classList.add("music-on");
    } else {
        sounds.fireSound.pause();
        document.documentElement.classList.remove("music-on");
    }
}

export function toggleMode() {
        document.documentElement.classList.toggle('light');
        
}

// const soundButtons = el.cardButtons.getElementsByClassName("soundButtons");

// for(let i = 0; i < soundButtons.lenght; i++) {
//     console.log("oi")
//         // if (soundButtons[i].classList.contains("active")) {
//         //     console.log(`O botao ${i + 1} tem a classe active`);
//         // } else {
//         //     console.log(`O botao ${i + 1} não tem a classe active`);
//         // }
// }