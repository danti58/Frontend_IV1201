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


export interface AvailabilityData {
  // Properties of the availability data 
  requestedUsername: string;
  fromDate: string;
  toDate: string;
  
  
}

interface AvailabilityResponse {
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

/** 
 * Requests a password reset token
 * 
 * @param token
 * @returns
 */
export const requestPasswordResetLink = async (email: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${BASE_URL}/requestPasswordResetLink`, {
      headers: { email: email }
    });
    return response.data;
  } catch (error) {
    console.error('Failed to request password reset link', error);
    throw error;
  }
};

/**
 * resets the password to a new one
 * 
 * @param token
 * @param newPassword
 * @returns
 */
export const resetPassword = async (token: string, newPassword: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.post(`${BASE_URL}/resetPassword`, {
      token:token, newPassword:newPassword
    });
    return response.data;
  } catch (error) {
    console.error('Failed to reset password', error);
    throw error;
  }
};

/**
 * Adds a competency to a person
 * 
 * @param token
 * @returns
 */
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

export const addAvailability = async (availabilityData: AvailabilityData, token: string): Promise<AvailabilityResponse> => {
  try {
    const response: AxiosResponse<AvailabilityResponse> = await axios.post(`${BASE_URL}/addAvailability`, availabilityData , {
      headers: { token: `${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding competence:', error);
    console.log('data:', availabilityData)
    console.log('token:', token)
    throw error;
  }
};
