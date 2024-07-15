import axios from "axios";
const baseurl = "https://api.themoviedb.org/3";
const apikey = "4cb423cef9c6220862cde087822b3d39";
const imgurl = "https://image.tmdb.org/t/p/original";

export const fetchfromapi = async (url, q) => {
  try {
    const { data } = await axios.get(
      `${baseurl}/${url}?${q?`${q}&`:""}api_key=${apikey}`
    );
    return data;
    
  } catch (error) {
    alert(error)
  }
};
