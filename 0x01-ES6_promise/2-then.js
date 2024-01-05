// Prototype function to handle the response from the API Promise
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      console.error(error.message);
      return new Error(); // Return an empty Error object on rejection
    });
}
