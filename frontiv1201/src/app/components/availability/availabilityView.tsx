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
}


const AvailabilityView: React.FC<Props> = ({ availabilityData, setAvailabilityData, handleDateSelect, successMessage }) => (

  <div>
     {successMessage && <p>{successMessage}</p>}
  

    <form onSubmit={handleDateSelect}>
      <label>
        From date:
        <input
          className="bg-white text-black"
          type="text"
          value={availabilityData.from_date}
          onChange={(e) => setAvailabilityData({ ...availabilityData, from_date: e.target.value })}
        />
      </label>
<br></br>
      <label>
        to date:
        <input
          className="bg-white text-black"
          type="text"
          value={availabilityData.to_date}
          onChange={(e) => setAvailabilityData({ ...availabilityData, to_date: e.target.value })}
        />
      </label>
<br></br>
      <button
        style={{ backgroundColor: 'lightgrey', color: 'black', borderRadius: '6px' }}
        type="submit"
      >
        ADD
      </button>
    </form>
  </div>
);




export default AvailabilityView;