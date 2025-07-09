import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("regForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    // Make sure an element with id="fullName" exists in your HTML
    const fullNameInput = document.getElementById("fullName");
    const name = fullNameInput.value;
    // Get reference to the cgpa input element
    const cgpaInput = document.getElementById("cgpaInput");
    const cgpa = parseFloat(cgpaInput.value);
    const collegeId = localStorage.getItem("selectedCollege");

    await addDoc(collection(db, "registrations"), {
      name,
      cgpa,
      collegeId,
      createdAt: new Date().toISOString()
    });

    console.log(`[Register] Registered for college ID: ${collegeId}`);
    window.location.href = "aptitude.htm";
  });
});
