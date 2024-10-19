const jobElement = document.querySelector(".job");
const jobs = [
  jobElement.getAttribute("data-job1"),
  jobElement.getAttribute("data-job2"),
  jobElement.getAttribute("data-job3"),
  jobElement.getAttribute("data-job4"),
];

let jobIndex = 0;

function changeJob() {
  jobElement.textContent = jobs[jobIndex];
  jobIndex = (jobIndex + 1) % jobs.length;
}

setInterval(changeJob, 2000);

changeJob();

function storeFormData(event) {
  event.preventDefault(); // Prevent form submission

  // Get form field values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const course = document.getElementById("course").value;

  // Validate form inputs
  if (!fullName || !email || !age || !gender || !course) {
    alert("Please fill out all required fields.");
    return;
  }

  const studentData = {
    fullName: fullName,
    email: email,
    age: age,
    gender: gender,
    course: course,
  };

  localStorage.setItem("studentData", JSON.stringify(studentData));
  alert("Your data has been successfully stored in local storage.");

  const likeWebsite = confirm("Do you like our website?");
  if (likeWebsite) {
    alert("Thank you for your feedback!");
  } else {
    alert("We appreciate your feedback and will work on improvements.");
  }

  // Display the stored data on the page
  document.getElementById(
    "storedData"
  ).textContent = `Stored Data: ${JSON.stringify(studentData)}`;
}

window.onscroll = function () {
  const thankYouDisplayed = localStorage.getItem("thankYouDisplayed");

  if (
    !thankYouDisplayed &&
    window.innerHeight + window.scrollY >= document.body.offsetHeight
  ) {
    setTimeout(function () {
      alert("Thank you for visiting our website!");
      localStorage.setItem("thankYouDisplayed", "true"); // Set flag to prevent future alerts
    }, 1000);
  }
};

document
  .getElementById("studentForm")
  .addEventListener("submit", storeFormData);
