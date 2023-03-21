function findFactors() {
    var number = document.getElementById("number").value;
    var factors = [];
  
    for (var i = 1; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        factors.push(i);
        if (i !== Math.sqrt(number)) {
          factors.push(number / i);
        }
      }
    }
    
    factors.sort(function(a, b) { return a - b; });
    
    var factorList = document.getElementById("factors");
    factorList.innerHTML = factors.join(", "); 
  }
  