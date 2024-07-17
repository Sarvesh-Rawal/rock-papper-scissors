let choices = document.querySelectorAll('.choice');
let userScorePara = document.querySelector('#user-score');
let compScorePara = document.querySelector('#comp-score');
let msg = document.querySelector('.mssg');
let userOption = document.querySelector('#user-option');
let compOption = document.querySelector('#comp-option');
let opch1 = document.querySelector('.op-ch-1');
let opch2 = document.querySelector('.op-ch-2');
let userScore = 0;
let compScore = 0;

const compChoiceGen = () => {
    const options = ['rock','papper','scissors'];
    let i = Math.floor(Math.random()*3);
    return options[i];
}

const showOptionsChose = (userChoice,compChoice) => {
    opch1.classList.remove('hide');
    opch2.classList.remove('hide');
    userOption.innerText = `Your choice: ${userChoice}`;
    compOption.innerText = `Comp choice: ${compChoice}`;
}

const showwinner = (userwin,userChoice,compChoice) => {
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won! ${userChoice} beats ${compChoice}`;
        msg.style.color = 'white';
        msg.style.backgroundColor = 'green';
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
        msg.style.color = 'white';
        msg.style.backgroundColor = 'red';
    }
}

const playgame = (userChoice) => {
    const compChoice = compChoiceGen();
    showOptionsChose(userChoice,compChoice);

    if(userChoice === compChoice){
        msg.innerText = `Game draw! Both chose ${compChoice}`;
        msg.style.color = 'black';
        msg.style.backgroundColor = '#e79c96';
    }
    else{
        let userwin = true;
        if(userChoice === 'rock'){
            userwin = compChoice === 'papper' ? false : true;
        }
        else if(userChoice === 'papper'){
            userwin = compChoice === 'scissors' ? false : true;
        }
        else if(userChoice === 'scissors'){
            userwin = compChoice === 'rock' ? false : true;
        }
        showwinner(userwin,userChoice,compChoice);
    }
}

for(let choice of choices){
    choice.addEventListener('click',() => {
        let userChoice = choice.getAttribute('id');
        playgame(userChoice);
    })
}