import React, { useState } from 'react';
import AvailabilityView from './availabilityView';
import { AvailabilityData, addAvailability } from '@/app/api';
import { useSelector } from 'react-redux';

function AvailabilityPresenter() {
  const userState = useSelector((state: any) => state.auth.userState);

  const [availabilityData, setAvailabilityData] = React.useState<AvailabilityData>({
    requestedUsername: userState.username,
    fromDate: new Date(),
    toDate: new Date(),
  });

  const [successMessage, setSuccessMessage] = React.useState<string>('');

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
    />
  );
}

export default AvailabilityPresenter;