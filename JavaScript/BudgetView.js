var budgetView = (function () {

    // Function grabs the list of costs from the Budget Model JS
    var obtainCostAndBudgetInfo = function() {
        
        var totalCost = 0;
        var costList = budgetModel.getCostList();

        for (i = 0; i < costList.length; i++) {

            var cString = "cost" + (i + 1).toString();

            var costInput = document.getElementById(cString).value;

            // DO REGEX CHECK HERE
            // IF costInput is in the same format AS:
            // ^[0-9]{1,5}\.[0-9][0-9]$ --> THEN:

            var rgx = new RegExp('^[0-9]{1,5}\.[0-9]{2}$')

            if (rgx.test(costInput) != true) {
                alert("Text Field " + (i + 1).toString() + " is in the incorrect format.")
            }

            costList[i].cost = parseFloat(costInput)
            console.log(costList[i]);

        }
        
        for (i = 0; i < costList.length; i++) {

            var cString = "displayCost" + (i + 1).toString();

            totalCost += costList[i].cost;
            
            document.getElementById(cString.toString()).innerHTML = costList[i].cost;
        }
        
        document.getElementById("totalCost").innerHTML = totalCost;

        console.log("total cost is ", totalCost);
    };

    

    return {
        obtainCostAndBudgetInfo: obtainCostAndBudgetInfo
    }

})();