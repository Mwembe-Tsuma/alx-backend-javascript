export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    const isError = true; // Set to true to simulate an error

    if (isError) {
      reject(new Error(`Error: ${filename} cannot be processed`));
    } else {
      const processedData = `Processed data for ${filename}`;
      resolve(processedData);
    }
  });
}
