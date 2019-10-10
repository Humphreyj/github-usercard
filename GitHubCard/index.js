/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

axios
  .get('https://api.github.com/users/humphreyj')
  .then(res => {
    console.log(res.data);
  })

const followersArray = [];


  function createCard(object) {
    const card = document.createElement('div');
    card.classList.add('card');
    //IMG
    const cardImg = document.createElement('img');
    card.appendChild(cardImg);
    //IMG
    //CARD INFO
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    card.appendChild(cardInfo);
    //start appending to card info
    //Name
    const name = document.createElement('h3');
    name.classList.add('name');
    cardInfo.appendChild(name);
    //Name

    //USERNAME
    const userName = document.createElement('p');
    userName.classList.add('username');
    cardInfo.appendChild(userName);
    //USERNAME

    //LOCATION
    const location = document.createElement('p');
    location.classList.add('location');
    cardInfo.appendChild(location);
    //LOCATION

    //Profile
    const profile = document.createElement('p')
    profile.classList.add('profile');
    cardInfo.appendChild(profile);
      //profile link
        const profileLink = document.createElement('a');
        profile.appendChild(profileLink);
      //profile link
    //Profile

    //Followers
    const followers = document.createElement('p');
    cardInfo.appendChild(followers);
    //Followers
    //Following
    const following = document.createElement('p');
    cardInfo.appendChild(following);
    //Following

    //bio
    const bio = document.createElement('p');
    cardInfo.appendChild(bio);
    //bio


    console.log(card);
    return card;
    
  }

  

  createCard();

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
