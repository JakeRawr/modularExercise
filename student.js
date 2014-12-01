'use strict';

function StudentInfo(name) {
  this.name = name;
  this.classList = [];

  this.constructor.prototype.addClass = function(classInfo) {
    this.classList.push(classInfo);
  };

  this.constructor.prototype.removeClass = function (classInfo) {
    var index = 0;
    for (var i = 0; i < this.classList.length; i++) {
      if (this.classList[i].name === classInfo.name) {
        index = i;
        break;
      }
    }
    this.classList.splice(index, 1);
  };

}

module.exports = StudentInfo;
