import React from 'react';
import AvailabilityPresenter from '../app/components/availability/availabilityPresenter';
import { useSelector } from 'react-redux';


/**
 * Page component for the availability page.
 * 
 * @returns - Availability presenter component
 */
export default function Availability() {
  const userState = useSelector((state: any) => state.auth.userState);


  return (
    <div>
      {/* You can include a LoginComponent here or the content directly */
      userState.username ? <AvailabilityPresenter /> : <p>Please log in to access this page</p>  
      }
    </div>
  );
}
