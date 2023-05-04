import React, { useState, useEffect } from "react";
import axios from "axios";

const url = `https://newsapi.org//v2/top-headlines?q=google&from=2023-04-04&sortBy=popularity&technology=technology&apiKey=70d953a5a90d4092b11bd270b65c7b69`;

const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data.articles);
      } catch (err) {
        console.log(err);
      }
    };

    getNews();
  }, []);

  return (
    <main className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
      {data.map((article) => (
        <a key={article.url} href={article.url}>
          <div className="bg-yellow-600 rounded-3xl px-10 py-3">
            <div className="">
              <h3 className="bg-yellow-950 px-5 rounded-lg">Author: {article.author || "Unknown"}</h3>
              <h3 className=" px-5 rounded-lg">Website: {article.source.name || "Unknown"}</h3>
            </div>
            <h1 className="block font-bold text-xl py-3 bg-yellow-900 rounded-2xl text-center p-1 ">
              {article.title}
            </h1>
            <img
              className="aspect-video py-2 rounded-2xl"
              src={article.urlToImage || "https://www.shutterstock.com/image-vector/black-linear-photo-camera-logo-600w-622639151.jpg"}
              alt="Thumbnail"
            ></img>
          </div>
        </a>
      ))}
    </main>
  );
};

export default News;
