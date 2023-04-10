function findFactors() {
    var number = document.getElementById("number").value;
    var factors = [];
    var count = 0;
  
    for (var i = 1; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        factors.push(i);
        count++;
        if (i !== Math.sqrt(number)) {
          factors.push(number / i);
          count++;
        }
      }
    }
    
    factors.sort(function(a, b) { return a - b; });
    
    var factorList = document.getElementById("factors");
    factorList.innerHTML = factors.join(", "); 
    
    var countContainer = document.getElementById("count");
    countContainer.innerHTML = "Number of factors: " + count;
  }
