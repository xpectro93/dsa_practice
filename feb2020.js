//TODO: Return one array
function flattener (arr) {
  return arr.reduce ((acc, el) => {
    console.log (el);
    //if the el is an array we invoke our function again, and the acc(arr)
    // by recursively calling our function we go and check inside the el === arr and keep digging until we have no other elements that are arrays.
    //if it is not an array, we simply add it to the acc
    return Array.isArray (el) ? [...acc, ...flattener (el)] : [...acc, el];
  }, []);
}
// let flattenMe = [4,[5,[6,7,[8]]]]
// console.log(flattener(flattenMe));
// => [4,5,6,7,8]
//TODO: Get the amount of elements that are in the array
function getLength (arr) {
  //it will keep going until i is greater than arr.length
  let count = 0;
  let hasArr = arr.some (el => Array.isArray (el));
  console.log (hasArr, arr);
  if (hasArr) {
    arr.forEach (el => {
      if (Array.isArray (el)) {
        count += getLength (el);
      } else {
        count++;
      }
    });
  } else {
    return arr.length;
  }
  return count;
}
// let nestedArr = [1, [2 ,3 , [3, 6]]];
// console.log(getLength(nestedArr));
//; => 5

//TODO:
// GIVEN A 2D ARRAY OF LETTERS, RETURN TRUE IF THE MATRIX CONTAINS A WORD. THE PATHS THAT CAN BE TAKEN ARE HORIZONTAL, VERTICAL, AND DIAGONAL.
let puzzleArr = [
  ['H', 'W', 'C', 'A', 'T'],
  ['B', 'T', 'O', 'M', 'E'],
  ['D', 'E', 'Q', 'U', 'D'],
  ['S', 'A', 'A', 'G', 'I'],
  ['M', 'D', 'O', 'R', 'E'],
];
const puzzleContainsWord = (puzzle, word) => {
  let possibleMoves = [
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
  ];
  //startFrom should be my x
  let startFrom;
  puzzle.forEach ((row, i) => {
    row.forEach ((cel, j) => {
      if (cel === word[0]) {
        startFrom = 0;
      } else if (cel === word[word.length - 1]) {
        startFrom = word.length - 1;
      }
      if (startFrom !== undefined) {
        //finder is going to look from the starting index, then
        finder (i, j, startFrom);
      }
    });
  });
};
// console.log(puzzleContainsWord(puzzleArr,'CAT'))
//ridx = row, cidx = col;
function finder (ridx, cidx) {}

//TODO: Reshape matrix (mtx, r,c) if you can't reshape return original
function matrixReshape (nums, r, c) {
  if (nums.length * nums[0].length < r * c) return nums;
  let col = [];
  // let  j  = 0;
  let matrix = new Array (r).fill ([]);
  let i = 0;
  nums.forEach (row => {
    row.forEach (cel => {
      //keep adding my nums until the row is full
      // we know that the row is full if row length is larger than c
      if (matrix[i].length >= c) {
        col.push (matrix[i]);
        i++;

        let newCol = [];
        matrix[i] = newCol;
        // j++
      }
      matrix[i].push (cel);
      //once col is full go to next one and add that row to
    });
  });
  return matrix;
}
/*
// let transformMeMtx= [[1,2],[3,4]]
// r =1,c = 4
// => [1,2,3,4]
// console.log(matrixReshape(transformMeMtx,1,4));
*/

//TODO: Write a function with the following prototype that returns the sum of the digits of an integer.
// int sumOfDigits(int x);
// If x is 234, the function should return 2 + 3 + 4, that is, 9.
// If x is 12, the function should return 1 + 2, which is 3.
// If x is 39, the function should return 12.
// If x is negative, ignore the minus sign. For example, -12 and 12 both return 3.

//12
const sumRec = num => {
  if (!num) return num;
  let rem = num % 10;
  num = Math.floor (num / 10);
  return rem + sumRec (num);
};
// console.log(sumRec(12));
//TODO: Check if number is palindrome TODO:

// is num palindrome => 909 => true;
// 190 => false;
const isNumPaliRec = num => {
  let party = reverseNum (num);
  return party;
};
function reverseNum (num, temp = 0) {
  // base case
  if (!num) return temp;
  // stores the reverse of a number
  temp = temp * 10 + num % 10;
  num = Math.floor (num / 2);
  return reverseNum (num, temp);
}
// console.log(reverseNum(1234))

// 8818;
// 18;
const countEightrec = num => {
  let eightCount = 0;
  if (!num) return num;
  let rem = num % 10;
  num = Math.floor (num / 10);

  if (rem === 8 && num % 10 === 8) eightCount += 2;
  else if (rem === 8) eightCount++;

  eightCount += countEightrec (num);
  return eightCount;
};
// console.log (countEightrec (881888));
//=> 8
//TODO: rec cleanString
const cleanString = str => {
  if (!str) return '';

  if (str[0] !== str[1]) out += str[0];
  return out + cleanString (str.slice (1));

  // let out = ''
  // let i = 0;

  // while(i < str.length){
  //   if(str[i] !== str[i +1]){
  //     out+=str[i];
  //   }
  //   i++
  // }

  // return console.log(out)
};
// cleanString('ayyyylmmmmaaaoooo')
// => aylmao;
// array220([1, 2, 20], 0) → true
// array220([3, 30], 0) → true
// array220([3], 0) → false
const hasTen = (arr, i) => {
  if (i > arr.length) return false;
  if (arr[i] * 10 === arr[i + 1]) return true;
  return hasTen (arr, ++i);
};
// const hasTen = (arr, i, j) => {

