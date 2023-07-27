window.addEventListener("load", () => {
  const elem = document.getElementById("result");
  let chars = [];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  function onType(e, replaceString) {
    if (!replaceString && (!e || !e.data)) return;
    if (elem.innerText.length > 200) return; // stop somewhere
    const val = replaceString ? replaceString : e.target.value;
    if (val.length > 0) {
      getChars(val).then(() => { 
        if (elem && chars.length && chars.length > 0) elem.innerText += chars[getRandomInt(0, chars.length)] + " ";
      });
    } 
    if (val.length > 1 && chars.length == 0) {
      let x = val.substring(1);
      onType(" ", x);
    }
  }

  let input = document.getElementById("prompt");
  input.oninput = onType;

  async function getChars(letters) {
    if (!letters) return;
    chars = [];
    await fetch(`https://seasons986.pythonanywhere.com/?letter=${letters.toLowerCase()}`, {
      mode: "cors", // no-cors, *cors, same-origin,
      headers: {
        "Content-Type": "application/json",
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
    .then((r) => r.json()).then((d) => {
      d.forEach((c) => chars.push(c.string));
    });
  }
});