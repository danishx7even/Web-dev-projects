

let slider = document.querySelector(".team-flex");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


prevBtn.addEventListener("click", () => {
  slider.style.transform = `translateX(20px)`;


  prevBtn.classList.add("active");
  prevBtn.classList.remove("in-active");


  nextBtn.classList.remove("active");
  nextBtn.classList.add("in-active");
});

nextBtn.addEventListener("click", () => {
  slider.style.transform = `translateX(-360px)`;

 
  nextBtn.classList.add("active");
  nextBtn.classList.remove("in-active");


  prevBtn.classList.remove("active");
  prevBtn.classList.add("in-active");
});



// Review container

  const imgContainers = document.querySelectorAll(".img-container")
  const reviewSlider = document.querySelector(".review-flex")
  const translateValue = 720;

  imgContainers.forEach(container => {
    
    container.addEventListener("click", ()=> {

      imgContainers.forEach(block => {

        block.classList.remove("active-img-container")
      })

      container.classList.add("active-img-container")

      const containerClasses = container.classList

      if (containerClasses.contains("review-1")) {
        reviewSlider.style.transform = `translateX(${0*translateValue}px)`
      } else if (containerClasses.contains("review-2")) {
        reviewSlider.style.transform = `translateX(-${1*translateValue}px)`
      } else {
        reviewSlider.style.transform = `translateX(-${2*translateValue}px)`
      }
    })
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
