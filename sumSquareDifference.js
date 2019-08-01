class SumOfASquare {
  constructor(num) {
    this.num = num;
  }

  sumOfSquares() {
    let base = 0;
    for (let i = 1; i <= this.num; i++) {
      base += Math.pow(i, 2);
    }
    return base;
  }
  squareOfTheSums() {
    let base = 0;
    for (let i = 1; i <= this.num; i++) {
      base += i;
    }
    return Math.pow(base, 2);
  }
}
module.exports = {
  SumOfASquare: SumOfASquare
};
