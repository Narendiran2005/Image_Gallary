/* body = document.querySelector("body"),
    lightBox = document.querySelector(".lightBox"),
    img = document.querySelectorAll(".gImg"),
    showImg = lightBox.querySelector(".showImg img"),
    close = lightBox .querySelector(".close");

   for (let image of img) {
     image.addEventListener("click", ()=>{
       showImg.src = image.src;
       lightBox.style.display = "block";
       body.style.overflow = "hidden";
       close.onclick = ()=>{
         lightBox.style.display = "none";
         body.style.overflow = "visible";
       };
     });
   }
*/

let gallaryImages = document.querySelectorAll(".gImg");
let getLatestopenedImg;
let windowWidth = window.innerWidth;


if(gallaryImages) {

  gallaryImages.forEach(function(images, index) {

    // body...
    images.onclick = function(){
      
      
      let getFullImgUrl  = images.src;
      let getImgUrlPos = getFullImgUrl.split("/images/")
         
      let setNewImgUrl = getImgUrlPos[1].replace();  


      getLatestopenedImg = index + 1;

      let container = document.body;
      let newImgWindow = document.createElement("div");
     
      newImgWindow.setAttribute("class","img-window");
      newImgWindow.setAttribute("onclick","closeImg()");
      container.appendChild(newImgWindow);


      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src","./images/" + setNewImgUrl);
      newImg.setAttribute("id","current-image");


      newImg.onload = function(){
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;



      let newNextBtn = document.createElement("a");
      let btnNextText = document.createTextNode("Next");
      newNextBtn.appendChild(btnNextText);
      container.appendChild(newNextBtn);
      newNextBtn.setAttribute("class","img-btn-next");
      newNextBtn.setAttribute("onclick","changeImg(1)");
      newNextBtn.style.cssText = "right: "+ calcImgToEdge + "px;" ;

      let newPrevBtn = document.createElement("a");
      let btnPrevText = document.createTextNode("Prev");
      newPrevBtn.appendChild(btnPrevText);
      container.appendChild(newPrevBtn);
      newPrevBtn.setAttribute("class","img-btn-prev");
      newPrevBtn.setAttribute("onclick","changeImg(0)");
      newPrevBtn.style.cssText = "left: "+ calcImgToEdge + "px;" ;
      
      }

     





        

    }
  });
}


function closeImg() {
  // body...

  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();


}
function changeImg(changeDir){

  document.querySelector("#current-image").remove();

  let getImgWindow = document.querySelector(".img-window");
  let newImg =document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;
  if(changeDir === 1) {

    calcNewImg = getLatestopenedImg + 1;
    if(calcNewImg > gallaryImages.length)  {
      calcNewImg = 1
    }
  }
  else if(changeDir  === 0) {
    calcNewImg  = getLatestopenedImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = gallaryImages.length;
    }
  }

  newImg.setAttribute("src", "./images/IMG-" + calcNewImg + ".jpg" );
  newImg.setAttribute("id", "current-image");

  getLatestopenedImg = calcNewImg;

  newImg.onload = function() {
    let imgWidth = this.width;
    let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

    let nextbtn = document.querySelector(".img-btn-next");
    nextbtn.style.cssText = "right: "+ calcImgToEdge + "px;" ;

    let prevbtn = document.querySelector(".img-btn-prev");
    prevbtn.style.cssText = "left: "+ calcImgToEdge + "px;" ;

  }

}

