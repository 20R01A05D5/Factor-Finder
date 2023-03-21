function findFactors() {
  var number = BigInt(document.getElementById("number").value);
  var factors = [];

  for (var i = BigInt(1); i * i <= number; i++) {
    if (number % i === 0n) {
      factors.push(i);
      if (i * i !== number) {
        factors.push(number / i);
      }
    }
  }
  var factorList = document.getElementById("factors");
  factorList.innerHTML = factors.join(", "); 
}
