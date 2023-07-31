window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  let offset = 100;
  let w = window.innerWidth - offset;
  let h = window.innerHeight - offset;

  function onClickDetails(e) {
    setTimeout(createDetailsElement, 700);
  }

  function createDetailsElement() {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.innerText = "am i in the right place?";
    details.appendChild(summary);
    details.innerHTML += "keep clicking";
    details.onclick = onClickDetails;
    details.style.top = `${getRandomInt(offset, h)}px`;
    details.style.left = `${getRandomInt(offset, w)}px`;
    console.log(details.style.top);
    document.body.appendChild(details);
  }

  createDetailsElement();
});