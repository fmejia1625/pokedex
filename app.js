// link for API 
// document.ready function
// onclick function to search for the info
// be able to input the user's search into the api 
// populate the data 
// set a variable for the user input
// fetch the data
// async await to grab the data
// change the data to json data
// prevent default info from populating

// create document.ready function
// using jQuery notation, grab form, use .on method, takes two arguments. When passing submit, pass callback function, within it pass the event and then use .preventDefault() to cancel action. create const variable userInput and then assign it via jquery notation html input [type="text"] and use .val to target the value of it. console.log(userInput) to make sure everything works. 
$(()=>{

  $('form').on("submit", (event)=>{
      event.preventDefault()
      const userInput = $('input[type="text"]').val();


      
     
      
      console.log(userInput)
      getPokeData(userInput)
  })

  // With async function, just want to grab things from that API first before placing it in the event function. need a variable to hold the repsonse. 
  async function getPokeData(userInput){
    // async await to grab data
    // fetch the data
    const response = await fetch( `https://pokeapi.co/api/v2/pokemon/${userInput}`)
    // change data to JSON
    const data = await response.json() 
    // grab id using hashtag and place it inside the async function getPokeData
    
   
    $('#pokeImage').append(data.sprites.front_default);


    $('#pokeName').html(data.forms[0].name);
    $('#pokeType').html(data.types[0].type.name);
    $('#pokeNum').html(data.id);
    console.log(data);
  }

})

  // grab input type text and grab value of it. set variable for user input
  // can pass in an argument in the callback function such as userInput, then pass userInput in the async function without having to move evrything into the document.ready function scope. 

