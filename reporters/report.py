import datetime
import enum

import base

test = {
    "pass": 0,
    "fail": 0,
    "skip": 0,
    "error": 0,
    "warning": 0
}

step = {
    "pass": 0,
    "fail": 0,
    "skip": 0,
    "error": 0,
    "warning": 0
}


report_json = {
    "total": 0,
    "test": test,
    "steps": step,
    "suite": {}
}

cur_test_name = ""

class Status(enum.Enum):
    Pass = 1,
    Fail = 2,
    Skip = 3,
    Warning = 4,
    Error = 5

def init(os, environment, userAgent):
    report_json["os"] = os
    report_json["environment"] = environment
    report_json["userAgent"] = userAgent
    report_json["startTime"] = time()

def init_test(test_name):
    global cur_test_name
    cur_test_name = test_name
    report_json["total"] += 1
    report_json["suite"][test_name] = {}

def add_result(status, message):
    global cur_test_name
    report_json["steps"][str(status).split(".")[1].lower()] += 1

    if(report_json["suite"][cur_test_name] == {}):
        report_json["suite"][cur_test_name] = {}
    if(report_json["suite"][cur_test_name] == {}):
        report_json["suite"][cur_test_name]["steps"] = {}
    if(report_json["suite"][cur_test_name]["steps"] == {}):
        report_json["suite"][cur_test_name]["steps"][message] = {}
    else:
        report_json["suite"][cur_test_name]["steps"][message] = {}

    report_json["suite"][cur_test_name]["steps"][message]["status"] = str(status).split(".")[1].lower()

def time():
    return datetime.datetime.now()

def duration():
    diff = report_json["startTime"] - report_json["endTime"]
    if(diff.seconds/60 < 1 and diff.seconds/60 > 0):
        return str(diff.seconds)
    else:
        return str(diff.seconds/60) + " minutes"

def flush_test():
    global cur_test_name
    status = ""
    for x in report_json["suite"][cur_test_name]["steps"].keys():
        if(report_json["suite"][cur_test_name]["steps"][x]["status"] == "pass"):
            status = "pass"
        if(report_json["suite"][cur_test_name]["steps"][x]["status"] == "fail"):
            status = "fail"
            break
        if(report_json["suite"][cur_test_name]["steps"][x]["status"] == "error"):
            status = "error"
            break
    
    if(status == "pass"):
        report_json["test"]["pass"] += 1
    elif(status == "fail"):
        report_json["test"]["fail"] += 1
    elif(status == "error"):
        report_json["test"]["error"] += 1

def flush():
    report_json["endTime"] = time()
    report_json["duration"] = duration()
    report_json["endTime"] = str(report_json["endTime"])
    report_json["startTime"] = str(report_json["startTime"])
    base.generate_report(report_json)


init("Windows", "DEV", "Shubhendu")

init_test("TC001-First_Test")
add_result(Status.Pass, "Passed 1")
add_result(Status.Pass, "Passed 2")
add_result(Status.Fail, "Fail 3")
flush_test()

init_test("TC002-Second_Test")
add_result(Status.Pass, "Passed 1")
add_result(Status.Pass, "Passed 2")
add_result(Status.Pass, "Passed 3")
flush_test()

print(report_json)
flush()