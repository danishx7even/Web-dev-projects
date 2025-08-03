let slider = document.querySelector(".team-flex");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const sliderWrapper = document.querySelector(".team-slider");
const cards = document.querySelectorAll(".team-card");

let currentSlide = 0;

function calculateSliderMetrics() {
  const cardWidth = cards[0].offsetWidth;
  const gap = parseInt(getComputedStyle(slider).gap) || 0;
  const sliderWidth = sliderWrapper.offsetWidth;
  
  // Calculate how many cards can fit in the visible area
  const visibleCards = Math.floor(sliderWidth / (cardWidth + gap));
  const hiddenCards = Math.max(0, cards.length - visibleCards);
  
  // Calculate slide distance - always slide by 1 card width + gap
  const slideDistance = cardWidth + gap;
  
  // Calculate maximum slides possible - more precise calculation
  let maxSlides = 0;
  if (hiddenCards > 0) {
    // Maximum slides = number of positions where we can start showing cards
    // without going beyond the total number of cards
    maxSlides = Math.min(hiddenCards, cards.length - visibleCards);
  }
  
  return {
    cardWidth,
    gap,
    visibleCards,
    hiddenCards,
    slideDistance,
    maxSlides,
    sliderWidth
  };
}

function updateSlider() {
  const metrics = calculateSliderMetrics();
  
  // Calculate the transform value
  const translateX = metrics.slideDistance * currentSlide;
  slider.style.transform = `translateX(-${translateX}px)`;
  
  // Update button states
  updateButtonStates(metrics.maxSlides);
  
  console.log(`Visible: ${metrics.visibleCards}, Hidden: ${metrics.hiddenCards}, Current Slide: ${currentSlide}/${metrics.maxSlides}`);
}

function updateButtonStates(maxSlides) {
  // First slide: only prev button is active
  if (currentSlide === 0) {
    prevBtn.classList.add("active");
    prevBtn.classList.remove("in-active");
    prevBtn.disabled = false;
    
    nextBtn.classList.remove("active");
    nextBtn.classList.add("in-active");
    nextBtn.disabled = false;
  }
  // Last slide: only next button is active
  else if (currentSlide >= maxSlides) {
    nextBtn.classList.add("active");
    nextBtn.classList.remove("in-active");
    nextBtn.disabled = false;
    
    prevBtn.classList.remove("active");
    prevBtn.classList.add("in-active");
    prevBtn.disabled = false;
  }
  // Middle slides: both buttons inactive
  else {
    prevBtn.classList.remove("active");
    prevBtn.classList.add("in-active");
    prevBtn.disabled = false;
    
    nextBtn.classList.remove("active");
    nextBtn.classList.add("in-active");
    nextBtn.disabled = false;
  }
}

// Event listeners
prevBtn.addEventListener("click", () => {
  const metrics = calculateSliderMetrics();
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

nextBtn.addEventListener("click", () => {
  const metrics = calculateSliderMetrics();
  // Check if there are actually cards to slide to
  if (currentSlide < metrics.maxSlides && metrics.hiddenCards > 0) {
    // Additional check: ensure we don't slide beyond the available cards
    const nextVisibleStartIndex = currentSlide + 1;
    const wouldShowCardIndex = nextVisibleStartIndex + metrics.visibleCards - 1;
    
    if (wouldShowCardIndex < cards.length) {
      currentSlide++;
      updateSlider();
    }
  }
});

// Handle window resize
window.addEventListener("resize", () => {
  currentSlide = 0; // Reset to first slide on resize
  updateSlider();
});

// Initialize slider
updateSlider();






// Review container

  const reviewFlex = document.querySelector(".review-flex");
  const imgContainers = document.querySelectorAll(".img-container");
  const reviews = document.querySelectorAll(".review");

  imgContainers.forEach((img, index) => {
    img.addEventListener("click", () => {
    
      
      imgContainers.forEach(c => c.classList.remove("active-img-container"));
      img.classList.add("active-img-container");

      
      const reviewWidth = reviews[0].offsetWidth;
      const gap = parseInt(getComputedStyle(reviewFlex).gap) || 0;

      const translateX = index * (reviewWidth + gap);
      reviewFlex.style.transform = `translateX(-${translateX}px)`;
    });
  });




  // accordian
    document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".accordion-item");

    items.forEach((item) => {
      const content = item.querySelector(".accordion-content");
      const paragraph = content.querySelector("p");

      content.addEventListener("click", () => {
        const isActive = item.classList.contains("active");


        items.forEach((el) => {
          if (el !== item) {
            el.classList.remove("active");
            const p = el.querySelector("p");
            p.style.maxHeight = null;
            p.style.opacity = 0;
          }
        });

        if (isActive) {
          item.classList.remove("active");
          paragraph.style.maxHeight = null;
          paragraph.style.opacity = 0;
        } else {
          item.classList.add("active");
          paragraph.style.maxHeight = paragraph.scrollHeight + "px";
          paragraph.style.opacity = 1;
        }
      });
    });
  });


const transparentHeader = document.querySelector(".transparent-header");
const filledHeader = document.querySelector(".filled-header");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {

    filledHeader.classList.remove("active-header");
    transparentHeader.classList.remove("inactive-header");
  } else {
    
    filledHeader.classList.add("active-header");
    transparentHeader.classList.add("inactive-header");
  }
});



const hamburgerBtn = document.querySelector(".hamburger-btn")
const navBarToggle = document.querySelector(".navbar-toggle")
const navBar = document.getElementById("navbar-menu")


hamburgerBtn.addEventListener("click", ()=> {

  navBar.classList.add("navbar-visible")
})

navBarToggle.addEventListener("click", ()=>{
  
  navBar.classList.remove("navbar-visible")
})


console.log(document.querySelector(".review").offSetWidth);
