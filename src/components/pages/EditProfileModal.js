import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  CustomInput,
  ModalFooter,
} from 'reactstrap';
import { addLevel, eidtLevel } from '../../redux/actions/levelActions';
import { edituser } from '../../redux/actions/userActions';

const EditProfileModal = () => {
  const user = useSelector((state) => state.userReducer.user);
  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [adress, setAdress] = useState(user.adress);
  const [phone, setPhone] = useState(user.phone);

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const edittuser = () => {
    const modifiedUser = {
      firstName,
      lastName,
      email,
      adress,
      phone,
    };
    console.log(user._id);
    dispatch(edituser(user._id, modifiedUser));

    history.push('/profile');
    // setFirstName('');
    // setLastName('');
    // setEmail('');
    // setPhone('');
    // setAdress('');
    toggle();
  };

  return (
    <div style={{ padding: '0 15px' }}>
      <Button color='success' onClick={toggle} href='#'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          fill='white '
          class='bi bi-pencil-square'
          viewBox='0 0 16 16'
          onClick={toggle}
        >
          <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
          <path
            fill-rule='evenodd'
            d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
          />
        </svg>
        <span className='ml-2'>Edit Pofile</span>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit profile</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for='firstName'>first name</Label>
              <Input
                type='text'
                value={firstName}
                name='firstName'
                id='firstName'
                placeholder='firstName'
                className='mb-3'
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Label for='lastName'>last name</Label>
              <Input
                type='text'
                value={lastName}
                name='lastName'
                id='lastName'
                placeholder='lastName'
                className='mb-3'
                onChange={(e) => setLastName(e.target.value)}
              />
              <Label for='Email'>Email</Label>

              <Input
                type='email'
                value={email}
                name='Email'
                id='Email'
                placeholder='Email'
                className='mb-3'
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for='Adress'>adress</Label>

              <Input
                type='text'
                value={adress}
                name='Adress'
                id='Adress'
                placeholder='Adress'
                className='mb-3'
                onChange={(e) => setAdress(e.target.value)}
              />
              <Label for='Phone'>Phone</Label>

              <Input
                type='text'
                value={phone}
                name='Phone'
                id='Phone'
                placeholder='Phone'
                className='mb-3'
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={edittuser}>
            confirm
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditProfileModal;
