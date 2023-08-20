import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailSlice";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";
import { useState } from "react";
import { deleteUser } from "../features/userDetailSlice";

const Read = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [radioData, setRadioData] = useState("");
  const { users, loading, searchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>loading</h2>;
  }

  return (
    <div>
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h3>All data</h3>

      <input style={{marginLeft: "10px"}}
        type="radio"
        className="form-check-input"
        name="gender"
        checked={radioData === ""}
        onChange={(e) => setRadioData("")}
      />
      <label className="form-check-label" style={{marginLeft: "2px"}}>All</label>

      <input style={{marginLeft: "10px"}}
        type="radio"
        className="form-check-input"
        name="gender"
        value="Male"
        checked={radioData === "Male"}
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label className="form-check-label" style={{marginLeft: "2px"}}>Male</label>

      <input style={{marginLeft: "10px"}}
        type="radio"
        className="form-check-input"
        name="gender"
        value="Female"
        checked={radioData === "Female"}
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label className="form-check-label" style={{marginLeft: "2px"}}>Female</label>
      <div>
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((ele) => {
              if (radioData === "Male") {
                return ele.gender === radioData;
              } else if (radioData === "Female") {
                return ele.gender === radioData;
              } else {
                return ele;
              }
            })
            .map((ele) => (
              <div
                key={ele.id}
                className="card my-2"
                style={{ width: "50%", margin: "auto" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {ele.email}
                  </h6>
                  <p className="card-text">{ele.gender}</p>
                  <button
                    className="card-link"
                    onClick={() => [setId(ele.id), setShowPopup(true)]}
                  >
                    view
                  </button>
                  <Link to={`/edit/${ele.id}`} className="card-link">
                    Edit
                  </Link>
                  <Link
                    className="card-link"
                    onClick={() => dispatch(deleteUser(ele.id))}
                  >
                    Delete
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
