import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const News = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { slugs } = router.query;
  const url = `https://newsapi.org/v2/everything?apiKey=70d953a5a90d4092b11bd270b65c7b69&sortBy=relevancy&language=en&q=${slugs}`;

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(url);
        console.log("data", response.data);
        setData(response.data.articles);
      } catch (err) {
        console.log(err);
      }
    };

    if (slugs) {
      getNews();
    }
  }, [slugs]);

  return (
    <main className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 text-white">
      {data.map((article) => (
        <a key={article.url} href={article.url}>
          <div className="bg-teal-600 rounded-3xl px-10 py-3">
            <div className="">
              <h3 className="bg-teal-950 px-5 rounded-lg">
                Author: {article.author || "Unknown"}
              </h3>
              <h3 className=" px-5 rounded-lg">
                Website: {article.source.name || "Unknown"}
              </h3>
            </div>
            <h1 className="block font-bold text-xl py-3 bg-teal-900 rounded-2xl text-center p-1 ">
              {article.title || "No Title Available"}
            </h1>
            <img
              className="aspect-video py-2 rounded-2xl"
              src={
                article.urlToImage ||
                "https://as1.ftcdn.net/v2/jpg/05/98/73/74/1000_F_598737413_7RYI81knmdEAnaASorX9DF94KiAbS7qG.jpg"
              }
              alt="Thumbnail"
            ></img>
          </div>
        </a>
      ))}
    </main>
  );
};

export default News;
