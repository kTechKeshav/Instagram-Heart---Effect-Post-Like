var image = document.querySelector("img");
var heart1 = document.querySelector(".ri-heart-3-fill");
var heart2 = document.querySelector(".ri-heart-fill");
var like = document.querySelector(".ri-thumb-up-fill");
var likecount = 0;

function change(){
      setInterval(() => {
            var randomNumber = Math.floor(Math.random() * 1000);
            image.src = `https://picsum.photos/200/300?random=${randomNumber}`;
            heart2.style.color = "#000";
          }, 3000);
}

change();

image.addEventListener("dblclick", () => {
  heart1.style.opacity = "1";
  heart1.style.fontSize = "8rem";
  heart1.style.color = "red";
  heart2.style.color = "red";
  likecount = likecount + 1; 
  like.innerHTML = " "+likecount+"";

  setTimeout(() => {
    heart1.style.opacity = "0";
    heart1.style.color = "red";
  }, 1000);
});

var colorStatusFlag = 0;

heart2.addEventListener("click", () => {
  if (colorStatusFlag == 0) {
    heart2.style.color = "red";
    colorStatusFlag = 1;
  } else {
    heart2.style.color = "#000";
    colorStatusFlag = 0;
  }
  likecount = likecount + 1; 
  like.innerHTML = " "+likecount+"";
});
