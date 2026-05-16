function filterServices(category, btn) {
  const categories = document.querySelectorAll('.price-category');
  const buttons = document.querySelectorAll('.filter-btn');

  // Remove active state
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show selected category
  categories.forEach(cat => {
    if (cat.classList.contains(category)) {
      cat.classList.add('show');
    } else {
      cat.classList.remove('show');
    }
  });
}


// ===== SCROLL BUTTON =====
function scrollGallery(direction) {
  const track = document.getElementById("galleryTrack");

  const card = track.querySelector(".media-card");
  const gap = 20;

  const scrollAmount = card.offsetWidth + gap;

  track.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

// ===== VIDEO PLAY =====
const videos = document.querySelectorAll(".media-card video");

videos.forEach(video => {

  // Desktop hover
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });

  // Mobile tap
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});