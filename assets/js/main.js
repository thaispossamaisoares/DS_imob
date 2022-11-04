document.addEventListener('DOMContentLoaded', () => {
  "use strict";

 
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation 
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

  /*

  const exampleModal = document.getElementById('exampleModal')
  exampleModal.addEventListener('show.bs.modal', event => {
  
      // Button that triggered the modal
  
    const button = event.relatedTarget
  
    // Extract info from data-bs-* attributes
  
    const recipient = button.getAttribute('data-bs-whatever')
  
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
  
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')
  
    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  
  })
  */

});