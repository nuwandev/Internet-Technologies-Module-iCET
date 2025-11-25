const display = document.getElementById("display");
const preview = document.getElementById("preview");

resetDisplay();

function resetDisplay() {
  display.value = "0";
  preview.textContent = "0";
}

document.querySelectorAll(".numberBtn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (display.value === "0") {
      display.value = "";
      preview.textContent = "";
    }
    display.value += this.value;
    preview.textContent += this.value;
  });
});

document.querySelectorAll(".actionBtn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (this.value === "C") {
      resetDisplay();
    } else if (this.value === "Back") {
      if (display.value.length == 1) {
        display.value = "0";
        preview.textContent = "0";
      } else {
        display.value = display.value.slice(0, display.value.length - 1);
        preview.textContent = preview.textContent.slice(
          0,
          preview.textContent.length - 1
        );
      }
    }
  });
});
