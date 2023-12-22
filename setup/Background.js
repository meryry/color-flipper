const images = ["https://tse2.mm.bing.net/th?id=OIP.aZh8yFTuuHzUZEEiqRL7sQHaFF&pid=Api&P=0&h=180", "https://cdn.wallpapersafari.com/50/68/YL4kIh.jpg", "https://tse3.mm.bing.net/th?id=OIP.5JzgDFO3RCjAxuRQbkhLZgHaFi&pid=Api&P=0&h=180","https://tse4.mm.bing.net/th?id=OIP.ZDa4AjSs1jUDBSFArKT-qwHaEo&pid=Api&P=0&h=180 "]
//Changed the const and values into image urls.

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const bgImage = document.getElementById("bg-image");
// bg-image a new id I added

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  bgImage.src = images[randomNumber];
  color.textContent = `Image ${randomNumber + 1}`;
});

function getRandomNumber() {
  return Math.floor(Math.random() * images.length);
}

// document.getElementById("testing").src = "https://i.imgur.com/XhESTPj.jpg";