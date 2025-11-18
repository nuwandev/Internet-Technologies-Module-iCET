// document.getElementById("input")?.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     console.log(this.value);
//     this.value = "";
//   }
// });

const setUserName = () => {
  const username = document.getElementById("txt_username").value;
  document.getElementById("greet_message").innerText = "Hello " + username;
};
