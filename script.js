
// creating DOM varaible object

let imgZoom = document.querySelector(".zoom-image");
let closeBtn = document.querySelector(".close-btn");
let clickedImg = document.querySelectorAll(".image");

// created new image element
let newImg = document.createElement("img");

// clickedImg contains array of 12 image elements
clickedImg.forEach((element)=>{
  console.log(element);

  element.addEventListener("click", function(){
      
    // we are assigning source of selected image to new created image element
    let newSrc = element.getElementsByTagName("img")[0].src;
    
    newImg.src = newSrc;
    console.log(newImg);

    imgZoom.appendChild(newImg);
    console.log(imgZoom);
    // toggle display property
    imgZoom.classList.toggle("show");
    closeBtn.classList.toggle("show");
  })
})

closeBtn.addEventListener("click", function(){
    imgZoom.classList.toggle("show");
    closeBtn.classList.toggle("show");
})



