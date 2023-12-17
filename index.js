const d0 = new Date('18 June 2023 21:00 UTC');
const dt = new Date();
const daysSince = Math.round((dt - d0)/86400000);

window.addEventListener("load", () => {
  const main = document.getElementById("main");
  let sites;
  let bolded = [
    "https://annaylin.com/100-days/directions",
    "https://annaylin.com/100-days/bracketsclock/",
    "https://annaylin.com/100-days/sunmoonsky/",
    "https://annaylin.com/100-days/transpilation/",
    "https://annaylin.com/100-days/ctw/2150",
    "https://annaylin.com/100-days/ctw/how-to",
    "https://annaylin.com/100-days/elements",
    "https://annaylin.com/100-days/ctw/progress",
    "https://annaylin.com/100-days/buxing",
    "https://annaylin.com/100-days/grass",
    "https://annaylin.com/100-days/san"
  ];
  fetch("./items.json").then((d) => d.json()).then((r) => {
    sites = r;
    for (let i = 1; i <= daysSince; i++) {
      if (!sites[i]) return;
      let elem = document.createElement('div');
      let anchor = document.createElement('a');
      elem.className = "site";
      anchor.href = `https://annaylin.com/100-days/${sites[i].name.replace(" ", "")}`;
      if (bolded.includes(anchor.href)) {
        anchor.style.fontStyle = "italic";
        anchor.style.fontWeight = "800";
        anchor.innerHTML += "*";
      }
      anchor.innerHTML += `day ${i} — ${sites[i].name}`;
      elem.appendChild(anchor);
      main.appendChild(elem);
    }
  });
});