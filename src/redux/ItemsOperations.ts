import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, createContact, deleteContact } from '../Service/service';

export const fetchUsers = createAsyncThunk('contacts/fetchUsers', async () => {
  const response = await getContacts();
  return response.data;
});

export const addUsers = createAsyncThunk('contacts/addUser', async (contact: { name:string, phone: string}) => {
  const response = await createContact(contact);
  return response.data;
});

export const deleteUser = createAsyncThunk('contacts/deleteUsers', async (id: string) => {
  const response = await deleteContact(id);
  return response.data.id;
});
