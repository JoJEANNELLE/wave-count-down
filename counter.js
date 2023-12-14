import gsap from "gsap";

export function setupCounter(element, final) {
  let lastTimeArray = null;

  let x = setInterval(function () {
    const now = new Date().getTime();
    const difference = final - now;

    if (difference < 0) {
      // timer is finish
      clearInterval(x);
      return;
    }

    const seconds = formatedDigits(
      Math.floor((difference % (1000 * 60)) / 1000)
    );

    console.log(digitsToArray(seconds))

    // const timeArray = [
    //   digitsToArray(days),
    //   digitsToArray(hours),
    //   digitsToArray(minutes),
    //   digitsToArray(seconds),
    // ];

    // const unitNames = ["days", "hours", "minutes", "seconds"];

    // timeArray.forEach((unit, unitIndex) => {
    //   const name = unitNames[unitIndex];
    //   const container = element
    //     .querySelector(`.counter-unit--${name}`)
    //     .getElementsByClassName("counter-digit");

    //   unit.forEach((digit, digitIndex) => {

    //     // first time
    //     if (!lastTimeArray) {
    //       const live = createDigit(digit, "live");
    //       container[digitIndex].append(live);
    //       appearDigit(live);
    //     } else {
    //       //No changes
    //       if (lastTimeArray[unitIndex][digitIndex] === digit) return;

    //       container[digitIndex].querySelector(".counter-digit-live").remove();
    //       const live = createDigit(digit, "live");
    //       container[digitIndex].append(live);
    //       appearDigit(live);

    //       const dead = createDigit(
    //         lastTimeArray[unitIndex][digitIndex],
    //         "dead"
    //       );
    //       container[digitIndex].append(dead);
    //       disappearDigit(dead);
    //     }
    //   });
    // });

    // lastTimeArray = timeArray;
  }, 1000);
}

function createDigit(value, name) {
  const digit = document.createElement("span");
  digit.className = `counter-digit-${name}`;
  digit.innerHTML = value;
  return digit;
}

function appearDigit(element) {
  gsap.fromTo(
    element,
    {
      autoAlpha: 0,
      scale: 0.7,
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

function formatedDigits(value) {
  return value.toString().padStart(2, "0");
}

function digitsToArray(digits) {
  return String(digits).split("");
