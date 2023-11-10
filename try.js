// TypeScript
var typing = new Typed(".text", {
    strings: ["", "photo.", "video."],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true
  });
  
  // GSAP
  gsap.registerPlugin(ScrollTrigger);
  const introsplitTypes = document.querySelectorAll(".left-part h1");
  introsplitTypes.forEach((char, i) => {
    const i_text = new SplitType(char);
    gsap.to(i_text.chars, {
      y: 0,
      stagger: 0.08, // text splitting transition
      duration: 0.3 // full text duration
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const section2 = document.getElementById("section2");
  
    scrollButton.addEventListener("click", function() {
      const section2 = document.getElementById("section2");
      section2.scrollIntoView({ behavior: "smooth" });
    });
  });
  