

// function to Select player
function GetSelectedPlayer( player){
    const playerName = player.parentNode.parentNode.children[0].innerText;
    const ul = document.getElementById('selected-players');
    const li = document.createElement('li');
    li.innerText = playerName;
    if(ul.children.length < 5 ){
        ul.appendChild(li);
    }else{
        alert('Sorry Cannot Select More Than 5 Players')
        return;
    }
    player.setAttribute('disabled',true);
    player.style.backgroundColor = 'gray'
    
}

function getInputElementValue(inputId){
    const inputElemnt = document.getElementById(inputId);
    const elementValue = parseFloat(inputElemnt.value);
    return elementValue;
}


function setValue(elementId, setItem){
    const element = document.getElementById(elementId);
    element.innerText = setItem;
}
document.getElementById('calculate').addEventListener('click',function(){
    const perPlayerBudget = getInputElementValue('budget-per-player');
    const ul = document.getElementById('selected-players');
    const numberOfPlayer = ul.children.length;

    const totalPlayerExpenses = numberOfPlayer * perPlayerBudget;
    setValue('player-expense',totalPlayerExpenses);

})


document.getElementById('cal-total').addEventListener('click',function(){
    const budgetForCoach = getInputElementValue('budget-for-coach');
    const budgetForManager = getInputElementValue('budget-for-manager');
    const playerExpensesString = document.getElementById('player-expense');
    const playerExpenses = parseFloat(playerExpensesString.innerText);
    const totalExpenses = playerExpenses + budgetForCoach + budgetForManager;

    setValue('total-expenses',totalExpenses)
    
    
})