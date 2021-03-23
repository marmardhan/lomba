import { useEffect, useState } from "react";
import { entertaiment_articles } from "../API";
import Footer from "../component/Footer";

function Entertaiment() {
  const [data, setData] = useState();

  const getDefaultAPI = async () => {
    const result = await entertaiment_articles()
      .then(res => res)
      .catch(err => err);
    setData(result);
  };

  useEffect(() => {
    getDefaultAPI();
  }, []);

  return (
    <>
      <div className="App">
        {(function () {
          if (data === undefined) {
            return (
              <>
                <div className="container">
                  <div className="loading d-flex justify-content-center my-5">
                    <div
                      className="spinner-grow text-primary mt-5"
                      style={{ width: "4rem", height: "4rem" }}
                      role="status"
                    ></div>
                  </div>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div className="container">
                  {data.map((article, i) => {
                    const d = new Date(article.publishedAt);
                    const y = d.getUTCFullYear();
                    const m = () =>
                      d.getUTCMonth() < 10
                        ? `0${d.getUTCMonth()}`
                        : d.getUTCMonth();

                    const day = () =>
                      d.getUTCDay() < 10 ? `0${d.getUTCDay()}` : d.getUTCDay();
                    const publish = `${y}-${m()}-${day()}`;
                    return (
                      <div className="row" key={i.toString()}>
                        <div className="col-md-5">
                          <div className="card mx-2 shadow my-3 border-seondary">
                            <div className="bungkus">
                              <img
                                src={article.urlToImage}
                                className="card-img-top"
                                alt="img article"
                              />
                              <div className="title-img">
                                <h6>{article.title}</h6>
                              </div>
                            </div>

                            <div className="card-body">
                              Source: {article.source.name}
                              <br />
                              <br />
                              <p className="card-text">{article.description}</p>
                              <p>
                                By ~
                                <span className="fst-italic">
                                  {article.author}
                                </span>
                              </p>
                              <a
                                href={article.url}
                                className="float-end btn btn-outline-info me-auto"
                              >
                                More
                              </a>
                              {/* </div> */}
                              <p>{publish}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ); // end-return
                  })}
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#0d6efd"
                    fillOpacity="1"
                    d="M0,32L60,69.3C120,107,240,181,360,224C480,267,600,277,720,240C840,203,960,117,1080,90.7C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                  ></path>
                </svg>
                <div className="footer">
                  <Footer />
                </div>
              </>
            );
          }
        })()}
      </div>
    </>
  );
}

export default Entertaiment;
