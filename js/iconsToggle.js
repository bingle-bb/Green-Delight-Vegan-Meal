function initDropdowns() {
  const cartContainer = document.getElementById("cartContainer");
  const cartDropdown = cartContainer.querySelector(".dropdown-box");

  const userContainer = document.getElementById("userContainer");
  const userDropdown = document.getElementById("userBox");

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  loginForm.style.display = "block";
  signupForm.style.display = "none";

  userDropdown.addEventListener("click", (e) => e.stopPropagation());
  cartDropdown.addEventListener("click", (e) => e.stopPropagation());

  function toggleForms(e) {
    e.stopPropagation();
    if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
    } else {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
    }
  }

  cartContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    closeAllDropdownsExcept(cartDropdown);
    cartDropdown.classList.toggle("active");
  });

  userContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    closeAllDropdownsExcept(userDropdown);
    userDropdown.classList.toggle("active");
  });

  document.addEventListener("click", () => {
    closeAllDropdownsExcept(null);
  });

  function closeAllDropdownsExcept(exception) {
    if (exception !== cartDropdown) cartDropdown.classList.remove("active");
    if (exception !== userDropdown) userDropdown.classList.remove("active");
  }

  document.getElementById("loginBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm
      .querySelector("input[placeholder='Username']")
      .value.trim();
    const password = loginForm.querySelector(
      "input[placeholder='Password']"
    ).value;
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    console.log("Login Info:", { username, password });
    alert(`Logged in as: ${username}`);
    userDropdown.classList.remove("active");
  });

  document.getElementById("signupBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const username = signupForm
      .querySelector("input[placeholder='Username']")
      .value.trim();
    const email = signupForm
      .querySelector("input[placeholder='Email']")
      .value.trim();
    const password = signupForm.querySelector(
      "input[placeholder='Password']"
    ).value;

    if (!username || !email || !password) {
      alert("Please fill all signup fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Signup Info:", { username, email, password });
    alert(`Signed up as: ${username}`);
    toggleForms(new Event("click"));
  });

  // Make toggleForms accessible if needed
  window.toggleForms = toggleForms;
}
