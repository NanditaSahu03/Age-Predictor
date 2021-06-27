//Initalize Age
const age = new Age;

//Initialize UI
const ui = new UI;

//Search input
const username = document.getElementById('searchName');

//Add event listener to name
username.addEventListener('keyup',(e) => {
   //const nameText=e.target.value;
   const nameText=e.target.value;

   if (nameText !== '') {
     //Make http call
     age.getAge(nameText)
     .then(data => {
       if (data.age === null) {
         //Show alert
         ui.showAlert('Give a correct name','alert alert-danger')
       }else{

         //Show profile
         //console.log(data.name);
         ui.showProfile(data);
       }
     })
     
   }else{
     //Clear Fields
     ui.clearFields();
   }
});
