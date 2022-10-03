import axios, { AxiosResponse } from 'axios';
axios.defaults.baseURL = 'https://62f25c7218493ca21f321051.mockapi.io';

export const getContacts = (): Promise<AxiosResponse<{ id: string, name:string, phone:string }[]>> => {
  return axios.get('/contacts');
};

export const createContact = (contact: { name:string, phone: string}): Promise<AxiosResponse<{name:string, phone:string }>> => {
  return axios.post('/contacts', contact);
};

export const deleteContact = (id: string): Promise<AxiosResponse<{ id: string }>> => {
  return axios.delete(`contacts/${id}`);
};
