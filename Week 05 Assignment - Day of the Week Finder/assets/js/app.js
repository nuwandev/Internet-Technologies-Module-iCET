const yInput = document.getElementById("year");
const mInput = document.getElementById("month");
const dInput = document.getElementById("day");
const result = document.getElementById("result");

const date = new Date();
yInput.value = date.getFullYear();
mInput.value = date.getMonth() + 1;
dInput.value = date.getDate();

const findDay = () => {
  const y = Number(yInput.value);
  const m = Number(mInput.value);
  const d = Number(dInput.value);

  // Error handling
  result.style.color = "red";
  if (!y) {
    result.innerText = "Year is required!";
    return;
  }

  if (!m) {
    result.innerText = "Month is required!";
    return;
  }

  if (!d) {
    result.innerText = "Date is required!";
    return;
  }

  if (y < 0) {
    result.innerText = "Invalid Year!";
    return;
  }

  if (m < 0 || m > 12) {
    result.innerText = "Invalid Month!";
    return;
  }

  if (d < 0 || d > 31) {
    result.innerText = "Invalid Date!";
    return;
  }

  // given logics in the assignment instructions
  const yO = Math.floor(y - (14 - m) / 12);
  const x = Math.floor(yO + yO / 4 - yO / 100 + yO / 400);
  const mO = Math.floor(m + 12 * ((14 - m) / 12) - 2);
  const dO = Math.floor((d + x + (31 * mO) / 12) % 7);

  // manually typed because the instructions haven't gave 0 for friday etc...
  const days = [
    "Friday", // 0
    "Saturday", // 1
    "Sunday", // 2
    "Monday", // 3
    "Tuesday", // 4
    "Wednesday", // 5
    "Thursday", // 6
  ];

  result.style.color = "black";
  result.innerText = `Day of the week is ${days[dO]}`;
};
