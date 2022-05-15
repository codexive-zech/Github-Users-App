// import need functionality block
import displayFollower from "../utils/displayFollowers.js";
import fetchFollowers from "../utils/fetchFollowers.js";
import getElement from "../utils/getElement.js";
import paginate from "../utils/paginate.js";
import displayButtons from "../utils/displayButtons.js";

const title = getElement(".section-title h1");
const btContainer = getElement(".btn-container");

// controls dynamically the index of the page
let index = 0;
// creating a new array of followers to be displayed in a page
let pages = [];

// a func that does display the follower by it's page index
const setupUI = () => {
  //   display each fetched data of a follower into the HTML and passing in array of arrays (pages) and what the current index is
  displayFollower(pages[index]);
  // to display the buttons the button container, array of arrays (pages) is needed and the current index of the page
  displayButtons(btContainer, pages, index);
};
// declaring the callback func of invoked in the window object
const init = async () => {
  // fetch and await the imported function
  const followers = await fetchFollowers();
  //   changing the title text when the followers data has been fetched
  title.textContent = "Github Users";
  //
  pages = paginate(followers);
  console.log(pages);
  // invoking the setup ui so as to display the followers needed each page based on the index
  setupUI();
};

// an event that listen to the browser object for a load event
window.addEventListener("DOMContentLoaded", init);
