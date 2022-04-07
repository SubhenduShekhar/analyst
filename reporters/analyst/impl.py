import report

report.init("Windows", "DEV", "Shubhendu")

report.init_test("TC001-First_Test")
report.add_result(report.Status.Pass, "Passed 1")
report.add_result(report.Status.Pass, "Passed 2")
report.add_result(report.Status.Fail, "Fail 3")
report.flush_test()

report.init_test("TC002-Second_Test")
report.add_result(report.Status.Pass, "Passed 1")
report.add_result(report.Status.Pass, "Passed 2")
report.add_result(report.Status.Pass, "Passed 3")
report.flush_test()

report.flush()