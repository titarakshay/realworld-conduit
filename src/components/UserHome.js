import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

function UserHome() {
  const [articles, setarticles] = useState(null);
  const [tags, settags] = useState(null);
  useEffect(() => {
    let url =
      "https://mighty-oasis-08080.herokuapp.com/api/articles?limit=10&offset=0";
    axios.get(url).then(({ data: { articles } }) => setarticles(articles));
  }, []);
  useEffect(() => {
    let url = "https://mighty-oasis-08080.herokuapp.com/api/tags";
    axios.get(url).then(({ data: { tags } }) => settags(tags));
  }, []);

  return (
    <div className="homepage-wrapper">
      <div className="margin-top articles-container">
        {articles?.map((article, i) => (
          <div className="card" key={i}>
            <img
              src="https://static.productionready.io/images/smiley-cyrus.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.body}</p>
              <h6>{article.author.username}</h6>
              <Link to="/" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="tags-wrapper">
        {tags?.map((tag) => (
          <li>{tag}</li>
        ))}
      </div>
    </div>
  );
}

export default withRouter(UserHome);
