var first =  Math.floor((Math.random()*6)) +1;
var second =  Math.floor((Math.random()*6)) +1;

dice(first,'player1');
dice(second,'player2');

if(first>second){
  console.log('first');
  var x = document.querySelector('.player1 h3');
  x.innerHTML = 'Player1 Won!! 😎😎😎';
  x.classList.add('boom');



}
else if (second>first){
  console.log('second');
  var x = document.querySelector('.player2 h3');
  x.innerHTML = 'Player2 Won!! 😎😎😎';
  x.classList.add('boom');

}

else{
  console.log('Tie');
  var x= document.querySelector('h1');
  x.innerHTML="It's a Tie !!!!"
}




function dice(number,p){

  if(number===1){
    var x = document.querySelector('.'+ p+ ' div :nth-child(5)');
    x.classList.add('mark')
  }

  else if(number===2){
    var x = document.querySelector('.'+ p+ ' div :nth-child(4)');
    var y = document.querySelector('.'+ p+ ' div :nth-child(6)');
    x.classList.add('mark');
    y.classList.add('mark');
  }


    else if(number===3){
      var x = document.querySelector('.'+ p+ ' div :nth-child(4)');
      var y = document.querySelector('.'+ p+ ' div :nth-child(6)');
      var z = document.querySelector('.'+ p+ ' div :nth-child(5)');
      x.classList.add('mark');
      y.classList.add('mark');
      z.classList.add('mark');
    }

      else if(number===4){
        var x = document.querySelector('.'+ p+ ' div :nth-child(1)');
        var y = document.querySelector('.'+ p+ ' div :nth-child(3)');
        var z = document.querySelector('.'+ p+ ' div :nth-child(7)');
        var w = document.querySelector('.'+ p+ ' div :nth-child(9)');
        x.classList.add('mark');
        y.classList.add('mark');
        z.classList.add('mark');
        w.classList.add('mark');

      }
      else if(number===5){
        var x = document.querySelector('.'+ p+ ' div :nth-child(1)');
        var y = document.querySelector('.'+ p+ ' div :nth-child(3)');
        var z = document.querySelector('.'+ p+ ' div :nth-child(7)');
        var w = document.querySelector('.'+ p+ ' div :nth-child(9)');
        var v = document.querySelector('.'+ p+ ' div :nth-child(5)');

        x.classList.add('mark');
        y.classList.add('mark');
        z.classList.add('mark');
        w.classList.add('mark');
        v.classList.add('mark');


      }
      else {
        var x = document.querySelector('.'+ p+ ' div :nth-child(1)');
        var y = document.querySelector('.'+ p+ ' div :nth-child(3)');
        var u = document.querySelector('.'+ p+ ' div :nth-child(2)');
        var z = document.querySelector('.'+ p+ ' div :nth-child(7)');
        var w = document.querySelector('.'+ p+ ' div :nth-child(9)');
        var v = document.querySelector('.'+ p+ ' div :nth-child(8)');

        u.classList.add('mark');
        x.classList.add('mark');
        y.classList.add('mark');
        z.classList.add('mark');
        w.classList.add('mark');
        v.classList.add('mark');
      }
}
