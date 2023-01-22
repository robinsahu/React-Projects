import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
import cx from "classnames";
function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (!loading) setFollowers(data[page]);
  }, [loading, page]); //if you leave this dependency then willl show nothing since useEffecr run only one time
  // and for only loading but not for not loading

  const handleClick = (i) => {
    setPage(i);
  };

  const handleNextBtn = () => {
    let nextPage = page + 1;
    if (nextPage > data.length - 1) nextPage = 0;
    setPage(nextPage);
  };

  const handlePrevBtn = () => {
    let prevPage = page - 1;
    if (prevPage === -1) prevPage = data.length - 1;
    setPage(prevPage);
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading ? (
          <div className="btn-container">
            <button className="prev-btn" onClick={handlePrevBtn}>
              Prev
            </button>
            {data.map((follower, index) => {
              return (
                <button
                  className={cx("page-btn", { "active-btn": index === page })}
                  onClick={() => handleClick(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={handleNextBtn}>
              Next
            </button>
          </div>
        ) : null}
      </section>
    </main>
  );
}

export default App;
