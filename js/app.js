const menu = document.getElementById("menu");
const liMobile = document.getElementById("liMobile");
menu.addEventListener("click", () => {
  const classlist = liMobile.classList;
  if (classlist.contains("hidden")) {
    classlist.replace("hidden", "block");
  } else {
    classlist.replace("block", "hidden");
  }
});
