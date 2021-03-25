import axios from "axios";

const LINK_API = "https://newsapi.org/v2/everything?q=";
const API_KEY = "1e132d01ae8043a9810440981945a39b";

export const general_articles = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${LINK_API}general&apiKey=${API_KEY}`, {
        params: {
          pageSize: 10,
        },
      })
      .then(res => resolve(res.data.articles))
      .catch(err => reject(err));
  });
};

export const business_article = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${LINK_API}business&apiKey=${API_KEY}`, {
        params: {
          pageSize: 10,
        },
      })
      .then(res => resolve(res.data.articles))
      .catch(err => reject(err));
  });
};

export const technology_articles = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${LINK_API}technology&apiKey=${API_KEY}`, {
        params: {
          pageSize: 10,
        },
      })
      .then(res => resolve(res.data.articles))
      .catch(err => reject(err));
  });
};

export const sport_articles = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${LINK_API}sport&apiKey=${API_KEY}`, {
        params: {
          pageSize: 10,
        },
      })
      .then(res => resolve(res.data.articles))
      .catch(err => reject(err));
  });
};

export const health_articles = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${LINK_API}health&apiKey=${API_KEY}`, {
        params: {
          pageSize: 10,
        },
      })
      .then(res => resolve(res.data.articles))
      .catch(err => reject(err));
  });
};

export const science_articles = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${LINK_API}science&apiKey=${API_KEY}`, {
        params: {
          pageSize: 10,
        },
      })
      .then(res => resolve(res.data.articles))
      .catch(err => reject(err));
  });
};

export const entertaiment_articles = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${LINK_API}entertaiment&apiKey=${API_KEY}`, {
        params: {
          pageSize: 10,
        },
      })
      .then(res => resolve(res.data.articles))
      .catch(err => reject(err));
  });
};
