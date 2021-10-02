// * the idea is to make library for ham animation.
// TODO: let the user select the colors of the ham and the time of the animation


// * get the container div (div with id ham_1)
const hamContainer = document.querySelector('#ham_1');

// * get the data from the classes names
const data = [];

data.push(hamContainer.getAttribute('data-bars_thickness'));
data.push(hamContainer.getAttribute('data-speed'));
data.push(hamContainer.getAttribute('data-middle_bar_color'));
data.push(hamContainer.getAttribute('data-top_down_bars_color'));

// * create the hamburger icon bars
const mainBar = document.createElement('div');
const mainBar_firstHalf = document.createElement('div');
const mainBar_secondHalf = document.createElement('div');

// * set the classes of the main bar
mainBar.classList.add('mainBar');

mainBar_firstHalf.classList.add('mainBar_firstHalf');
mainBar_secondHalf.classList.add('mainBar_secondHalf');

// * set the user data change
const root = document.querySelector(':root'); 
root.style.setProperty("--bars-height", `${data[0]}px`);
root.style.setProperty("--transition", `all ${data[1]}s ease-in-out`);
root.style.setProperty("--mainBar-backgroundColor", `${data[2]}`);
root.style.setProperty("--pseudo-backgroundColor", `${data[3]}`);

// * add elements to the DOM
mainBar.appendChild(mainBar_firstHalf);
mainBar.appendChild(mainBar_secondHalf);
hamContainer.appendChild(mainBar);


// * start the animation
let start = true;
hamContainer.addEventListener('click', () => {
    if(start) {
        hamContainer.classList.add('open');
        hamContainer.classList.add('toBackward');
        setTimeout(() => {
            hamContainer.classList.add('rotateUp');
            hamContainer.classList.add('rotateDown');
            setTimeout(() => {
                hamContainer.classList.add('toForward');
            }, data[1] * 1000);
        }, data[1] * 1000);
        start = false;
    } else {
        hamContainer.classList.remove('toForward');
        setTimeout(() => {
            hamContainer.classList.remove('open');
            hamContainer.classList.remove('rotateUp');
            hamContainer.classList.remove('rotateDown');
            setTimeout(() => {
                hamContainer.classList.remove('toBackward');
            }, data[1] * 1000);
        }, data[1] * 1000);
        start = true;
    }
})