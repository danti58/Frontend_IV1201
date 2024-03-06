import React, { useState } from 'react';
import AvailabilityView from './availabilityView';
import { AvailabilityData, addAvailability } from '@/app/api';
import { useSelector } from 'react-redux';
import { getAvailability } from '@/app/api';

/**
 * Presenter component for the availability page, handles the availability logic and passes the data to the view component.
 * 
 * @returns  - Availability view component
 */

function AvailabilityPresenter() {
  const userState = useSelector((state: any) => state.auth.userState);
  const [currentAvailabilities, setCurrentAvailabilities] = useState([]);

  const [availabilityData, setAvailabilityData] = React.useState<AvailabilityData>({
    requestedUsername: userState.username,
    fromDate: new Date(),
    toDate: new Date(),
  });

  const [successMessage, setSuccessMessage] = React.useState<string>('');

  // Fetch the current availabilities from the API

  React.useEffect(() => {

    async function fetchAvailabilities() {
      try {
        const response = await getAvailability(userState.token);
        console.log('response:', response);
        onGetAvailabilitySuccess(response);
      } catch (error) {
        onGetAvailabilityFail(error);
      }
    }
    fetchAvailabilities();
  }, []);

  function onGetAvailabilitySuccess(response: any) {
    // print response json:
    console.log('Get availability success:', response);
    setCurrentAvailabilities(response);
  }
  function onGetAvailabilityFail(error: any) {
    console.error('Get availability failed:', error);
  }


  function onAddvailabilitySuccess(response: any) {
    // print response json:
    setSuccessMessage('Availability successfully added!');
    console.log('Add availability success:', response);
  }

  function onAddavailabilityFail(error: any) {
    setSuccessMessage('Error in onAddavailabilityFail');
    console.error('Add availability failed:', error);
  }

  // Inside component
  const handleDateSelect = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (availabilityData.fromDate > availabilityData.toDate) {
      setSuccessMessage('Errors in date selection');
      return;
    }

    try {
      const response = await addAvailability(availabilityData, userState.token);
      onAddvailabilitySuccess(response);
    } catch (error) {
      onAddavailabilityFail(error);
    }
  };

  return (
    <AvailabilityView
      availabilityData={availabilityData}
      setAvailabilityData={setAvailabilityData}
      handleDateSelect={handleDateSelect}
      successMessage={successMessage}
      setSuccessMessage={setSuccessMessage}
      currentAvailabilities={currentAvailabilities}
    />
  );
}

export default AvailabilityPresenter;