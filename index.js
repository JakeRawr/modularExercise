'use strict';

var express = require('express');
var app = express();

var ClassInfo = require('./class.js');
var StudentInfo = require('./student.js');

var port = process.env.PORT || 3000;

var classList = [];
var studentList = [];
//pre-added class

app.get('/addclass/:class', function(req, res) {
  var newClass = new ClassInfo (req.params.class);
  classList.push(newClass);
  res.send('added class ' + req.params.class);
});

app.get('/add/:class/:name', function(req, res) {
  var classSelect;
  for (var i = 0; i < classList.length; i++) {
    if (classList[i].name === (req.params.class)) {
      classSelect = classList[i];
    }
  }
  var student = new StudentInfo(req.params.name);
  studentList.push(student);
  classSelect.add(student);

  res.send(classSelect.name + ' class has students ' + printName(classSelect));
});

app.get('/remove/:class/:name', function(req, res) {
  var classSelect;
  for (var i = 0; i < classList.length; i++) {
    if (classList[i].name === (req.params.class)) {
      classSelect = classList[i];
    }
  }
  classSelect.remove(req.params.name);

  res.send(classSelect.name + ' class has students ' + printName(classSelect));
});

app.get('/:name/listClass', function(req, res) {
  var Studname = req.params.name;
  var nameInfo;
  for (var i = 0; i < studentList.length; i++) {
    if (studentList[i].name === Studname) {
      nameInfo = studentList[i];
    }
  }
  res.send(Studname + ' is now enrolled in ' + (function() {
    var classString = '';
    for (var j = 0; j < nameInfo.classList.length; j++) {
      classString += (nameInfo.classList[j]).name;
    }
    return classString;
  }()));
});

app.listen(port, function() {
  console.log('Server started on port', port);
});

function printName(classIn) {
  var listOut = '';
  for (var i = 0; i < classIn.size; i++) {
    listOut += (classIn.list[i].name + ' ');
  }
  return listOut;
}
