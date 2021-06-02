import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectAuth, LoginStatus } from '../Login/authslice';

export function Note() {

  const auth = useAppSelector(selectAuth);
  const loggedIn = auth.status === LoginStatus.LOGGED_IN;

  if (!loggedIn) return null;
  return (
    <div>
      <NoteField />
    </div>
  );
}

function NoteField() {
  return <textarea >Note goes here...</textarea>;
}