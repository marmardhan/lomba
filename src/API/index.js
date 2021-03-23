import axios from "axios";

export const general_articles = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=general&apiKey=1e132d01ae8043a9810440981945a39b",
        {
          params: {
            pageSize: 10,
          },
        }
      )
      .then(res => resolve(res.data.articles))
      .catch(err => reject(err));
  });
};

export const business_article = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=business&apiKey=1e132d01ae8043a9810440981945a39b",
        {
          params: {
            pageSize: 10,
          },
        }
      )
      .then(res => resolve(res.data.articles))
      .catch(err => reject(err));
  });
};

export const technology_articles = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=technology&apiKey=1e132d01ae8043a9810440981945a39b",
        {
          params: {
            pageSize: 10,
          },
        }
      )
      .then(res => resolve(res.data.articles))
      .catch(err => reject(err));
  });
};

export const sport_articles = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=sport&apiKey=1e132d01ae8043a9810440981945a39b",
        {
          params: {
            pageSize: 10,
          },
        }
      )
      .then(res => resolve(res.data.articles))
      .catch(err => reject(err));
  });
};

export const health_articles = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=health&apiKey=1e132d01ae8043a9810440981945a39b",
        {
          params: {
            pageSize: 10,
          },
        }
      )
      .then(res => resolve(res.data.articles))
      .catch(err => reject(err));
  });
};

export const science_articles = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=science&apiKey=1e132d01ae8043a9810440981945a39b",
        {
          params: {
            pageSize: 10,
          },
        }
      )
      .then(res => resolve(res.data.articles))
      .catch(err => reject(err));
  });
};

export const entertaiment_articles = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=entertaiment&apiKey=1e132d01ae8043a9810440981945a39b",
        {
          params: {
            pageSize: 10,
          },
        }
      )
      .then(res => resolve(res.data.articles))
      .catch(err => reject(err));
  });
};
