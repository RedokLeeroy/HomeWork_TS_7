import { ChangeEvent, useState } from 'react';
import { FormSubmit } from './FormSubmit';
import { NameInput } from './NameInput';
import { PhoneInput } from './PhoneInput';
import {useAppDispatch, useAppSelector} from '../../redux/hooks'
import { addItemSelector } from '../../redux/items-selector';
import { addUsers } from '../../redux/ItemsOperations';
import React from 'react';

//---------------------------------------------------------------------------------//

export const PhonebookForm = () => {
  const [nameEl, setNameEl] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(addItemSelector);
  console.log(contacts);

  const handSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const isHere = contacts.some(({ name }:{name:string}) => nameEl === name);
    if (isHere) {
      alert(`Name already in contacts`);
      return;
    } else {
      const contact = { name: nameEl, phone };
      dispatch(addUsers(contact));
      setNameEl('');
      setPhone('');
    }
  };

  const handlerInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as EventTarget & {name:string, value:string}
    if (name === 'name') {
      setNameEl(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  return (
    <form onSubmit={handSubmit}>
      <NameInput value={nameEl} name="name" func={handlerInput}></NameInput>
      <PhoneInput value={phone} name="phone" func={handlerInput}></PhoneInput>
      <FormSubmit title="Add contact"></FormSubmit>
    </form>
  );
};
