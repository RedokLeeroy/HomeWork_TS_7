import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { FindByName } from './FindByName/FindByName';
import { addItemSelector, filterItemSelector } from '../redux/items-selector';
import { filterAction } from '../redux/ItemsActions';
import { deleteUser, fetchUsers } from '../redux/ItemsOperations';
import { ChangeEvent, useEffect } from 'react';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../redux/hooks'

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(addItemSelector);
  const filteritem = useAppSelector(filterItemSelector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
    const { value } = event.target as EventTarget & {value: string}
    dispatch(filterAction(value));
  };

  const handleFilters = ():{name:string, phone:string, id:string}[] => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filteritem.toLowerCase())
    );
  };

  const handleDelete = (id:string):void => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      <Section title="phonebook">
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        <FindByName value={filteritem} onChange={handleChange} />
        <Contacts contact={handleFilters()} onDelete={handleDelete} />
      </Section>
    </>
  );
};
