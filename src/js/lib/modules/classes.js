import $ from '../core';

//addClass
$.prototype.addClass = function (...classNames) {
      for (let i = 0; i < this.length; i++) {
          this[i].classList.add(...classNames);
      }
      return this;
};

//removeClass
$.prototype.removeClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames);
    }
    return this;
};

//toggleClass
$.prototype.toggleClass = function (classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(classNames);
    }
    return this;
};