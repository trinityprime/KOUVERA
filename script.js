const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("open");
});

// clock on top of dashboard
function updateClock() {
  const now = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Singapore",
  };

  const parts = new Intl.DateTimeFormat("en-GB", options).formatToParts(now);

  document.getElementById(
    "clock"
  ).textContent = `${parts[0].value}:${parts[2].value} SST`;
}

setInterval(updateClock, 1000);
updateClock();

// patch notes here!!
const patches = [
  {
    version: "v1.1.1",
    date: "29-08-25",
    notes: ["added mobile responsivess"],
  },
  {
    version: "v1.1",
    date: "29-08-25",
    notes: ["added credits page"],
  },
  {
    version: "v1.0",
    date: "28-08-25",
    notes: ["inital release"],
  },
];

const list = document.getElementById("patch-notes");

patches.forEach((patch) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${patch.version} - ${
    patch.date
  }:</strong> ${patch.notes.join(", ")}`;
  list.appendChild(li);
});
