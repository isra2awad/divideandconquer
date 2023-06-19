let mylist = [55, 66, 85, 4, 2, 99, 66, 55, 179];
console.log(sortMyArray(mylist));
function sortMyArray(arr) {
  if (arr.length === 0) {
    return "ops that was an empty array! Try again with a populated array";
  }
  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);
  return merge(sortMyArray(left), sortMyArray(right));
}

function merge(arrA, arrB) {
  let arrC = [];
  let i = 0;
  let j = 0;
  let m = arrA.length;
  let n = arrB.length;

  while (i < m && j < n) {
    if (arrA[i] < arrB[j]) {
      arrC.push(arrA[i]);

      i++;
    } else {
      arrC.push(arrB[j]);

      j++;
    }
  }

  for (; i < m; i++) {
    arrC.push(arrA[i]);
  }

  for (; j < n; j++) {
    arrC.push(arrB[j]);
  }
  return arrC;
}
