var budgetController = (function () {

    var getCostInfo = function () {
        budgetView.obtainCostAndBudgetInfo();
    };

    return {
        getCostInfo: getCostInfo
    }

})();