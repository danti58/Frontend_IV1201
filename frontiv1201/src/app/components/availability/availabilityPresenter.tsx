import React, { useState } from 'react';
import AvailabilityView from './availabilityView';
import { AvailabilityData, addAvailability } from '@/app/api';
import { useSelector } from 'react-redux';


function AvailabilityPresenter() {


const userState = useSelector((state: any) => state.auth.userState);

 const [availabilityData, setAvailabilityData] = React.useState<AvailabilityData>({
  requestedUsername: userState.username, 
  fromDate: '', 
  toDate: '' ,
    
    
 
  });



 

const [successMessage, setSuccessMessage] = React.useState<string>('');
  


  function onAddvailabilitySuccess(response: any) {
    // print response json:
    setSuccessMessage('Availability successfully added!');
    console.log('Add availability success:', response);
  }

    function onAddavailabilityFail(error: any) {
        console.error('Add availability failed:', error);
    }



  
  // Inside  component
  const handleDateSelect = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await addAvailability(availabilityData, userState.token);
      onAddvailabilitySuccess(response);
    } catch (error) {
      onAddavailabilityFail(error);
    }
  };










  return <AvailabilityView availabilityData={availabilityData} setAvailabilityData={setAvailabilityData}  handleDateSelect={handleDateSelect} 
  successMessage={successMessage} setSuccessMessage={setSuccessMessage}  />;
};

export default AvailabilityPresenter;