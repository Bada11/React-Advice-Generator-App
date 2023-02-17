
import { useEffect, useState } from "react";
import axios from "axios";

const Container = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [genData, setGenData] = useState("");
  const [adviseTag, setAdviceTag] = useState();
  const [adviseQoute, setAdviceQoute] = useState();

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log(response.data);
        setAdviceQoute(response.data.slip.advice);
        setAdviceTag(response.data.slip.id);
        setIsDataLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("general data", genData);

  return (
    <>
      {isDataLoaded === true ? (
        <div className="container">
          <div className="advice">
            <h1>"ADVICE #{adviseTag}"</h1>
            <p>"{adviseQoute}"</p>
          </div>
          <div className="control">
          <div className="divider">
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                <g transform="translate(212)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
          </div>
          <div>
            <button className="btn" onClick={getAdvice}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                  fill="#202733"
                />
              </svg>
            </button>
          </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Container;
