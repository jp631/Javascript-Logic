/***
 * Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
 * make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove)
 *  should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings 
 * differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
 */

let input = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
let input2 = [1, "2", "3", 2];
let input3 = ["3", 3, 4, 2, 1, 4, 5, 1, 1, "3", "1", "6"];

let copyArray = (array) => {
  return array.map((e) => e);
};

let spliceArray = (array, index, qty) => {
  return array.splice(index, qty);
};

let removeItemArray = (array, item, qty) => {
  while (array.includes(item)) {
    array.splice(array.indexOf(item), qty);
  }
  return array;
};

let tempArrays = (count, item) => {
  let tempArray = [];
  for (i = 1; i <= count; i++) {
    tempArray.push(item);
  }
  return tempArray;
};

function compareNumbers(a, b) {
  return a - b;
}

let fixingArray = (arrays) => {
  let count = 0;
  let fixedArray = [];
  let copyofArray = copyArray(arrays);
  let arrayString = [];
  let finalResults = [];
  arrays.sort(compareNumbers);
  arrays.forEach((arrayItem, arrayIndex) => {
    copyofArray.filter((item, index) => {
      if (arrayItem === item) {
        count++;
      }
    });

    if (count === 1 && typeof arrayItem != "string") {
      fixedArray.push(arrayItem);
    } else if (count > 1 && typeof arrayItem != "string") {
      fixedArray.push(tempArrays(count, arrayItem));
    } else if (count === 1 && typeof arrayItem === "string") {
      arrayString.push(arrayItem);
    } else if (count > 1 && typeof arrayItem === "string") {
      arrayString.push(tempArrays(count, arrayItem));
    }
    removeItemArray(copyofArray, arrayItem, 1);
    count = 0;
  });
  fixedArray.length > 0 ? finalResults.push(fixedArray) : " ";
  arrayString.length > 0 ? finalResults.push(arrayString) : " ";

  return finalResults;
};

console.log(fixingArray(input));
console.log(fixingArray(input2));
console.log(fixingArray(input3));

///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////

/**
 * 
Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, 
give the target number. For example: answer([1,2,3], 4)should return [1,3]
 */

let equalTargetNumber = (array, target) => {
  let copyArray = array.map((e) => e);
  let results = [];
  array.forEach((e, i) => {
    copyArray.forEach((ee) => {
      if (e + ee === target) {
        console.log(e, ee);
        results.push([e, ee]);
      }
    });
  });

  return results;
};

console.log(equalTargetNumber([1, 2, 3], 4));



///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////

/**
 * 
 *Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats 
 so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
 */
//Enter value as rba(255, 255, 255) or #ffffff

let findRGB = (value) => {
  switch (value) {
    case 10:
      return "A";
      break;
    case 11:
      return "B";
      break;
    case 12:
      return "C";
      break;
    case 13:
      return "D";
    case 14:
      return "E";
      break;
    case 15:
      return "F";
      break;
    default:
      return value;
      break;
  }
};

let findHEX = (value) => {
  switch (value.toLocaleUpperCase()) {
    case "A":
      return 10;
      break;
    case "B":
      return 11;
      break;
    case "C":
      return 12;
      break;
    case "D":
      return 13;
      break;
    case "E":
      return 14;
      break;
    case "F":
      return 15;
      break;
    default:
      return value;
      break;
  }
};

let hexAndRGB = (value) => {
  let isRGB = false;
  let isHEX = false;
  let [r, g, b, par, ...rest] = [];

  value.replace(/\s/g, "");
  let valueToArray = "";

  if (value.includes("rgb")) {
    isRGB = true;
    valueToArray = value.split("rgb(")[1].split(")")[0].split(",");
    let array1 = [
      findRGB(parseInt(Number(valueToArray[0]) / 16)),
      findRGB(Number(valueToArray[0]) % 16),
    ];
    let array2 = [
      findRGB(parseInt(Number(valueToArray[1]) / 16)),
      findRGB(Number(valueToArray[1]) % 16),
    ];
    let array3 = [
      findRGB(parseInt(Number(valueToArray[2]) / 16)),
      findRGB(Number(valueToArray[2]) % 16),
    ];
    return `#${array1[0]}${array1[1]}${array2[0]}${array2[1]}${array3[0]}${array3[1]}`;
  }

  if (value.includes("#")) {
    let rgb = [];
    isHEX = true;
    let valueHex = value.split("#")[1].split("");

    if (valueHex.length === 6) {
      valueHex.forEach((e, i) => {
        switch (i) {
          case 0:
            rgb[0] = findHEX(e);
            break;
          case 1:
            rgb[0] = (rgb[0] + findHEX(e) / 16) * 16;
            break;
          case 2:
            rgb[1] = findHEX(e);
            break;
          case 3:
            rgb[1] = (rgb[1] + findHEX(e) / 16) * 16;
            break;
          case 4:
            rgb[2] = findHEX(e);
            break;
          case 5:
            rgb[2] = (rgb[2] + findHEX(e) / 16) * 16;
        }
      });
    }
    return `RGB(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }
};


