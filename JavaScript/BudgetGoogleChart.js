var budgetGoogleChart = (function() {

    var testing = function() {

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
    
        function drawChart() {
            var testData = budgetModel.getCostList();
            var leftoverBudget = budgetModel.getBudget();
            var testArray = [['Categories', 'Cost per month']];

            if (budgetModel.getExceededBudget() == false) {
                testArray.push(["Leftover", leftoverBudget])
            }

            for (i = 0; i < testData.length; i++) {
                testArray.push([testData[i].id, testData[i].cost]);
            }
            
            var data = google.visualization.arrayToDataTable(
                testArray
            );
            
            // Optional; add a title and set the width and height of the chart
            var options = {
                'title':'Monthly Allocation (Costs)',
                titleTextStyle: {
                    fontSize: 30,
                    fontName: 'Nixie One'
                    
                },
                legend: {
                    textStyle: {
                        fontName: 'Nixie One',
                        bold: true
                    }
                },
                'width': 1000,
                'height': 800,
                backgroundColor: 'transparent',
                //'chartArea': {'width': '90%', 'right': '10%'},
               // 'colors': ['#FF0003', '#00D114', '#0018FF','#F4BD00', '#FF8100']
            };
            // Display the chart inside the <div> element with id="chart"
            var chart = new google.visualization.PieChart(document.getElementById("chart"));
            document.getElementById("googleChartBox").className = "centerText";
            chart.draw(data, options);
        }
    }

    return {
        testing: testing
    }
})()
