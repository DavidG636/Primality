$(function() {
  function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1 && num !== 0;
  }

  $('.submit').click(function () {
    console.log(isPrime(12));
  });



})
