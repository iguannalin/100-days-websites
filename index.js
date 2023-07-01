const d0 = new Date('18 June 2023 21:00 UTC');
const dt = new Date();
const daysSince = Math.round((dt - d0)/86400000);

window.addEventListener("load", () => {
  let sites;
  fetch("./items.json").then((d) => d.json()).then((r) => {
    sites = r;
    for (let i = 1; i <= daysSince; i++) {
      if (!sites[i]) return;
      console.log(sites[i]);
      let elem = document.createElement('div');
      let anchor = document.createElement('a');
      elem.className = "site";
      anchor.href = `https://annaylin.com/100-days/${sites[i].name.replace(" ", "")}`;
      anchor.innerHTML = `day ${i} — ${sites[i].name}`;
      elem.appendChild(anchor);
      document.body.appendChild(elem);
    }
  });
});