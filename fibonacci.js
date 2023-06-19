function coundDown(n) {
  for (let i = n; i > 0; --i) {
    console.log(i);
  }
  console.log("horaaaaaaaaaaaay");
}

coundDownRecursion(5);

function coundDownRecursion(n) {
  if (n <= 0) {
    console.log("Horaaaaaaaaaaaay");
    return;
  } else {
    console.log(n);
    coundDownRecursion(n - 1);
  }
}

function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; --i) {
    console.log(i, total);
    total += i;
    console.log(total);
  }
  console.log("done");
}

function sumRangeRecursion(n, sum = 0) {
  if (n <= 0) {
    console.log(`${sum} done`);
    return;
  } else {
    sumRangeRecursion(n - 1, sum + n);
  }
}

function sumRangeRecursion(n, sum = 0) {
  if (n <= 0) {
    return sum;
  } else {
    return sumRangeRecursion(n - 1, sum + n);
  }
}
sumRangeRecursion(5);
