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
  const [expandedApplicantId, setExpandedApplicantId] = useState<number | null>(null);


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

  const toggleApplicantDetails = (id: number) => {
    if (expandedApplicantId === id) {
      // If clicking on the same applicant, collapse it
      setExpandedApplicantId(null);
    } else {
      // Expand the clicked applicant
      setExpandedApplicantId(id);
    }
  };

  return (
      <div>
        <button onClick={() => handleSortChange('name')} >[Sort by first name] </button>
        <button onClick={() => handleSortChange('surname')}>[Sort by surname]</button>
       
        {sortedApplicants.map((applicant) => (
        <div key={applicant.person_id}>
          <div onClick={() => toggleApplicantDetails(applicant.person_id)}>
            <p>{applicant.name} {applicant.surname}</p>
          </div>
          {expandedApplicantId === applicant.person_id && (
            <div style={{ border: '1px solid red', padding: '1rem' }}>
              {/* Expanded applicant details */}
              <p>Email: {applicant.email}</p>
              <p>PNR: {applicant.pnr}</p>
              <p>Username: {applicant.username}</p>
              {/* if competencies are not null */}
              {applicant.competencies ? (
                <p>Competencies: {applicant.competencies.join(', ')}</p>
              ) : (
                <p>No competencies</p>
              )}
              {/* Include other details you want to show */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminApplicantsView;