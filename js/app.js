// add fetch followers functionality in here
import fetchFollowers from "../utils/fetchFollowers.js";

// declaring the callback func of invoked in the window object
const init = async () => {
  // fetch and await the imported function
  const followers = await fetchFollowers();
  console.log(followers);
};

// an event that listen to the browser object for a load event
window.addEventListener("DOMContentLoaded", init);
