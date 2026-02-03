function nextModule(current) {
  document.getElementById(`module-${current}`).classList.remove("active");
  document.getElementById(`m${current}`).classList.add("done");
  document.getElementById(`m${current}`).innerText =
    "✔ " + document.getElementById(`m${current}`).innerText;

  const next = current + 1;
  const nextModule = document.getElementById(`module-${next}`);

  if (nextModule) {
    nextModule.classList.add("active");
  } else {
    document.getElementById("complete").classList.add("active");
  }
}
