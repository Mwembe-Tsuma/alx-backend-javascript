import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);
  const data = await Promise.allSettled([userPromise, photoPromise])
    .then((results) => results.map((result) => {
      if (result.status !== 'fulfilled') {
        return {
          status: 'rejected',
          value: result.reason.toString(),
        };
      }
      return result;
    }));
  return Promise.resolve(data);
}
