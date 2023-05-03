import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "../Assets/Admin.css";
import RegisterUser from "./RegisterUser";

function Admin() {
  const [userData , setUserData] = useState([]);
  const [showProfileIndex, setShowProfileIndex] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/all`);
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const [showSearch, setShowSearch] = useState(0);
  const [register, setRegister] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log(searchValue); // need to change this so that it searches and shows only 
  };

  return (
    <div className='Admin'>
      {/* UPdate the navbar such that when the url has /Admin the login and cotact button should be hidden */}
      <div className="tableContainer">
        <div className="tableHeading">
          <button className='primaryButton-invert'>All</button>
          <span>
            {showSearch >= 1 && (
              <input
                type="text"
                name="searchTable"
                id="searchTable"
                placeholder='Blood Group'
                onChange={(e) => setSearchValue(e.target.value)}
              />
            )}
            <button
              onClick={() => {
                if (showSearch === 0) {
                  setShowSearch(1);
                } else {
                  handleSearch();
                }
              }}
              className='primaryButton-invert'
            >
              Search
            </button>
          </span>
          <button
            className='primaryButton'
            onClick={() => {
              setRegister(!register);
            }}
          >
            +
          </button>
        </div>
        {register===1 && <RegisterUser admin={1} />}
        <div className="tableData">
          <div className="tableTitles">
            <span>ID</span>
            <span>Name</span>
            <span>Blood</span>
            <span>Actions</span>
          </div>
          {userData.map((user, index) => (
            <div className="tableRow" key={index}>
              <p className="tableRowId">{user._id.slice(9, 15)}</p>
              <p className="tableRowName">{user.name}</p>
              <p className="tableRowBlood">{user.bloodGroup}</p>
              <div className="tableRowButton">
                <span
                  className='tableViewButton'
                  onClick={() => {
                    if(showProfileIndex == index){
                        setShowProfileIndex(-1);
                    }
                    else {
                        setShowProfileIndex(index);
                    }
                  }}
                >
                  View
                </span>
                <span className='tableDeleteButton'>Delete</span>
              </div>
              {showProfileIndex === index && (
                <div className="tableRowProfile">
                  {/* <p className="tableProfileMail">{user.email}</p> */}
                  <p className="tableProfileNumber">{user.contactNumber}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
