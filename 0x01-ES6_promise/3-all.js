import { uploadPhoto, createUser } from './utils';

// Prototype function to handle profile signup
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const { body } = values[0];
      const { firstName, lastName } = values[1];
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
