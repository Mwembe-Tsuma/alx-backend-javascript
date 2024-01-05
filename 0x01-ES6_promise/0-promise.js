// Prototype function returning a Promise
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve(); // Resolve with the data when successful
      } else {
        reject(); // Reject with an error when unsuccessful
      }
    }, 1000);
  });
}
