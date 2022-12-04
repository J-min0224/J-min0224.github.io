const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

const img = imgs[Math.floor((Math.random()) * imgs.length)];

const bgImg = document.createElement("img");
bgImg.src = `background/${img}`;

document.body.prepend(bgImg);