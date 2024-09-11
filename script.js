// Select the <body> element and store it in a variable for easy access
const body = document.body

// Select all elements with the class "slide" and store them in a NodeList (like an array)
const slides = document.querySelectorAll('.slide')

// Get the left and right buttons using their respective IDs
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// Initialize a variable to keep track of the currently active slide
let activeSlide = 0

// Add an event listener to the right button to handle clicks
rightBtn.addEventListener('click', () => {
  // Increment the active slide index when the right button is clicked
  activeSlide++

  // If the active slide exceeds the total number of slides, reset to the first slide (circular navigation)
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  // Update the body's background image to match the active slide
  setBgToBody()

  // Update the active slide class
  setActiveSlide()
})

// Add an event listener to the left button to handle clicks
leftBtn.addEventListener('click', () => {
  // Decrement the active slide index when the left button is clicked
  activeSlide--

  // If the active slide goes below zero, set it to the last slide (circular navigation)
  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  // Update the body's background image to match the active slide
  setBgToBody()

  // Update the active slide class
  setActiveSlide()
})

// Initially set the body's background image to the first slide's background image
setBgToBody()

// Function to update the body's background image based on the active slide
function setBgToBody() {
  // Set the body's background image to the active slide's background image
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

// Function to update which slide is marked as "active"
function setActiveSlide() {
  // Remove the "active" class from all slides
  slides.forEach((slide) => slide.classList.remove('active'))

  // Add the "active" class to the current active slide
  slides[activeSlide].classList.add('active')
}
