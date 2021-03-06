// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Log$ReasonmlDemoModules = require("./Log.bs.js");

function logStrWithDate(str, log) {
  var dateStr = new Date().toISOString();
  return Log$ReasonmlDemoModules.logStr("[" + (dateStr + ("] " + str)), log);
}

var LogWithDate = /* module */[
  /* make */Log$ReasonmlDemoModules.make,
  /* logStr */Log$ReasonmlDemoModules.logStr,
  /* print */Log$ReasonmlDemoModules.print,
  /* logStrWithDate */logStrWithDate
];

Log$ReasonmlDemoModules.print(logStrWithDate("everyone", logStrWithDate("Hello", Log$ReasonmlDemoModules.make(/* () */0))));

exports.LogWithDate = LogWithDate;
/*  Not a pure module */
