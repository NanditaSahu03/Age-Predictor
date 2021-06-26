class Age{
  //Get Memes 
  async getAge(username){
    console.log(username);
     const response = await fetch(`https://api.agify.io/?name=${username}`);
     
     const responseData = await response.json();

     return responseData;
  }
}
