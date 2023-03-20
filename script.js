function findFactors() {
    var number = document.getElementById("number").value;
    var factors = [];
  
    for (var i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i);
      }
    }
  
    var factorList = document.getElementById("factors");
    factorList.innerHTML = factors.join(", "); // Join the factors array with comma and space
  }
  