function seven(m) {
    // your code
  let count = 0;

  while(m > 99) {
    m = parseInt(m / 10) - (2 * (m % 10)); 
    count++;
  }

  return [m, count];
}