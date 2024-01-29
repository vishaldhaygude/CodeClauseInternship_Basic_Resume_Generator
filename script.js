function addNewweField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
 }
 function addNewaqField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
 }
 function addNewpField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pField");
    newNode.classList.add("mt-3")
    newNode.setAttribute("rows", 3);
    let pOb = document.getElementById("p");
    let pAddButtonOb = document.getElementById("pAddButton");
    pOb.insertBefore(newNode, pAddButtonOb);
 }
 //generating cv
 function generateCV(){

   //name
  let NameField = document.getElementById("NameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = NameField;
  document.getElementById("nameT2").innerHTML = NameField;

  //email
  let EmailField = document.getElementById("EmailField").value;
  let emailT = document.getElementById("emailT");
  emailT.innerHTML = EmailField;

  //contact
  let ContactField = document.getElementById("ContactField").value;
  let contactT = document.getElementById("contactT");
  contactT.innerHTML = ContactField;
  
  //Address
  let AddressField = document.getElementById("AddressField").value;
  let addressT = document.getElementById("addressT");
  addressT.innerHTML = AddressField;

  //linkdin
  let LinkedlnField = document.getElementById("LinkedlnField").value;
  let linkedT = document.getElementById("linkedT");
  linkedT.innerHTML = LinkedlnField;

  //github
  let GitHubField = document.getElementById("GitHubField").value;
  let githubT = document.getElementById("githubT");
  githubT.innerHTML = GitHubField;

  //objective
  let ObjectiveField = document.getElementById("ObjectiveField").value
  let ObjectiveT = document.getElementById("ObjectiveT");
  ObjectiveT.innerHTML = ObjectiveField;
  
  //workexperience
  let wes = document.getElementsByClassName("wefield");
  let str = "" ;
  for (let e of wes){
   str = str +`<li> ${e.value} </li>`;  
  }
  document.getElementById("weT").innerHTML = str;


   //aq
  let aqs = document.getElementsByClassName("aqfield");
  let str1 = "" ;
  for (let e of aqs){
   str1 = str1 +"<li> ${e.value} </li>";  
  }
  document.getElementById("aqT").innerHTML = str1;


  //project
  let ps = document.getElementsByClassName("pfield");
  let str2 = "" ;
  for (let e of ps){
   str2 = str2 +`<li> ${e.value} </li>`;
  }
  document.getElementById("projectT").innerHTML = str2;


  // Photo
  let photoInput = document.getElementById("photo1");
  let photoPreview = document.getElementById("photo2");

  if (photoInput.files.length > 0) {
      let photoFile = photoInput.files[0];
      let reader = new FileReader();

      reader.onload = function (e) {
          photoPreview.src = e.target.result;
      };

      reader.readAsDataURL(photoFile);
  }

  
  document.getElementById("cv-form").style.display = "none"
  document.getElementById("cv-template").style.display = "block"

  //photo
  

















 }
 
 //print cv
 function printCV(){
   window.print();
 }

