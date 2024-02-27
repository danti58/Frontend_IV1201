import React from 'react';
import AvailabilityPresenter from '../app/components/availability/availabilityPresenter';
import styles from '../styles/Home.module.css';
import { useSelector } from 'react-redux';

// Import your LoginComponent here

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
