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

export const registerPerson = async (registerData: RegisterData): Promise<RegisterResponse> => {
  try {
    const response: AxiosResponse<RegisterResponse> = await axios.post(`${BASE_URL}/register`, registerData);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

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
export const addCompetency = async (competencyData: CompetencyData): Promise<AddCompetencyResponse> => {
  try {
    const response: AxiosResponse<AddCompetencyResponse> = await axios.post(`${BASE_URL}/addCompetencyToPerson`, competencyData);
    return response.data;
  } catch (error) {
    console.error('Error adding competence:', error);
    throw error;
  }
};