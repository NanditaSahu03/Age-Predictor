class Age{
  //Get Age 
  async getAge(username){
    //console.log(username);
     const response = await fetch(`https://api.agify.io/?name=${username}`);
     
     const responseData = await response.json();

     return responseData;
  }
}
