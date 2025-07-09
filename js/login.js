import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { logAction } from "./log.js";

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        logAction("Login successful", email);
        window.location.href = "career.htm";
      })
      .catch((error) => {
        logAction("Login failed", error.message);
        alert("Login failed: " + error.message);
      });
  });
});
