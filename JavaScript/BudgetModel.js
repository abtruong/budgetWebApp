var budgetModel = (function () {

    /*  TO DO:

        Reduce array size down to only 1
        to add dynamic sizing with a "+"
        button to add more text fields.

        Implement field names so the user
        can keep track of what they are
        adding costs to.

        Final cost of a certain field, for
        example: field "groceries" can have
        10 items, add all the costs together
        for the total cost. Maybe implement
        this into a function.
    */

    var budget = 0;

    /*
        This right here

        costList would be size 1 as the base case

        costList = [firstObject]

        When the user hits a + sign:
            costList = [firstObject, secondObject]
    */

    var costList = [
        { id: "<placeholder>", cost: 0 },
        { id: "cost2", cost: 0, finalCost: 0 },
        { id: "cost3", cost: 0, finalCost: 0 },
        { id: "cost4", cost: 0, finalCost: 0 },
        { id: "cost5", cost: 0, finalCost: 0 }
    ];

    // Add a new budget field to the form when clicking the + button
    var addBudgetField = function() {
        costList.push(
            { id: "<placeholder>", cost: 0 }
        )
    }

    // Change the name of the field we are budgeting
    // Passing in data from the BudgetView.js
    var changeBudgetName = function(previousBudgetName, newBudgetName) {
        if (previousBudgetName == newBudgetName) {
            return
        }
        for (i = 0; i < costList.length; i++) {
            if (costList[i].id == previousBudgetName) {
                costList[i].id = newBudgetName
            }
        }
    }

    // Update the cost of the field we are budgeting
    // Passing in data from the BudgetView.js
    var updateBudgetCost = function(budgetName, newCost) {
        for (i = 0; i < costList.length; i++) {
            if (costList[i].id == budgetName) {
                costList[i].cost = newCost;
            }
        }
    }

    var getCostList = function () {
        return costList;
    };

    var getBudget = function () {
        return budget;
    };

    return {
        getBudget: getBudget,
        getCostList: getCostList
    }

})();


// var cost = new Array(5);
// var cost = Array(5);
// var budget = new Array(5);
// var budget = Array(5);

// var cost1 = document.getElementById("rentCost")
// var cost2 ""
// var cost3 ""
// var cost4 ""
// var cost5 ""

// input.addEventListener("keyup", function(event)) {
//   if (event.keyCode == 13) { // Conditional for when the user presses and releases the enter key
//     append value in rentCost to cost array
//   }

// }

// var budget1 = document.getElementById("rentBudget")
// var budget2 ""
// var budget3 ""
// var budget4 ""
// var budget5 ""


// var finalCost;
// var finalBudget;

// for i=0; i<cost.length; i++ {
//   finalCost += cost[i]
// }

// for i=0; i<budget.length; i++ {
//   finalBudget += budget[i]
// }
