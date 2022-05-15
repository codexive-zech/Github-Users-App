const paginate = (followers) => {
  // stating the number of users ot display per page (in each page)
  const userPerPage = 12;
  //   getting the number of pages that will be need to display all followers array (divide the length of the user array by the users to be displayed per page)
  const numberOfPages = followers.length / userPerPage;
  //   round the number of pages to get a rounded figure of pages need
  const roundNumberOfPages = Math.ceil(numberOfPages);
  //   creating array (userPerPage) of arrays (roundNumberOfPage)
  //   the first property of the .from takes an object having length and a func
  const newFollowers = Array.from(
    { length: roundNumberOfPages },
    (_, index) => {
      // get the first index of the array and multiplying it by the 9 displayed user, and repeat same process every time till the number of pages is reached
      const start = index * userPerPage;
      //   getting the multiplication of index and user per page and then adding the multiplication by the number of user to be displayed per page, and repeat same process every time till the number of pages is reached
      return followers.slice(start, start + userPerPage);
    }
  );
  //   returning the func that cut and display number of users required per page
  return newFollowers;
};

export default paginate;
