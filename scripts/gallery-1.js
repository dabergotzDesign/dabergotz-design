!(function(d){
    // Variables to target our base class,  get carousel items_1, count how many carousel items_1 there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
    let itemClassName = "carousel__01";
        items_1 = d.getElementsByClassName(itemClassName),
        totalItems = items_1.length,
        slide_1 = 0,
        moving = true;
  
        //console.log(items_1);
        
  
    // To initialise the carousel we'll want to update the DOM with our own classes
    function setInitialClasses() {
  
      // Target the last, initial, and next items_1 and give them the relevant class.
      // This assumes there are three or more items_1.
      items_1[totalItems - 1].classList.add("prev");
      items_1[0].classList.add("active");
      items_1[1].classList.add("next");
    }
  
    // Set click events to navigation buttons
  
    function setEventListeners() {
      let next = d.getElementsByClassName('carousel-1__button--next')[0],
          prev = d.getElementsByClassName('carousel-1__button--prev')[0];
  
      next.addEventListener('click', moveNext);
      prev.addEventListener('click', movePrev);
    }
  
    // Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)
    function disableInteraction() {
      moving = true;
  
      setTimeout(function(){
        moving = false
      }, 500);
    }
  
    function moveCarouselTo(slide_1) {
  
      // Check if carousel is moving, if not, allow interaction
      if(!moving) {
  
        // temporarily disable interactivity
        disableInteraction();
  
        // Preemptively set variables for the current next and previous slide_1, as well as the potential next or previous slide_1.
        let newPrevious = slide_1 - 1,
            newNext = slide_1 + 1,
            oldPrevious = slide_1 - 2,
            oldNext = slide_1 + 2;
  
        // Test if carousel has more than three items_1
        if ((totalItems - 1) > 2) {
  
          // Checks if the new potential slide_1 is out of bounds and sets slide_1 numbers
          if (newPrevious <= 0) {
            oldPrevious = (totalItems - 1);
          } else if (newNext >= (totalItems - 1)){
            oldNext = 0;
          }
  
          // Check if current slide_1 is at the beginning or end and sets slide_1 numbers
          if (slide_1 === 0) {
            newPrevious = (totalItems - 1);
            oldPrevious = (totalItems - 2);
            oldNext = (slide_1 + 1);
          } else if (slide_1 === (totalItems -1)) {
            newPrevious = (slide_1 - 1);
            newNext = 0;
            oldNext = 1;
          }
  
          // Now we've worked out where we are and where we're going, by adding and removing classes, we'll be triggering the carousel's transitions.
  
          // Based on the current slide_1, reset to default classes.
          items_1[oldPrevious].className = itemClassName;
          items_1[oldNext].className = itemClassName;
  
          // Add the new classes
          items_1[newPrevious].className = itemClassName + " prev";
          items_1[slide_1].className = itemClassName + " active";
          items_1[newNext].className = itemClassName + " next";
        }
      }
    }
  
    // Next navigation handler
    function moveNext() {
  
      // Check if moving
      if (!moving) {
  
        // If it's the last slide_1, reset to 0, else +1
        if (slide_1 === (totalItems - 1)) {
          slide_1 = 0;
        } else {
          slide_1++;
        }
  
        // Move carousel to updated slide_1
        moveCarouselTo(slide_1);
      }
    }
  
    // Previous navigation handler
    function movePrev() {
  
      // Check if moving
      if (!moving) {
  
        // If it's the first slide_1, set as the last slide_1, else -1
        if (slide_1 === 0) {
          slide_1 = (totalItems - 1);
        } else {
          slide_1--;
        }
  
        // Move carousel to updated slide_1
        moveCarouselTo(slide_1);
      }
    }
  
    // Initialise carousel
    function initCarousel() {
      setInitialClasses();
      setEventListeners();
  
      // Set moving to false now that the carousel is ready
      moving = false;
    }
  
    // make it rain
    initCarousel();
  
  }(document));