import React from "react";
import "./App.css";

const Table = (props) => {
  const { photosData } = props;
  return (
    <div className="tableDiv">
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Image</th>
        </tr>
        {photosData &&
          photosData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <img src={item.thumbnailUrl} width="50px" height="50px" />
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default React.memo(Table);
