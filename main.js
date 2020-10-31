
const board = ["","","","","","","","",""];
const wins = [[0, 1, 2], [0,3,6],[0,4,8],
              [1,4,7],[2,4,6],[2,5,8],
              [3,4,5], [6,7,8]
]; 
            
const boxes = [...document.querySelectorAll('.box')]
const winText = document.querySelector('.winner')
let round = 1;
let activePlayer;
let gameActive = true;
const check = () => {
    for (i=0;i<=7;i++){
        const [posA, posB, posC] = wins[i];
        const value1 = board[posA];
        const value2 = board[posB];
        const value3 = board[posC];
        if (value1 !=="" && value1===value2&& value1===value3){
            winText.innerHTML = `Winner is ${activePlayer}`
            gameActive = false;
        }
    }
}

const saveResult = function(e){
    const pos = e.target.dataset.column;
    if (gameActive &&board[pos]===''){
        activePlayer = round%2===0 ? 'o' : 'x';
        board[pos]=activePlayer;
        e.target.classList.add(`box--filled-${activePlayer}`);
        check();
        round++;
    }
    
}


boxes.forEach(box=>addEventListener('click', saveResult));