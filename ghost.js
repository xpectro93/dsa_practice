class Ghost {
  constructor(){
    this.alive = true;
    this.coords = [0,0];
    this.scatter = false;
  }

  // [
      //  0   1   2   3   4   5   6   7
    // 0 ['x','x','x','x','x','x','x','x'],
    // 1 ['x','W','x','x','x','x','W','x'],
    // 2 ['x','W','x','T','x','x','W','x'],
    // 3 ['x','W','W','W','W','x','W','x'],
    // 4 ['x','W','x','G','x','x','W','x'],
    // 5 ['x','W','x','x','x','x','W','x'],
    // 6 ['x','W','x','x','x','x','W','x'],
    // 7 ['x','x','x','x','x','x','x','x'],
    // 8 ['x','x','x','x','x','x','x','x'],
    // 9 ['x','x','x','x','x','x','x','x']
  // ]
  move(range){
    // 9, 7
    let [ row, col ] = range;
    // 4, 3
    let [ x, y ] = this.coords;
    

  }
}

let mapTest = new Map()
function mapFunction(){
  console.log('this is a map function');
}
let mapObj = {name:'ThisbObj',value:1};
let mapString = 'This is a string';
mapTest.set(mapFunction, ()=>12,console.log('this is a value in the mapFunction'));
mapTest.set(mapObj, 'This is the object value');
mapTest.set(mapString);
console.log(mapTest.get(mapFunction)());

