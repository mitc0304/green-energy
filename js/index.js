// load images on page load
function preloader() {

  const imagesPaths = [
    "./img/lightbulb.png",
    "./img/shower.png",
    "./img/washing-machine.png"
  ];

  const images = [ ];

  for (let i = 0; i <imagesPaths.length; i++) {
    images[i] = new Image();
    images[i].src = imagesPaths[i];
  }

  // images ready to be used:
  console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};

window.addEventListener("load", preloader);

// create resources
const resources = [
  {
    headingContent: "Energy Efficient Lightbulbs",
    imgUrl: "./img/lightbulb.png",
    bodyText: "Change to new and improved light bulbs. Reduce energy use from about a third to as much as 80% with today’s increasing number of energy-efficient halogen incandescents, CFLs and LEDs."
  },
  {
    headingContent: "Low-Flow Water Fixtures",
    imgUrl: "./img/shower.png",
    bodyText: "Use low-flow faucets and shower heads to save on water bills."
  },
  {
    headingContent: "Use Cold Water",
    imgUrl: "./img/washing-machine.png",
    bodyText: "Switching to cold water for your laundry saves an average of $63 dollars a year."
  }
];

/* GETTING REFERENCES TO ACTIVE ELEMENTS */
const btns = document.querySelectorAll("button");
const currentContent = document.querySelector(".current-content");

currentContent.innerHTML = `<article>
                            <h2>${resources[0].headingContent}</h2>
                            <img src="${resources[0].imgUrl}">
                            <p>${resources[0].bodyText}</p>
                            </article>`;

/* CREATING EVENT HANDLER */
function contentLoader(ev) {
  // console.log("content loader works");
  let eventTarget = ev.target.textContent;
  console.log(eventTarget.textContent);

  if (eventTarget === "Tip 1") {
    currentContent.innerHTML = `<article>
                                <h2>${resources[0].headingContent}</h2>
                                <img src="${resources[0].imgUrl}">
                                <p>${resources[0].bodyText}</p>
                                </article>`;
  } else if (eventTarget === "Tip 2") {
    currentContent.innerHTML = `<article>
                                <h2>${resources[1].headingContent}</h2>
                                <img src="${resources[1].imgUrl}">
                                <p>${resources[1].bodyText}</p>
                                </article>`;
  } else {
    currentContent.innerHTML = `<article>
                                <h2>${resources[2].headingContent}</h2>
                                <img src="${resources[2].imgUrl}">
                                <p>${resources[2].bodyText}</p>
                                </article>`;
  }

  /* MOVE ID TO THE CURRENT BUTTON */
  // ev.target.id = "active";
  for (let btn of btns) {
    if (btn.id) {
      btn.removeAttribute("id");
    }
  }

  ev.target.id = "active";

}


/* REGISTER EVENT CONTENT (access buttons) */
btns[0].addEventListener("click", contentLoader);
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);
