//  NAVBAR 
const toggleBtn = document.getElementById("togglebtn");
const navMenu = document.getElementById("navMenu");

toggleBtn.onclick = () => {
  navMenu.classList.toggle("active");
  toggleBtn.classList.toggle("open");
};


//  FORM 
const form = document.getElementById("form");
const successMsg = document.getElementById("success");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  document.querySelectorAll(".error").forEach(el => el.innerText = "");
  successMsg.innerText = "";

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
// email regex
  const emailValid = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

  let isValid = true;

  if (name.length < 3) {
    showError(form.name, "Name must be at least 3 characters");
    isValid = false;
  }

  if (!emailValid.test(email)) {
    showError(form.email, "Enter a valid email");
    isValid = false;
  }

  if (message.length < 10) {
    showError(form.message, "Message must be at least 10 characters");
    isValid = false;
  }

  if (!isValid) return;

// SUCCESS
  successMsg.innerText = "Message sent successfully!";
  successMsg.style.color = "green";

  form.reset();
});

// ERROR FUNCTION
function showError(input, msg) {
  const errorEl = input.nextElementSibling;
  errorEl.innerText = msg;
}