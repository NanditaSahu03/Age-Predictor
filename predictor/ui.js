class UI{
  constructor(){
    const profile = document.getElementById('profile');
  }

 //Show profile
  showProfile(data){
    console.log(data.age);
    this.profile.innerHTML = 
    `<div>
    <span>User Name: ${data.name}</span>
    <span>User Age: ${data.age}</span>
    <span>User Count: ${data.count}</span>
    </div>`
    ;
  }

  // //Show alert
  // showAlert(message,className){
  //   // Clear any remaining alerts
  //   this.clearAlert();
  //   // Create div
  //   const div  =  document.createElement('div');
  //   // Add classes
  //   div.className = className;
  //   // Add text
  //   div.appendChild(document.createTextNode(message));
  //   // Get parent
  //   const container =  document.querySelector('.searchContainer');
  //   // Get search box
  //   const search = document.querySelector('.search');
  //   // Insert alert
  //   container.insertBefore(div, search);

  //   // Timeout after 3 sec
  //   setTimeout(() => {
  //     this.clearAlert();
  //   }, 3000);
  // }

  // //Clear Alert
  // clearAlert() {
  //   const currentAlert = document.querySelector('.alert');

  //   if(currentAlert){
  //     currentAlert.remove();
  //   }
  // }

  //Clear Fields
  clearFields(){
    this.profile.innerHtml='';
  }
}
