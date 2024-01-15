const stars = document.getElementsByClassName("fa-star");
const starContainer = document.getElementById("star-container");

starContainer.addEventListener("mouseover", function(event){
  if(event.target.classList.contains("fa-star")){
    let previousSibling = event.target.previousElementSibling;
    event.target.style.color = "#FFC000";
    while(previousSibling != null){
      previousSibling.style.color = "#FFC000";
      previousSibling = previousSibling.previousElementSibling;
    }
   
  }
  
})

function mouseOutHandler(event){
    for(let star of stars){
        star.style.color = "#ddd";
        console.log(star);
    }
  
}

starContainer.addEventListener("mouseout", mouseOutHandler);



starContainer.addEventListener("click",function(event){
  let previousSibling = event.target.previousElementSibling;
  let nextSibling = event.target.nextElementSibling;

  if(event.target.classList.contains("fa-star")){
    this.removeEventListener("mouseout", mouseOutHandler);
    document.getElementById("submit").style.color = "white";
    document.getElementById("submit").style.backgroundColor = "#0096FF";
    event.target.style.color = "#FFC000";
    while(previousSibling != null || nextSibling != null){
      if(previousSibling != null){
        previousSibling.style.color = "#FFC000";
        previousSibling = previousSibling.previousElementSibling;

      }
      if(nextSibling != null){
        nextSibling.style.color = "#ddd";
        nextSibling = nextSibling.nextElementSibling;
      }
     
    }


  }

})
