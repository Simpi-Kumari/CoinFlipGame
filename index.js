
 
  document.querySelector(".image").addEventListener("click", function () {
    var randomNumber = Math.floor(Math.random() * 2) + 1;
    if (randomNumber === 1) {
      document.querySelector(".image").setAttribute("src", "images.jpg");
      document.querySelector(".result").innerHTML = "Its a Head";
    } 
    else  if(randomNumber===2)
    {
      document.querySelector(".image").setAttribute("src", "tail.jpg");
      document.querySelector(".result").innerHTML = "Its a Tail";
    }
  });


  

