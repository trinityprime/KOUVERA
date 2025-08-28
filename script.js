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
