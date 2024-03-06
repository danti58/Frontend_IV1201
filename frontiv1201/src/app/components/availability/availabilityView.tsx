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
  currentAvailabilities: any[];
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

const CustomContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-self: center;
  align-content: center;

`;
const WhiteContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-items: center;
  background-color: white;
  padding: 1rem;
  margin: 1rem;
  width: 50%;
  border-radius: 15px;
`;
const AvailabilityView: React.FC<Props> = ({ availabilityData, setAvailabilityData, handleDateSelect, successMessage, currentAvailabilities }) => {
  function renderAvailabilities() {
    for (let i = 0; i < currentAvailabilities.length; i++) {

      let fromDate = new Date(currentAvailabilities[i].from_date);
      let toDate = new Date(currentAvailabilities[i].to_date);
      return (
        <div key={i}>
          <Text>
            {fromDate.toUTCString()} - {toDate.toUTCString()}
          </Text>
        </div>
      );
    }
  }

  return (
    <CustomContainer>
      <WhiteContainer>

        {successMessage && <p>{successMessage}</p>}
        <StyledForm onSubmit={handleDateSelect}>
          <LabelTitle>
            <Label>
              <Text>From date:</Text>
              <DatePicker
                selected={new Date(availabilityData.fromDate)}
                onChange={(e) => setAvailabilityData({ ...availabilityData, fromDate: e? new Date(e) : new Date('')})}
                dateFormat="yyyy-MM-dd"
              />
            </Label>
            <Label>
            <Text>To date:</Text>
              <DatePicker
                selected={new Date(availabilityData.toDate)}
                onChange={(e) => setAvailabilityData({ ...availabilityData, toDate:  e? new Date(e) : new Date('')})}
                dateFormat="yyyy-MM-dd"
              />
            </Label>
          </LabelTitle>
          <Button className="add-button" type="submit">
            ADD
          </Button>
        </StyledForm>

        <Title>Current availabilities</Title>
        {renderAvailabilities()}

      </WhiteContainer>
    </CustomContainer>
  );
};

export default AvailabilityView;