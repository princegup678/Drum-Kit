var n=document.querySelectorAll(".drum ").length;
for(var i=0;i<n;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",check);



function check(){

var buttonPressed=this.innerHTML;
  switch (buttonPressed) {
    case "w":
      var a=new Audio("sounds/" +"crash.mp3");
      a.play();
      break;

    case "a":
        var a=new Audio("sounds/kick-bass.mp3");
        a.play();
        break;


    case "s":
          var a=new Audio("sounds/snare.mp3");
          a.play();
          break;
    case "d":
            var a=new Audio("sounds/tom-1.mp3");
            a.play();
            break;

    case "j":
              var a=new Audio("sounds/tom-2.mp3");
              a.play();
              break;

    case "k":
                var a=new Audio("sounds/tom-3.mp3");
                a.play();
                break;

    case "l":
                  var a=new Audio("sounds/tom-4.mp3");
                  a.play();
                  break;


    default: console.log();

  }

}



document.addEventListener('keypress', function(event){
keysound(event.key);


});










function keysound(buttonPressed)
{
  switch (buttonPressed) {
    case "w":
      var a=new Audio("sounds/" +"crash.mp3");
      a.play();
      break;

    case "a":
        var a=new Audio("sounds/kick-bass.mp3");
        a.play();
        break;


    case "s":
          var a=new Audio("sounds/snare.mp3");
          a.play();
          break;
    case "d":
            var a=new Audio("sounds/tom-1.mp3");
            a.play();
            break;

    case "j":
              var a=new Audio("sounds/tom-2.mp3");
              a.play();
              break;

    case "k":
                var a=new Audio("sounds/tom-3.mp3");
                a.play();
                break;

    case "l":
                  var a=new Audio("sounds/tom-4.mp3");
                  a.play();
                  break;


    default: console.log();

}
}
