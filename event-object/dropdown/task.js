const buttons = Array.from(document.querySelectorAll(".dropdown"));

buttons.forEach((button) => {
  const dropdownValue = button.querySelector(".dropdown__value");
  const dropdownList = button.querySelector(".dropdown__list");
  const dropdownItems = Array.from(button.querySelectorAll(".dropdown__link"));

  dropdownValue.addEventListener("click", function () {
    dropdownList.classList.toggle("dropdown__list_active");
  });

  dropdownItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      dropdownValue.textContent = item.textContent;
      dropdownList.classList.remove("dropdown__list_active");
    });
  });
});
w