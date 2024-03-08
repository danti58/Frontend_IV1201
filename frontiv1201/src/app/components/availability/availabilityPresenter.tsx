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
  
 const [error, setError] = React.useState<string | null>(null);

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

 /**
     * Handles the success when adding availability to the API.
     * 
     * @param response - Response from the API call after successful availability addition
     */
  function onAddvailabilitySuccess(response: any) {
    // print response json:
    setSuccessMessage('Availability successfully added!');
    console.log('Add availability success:', response);
  }

  /**
   * Handles the error when adding availability to the API.
   * 
   * @param error
   */
    function onAddavailabilityFail(error: any) {
        console.error('Add availability failed:', error);
        if (error.request.status === 0) {
            setError('Server is down');
        }
        else if (error.request.status === 500) {
            setError('Cannot connect to database');
        }
        else {
            setError('Add availability failed');
        }
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
      error={error}
    />
  );
}

export default AvailabilityPresenter;