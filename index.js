const d0 = new Date('18 June 2023 21:00 UTC');
const dt = new Date();
const daysSince = Math.floor((dt - d0)/86400000);

window.addEventListener("load", () => {
  let sites;
  fetch("./items.json").then((d) => d.json()).then((r) => {
    sites = r;
    console.log(sites);
    for (let i = 1; i <= daysSince; i++) {
      console.log(sites[i]);
      let elem = document.createElement('div');
      let anchor = document.createElement('a');
      elem.className = "site";
      anchor.href = `annaylin.com/100-days/${sites[i].name}`;
      anchor.innerHTML = `Day ${i}`;
      elem.appendChild(anchor);
      document.body.appendChild(elem);
    }
  });
});