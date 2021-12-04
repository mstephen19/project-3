import {Paper} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import EventList from '../components/EventList';
import Auth from '../utils/auth';
import {SET_USER} from '../utils/redux/actions';

export default function Dashboard() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const {email, username, _id} = Auth.getProfile().data;

  const [user, setUser] = useState({
    _id,
    username,
    email,
  });

  console.log(user);

  useEffect(() => {
    if (!state.user) {
      dispatch({
        type: SET_USER,
        user: user,
      });
    }
  }, [dispatch, state, user]);

  console.log(state);

  return <EventList />;
}
