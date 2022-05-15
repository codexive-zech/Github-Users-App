const displayButtons = (container, pages, activeIndex) => {
  // iterate over pages (array of arrays returned) and for every item in the pages a btn with page index is to be returned
  let btns = pages.map((_, pageIndex) => {
    //   returning what is to be displayed in the HTML
    // checking to see if the active index is same as the page index if so add a class of active btn to it
    return `<button class="page-btn ${
      activeIndex === pageIndex ? "active-btn" : "null"
    }" data-index="${pageIndex}">${pageIndex + 1}</button>`;
  });
  // adding the next button at the end to the buttons iterated array before it is joined o as string
  btns.push('<button class="next-btn">Next</button>');
  // adding the prev button at the beginning to the buttons iterated array before it is joined o as string
  btns.unshift('<button class="prev-btn">Prev</button>');
  //   dynamically inserting the iterated page buttons into the HTML
  container.innerHTML = btns.join("");
};
export default displayButtons;
