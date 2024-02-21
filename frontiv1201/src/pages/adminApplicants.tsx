// adminApplicantsPage.tsx
import React from 'react';
import AdminApplicantsPresenter from '@/app/components/adminApplicants/adminApplicantsPresenter';
import { useSelector } from 'react-redux';

const AdminApplicants = () => {
  const userState = useSelector((state: any) => state.auth.userState);
  return (
  userState.username ? <AdminApplicantsPresenter />: <p>Please log in to access this page</p> 
  );
};

export default AdminApplicants;
