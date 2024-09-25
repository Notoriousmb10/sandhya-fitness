import React, { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../components/Context/userContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [startedTypingNumber, setStartedTypingNumber] = useState(false);
  const [startedTypingAge, setStartedTypingAge] = useState(false);
  const [invalidNoWarning, setinvalidNoWarning] = useState(false);

  const ageRef = useRef();
  const numberRef = useRef();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  const submitPhoneNo = (e) => {
    if (e.target.value.length === 10) {
      console.log('Backend Func here');
      setinvalidNoWarning(false);
    } else {
      setStartedTypingNumber(false);
      setinvalidNoWarning(true);
    }
  };

  const handleNumberChange = (e) => {
    if (e.target.value.length > 0) {
      setStartedTypingNumber(true);
    } else {
      setStartedTypingNumber(false);
    }
  };

  const handleAgeChange = (e) => {
    if (e.target.value.length > 0) {
      setStartedTypingAge(true);
    } else {
      setStartedTypingAge(false);
    }
  };

  return (
    <div className="p-20">
      <div>
        <div className="flex justify-center">
          <img
            src={user.photo}
            alt="User Profile"
            className="rounded-full"
            height={176}
            width={176}
          />
        </div>
        <div className="flex justify-center gap-10 my-10">
          <div>
            <h1>First Name</h1>
            <input
              type="text"
              className="border-2 max-md:w-40 md-plus:w-72 rounded-lg px-2"
              value={user.firstname}
              readOnly
            />
          </div>
          <div>
            <h1>Last Name</h1>
            <input
              type="text"
              className="border-2 max-md:w-40 md-plus:w-72 rounded-lg px-2"
              value={user.lastname}
              readOnly
            />
          </div>
        </div>

        <div className="flex justify-center gap-10">
          <div>
            <h1>Email</h1>
            <input
              type="text"
              className="border-2 max-md:w-40 md-plus:w-72 rounded-lg px-2"
              value={user.email}
              readOnly
            />
          </div>
          <div>
            <h1>Phone Number</h1>
            <input
              ref={numberRef}
              type="text"
              className="border-2 max-md:w-40 md-plus:w-72 rounded-lg px-2"
              placeholder="Add Your Number"
              onChange={handleNumberChange}
              onBlur={submitPhoneNo}
            />
            {invalidNoWarning && (
              <p className="text-red-500 mt-2">Enter a valid number</p>
            )}
            {startedTypingNumber && !invalidNoWarning && (
              <button className="mt-2 ml-2 bg-blue-500 text-white px-4 py-1 rounded-2xl">
                Link
              </button>
            )}
          </div>
        </div>
        <div className="flex justify-center gap-10 my-10">
          <div>
            <h1>Age</h1>
            <input
              ref={ageRef}
              type="number"
              className="border-2 max-md:w-40 md-plus:w-72 rounded-lg px-2"
              placeholder="Enter Your Age"
              min="12"
              max="100"
              onChange={handleAgeChange}
            />
            {startedTypingAge ? (
              <button className="mt-2 ml-2 bg-blue-500 text-white px-4 py-1 rounded-2xl">
                Add
              </button>
            ) : (
              <p className="font-thin mt-2">Enter Your Age</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;