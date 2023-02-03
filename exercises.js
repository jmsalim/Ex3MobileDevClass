let arrays = [[1, 2, 3], [4, 5], [6]];
let flattened = arrays.reduce((acc, cur) => acc.concat(cur), []);
console.log(flattened);


function loop(value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
      body(i);
    }
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);


function every(array, test) {
    for (let element of array) {
      if (!test(element)) return false;
    }
    return true;
  }

function every(array, test) {
    return !array.some(element => !test(element));
  }
  

console.log(every([1, 3, 5], n => n < 10));

console.log(every([2, 4, 16], n => n < 10));

console.log(every([], n => n < 10));


function dominantDirection(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
  
    if (scripts.length == 0) return "ltr";
  
    let [{count: dominantCount}] = scripts.sort((a, b) => b.count - a.count);
    return scripts.filter(({count}) => count == dominantCount)
                 .map(({name}) => name)
                 .join("");
  }
  
