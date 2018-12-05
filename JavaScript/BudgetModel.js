var budgetModel = (function () {

    var leftoverBudget = 0;
    var exceededBudget = false;

    var costList = [
        { id: "cost1", cost: 0 },
        { id: "cost2", cost: 0 },
        { id: "cost3", cost: 0 }
    ];

    var getExceededBudget = function () {
        return exceededBudget
    };

    var getCostList = function () {
        return costList;
    };

    var getBudget = function () {
        return leftoverBudget;
    };

    var didExceedBudget = function (answer) {
        exceededBudget = answer;
    }

    var updateLeftoverBudget = function (newBudget) {
        leftoverBudget = newBudget;
    }

    return {
        getBudget: getBudget,
        getCostList: getCostList,
        getExceededBudget: getExceededBudget,
        didExceedBudget: didExceedBudget,
        updateLeftoverBudget: updateLeftoverBudget
    }

})();
