// Select the navigation toggle button and all navigation links
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Add event listener to the navigation toggle button to toggle the 'nav-open' class on the body
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Loop through each navigation link and add event listener to close the navigation when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// Select the GitHub button
const gitButton = document.getElementById("git-button");

// Add event listener to the GitHub button to display an alert and change its background color to red when clicked
gitButton.addEventListener('click', function(){
    alert("Off to GitHub!"); // Display an alert message
    gitButton.style.backgroundColor = "red"; // Change the background color of the button to red
});

// Function to open the modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

// Get the modal
const openModalButton = document.getElementById("openModal");
const modal = document.getElementById("myModal");
const closeModalButton = document.getElementById("closeModal");

// Open modal
openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close modal
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Another modal opening and closing setup


const openModals = document.getElementById("openModal");
const modals = document.getElementById("myModal");
const closeModals = document.getElementById("closeModal");

// Open modal
openModals.addEventListener("click", () => {
    modals.style.display = "block";
});

// Close modal
closeModals.addEventListener("click", () => {
    modals.style.display = "none";
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
    if (event.target === modals) {
        modals.style.display = "none";
    }
});

