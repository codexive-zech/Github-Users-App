// import need functionality block
import displayFollower from "../utils/displayFollowers.js";
import fetchFollowers from "../utils/fetchFollowers.js";
import getElement from "../utils/getElement.js";
import paginate from "../utils/paginate.js";
import displayButtons from "../utils/displayButtons.js";

const title = getElement(".section-title h1");
const btnContainer = getElement(".btn-container");

// controls dynamically the index of the page
let index = 0;
// creating a new array of followers to be displayed in a page
let pages = [];

// a func that does display the follower by it's page index
const setupUI = () => {
  //   display each fetched data of a follower into the HTML and passing in array of arrays (pages) and what the current index is
  displayFollower(pages[index]);
  // to display the buttons the button container, array of arrays (pages) is needed and the current index of the page
  displayButtons(btnContainer, pages, index);
};
// declaring the callback func of invoked in the window object
const init = async () => {
  // fetch and await the imported function
  const followers = await fetchFollowers();
  //   changing the title text when the followers data has been fetched
  title.textContent = "Github Users";
  //
  pages = paginate(followers);
  // invoking the setup ui so as to display the followers needed each page based on the index
  setupUI();
};

btnContainer.addEventListener("click", function (e) {
  // checking to see that as long as it's not the page index value that is been clicked and it's just the side in between of the page then do nothing
  if (e.target.classList.contains("btn-container")) return;
  // checking to see if the targeted button clicked has the class of page-btn
  if (e.target.classList.contains("page-btn")) {
    // dynamically changing the value of index via the data-index attribute in the button so as to display followers of that page
    index = parseInt(e.target.dataset.index);
  }
  // checking to see if the clicked button has the class of next btn
  if (e.target.classList.contains("next-btn")) {
    // the index value should be incremented by 1
    index++;
    // checking to see if the new index after increment is bigger than the length of pages (array of arrays) that does display follower
    if (index > pages.length - 1) {
      // index show have the value of 0 when it reaches the last index of the data-index attribute
      index = 0;
    }
  }
  // checking to see if the clicked button has the class of prev btn
  if (e.target.classList.contains("prev-btn")) {
    // the index value should be decremented by 1
    index--;
    // checking to see if the new index after decrement is less than 0
    if (index < 0) {
      // index should be set to the last index value of the pages (array of arrays)
      index = pages.length - 1;
    }
  }
  // invoking the setup ui so as to display the followers needed each page based on the index
  setupUI();
});

// an event that listen to the browser object for a load event
window.addEventListener("DOMContentLoaded", init);
