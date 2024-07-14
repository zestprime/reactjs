
import './App.css';

import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App">
      Date Picker: <DatePicker 
       showTimeSelect
     
      isClearable
      placeholderText="Select Date here"
      showIcon
      selected={startDate} 
      onChange={(date) => setStartDate(date)} >
        <div style={{ color: "red" }}>Test message</div>
        </DatePicker>
      <br/>
      Selected Date:{startDate && startDate.toString()}
    </div>
  );
}

export default App;
