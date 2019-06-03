const fruits = ['apple', 'banana', 'strawberry'];

const slice = function(start, end) {
    const array = this;
    start = start ? start : 0;
    start = start < 0 ? array.length - 1 + start : start;
    end = end ? end : array.length - 1;
    end = end < 0 ? array.length - 1 + end : end;
    let newArray = [];
    if (start > end) {
        start = start + end;
        end = start - end;
        start = start - end;
    }
    while (start <= end) {
        newArray = [...newArray, array[start]];
        start++;
    }
    return newArray;
};

const splice = function() {
    const array = this;
    const index = arguments ? arguments[0] : 0;
    const counter = arguments ? arguments[1] : 0;
    let newElements = [...arguments];
    newElements = newElements ? newElements.slice(2) : [];
    return [
        ...array.slice(0, index),
        ...array.slice(index + counter),
        ...newElements
    ];
};

Array.prototype.poncho = splice;