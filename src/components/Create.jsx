import React, { useState } from "react";
import{useDispatch} from 'react-redux'
import { createUser } from "../features/userDetailSlice";

const Create = () => {
  const [users, setUsers] = useState({});
  
  const dispatch = useDispatch()
  

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("users...", users);
    dispatch(createUser(users))
  }

  return (
    <div>
      <form style={{ width: "50%", margin: "auto" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={getUserData}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={getUserData}
          />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="exampleInputAge" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            name="age"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <input
            type="radio"
            className="form-check-input"
            name="gender"
            value="Male"
            onChange={getUserData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            type="radio"
            className="form-check-input"
            name="gender"
            value="Female"
            onChange={getUserData}
          />
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
