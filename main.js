import "./style.scss";
import gsap from "gsap";

setupCounter()

const container = document.querySelector(".digit");

function setupCounter() {
  let s = 0
  setInterval(function () {

    let last = container.querySelector(".digit-live")
    if(last) {
        last.remove()
    }
    const live = createDigit(s, "live");
    container.append(live);
    appearDigit(live);

    s = s === 9 ? 0 : s + 1
  }, 1000);
}

function createDigit(value, name) {
  const digit = document.createElement("span");
  digit.className = `digit-${name}`;
  digit.innerHTML = value;
  return digit;
}

function appearDigit(element) {
  gsap.fromTo(
    element,
    {
      autoAlpha: 0,
      scale: 1.1,
    },
    {
      autoAlpha: 1,
      scale: 1,
      duration: 0.5,
    }
  );
}

function disappearDigit(element) {
  gsap.to(element, {
    autoAlpha: 0,
    y: 200,
    duration: 0.9,
    onComplete: () => element.remove(),
  });
}
