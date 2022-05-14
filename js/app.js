// import need functionality block
import displayFollower from "../utils/displayFollowers.js";
import fetchFollowers from "../utils/fetchFollowers.js";
import getElement from "../utils/getElement.js";

const title = getElement(".section-title h1");
// declaring the callback func of invoked in the window object
const init = async () => {
  // fetch and await the imported function
  const followers = await fetchFollowers();
  //   changing the title text when the followers data has been fetched
  title.textContent = "Github Users";
  //   display each fetched data of a follower into the HTML
  displayFollower(followers);
};

// an event that listen to the browser object for a load event
window.addEventListener("DOMContentLoaded", init);
