google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(testReport);
google.charts.setOnLoadCallback(stepReport);

var stateData = {
    tableHeader: "Execution Details"
}

var reportJson = {
    total: 3,
    suite: {
        "TC001-Login_Scenario_Test": {
            status: "fail",
            steps: {
                "Launch browser successfully": {
                    status: "pass"
                },
                "Navigate to URL successfully": {
                    status: "pass"
                },
                "Login with incorrect username": {
                    status: "pass"
                },
                "Login with correct username": {
                    status: "fail"
                },
                "Logout successfully": {
                    status: "fail"
                },
                "Close browser": {
                    status: "pass"
                }
            }
        },
        "TC002-Table_Data_View_Scenario": {
            status: "pass",
            steps: {
                "Launch browser successfully": {
                    status: "pass"
                },
                "Navigate to URL successfully": {
                    status: "pass"
                },
                "Login with correct username": {
                    status: "pass"
                },
                "Click user history": {
                    status: "pass"
                },
                "Validate user history": {
                    status: "pass"
                },
                "Logout successfully": {
                    status: "fail"
                },
                "Close browser": {
                    status: "pass"
                }
            }
        },
        "TC003-Screenshot_Capture_Scenario": {
            status: "pass",
            steps: {
                "Launch browser successfully": {
                    status: "pass"
                },
                "Navigate to URL successfully": {
                    status: "pass"
                },
                "Login with correct username": {
                    status: "pass"
                },
                "Click user history": {
                    status: "pass"
                },
                "Screenshot save user history": {
                    status: "pass"
                },
                "Logout successfully": {
                    status: "fail"
                },
                "Close browser": {
                    status: "pass"
                }
            }
        }
    }
}

function testReport() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Pass', 18],
        ['Fail', 3],
        ['Skip', 2],
        ['Warning', 3],
        ['Error', 1]
    ]);
  
    // Optional; add a title and set the width and height of the chart
    var options = {
        'title':'Test case wise status', 
        'width':'inherit', 
        'height':'inherit',
        'backgroundColor': 'transparent',
        'colors': ['#008000', '#ff0000', '#005aff', '#ffc800', '#747474']
    };
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('testReport'));
    chart.draw(data, options);
}

function stepReport() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Pass', 18],
        ['Fail', 3],
        ['Skip', 2],
        ['Warning', 3],
        ['Error', 1]
    ]);
  
    // Optional; add a title and set the width and height of the chart
    var options = {
        'title':'Stepwise status', 
        'width':'inherit', 
        'height':'inherit',
        'backgroundColor': 'transparent',
        'colors': ['#008000', '#ff0000', '#005aff', '#ffc800', '#747474']
    };
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('stepReport'));
    chart.draw(data, options);
}

function changeTestCaseHeader(testCaseName) {
    document.getElementById("tableHeader").innerText = testCaseName;
}

function goBack() {
    document.getElementById("tableHeader").innerText = stateData.tableHeader;
}