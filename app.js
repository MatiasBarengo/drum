addEventListener('keypress', playOnKeyPressed);

const pads = document.querySelectorAll('.pad')

for (let i = 0; i < pads.length; i++) {
    pads[i].addEventListener('transitionend', removePlaying);
    pads[i].addEventListener('click', playOnClick);
}

function removePlaying(e) {
    const elementClasses = e.target.classList
    if (elementClasses.contains('playing')) {
        elementClasses.remove('playing');
    }
}

function playOnKeyPressed(e) {
    const keyPressed = e.key.toUpperCase();
    const elementPressed = document.querySelector(`.${keyPressed}`)

    const soundName = elementPressed.lastElementChild.textContent.toLowerCase();

    const soundToPlay = document.querySelector(`[src="./assets/sounds/${soundName}.wav"]`)

    elementPressed.classList.add('playing');
    soundToPlay.play()
};

function playOnClick(e) {
    const elementClicked = e.target;

    if (elementClicked.tagName === 'SPAN' || elementClicked.tagName === 'KBD') {
        elementClicked.parentElement.classList.add('playing')

    }
    if (elementClicked.tagName === 'DIV') {
        elementClicked.classList.add('playing')
    }
}