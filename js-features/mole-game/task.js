let dead = 0;
let lost = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);
  hole.onclick = function () {
    if (hole.className.includes("hole_has-mole")) {
      dead++;
      document.getElementById("dead").textContent = dead;
    } else {
      lost++;
      document.getElementById("lost").textContent = lost;
    }

    if (dead === 10) {
      alert("Ура! Вы отшлёпали кротов!");
      dead = 0;
      lost = 0;
      document.getElementById("dead").textContent = 0;
      document.getElementById("lost").textContent = 0;
    }

    if (lost === 5) {
      alert("Слишком много промахов! Вы проиграли");
      dead = 0;
      lost = 0;
      document.getElementById("dead").textContent = 0;
      document.getElementById("lost").textContent = 0;
    }
  };
}
