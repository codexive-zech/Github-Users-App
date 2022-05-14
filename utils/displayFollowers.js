// imported the get element so as to select element class or id
import getElement from "./getElement.js";

// select HTML element that is going to take in action and effect
const usersContainer = getElement(".container");

// a display followers func that shows followers on the browser
const displayFollower = (followers) => {
  const showFollowers =
    //   iterated over the fetched followers array object
    followers
      .map((follower) => {
        // destructured the needed properties for HTML display
        const { avatar_url, html_url, login } = follower;
        //   dynamically display this HTML code for each user
        return `<article class="card">
        <img src="${avatar_url}" alt=${login}>
        <h4>${login}</h4>
        <a href="${html_url}" class="btn">View Profile<a/>
        </article>`;
      })
      .join("");
  // dynamically insert into HTML
  usersContainer.innerHTML = showFollowers;
};

export default displayFollower;
