// adminApplicantsView.tsx
import { User } from '@/app/types/User';
import React, { useState } from 'react';
// Define a type for the keys of User that can be used for sorting
type SortKey = 'name' | 'surname'; // Add other keys as needed

type Props = {
  applicants: Array<User>;
};

function AdminApplicantsView({ applicants }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedApplicants = [...applicants].sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];
    
    // Assuming the values are string for simplicity, adjust as necessary for other types
    if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSortChange = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handleSortChange('name')}>Sort by Name</button>
        <button onClick={() => handleSortChange('surname')}>Sort by Surname</button>
        {/* Add more buttons for different sort criteria as needed */}
      </div>
      {sortedApplicants.map((applicant) => (
        <div key={applicant.person_id}>
          <p>Name: {applicant.name} {applicant.surname}</p>
          {/* Render other details as needed */}
        </div>
      ))}
    </div>
  );
};

export default AdminApplicantsView;