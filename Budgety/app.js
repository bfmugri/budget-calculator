// BUDGET CONTROLLER

var budgetController = (function() {

})();

// UI CONTROLLER

var UIController = (function() {

    

})();

// GLOBAL CONTROLLER

var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){

        // 1. Get input data
        // 2. Add item 
        // 3. Add the item to UI
        // 4. calculate budget
        // 5. Display the budget on the UI
        
        console.log('It works.');

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
        
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }


    });



}) (budgetController, UIController);

