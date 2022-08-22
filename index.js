

// function to Select player
function getSelectedPlayer( player){
    const playerName = player.parentNode.parentNode.children[0].innerText;
    const ol = document.getElementById('selected-players');
    const li = document.createElement('li');
    li.innerText = playerName;
    if(ol.children.length < 5 ){
        ol.appendChild(li);
    }else{
        alert('Sorry Cannot Select More Than 5 Players')
        return;
    }
    player.setAttribute('disabled',true);
    player.style.backgroundColor = 'gray';
    
}

// function for getting input value as number 
function getInputElementValue(inputId){
    const inputElemnt = document.getElementById(inputId);
    const elementValue = parseFloat(inputElemnt.value);
    return elementValue;
}

// function to set a value as innertext
function setValue(elementId, setItem){
    const element = document.getElementById(elementId);
    element.innerText = setItem;
}

//click event on calculate button
document.getElementById('calculate').addEventListener('click',function(){
    const perPlayerBudget = getInputElementValue('budget-per-player');
    const ol = document.getElementById('selected-players');
    const numberOfPlayer = ol.children.length;
    if(isNaN(perPlayerBudget)){
        alert('Please provide valid input!');
        return;
    }else if(numberOfPlayer < 1){
        alert('Please Select Player!');
        return;
    }
    const totalPlayerExpenses = numberOfPlayer * perPlayerBudget;
    setValue('player-expense',totalPlayerExpenses);

})


// click event on total button
document.getElementById('cal-total').addEventListener('click',function(){
    const budgetForCoach = getInputElementValue('budget-for-coach');
    const budgetForManager = getInputElementValue('budget-for-manager');
    const playerExpensesString = document.getElementById('player-expense');
    const playerExpenses = parseFloat(playerExpensesString.innerText);
    const totalExpenses = playerExpenses + budgetForCoach + budgetForManager;
    if(isNaN(budgetForCoach) || isNaN(budgetForManager)){
        alert('Please provide valid input!');
        return;
    }
    setValue('total-expenses',totalExpenses);
    
    
})