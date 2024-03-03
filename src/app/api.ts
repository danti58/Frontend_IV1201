import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your backend URL

export interface RegisterData {
  name: string;
  surname: string;
  pnr: string;
  email: string;
  password: string;
  role_id: string;
  username: string;
}

interface RegisterResponse {
  message: string;
  personId?: string;
}

export interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  message: string;
  token?: string;
}



export interface CompetencyData {
  // Properties of the competency data 
  requestedUsername: string;
  competencyName: string;
  yearsOfExperience: number;
  
}

interface AddCompetencyResponse {
  message: string;
  
}

/**
 * Fetches the applicants from the backend
 * 
 * @param token
 * @returns
 */
export const getApplicants = async (token: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${BASE_URL}/getApplicants`, {
      headers: { token: `${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch applicants', error);
    throw error;
  }

}

/**
 * Sends information for registering a user to the backend
 * 
 * @param registerData - Data with user information
 * @returns
 */
export const registerPerson = async (registerData: RegisterData): Promise<RegisterResponse> => {
  try {
    const response: AxiosResponse<RegisterResponse> = await axios.post(`${BASE_URL}/register`, registerData);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

/**
 * Checks login data with backend to see if it's a valid login
 * 
 * @param loginData - Data for login
 * @returns
 */
export const loginPerson = async (loginData: LoginData): Promise<LoginResponse> => {
  try {

   

      const response: AxiosResponse<LoginResponse> = await axios.post(`${BASE_URL}/login`, loginData);
      console.log('response:', response);

    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Define the function to add competency
export const addCompetency = async (competencyData: CompetencyData, token: string): Promise<AddCompetencyResponse> => {
  try {
    const response: AxiosResponse<AddCompetencyResponse> = await axios.post(`${BASE_URL}/addCompetencyToPerson`, competencyData , {
      headers: { token: `${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding competence:', error);
    console.log('data:', competencyData)
    console.log('token:', token)
    throw error;
  }
};
