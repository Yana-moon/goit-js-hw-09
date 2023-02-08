function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
};

refs.stopBtn.setAttribute('disabled', 'true');
refs.startBtn.addEventListener('click', onStartChangeColor);
refs.stopBtn.addEventListener('click', onStopChangeColor);

function onStartChangeColor(e) {
    timerId = setInterval(changeColor, 1000);
    refs.stopBtn.removeAttribute('disabled');
    e.currentTarget.setAttribute('disabled', 'true');
}

function changeColor() {
    refs.body.style.backgroundColor = getRandomHexColor();
}

function onStopChangeColor(e) {
    clearInterval(timerId);
    refs.startBtn.removeAttribute('disabled');
    e.currentTarget.setAttribute('disabled', 'true');
}
