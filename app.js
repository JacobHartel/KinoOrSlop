const jsonFile = 'transfer.json';

fetch(jsonFile)
  .then(response => response.json())
  .then(data => {
    let countk = 0;
    let counts = 0;
    document.getElementById('newTweet').addEventListener('click', () => {
      placenewTweet()
    });

    document.getElementById('Kino').addEventListener('click', () => {
      placenewTweet()
      
      let kinoCount = document.getElementById('KinoCount');
      countk++;
      kinoCount.innerHTML = "";
      kinoCount.innerHTML = countk;

    });

    document.getElementById('Slop').addEventListener('click', () => {
      placenewTweet()
      
      let slopCount = document.getElementById('SlopCount');
      counts++;
      slopCount.innerHTML = "";
      slopCount.innerHTML = counts;
    });

    function placenewTweet(){
      let randomIndex = randomNum(data.length);
      let tweetElement = document.getElementById('tweet1');
      tweetElement.innerHTML = data[randomIndex].tweet;
    };
    

    function randomNum(max) {
      return Math.floor(Math.random() * max);
    }
  })
  .catch(error => console.error('Error fetching JSON:', error));

