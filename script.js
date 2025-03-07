/* script.js */

document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".fade-in", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
    gsap.from(".slide-in", { opacity: 0, x: -50, duration: 1, stagger: 0.3 });

    let i = 0;
    let text = "I Build Websites & Funnels That Convert";
    let speed = 100;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
});
