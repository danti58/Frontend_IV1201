// adminApplicantsPresenter.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AdminApplicantsView from './adminApplicantsView';
import axios from 'axios';
import { AppState } from '../store'; // placeholder for redux

function AdminApplicantsPresenter() {
  const currentUser = useSelector((state: AppState) => state.currentUser);
  const [applicants, setApplicants] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (currentUser.role_id === 1) {
      setIsAuthorized(true);
      fetchApplicants();
    }
  }, [currentUser]);

  const fetchApplicants = async () => {
    try {
      const response = await axios.get('/getApplicants', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setApplicants(response.data);
    } catch (error) {
      console.error('Failed to fetch applicants', error);
    }
  };

  if (!isAuthorized) {
    return <div>Unauthorized</div>;
  }

  return <AdminApplicantsView applicants={applicants} />;
};

export default AdminApplicantsPresenter;
