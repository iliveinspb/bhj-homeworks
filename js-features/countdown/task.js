let time = Number(document.getElementById("timer").textContent);

function formatSecondsToHHMMSS(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

document.getElementById("timer").textContent = formatSecondsToHHMMSS(time);

const intervalId = setInterval(function () {
  time--;
  document.getElementById("timer").textContent = formatSecondsToHHMMSS(time);
  if (time === 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(intervalId);
  }
}, 1000);
