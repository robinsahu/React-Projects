const paginate = (followers) => {
  const itemPerPage = 10;
  const pages = Math.ceil(followers.length / itemPerPage);
  let followersPerPage = [];
  for (let i = 0; i < pages; i++) {
    const index = i * itemPerPage;
    const follower = followers.slice(index, index + itemPerPage);
    followersPerPage.push(follower);
  }
  return followersPerPage;
};

export default paginate;

/* in this funtion we are dividing the whole 100 item of array into array of 10 items array to show them
per page we are doing this at front end but we can acheive this by BE by directily access 10 items per page*/
