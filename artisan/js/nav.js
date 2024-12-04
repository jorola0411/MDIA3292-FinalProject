
const tl = gsap.timeline({ reversed: true, paused: true })
.to(".bottom-nav", { top: "-10%", duration: 0.4, ease: "power2.inOut" })
.to(".primary-nav", { height: "auto", duration: 0.4, ease: "power3.inOut" }, "-=0.4")
.from(".nav-links", { autoAlpha: 0, duration: 0.2 }, "-=0.2")

function openNav() {
const navBtn = document.getElementById("menu-toggle-btn");
navBtn.onclick = function (e) {
  navBtn.classList.toggle("active");
  tl.reversed() ? tl.play() : tl.reverse();
};
}

openNav();

