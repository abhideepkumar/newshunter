// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const url = `https://newsapi.org/v2/top-headlines?q=Artificial Intelligence&from=2023-04-04&sortBy=popularity&technology=technology&apiKey=70d953a5a90d4092b11bd270b65c7b69`;

// const News = () => {
//   const [data, setData] = useState(null);

//   const getNews = async () => {
//     try {
//       const response = await axios.get(url);
//       console.log(response.data);
//       setData(response.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getNews();
//   }, []);

//   return (
//     <main>
//       {data && (
//         <a
//           className="container m-auto flex justify-evenly lg:w-1/4"
//           href="https://lifehacker.com/heres-how-much-a-max-subscription-will-cost-you-after-m-1850329419"
//         >
//           <div className="bg-yellow-600 rounded-3xl px-10 py-3">
//             <div className="inline-block">
//               <h3 className="inline px-5">
//                 {data.articles[0].author || "Unknown"}
//               </h3>
//               <h3 className="inline px-5">
//                 {data.articles[0].source.name || "Unknown"}
//               </h3>
//             </div>
//             <h1 className="block font-bold text-xl py-3 bg-yellow-900 rounded-2xl text-center p-1 ">
//               {data.articles[0].title}
//             </h1>
//             <img
//               className="aspect-video py-2 rounded-2xl"
//               src={data.articles[0].urlToImage || ""}
//               alt="Thumbnail"
//             ></img>
//           </div>
//         </a>
//       )}
//     </main>
//   );
// };

// export default News;

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
    <main className="flex justify-evenly flex-col">
      {data.map((article) => (
        <a
          key={article.url}
          className="container px-10 py-10 flex  lg:w-1/4"
          href={article.url}
        >
          <div className="bg-yellow-600 rounded-3xl px-10 py-3">
            <div className="inline-block">
              <h3 className="inline px-5">{article.author}</h3>
              <h3 className="inline px-5">{article.source.name}</h3>
            </div>
            <h1 className="block font-bold text-xl py-3 bg-yellow-900 rounded-2xl text-center p-1 ">
              {article.title}
            </h1>
            <img
              className="aspect-video py-2 rounded-2xl"
              src={article.urlToImage}
              alt="Thumbnail"
            ></img>
          </div>
        </a>
      ))}
    </main>
  );
};

export default News;
