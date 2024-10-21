import { useState, useEffect } from "react";

export default function useLocalStorage() {

  const [email, setEmail] = useState('');

  // firstly getting the email if exists
  useEffect(() => {
    if (localStorage.getItem('email')) {
      setEmail(localStorage.getItem('email'));
    }
  }, [])  // act as a component did mount only 

  // secondly setting the email.
  useEffect(() => {
    localStorage.setItem('email', email);
  }, [email])  // act as a component did mount and also updated whenever email is changing.

  return { email, setEmail }

}