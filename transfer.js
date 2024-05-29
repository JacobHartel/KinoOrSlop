const fs = require('fs');
const csv = require('csv-parser');

const csvFilePath = 'train.csv';
const jsonFilePath = 'train.json';

// Function to read CSV file and convert to JSON
function convertCsvToJson(csvFilePath, jsonFilePath) {
  const jsonArray = [];

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
      // Remove username from tweet text
      const tweetText = row.tweet.replace(/^@\w+\s*/, ''); // Removes username at the beginning
      
      // Push modified row to jsonArray
      jsonArray.push({ ...row, tweet: tweetText });
    })
    .on('end', () => {
      fs.writeFile(jsonFilePath, JSON.stringify(jsonArray, null, 2), (err) => {
        if (err) {
          console.error('Error writing JSON file:', err);
        } else {
          console.log(`JSON file saved successfully at ${jsonFilePath}`);
        }
      });
    })
    .on('error', (error) => {
      console.error('Error reading CSV:', error);
    });
}

// Example usage
convertCsvToJson(csvFilePath, jsonFilePath);
