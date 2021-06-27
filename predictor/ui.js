class UI{
  constructor(){
    const profile = document.getElementById('profile');
  }

 //Show profile
  showProfile(data){
    //console.log(data.age);
    //console.log(data.name);
    profile.innerHTML = 
    `<div class="col-md-9">
    <div  style="margin-bottom: 5px;background-color	:rgb(69, 130, 236);width:135%;text-align: center;color:white;">User Name: ${data.name}</div>
    <br>
    <div style="margin-bottom: 5px;background-color	:grey; text-align: center;color:white;width:135%">User Age: ${data.age}</div>
    <br>
    <div style="margin-bottom: 5px;background-color	:rgb(69, 130, 236); text-align: center;color:white;width:135%">User Count: ${data.count}</div>
    </div>`
    ;
  }

  //Show alert
  showAlert(message,className){
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div  =  document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container =  document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);


    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //Clear Alert
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }

  //Clear Fields
  clearFields(){
    profile.innerHtml='';
  }
}
