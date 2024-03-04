import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AvailabilityData } from '@/app/api';

interface Props {
  availabilityData: AvailabilityData;
  setAvailabilityData: (availabilityData: AvailabilityData) => void;
  handleDateSelect: (event: React.FormEvent<HTMLFormElement>) => void;
  successMessage: string;
  setSuccessMessage: (successMessage: string) => void;
  fromDate: Date;
  setFromDate: (fromDate: any) => void;
  toDate: Date;
  setToDate: (toDate: any) => void;
}

const AvailabilityView: React.FC<Props> = ({ availabilityData, setAvailabilityData, handleDateSelect, successMessage, fromDate, setFromDate, toDate, setToDate }) => {

  const styles = `
    .availability-view-container {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color: #f9f9f9;
    }

    .success-message {
      color: green;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .username {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .date-picker-container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .date-label {
      display: block;
      margin-bottom: 10px;
    }

    .date-picker {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .add-button {
      background-color: lightgrey;
      color: black;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
    }

    .add-button:hover {
      background-color: #ccc;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div className="availability-view-container">
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="username">Username: {availabilityData.requestedUsername}</div>
        <form onSubmit={handleDateSelect}>
          <div className="date-picker-container">
            <label className="date-label">
              From date:
              <DatePicker
                selected={fromDate}
                //onChange={(e) => setAvailabilityData({ ...availabilityData, fromDate: e })}
                onChange={(date) => setFromDate(date)}
                className="date-picker"
                dateFormat="yyyy-MM-dd"
              />
            </label>
            <label className="date-label">
              To date:
              <DatePicker
                selected={toDate}
                //onChange={(e) => setAvailabilityData({ ...availabilityData, toDate: e })}
                onChange={(date) => setToDate(date)}
                className="date-picker"
                dateFormat="yyyy-MM-dd"
              />
            </label>
                  </div>
                  <button className="add-button" type="submit" >  
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AvailabilityView;