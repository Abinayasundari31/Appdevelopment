import React, { useState } from 'react';
import { withRouter, useNavigate } from 'react-router-dom';
import './search.css';
import { useDispatch } from 'react-redux';


export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState({ from: '', to: '', date: '' });

  const [isValidated, setIsValidated] = useState(false);
  const [showError, setError] = useState(false);
  const updateValue = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const searchForTrains = () => {
    setIsValidated(true);
    const currentDate = new Date();
    const selectedDate = new Date(search.date);
    const from=search.from;
    const to =search.to;
    if (!search.from || !search.to || !search.date||selectedDate<currentDate||from==to) {
      setError(true);
      console.log(search);
      return;
    }
    dispatch({ search, type: 'SEARCH_TRAIN' });
    navigate('availability');
  };

  return (
    <div className='background'>
      <div className="top-bar">
    <div className="logo">TNRTC
   <h6> Government of Tamil Nadu</h6>
    </div>
    <ul className="nav-menu">
      <li><a href="/">HOME</a></li>
      <li><a href="/login">LOGIN</a></li>
      <li><a href="/about">ABOUT US</a></li>
      <li><a href="/trains">TRAINS</a></li>
      <li><a href="/">LOGOUT</a></li>
      
    </ul>
  </div>
 
      <br></br><br></br><br></br><br></br><br></br>
    <div
      class="search-container"
      className={
        isValidated ? 'was-validated search-container' : 'search-container'
      }
    >
      <h2 className='z'> Explore departure</h2>
     
      <div className="form-group-row">
        <label>
          From:
          <input className='f'required type="text" name="from" onChange={updateValue} />
        </label>
      </div>

      <div className="form-group-row">
        <label>
          To:
          <input className='t'required type="text" name="to" onChange={updateValue} />
        </label>
      </div>

      <div className="form-group">
        <label>
          Date:
          <input className='d' required type="date" name="date" onChange={updateValue} />
        </label>
      </div>
      <button className='s'onClick={searchForTrains}> Search </button>
    </div>
    <br>
    </br>
    <div className='alllert'>
    {showError ? <p class="error-alert box-small"> Enter valid data </p> : ''}
    </div><br></br><br></br>
    
    </div>
    
  );
};