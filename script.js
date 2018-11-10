$(function() {
  function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1 && num !== 0;
  }

  function move() {
    var elem = $("#myBar");
    elem.css('display', 'block');
    var width = 0;
    var id = setInterval(frame, 20);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        showOutput()
      } else {
        width++;
        let temp = width + '%';
        $(elem).css('width', temp)
        $(elem).html(width * 1 + '%');
      }
    }
  }

  $('.submit').click(function() {
    $('.primeOrNot').css('display', 'none');
    move();
  });

  function showOutput () {
    $('#myBar').css('display', 'none');
    $('.primeOrNot').css('display', 'block');
    if (isPrime($('.textInput').html())){
        $('.primeOrNot').html('It Is Prime!');
    }
    else {
      $('.primeOrNot').html('It Is Not Prime!');
    }
  }



})
