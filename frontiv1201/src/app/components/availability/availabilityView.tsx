import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AvailabilityData } from '@/app/api';
import { Button,Container, Title, Text } from '@/app/styles/styles';

interface Props {
  availabilityData: AvailabilityData;
  setAvailabilityData: (availabilityData: AvailabilityData) => void;
  handleDateSelect: (event: React.FormEvent<HTMLFormElement>) => void;
  successMessage: string;
  setSuccessMessage: (successMessage: string) => void;
}
import styled from 'styled-components';


const LabelTitle = styled(Title)`	
  font-size: 1rem;	
  font-weight: normal;	
  margin-bottom: 1rem;	
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.label`
  display: block;
  color: #333;
  margin-bottom: 5px;
  margin-right: 10px;
`;
const AvailabilityView: React.FC<Props> = ({ availabilityData, setAvailabilityData, handleDateSelect, successMessage }) => {

  const styles = `
    .availability-view-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color: #f9f9f9;
    }

    .success-message {
      color: green;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .username {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .date-picker-container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .date-label {
      display: block;
      margin-bottom: 10px;
    }

    .date-picker {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .add-button {
      background-color: lightgrey;
      color: black;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
    }

    .add-button:hover {
      background-color: #ccc;
    }
  `;





  return (
    <Container>
      <style>{styles}</style>
      <Container className="availability-view-container">
        {successMessage && <p className="success-message">{successMessage}</p>}
        <StyledForm className="bg-white text-black" onSubmit={handleDateSelect}>
          <LabelTitle className="date-picker-container">
            <Label className="date-label">
              <Text>From date:</Text>
              <DatePicker
                selected={new Date(availabilityData.fromDate)}
                onChange={(e) => setAvailabilityData({ ...availabilityData, fromDate: e? new Date(e) : new Date('')})}
                className="date-picker"
                dateFormat="yyyy-MM-dd"
              />
            </Label>
            <Label className="date-label">
            <Text>To date:</Text>
              <DatePicker
                selected={new Date(availabilityData.toDate)}
                onChange={(e) => setAvailabilityData({ ...availabilityData, toDate:  e? new Date(e) : new Date('')})}
                className="date-picker"
                dateFormat="yyyy-MM-dd"
              />
            </Label>
          </LabelTitle>
          <Button className="add-button" type="submit">
            ADD
          </Button>
        </StyledForm>
      </Container>
    </Container>
  );
};

export default AvailabilityView;