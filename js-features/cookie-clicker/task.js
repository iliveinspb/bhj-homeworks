let counter = Number(document.getElementById("clicker__counter").textContent);

const cookie = document.getElementById("cookie");

cookie.onclick = function () {
  counter++;
  document.getElementById("clicker__counter").textContent = counter;

  if (cookie.width === 200) {
    cookie.width = Math.floor( 180 + Math.random() * 19 ); 
  } else {
    cookie.width = 200;
  }
};
