const gidCardContainer = document.querySelector(".carusel-gid__container");
const gidCard = document.querySelector(".carusel-gid__gid-card");
const { width: cardWidthPx, marginRight: cardMarginRightPx } =
  window.getComputedStyle(gidCard);
const cardWidth = +cardWidthPx.replace("px", "");
const cardMarginRight = +cardMarginRightPx.replace("px", "");
const gidLeftBtn = document.querySelector(".prev-gid-card");
const gidRightBtn = document.querySelector(".next-gid-card");

let counter;
let prevCounter;

if (window.innerWidth <= "767") {
  prevCounter = 1;
  counter = 2;
} else {
  prevCounter = 2;
  counter = 3;
}

if (window.innerWidth <= 493) {
  gidCardContainer.style.marginLeft = "-130px";
} else if (window.innerWidth <= 767) {
  gidCardContainer.style.marginLeft = "-40px";
} else {
  gidCardContainer.style.marginLeft = `-${cardWidth + cardMarginRight}px`;
}

gidLeftBtn.addEventListener("click", makeLeftStep);
gidRightBtn.addEventListener("click", makeRightStep);

function makeLeftStep() {
  counter++;
  if (counter <= 17) {
    if (gidCardContainer.style.marginLeft) {
      const marginStr = gidCardContainer.style.marginLeft;
      const numMarginStr = marginStr.replace("px", "");
      const numMargin = +numMarginStr - (cardWidth + cardMarginRight) + "px";
      gidCardContainer.style.marginLeft = numMargin;
      if (gidRightBtn.style.display === "none") {
        gidRightBtn.style.display = "block";
      }
    } else {
      gidCardContainer.style.marginLeft = `-${cardWidth + cardMarginRight}px`;
    }
  }
  if (counter === 17) {
    gidLeftBtn.style.display = "none";
  }
}

function makeRightStep() {
  counter--;
  if (counter >= prevCounter) {
    if (gidCardContainer.style.marginLeft) {
      if (gidLeftBtn.style.display === "none") {
        gidLeftBtn.style.display = "block";
      }
      const marginStr = gidCardContainer.style.marginLeft;
      const numMarginStr = marginStr.replace("px", "");
      const numMargin = +numMarginStr + (cardWidth + cardMarginRight) + "px";
      gidCardContainer.style.marginLeft = numMargin;
    } else {
      gidCardContainer.style.marginLeft = "0px";
    }
  }
  if (counter === prevCounter) {
    gidRightBtn.style.display = "none";
  }
}
