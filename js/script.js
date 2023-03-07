let navbar = document.querySelector(".navbar");
let img =document.getElementById("#img")


window.onscroll = function(){
if (scrollY > 190) {
  navbar.classList.add('background-navbar')

} 
else{
navbar.classList.remove("background-navbar")
}
}


var typed = new Typed(".typing-1",{
  strings: [
      "YouTuber", "Developer",
      "Designer", "Freelancer"
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
var typed = new Typed(".typing-2",{
  strings: [
      "Developer", "YouTuber"
      ,"Designer","Developer", "Freelancer"
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


