// import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../features/gitUserSlice";

const DisplayData = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.app;
  });

  //loading
  if(data.loading){
    return(<div className="spinner-border text-danger" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>) 
  }
  if(data.error!=null){
    return <h3>{data.error}</h3>
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        className="btn btn-success"
        onClick={() => dispatch(getAllData())}
      >
        Get GitHub Users
      </button>
      {data.users && data.users ? (
        <ul style={{ listStyleType: "none" }}>
          {data.users.map((result) => {
            return (
              <li style={{ marginTop: "20px" }} key={result.id}>
                {result.repos_url}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default DisplayData;
