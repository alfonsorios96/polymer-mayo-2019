const fruits = ['apple','banana','strawberry'];

const slice = function(start, end) {
  const array = this;
  start = start ? start : 0;
  start = start < 0 ? array.length - 1 + start : start;
  end = end ? end : array.length - 1;
  end = end < 0 ? array.length - 1 + end : end;
  let newArray = [];
  if(start > end) {
    start = start + end;
    end = start - end;
    start = start - end;
  }
  while(start <= end) {
    newArray = [...newArray, array[start]];
    start++;
  }
  return newArray;
}

Array.prototype.poncho = slice;

fruits.poncho(0,1);