// }
// console.log(hasTen([3, 30], 0))
// => true

const flatt = mtx =>
  mtx.reduce (
    (acc, el) => (Array.isArray (el) ? [...acc, ...flatt (el)] : [...acc, el]),
    []
  );

Array.prototype.myForEach = function (call) {
  for (let i = 0; i < this.length; i++) {
    call (this[i], i, this);
  }
};
const binarySearch = (arr, tar) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor (start - end / 2);
    if (tar === arr[mid]) {
      break;
    }
    if (tar > arr[mid]) {
      start = mid + 1;
    }
    if (tar < arr[mid]) {
      end = start;
    } else {
    }
  }
};
const makeObj = word => {
  return word.reduce ((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
};

const wordCount = (arr, word) => {
  let wordArr = word.split ('');
  let count = 0;
  let hasAllLetters = true;
  let arrObj = makeObj (arr);
  let wordObj = makeObj (wordArr);
  while (hasAllLetters) {
    for (let letter in wordObj) {
      if (arrObj[letter]) {
        if (arrObj[letter] - wordObj[letter] >= 0) {
          arrObj[letter] = arrObj[letter] - wordObj[letter];
        } else {
          hasAllLetters = false;
        }
      } else {
        hasAllLetters = false;
      }
    }
    if (hasAllLetters) count++;
  }
  return count;
};
// let testa = ['h', 'e', 'l', 'l', 'o', 'i', 'h', 'e', 'l', 'l', 'o'];
// console.log (wordCount (testa, 'hello'));
const unique = arr => {
  let seenSet = new Set ();
  let seenValue;
  for (let num of arr) {
    if (seenSet.has (num)) {
      seenValue = num;
    } else {
      seenSet.add (num);
      if (seenSet.size > 1) {
        seenSet.delete (seenValue);
      }
    }
  }

  return [...seenSet][0];
};
const mostFreq = arrWords => {
  let wordObj = {};
  let maxSeen = {word: '', seen: -Infinity};
  for (let word of arrWords) {
    if (wordObj[word]) {
      wordObj[word]++;
      if (wordObj[word] > maxSeen.seen) {
        maxSeen.seen = wordObj[word];
        maxSeen.word = word;
      }
    } else {
      wordObj[word] = 1;
    }
  }
  return maxSeen.word;
};
// console.log(mostFreq(['hello','hello','bye']))
const numToArrRec = num => {
  if (num === 0) return [];
  let rem = num % 10;
  num = Math.floor (num / 10);
  return [...numToArrRec (num), rem];
};
// console.log('Test =>', numToArrRec(123))
// Given a string that contains a single pair of parenthesis, compute recursively a new string made of only of the parenthesis and their contents, so "xyz(abc)123" yields "(abc)".

const parentBit = str => {
  if (str[0] === '(' && str[str.length - 1] === ')') return str.slice (1, -1);
  if (str[0] !== '(') return parentBit (str.slice (1));
  else return parentBit (str.slice (0, -1));
};
console.log (parentBit ('x234(xysd)'));
// parenBit("xyz(abc)123") → "(abc)"
// parenBit("x(hello)") → "(hello)"
// parenBit("(xy)1") → "(xy)"

// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

const changeXY = str => {
  if (!str) return '';
  if (str[0] === 'x') return 'y' + changeXY (str.slice (1));
  else return str[0] + changeXY (str.slice (1));
};

// console.log(changeXY('xcodex'))
// Given a string, return true if it is a nesting of zero or more pairs of parenthesis, like "(())" or "((()))". Suggestion: check the first and last chars, and then recur on what's inside them.
const nestParen = par => {
  if (!par) return true;
  let eidx = par.length - 1;
  if (par[0] + par[eidx] === '()') return nestParen (par.slice (1, -1));
  else return false;
};
// console.log(nestParen('(())'))

// nestParen("(())") → true
// nestParen("((()))") → true
// nestParen("(((x))") → false

// Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".

const changePi = piStr => {
  if (!piStr) return '';
  if (piStr[0] + piStr[1] === 'pi') return '3.14' + changePi (piStr.slice (2));
  else return piStr[0] + changePi (piStr.slice (1));
};
// console.log (changePi ('pip'));
// changePi("xpix") → "x3.14x"
// changePi("pipi") → "3.143.14"
// changePi("pip") → "3.14p"

// We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.

const triangle = block => (!block ? 0 : block + triangle (--block));
// {
//   if(!block) return 0;
//   return block + triangle(--block)
// }
// console.log(triangle(5))

// triangle(0) → 0
// triangle(1) → 1
// triangle(2) → 3

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).
//1,3,5 => 2
//2,4,6 => 3
const bunnyEars2 = bunnies => {
  if (!bunnies) return 0;
  if (bunnies % 2 === 0) return 3 + bunnyEars2 (--bunnies);
  else return 2 + bunnyEars2 (--bunnies);
};
// console.log(bunnyEars2(3))

// bunnyEars2(0) → 0
// bunnyEars2(1) → 2
// bunnyEars2(2) → 5

// Given a string and a non-empty substring sub, compute recursively the number of times that sub appears in the string, without the sub strings overlapping.

const strCount = (str, sub) => {
  if (!str) return 0;
  let start = 0, end = sub.length;
  if (str.slice (start, end) === sub)
    return 1 + strCount (str.slice (end), sub);
  else 
    return strCount (str.slice (++start), sub);
};

// console.log(strCount("catcowclapat", "clap"))

// strCount("catcowcat", "cat") → 2
// strCount("catcowcat", "cow") → 1
// strCount("catcowcat", "dog") → 0
