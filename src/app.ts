import { getRandomInt } from './random';
let squares: NodeList;

// this code runs when the page is loaded
export function runApp() {
    // random number 1-6
    const secretNumber = getRandomInt(1, 6);
    // find all the squares
    const squares = document.querySelectorAll('.square');
    let currentSquare = 1;

    squares.forEach(function (square: HTMLDivElement) {
        if (currentSquare === secretNumber) {
            square.dataset.secret = 'true';
        }
        square.addEventListener('click', handleClick);
        currentSquare++;
    });
    // pick the one that is the secret number and mark it

    // make it so that when the user clicks on the square, something happens
}

function handleClick() {
    console.log('you clicked on ', this);
    // cache the square
    const clickedSquare = this as HTMLDivElement;
    const isSpecial = clickedSquare.dataset.secret === 'true';
    if (isSpecial) {
        clickedSquare.classList.add('winner');
        // game is over at this point
        // clear loser squares
        squares.forEach((sq: HTMLDivElement) => {
            if (sq !== clickedSquare) {
                sq.classList.add('loser');
                sq.removeEventListener('click', handleClick);
            }
        });
    } else {
        clickedSquare.classList.add('loser');
        clickedSquare.removeEventListener('click', handleClick);
    }
}

