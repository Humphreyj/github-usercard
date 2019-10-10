/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   /* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
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

const cards = document.querySelector('.cards');
console.log(cards);

axios
  .get('https://api.github.com/users/humphreyj')
  .then(res => {
     let userData = res.data;
     console.log(userData);
    console.log(res.data.avatar_url);
    cards.appendChild(createCard(userData));

    return axios 
            .get("https://api.github.com/users/Humphreyj/followers")
            .then(response => {
              console.log(response.data);
              response.data.forEach(item => {
                cards.appendChild(createCard(item));
              })
            })
    
  })
  .catch(err => {
    console.log(err);
  })

let followersArray = ['brianetaveras','andrewogle','Franzferdinan51','daetor2012'];
// followersArray.forEach(person => {
//   axios
//   .get(`https://api.github.com/users/${person}`)
//   .then(res => {
//      let userData = res.data;
//     //  console.log(userData);
    
//     cards.appendChild(createCard(userData));
    
//   })
//   .catch(err => {
//     console.log(err);
//   })
// })



  function createCard(object) {
    const card = document.createElement('div');
    card.classList.add('card');
    //IMG
    const cardImg = document.createElement('img');
    cardImg.src= object.avatar_url;
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
    name.textContent = object.name;
    cardInfo.appendChild(name);
    //Name

    //USERNAME
    const userName = document.createElement('p');
    userName.classList.add('username');
    userName.textContent = object.login;
    cardInfo.appendChild(userName);
    //USERNAME

    //LOCATION
    const location = document.createElement('p');
    location.classList.add('location');
    location.textContent = object.location
    cardInfo.appendChild(location);
    //LOCATION

    //Profile
    const profile = document.createElement('p')
    profile.classList.add('profile');
    cardInfo.appendChild(profile);
      //profile link
        const profileLink = document.createElement('a');
        profileLink.href = object.html_url;
        
        profile.innerHTML= `<a href='${profileLink}'>${profileLink}</a>`;
      //profile link
    //Profile

    //Followers
    const followers = document.createElement('p');
    // followersArray = [object.followers];
    

    object.followers === undefined ? followers.textContent = '' : followers.textContent = `Followers: ${object.followers}`;
    cardInfo.appendChild(followers);
    //Followers
    //Following
    
    const following = document.createElement('p');
    object.following === undefined ? following.textContent = '' : following.textContent = `Following: ${object.following}`;
    cardInfo.appendChild(following);
    //Following

    //bio
    const bio = document.createElement('p');
    if(object.bio === null) {
      bio.textContent = 'No Bio Provided'
    }else {
      bio.textContent = object.bio;
    }
    cardInfo.appendChild(bio);
    //bio


    // console.log(card);
    return card;
    
  }

  

  

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
