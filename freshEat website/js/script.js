
    const closeBtn = document.querySelector(".close-btn")
    const openBtn = document.querySelector(".open-btn")
    const sideBar = document.querySelector(".sidebar")
    
    const wrapper = document.querySelector(".wrapper")
    
    closeBtn.addEventListener("click", ()=>{

        sideBar.classList.remove("active")
        wrapper.classList.remove("overlay")
       
    })

    openBtn.addEventListener("click", ()=>{

        sideBar.classList.add("active")
       wrapper.classList.add("overlay")
        
    })



// Secondary Header code

const upperNav = document.querySelector(".upper-nav")
const header = document.querySelector(".basic-header")
const lowerNav = document.querySelector(".lower-nav")
window.addEventListener("scroll", ()=>{

    if (window.scrollY >= 400) {
        upperNav.classList.add("inactive")
        header.classList.add("secondary-header")
        lowerNav.classList.add("bg-white")

    } else {
        upperNav.classList.remove("inactive")
        header.classList.remove("secondary-header")
        lowerNav.classList.remove("bg-white")
    }
})