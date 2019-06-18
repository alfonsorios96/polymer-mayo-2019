const matching = () => {
  let string = '<<>>';
  while (string.includes('<>')) {
    string = string.replace(/<>/g, '');
    console.log(string);
  }
  return string.length === 0;
};

const result = matching();
