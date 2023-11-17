import { useState, useEffect } from "react";
// import config from "../../../config";


function getNewsInfo() {

  const [newsInfo, setNewsInfo] = useState({})
//   const apiKey = config.apiKey;

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=71e8b0dd078a40e3aac50468d6ae1f08`)
    .then((res)=> res.json())
    .then((res)=>setNewsInfo(res['articles']))
  }, [])
  return newsInfo
}

export default getNewsInfo