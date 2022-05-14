// the url to fetch Github users
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

// a func that fetches data (Github followers array object)
const fetchFollowers = async () => {
  // fetches data from the server
  const response = await fetch(url);
  //   converts the text data fetched into a Json for the browser
  const data = await response.json();
  //   return back the converted fetched data
  return data;
};

// exporting the func out
export default fetchFollowers;
