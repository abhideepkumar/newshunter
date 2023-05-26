import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const News = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState("mt-10 text-center hidden");
  const router = useRouter();
  const { slugs } = router.query;
  const url = `/api/proxy?q=${encodeURIComponent(slugs)}`;

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log("data", data);
          setData(data.articles);
        } else {
          throw new Error("Request failed with status " + response.status); 
        }
      } catch (err) {
        setLoading("mt-10 text-center visible")
        console.log(err);
      }
    };  

    if (slugs) {
      getNews();
    }
  }, [slugs]);

  return (
    <main>
      <h1 className={loading}>News not available for the given Keyword</h1>
      <h2 className={loading}>Please try again later.</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 text-white ">
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
                  "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="Thumbnail"
              ></img>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};

export default News;
