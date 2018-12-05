var budgetView = (function () {

    // Function grabs the list of costs from the Budget Model JS
    var obtainCostAndBudgetInfo = function() {

        var budget = document.getElementById("budgetField").value;
        var costList = budgetModel.getCostList();
        var totalCost = 0;

        for (i = 0; i < costList.length; i++) {

            var nString = "rowName" + (i + 1).toString();
            var cString = "rowCost" + (i + 1).toString();

            var nameInput = document.getElementById(nString).value;
            var costInput = document.getElementById(cString).value;

            var rgx = new RegExp("^[0-9]{1,5}\.[0-9]{2}$")
            if (nameInput == "") {
                alert("Subject Field " + (i + 1).toString() + " is empty. Please enter a name.")
                return;
            }
            if (rgx.test(costInput) != true) {
                alert("Cost Field " + (i + 1).toString() + " is in the incorrect format. Please use format \"0.00\"")
                return;
            }

            costList[i].id = nameInput;
            costList[i].cost = parseFloat(costInput);

            totalCost += parseFloat(costInput);
        }

        var accSum = "Expense Total:" + "<br/><br/>$" + (totalCost.toFixed(2)).toString();
        var output = "";

        budgetModel.updateLeftoverBudget(budget - totalCost);

        if (budget < totalCost) {
            output = "You've exceeded your budget by $" + ((Math.abs(budget - totalCost)).toFixed(2)).toString() + "!";
            document.getElementById("overOrUnder").style.color = "#c44444"
            exceeded = true;
            budgetModel.didExceedBudget(exceeded);
        } else if (budget == totalCost) {
            output = "You matched your exact budget.";
            exceeded = false;
            budgetModel.didExceedBudget(exceeded)
        } else {
            output = "You have $" + ((budget - totalCost).toFixed(2)).toString() + " left to spare."
            document.getElementById("overOrUnder").style.color = "#57d170"
            exceeded = false;
            budgetModel.didExceedBudget(exceeded)
        }
        
        budgetGoogleChart.testing();
        document.getElementById("accountSummary").className = "centerText";
        document.getElementById("totalCost").innerHTML = accSum;
        document.getElementById("overOrUnder").innerHTML = output;
  
            
    };

    return {
        obtainCostAndBudgetInfo: obtainCostAndBudgetInfo
    }

})();