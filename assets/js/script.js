/*--Navbar starts-*/
window.addEventListener("scroll", function () {
  let navbar = this.document.querySelector(".navbar");
  if (this.window.scrollY > 700) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
/*--Navbar ends-*/
/*---slides starts--*/
var splide = new Splide(".splide");
var bar = splide.root.querySelector(".my-carousel-progress-bar");

// Updates the bar width whenever the carousel moves:
splide.on("mounted move", function () {
  var end = splide.Components.Controller.getEnd() + 1;
  var rate = Math.min((splide.index + 1) / end, 1);
  //   bar.style.width = String( 100 * rate ) + '%';
});

splide.mount();

/*---slides starts--*/
/*---scroll starts--*/
ScrollReveal({
  distance: "30px",
  duration: 2500,
  delay: 500,
});
ScrollReveal().reveal(".s1", {
  delay: 200,
  origin: "top",
});
ScrollReveal().reveal(".s1_con", {
  delay: 200,
  origin: "bottom",
});
ScrollReveal().reveal(".abt_h", {
  delay: 200,
  origin: "right",
});
ScrollReveal().reveal(".abt_content", {
  delay: 200,
  origin: "bottom",
});
ScrollReveal().reveal(".abt_img", {
  delay: 200,
  origin: "top",
});
ScrollReveal().reveal(".seekers", {
  delay: 200,
  origin: "bottom",
});
ScrollReveal().reveal(".ani", {
  delay: 200,
  origin: "top",
});
ScrollReveal().reveal(".mak_ser", {
  delay: 200,
  origin: "top",
});
ScrollReveal().reveal(".ani2", {
  delay: 200,
  origin: "bottom",
});
ScrollReveal().reveal(".ani3", {
  delay: 200,
  origin: "top",
});
ScrollReveal().reveal(".osp", {
  delay: 200,
  origin: "top",
});
ScrollReveal().reveal(".ani4", {
  delay: 200,
  origin: "bottom",
});
ScrollReveal().reveal(".our_mak", {
  delay: 200,
  origin: "right",
});
ScrollReveal().reveal(".our_osp", {
  delay: 200,
  origin: "right",
});
/*---scroll ends--*/
