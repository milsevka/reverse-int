module.exports = function reverse (n) {
let meow = Math.abs(n);
let woff = String(meow);
return woff.split('').reverse().join('');
};