module.exports = function reverse (n) {
     let reverseNumber = 0;
     while (n) {
        reverseNumber = reverseNumber * 10 + n % 10;
        n = Math.floor(n / 10);
     }
     return reverseNumber;
     }
