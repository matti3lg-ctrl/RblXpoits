/* Lynx — interactions */
(function () {
	"use strict";

	/* Sticky nav shadow */
	var nav = document.getElementById("nav");
	function onScroll() {
		if (!nav) return;
		nav.classList.toggle("scrolled", window.scrollY > 10);
	}
	window.addEventListener("scroll", onScroll, { passive: true });
	onScroll();

	/* Reveal on scroll */
	var reveals = document.querySelectorAll(".reveal");
	if ("IntersectionObserver" in window) {
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					io.unobserve(entry.target);
				}
			});
		}, { threshold: 0.12 });
		reveals.forEach(function (el) { io.observe(el); });
	} else {
		reveals.forEach(function (el) { el.classList.add("visible"); });
	}
})();