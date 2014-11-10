'use strict';

function ClassInfo(name) {
  this.name = name;
  this.size = 0;
  this.list = [];

  this.constructor.prototype.add = function(student) {
    this.list.push(student);
    student.addClass(this);
    this.size++;
  };

  this.constructor.prototype.remove = function(studentName) {
    var index = 0;
    for (var i = 0; i < this.size; i++) {
      if (this.list[i].name === studentName) {
        index = i;
        break;
      }
    }
    this.list[index].removeClass(this);
    this.list.splice(index, 1);
    this.size--;
  };

}

module.exports = ClassInfo;
