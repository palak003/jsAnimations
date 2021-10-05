let object1Size = {
    width: 20,
    height: 20
  };
  let position = {
    x: 10,
    y: 10
  };

  let object1 = document.getElementById("object1");
  let object2=document.getElementById("object2");
  let object3=document.getElementById("object3");

  function updateYPosition(distance) {
    position.y = position.y + distance;
    if (position.y < 0) {
      position.y = 699;
    } else if (position.y > 699) {
      position.y = 0;
    }
  }


  function updateXPosition(distance) {
    position.x = position.x + distance;
    if (position.x < 0) {
      position.x = 1399;
    } else if (position.x > 1399) {
      position.x = 0;
    }
  }

  
  function refreshPosition() {
    let x = position.x - (object1Size.width/2);
    let y = position.y - (object1Size.height/2);
    let transform = "translate(" + x + " " + y + ")";
  
    object1.setAttribute("transform", transform);
  }


  window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return;
    }
    if (event.code === "ArrowDown"){
        updateYPosition(10);
    } else if (event.code === "ArrowUp"){
        updateYPosition(-10);
    } else if (event.code === "ArrowLeft"){
        updateXPosition(-10);
    } else if (event.code === "ArrowRight"){
        updateXPosition(10);
    }
    refreshPosition();
    event.preventDefault();
  }, true);
  

  //change 3 images (tapu,babita,jethalal)
  
  //check collision and give an alert of game over
  //random motion of jethalal
 