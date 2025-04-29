// Placeholder if you want to add scroll-based or icon interactivity later
console.log("Navbar script loaded!");
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.3,
    });
  
    document.querySelectorAll("#snapdeal-support .card").forEach(card => {
      observer.observe(card);
    });
  });
  