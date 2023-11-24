function addButtons() {
  const cards = document.querySelectorAll(".card");

  [...cards].forEach((card) => {
    const button = document.createElement("button");
    button.textContent = "+";
    button.addEventListener("click", () => {
      const artist = card.querySelector(".col-xs-3 p").textContent;
      const song = card.querySelector(".col-xs-4 p").textContent;
      console.log(`${artist} - ${song}`);
    });

    card.querySelector(".pull-right").prepend(button);
  });
}
addButtons();

let observer = new MutationObserver((mutationList) => {
  for (let record of mutationList) {
    if (record.target.className !== "list-body") return;
  }
  console.log("mutation");
  addButtons();
});

observer.observe(document, { childList: true, subtree: true });
