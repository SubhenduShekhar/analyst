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
                    status: "fail",
                    reason: "Exception in thread \"main\" java.lang.NullPointerException \
                    at com.example.myproject.Book.getTitle(Book.java:16) \
                    at com.example.myproject.Author.getBookTitles(Author.java:25) \
                    at com.example.myproject.Bootstrap.main(Bootstrap.java:14)"
                },
                "Logout successfully": {
                    status: "fail"
                },
                "Close browser": {
                    status: "pass"
                },
                "Launch browser successfully1": {
                    status: "pass"
                },
                "Navigate to URL successfully1": {
                    status: "pass"
                },
                "Login with incorrect username1": {
                    status: "pass"
                },
                "Login with correct username1": {
                    status: "fail",
                    reason: "Exception in thread \"main\" java.lang.NullPointerException \
                    at com.example.myproject.Book.getTitle(Book.java:16) \
                    at com.example.myproject.Author.getBookTitles(Author.java:25) \
                    at com.example.myproject.Bootstrap.main(Bootstrap.java:14)"
                },
                "Logout successfully1": {
                    status: "fail"
                },
                "Close browser1": {
                    status: "pass"
                },
                "Launch browser successfully2": {
                    status: "pass"
                },
                "Navigate to URL successfully2": {
                    status: "pass"
                },
                "Login with incorrect username2": {
                    status: "pass"
                },
                "Login with correct username2": {
                    status: "fail",
                    reason: "Exception in thread \"main\" java.lang.NullPointerException \
                    at com.example.myproject.Book.getTitle(Book.java:16) \
                    at com.example.myproject.Author.getBookTitles(Author.java:25) \
                    at com.example.myproject.Bootstrap.main(Bootstrap.java:14)"
                },
                "Logout successfully2": {
                    status: "fail"
                },
                "Close browser2": {
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
                    status: "pass"
                },
                "Close browser": {
                    status: "pass"
                }
            }
        },
        "TC003-Screenshot_Capture_Scenario": {
            status: "skip",
            steps: {}
        }
    }
}

window.onload = () => {
    testCaseListTable();
    generateDateStamp();
    document.getElementById("stepBodyTable").style.display = "none";
}

function testCaseStatus(testCaseName) {
    var colorDiv = document.createElement("div");
    colorDiv.setAttribute("style", "height: 22px; width: 50%; display: inline-block; font-size: 0px;");
    if(Object.keys(reportJson.suite[testCaseName].steps).length !== 0) {
        var width = (100/Object.keys(reportJson.suite[testCaseName].steps).length) - 1;

        for(let i = 0; i < Object.keys(reportJson.suite[testCaseName].steps).length; i ++) {
            var div = document.createElement("div");
            div.setAttribute("title", Object.keys(reportJson.suite[testCaseName].steps)[i]);

            if(reportJson.suite[testCaseName].steps[Object.keys(reportJson.suite[testCaseName].steps)[i]].status === "fail")
                div.setAttribute("style", "margin-left: 1%; background-color: #d74545; height: inherit; width: " + width + "%; display: inline-block;");
            else if(reportJson.suite[testCaseName].steps[Object.keys(reportJson.suite[testCaseName].steps)[i]].status === "pass")
                div.setAttribute("style", "margin-left: 1%; background-color: #49b749; height: inherit; width: " + width + "%; display: inline-block;");
            else if(reportJson.suite[testCaseName].steps[Object.keys(reportJson.suite[testCaseName].steps)[i]].status === "skip")
                div.setAttribute("style", "margin-left: 1%; background-color: #5b83cd; height: inherit; width: " + width + "%; display: inline-block;");
            colorDiv.appendChild(div);
        }
    }
    else {
        var div = document.createElement("div");
        div.setAttribute("style", "margin-left: 1%; background-color: #5b83cd; height: inherit; width: 99%; display: inline-block;");
        colorDiv.appendChild(div);
    }
    return colorDiv;
}

function testCaseListTable() {
    for(let i = 0; i < reportJson.total; i ++) {
        var oDiv = document.createElement("div");
        oDiv.setAttribute("onclick", "javascript:displayStepDetails('" + Object.keys(reportJson.suite)[i] + "')");
        oDiv.setAttribute("style", "width: 100%");

        var iDiv1 = document.createElement("div");
        iDiv1.setAttribute("style", "width: 40%; display: inline-block; cursor: pointer; position: relative; left: 1%; font-weight: 500");
        iDiv1.innerText = Object.keys(reportJson.suite)[i];

        oDiv.appendChild(iDiv1);

        oDiv.appendChild(testCaseStatus(Object.keys(reportJson.suite)[i]));
        document.getElementById("testView").appendChild(oDiv);
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
    document.getElementById("backBtn").style.display = "inline";
}

function displayStepDetails(testCaseName) {
    changeTestCaseHeader(testCaseName);
    document.getElementById("testView").style.display = "none";
    generateTestStepDetails(testCaseName);
}

function goBack() {
    document.getElementById("testView").style.display = "contents";
    document.getElementById("backBtn").style.display = "none";
    document.getElementById("tableHeader").innerText = stateData.tableHeader;
    document.getElementById("stepBodyTable").style.display = "contents";
    document.getElementById("stepBody").style.display = "none";
}

function generateTestStepDetails(testCaseName) {
    document.getElementById("stepBody").style.display = "contents";
    document.getElementById("stepBody").innerHTML = "";
    document.getElementById("stepBodyTable").style.display = "inline-table";

    for(let i = 0; i < Object.keys(reportJson.suite[testCaseName].steps).length; i ++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        if(reportJson.suite[testCaseName].steps[Object.keys(reportJson.suite[testCaseName].steps)[i]].status === "pass")
            td1.setAttribute("style", "width: 0.5%; background-color: #49b749;");
        else if(reportJson.suite[testCaseName].steps[Object.keys(reportJson.suite[testCaseName].steps)[i]].status === "fail")
            td1.setAttribute("style", "width: 0.5%; background-color: #d74545;");
        else if(reportJson.suite[testCaseName].steps[Object.keys(reportJson.suite[testCaseName].steps)[i]].status === "skip")
            td1.setAttribute("style", "width: 0.5%; background-color: #5b83cd;");

        var td2 = document.createElement("td");
        td2.setAttribute("style", "width: 80%; padding-left: 1%;");
        td2.innerText = Object.keys(reportJson.suite[testCaseName].steps)[i];

        tr.appendChild(td1);
        tr.appendChild(td2);

        document.getElementById("stepBody").appendChild(tr);
    }
}

function generateDateStamp() {
    var date = new Date().toString().split(" ");
    document.getElementById("dateStamp").innerText = date[0] + " " + date[1] + " " + date[2] + " " + date[3] + " " + date[4];
}