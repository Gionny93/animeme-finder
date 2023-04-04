import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./Home.css";

const ANIME_QUERY = gql`
  query ($search: String) {
    Media(search: $search, type: ANIME) {
      title {
        romaji
      }
      coverImage {
        large
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(ANIME_QUERY, {
    variables: { search: "Chainsaw Man" },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  const currentRecommendation = data.Media;

  return (
    <div className="home">
      {/* <h1>Recommended Anime</h1> */}
      <div className="recommendation-container">
        <div className="anime-card">
          <div className="anime-title"><h2>{currentRecommendation.title.romaji}</h2></div>
          <img
            className="anime-image"
            src={currentRecommendation.coverImage.large}
            alt={currentRecommendation.title.romaji}
          />
          <div className="button-container">
            <button className="button">Add to Watchlist</button>
            <button className="button">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;