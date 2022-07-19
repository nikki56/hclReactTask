import React from "react";
import "./App.css";

const Grid = (props) => {
  const { photosData } = props;
  return (
    <div style={{ paddingTop: "10px" }}>
      {photosData &&
        photosData.map((item) => {
          return (
            <div className="gridDiv">
              <div className="gridItem">
                <img src={item.url} width="200px" height="200px" />
                <p>
                  <b>ID - </b> {item.id}
                </p>
                <p>
                  <b>Title - </b> {item.title}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(Grid);
