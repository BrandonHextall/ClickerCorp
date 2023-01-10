function toPlainString(num) {
  return (''+ +num).replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/,
    function(a,b,c,d,e) {
      return e < 0
        ? b + '0.' + Array(1-e-c.length).join(0) + c + d
        : b + c + d + Array(e-d.length+1).join(0);
    });
}

console.log(toPlainString(12345e+12));
console.log(toPlainString(12345e+24));
console.log(toPlainString(-12345e+24));
console.log(toPlainString(12345e-12));
console.log(toPlainString(123e-12));
console.log(toPlainString(-123e-12));
console.log(toPlainString(-123.45e-56));
console.log(toPlainString('1e-8'));
console.log(toPlainString('1.0e-8'));