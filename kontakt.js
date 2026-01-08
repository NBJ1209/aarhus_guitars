/*
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
*/

/*
function toggleForm() {
    const popup = document.getElementById('myForm');
    if (popup.style.display === "block") {
        popup.style.display = "none"; // hide if visible
    } else {
        popup.style.display = "block"; // show if hidden
    }
}
*/

const button = document.getElementById('show-popup');
const popupForm = document.getElementById('myForm');
const contactPopup = document.querySelector('.contact-popup');

function toggleForm() {
    if (popupForm.style.display === "block") {
        popupForm.style.display = "none";
        contactPopup.classList.remove('form-open'); // re-enable tooltip
    } else {
        popupForm.style.display = "block";
        contactPopup.classList.add('form-open'); // hide tooltip
    }
}

// Attach toggle to button
button.addEventListener('click', toggleForm);