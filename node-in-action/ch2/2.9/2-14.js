function asyncFunction (callback) {
  setTimeout(callback, 200);
}

let color = 'blue';
asyncFunction (() => {
  console.log(`The color is ${color}`);
});
color = 'green';

(color => {
  asyncFunction(() => {
    console.log('The color is ', color);
  });
})(color);

color = 'red'