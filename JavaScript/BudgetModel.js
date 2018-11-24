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
    var costList = [
        { id: "cost1", cost: 0, finalCost: 0 },
        { id: "cost2", cost: 0, finalCost: 0 },
        { id: "cost3", cost: 0, finalCost: 0 },
        { id: "cost4", cost: 0, finalCost: 0 },
        { id: "cost5", cost: 0, finalCost: 0 }
    ];

    var getCostList = function () {
        return costList;
    };

    var getBudgetList = function () {
        return budgetList;
    }

    return {
        getCostList: getCostList,
        getBudgetList: getBudgetList
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
