// $(document).ready(function () {
//   $("#contact-form").validate({
//     rules: {
//       name: {
//         required: true,
//         minlength: 2,
//       },
//       email: {
//         required: true,
//         email: true,
//       },
//       message: {
//         required: true,
//         minlength: 10,
//       },
//     },
//     messages: {
//       name: {
//         required: "Please enter your name",
//         minlength: "Name must be at least 2 characters long",
//       },
//       email: {
//         required: "Please enter your email",
//         email: "Please enter a valid email",
//       },
//       message: {
//         required: "Please enter a message",
//         minlength: "Message must be at least 10 characters long",
//       },
//     },
//     submitHandler: function (form) {
//       // Add your form submission logic here
//       alert("Form submitted successfully!");
//     },
//   });
// });

//##############################################################//

// emailjs.init("3pmEC93BP3i570BR4");

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     var form = event.target;
//     var data = new FormData(form);
//     emailjs
//       .sendForm(
//         {
//           PublicKey: "3pmEC93BP3i570BR4",
//           PrivateKey: "BeHit_qXxdIB_eMlEAH-X",
//         },
//         "contact_form",
//         data
//       )
//       .then(function (response) {
//         console.log("Message sent successfully!", response);
//       })
//       .catch(function (error) {
//         console.error("Error sending message:", error);
//       });
//   });
// ========================================
// how to add media queries in JS
// ========================================

function myFunction(widthSize) {
  if (widthSize.matches) {
    // If media query matches
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

const widthSize = window.matchMedia("(max-width: 780px)");
// Call listener function at run time
myFunction(widthSize);
// Attach listener function on state changes
widthSize.addListener(myFunction);
//################### menu  humburger  #########################//
function toggleNavbar() {
  const navbar = document.querySelector(".navbar-nav");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  navbar.classList.toggle("active");
  menuIcon.style.display = menuIcon.style.display === "none" ? "block" : "none";
  closeIcon.style.display =
    closeIcon.style.display === "none" ? "block" : "none";
}
//###################################### GRID SLIDER ####################//
// You need to transpile this code
import Splide from "@splidejs/splide";
import { Grid } from "@splidejs/splide-extension-grid";

const splide = new Splide(".splide", {
  type: "loop",
  height: "14rem",
  perPage: 2,
  perMove: 1,
  grid: {
    // You can define rows/cols instead of dimensions.
    dimensions: [
      [1, 1],
      [2, 2],
      [2, 1],
      [1, 2],
      [2, 2],
      [3, 2],
    ],
    gap: {
      row: "6px",
      col: "6px",
    },
  },
  breakpoints: {
    640: {
      height: "8rem",
      perPage: 1,
      grid: {
        dimensions: [
          [2, 2],
          [1, 1],
          [2, 1],
          [1, 2],
          [2, 2],
        ],
      },
    },
  },
});

splide.mount({ Grid });
