
/// If an error occurrs on the form field
/// Add CSS class of .form-error to that form field using ID
/// & set display: block to ____-error-occurred

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.getElementById("submit-button").addEventListener("click", () => {
  
  console.log("WOPPPY");
  

  if( document.getElementById("password").value === ""){
    document.getElementById("password").classList.add("form-error");
    document.getElementsByClassName("password-error-occurred")[0].style.display = "block";
  }
  else{
    document.getElementById("password").classList.remove("form-error");
    document.getElementsByClassName("password-error-occurred")[0].style.display = "none";
  }

  if( !re.test(document.getElementById("email").value.toLowerCase()) || document.getElementById("email").value === ""){
    document.getElementById("email").classList.add("form-error");
    document.getElementsByClassName("email-error-occurred")[0].style.display = "block";
  }
  else{
    document.getElementById("email").classList.remove("form-error");
    document.getElementsByClassName("email-error-occurred")[0].style.display = "none";
  }

  if( document.getElementById("first-name").value === ""){
    document.getElementById("first-name").classList.add("form-error");
    document.getElementsByClassName("first-name-error-occurred")[0].style.display = "block";
  }
  else{
    document.getElementById("first-name").classList.remove("form-error");
    document.getElementsByClassName("first-name-error-occurred")[0].style.display = "none";
  }

  if( document.getElementById("last-name").value === ""){
    document.getElementById("last-name").classList.add("form-error");
    document.getElementsByClassName("last-name-error-occurred")[0].style.display = "block";
  }
  else{
    document.getElementById("last-name").classList.remove("form-error");
    document.getElementsByClassName("last-name-error-occurred")[0].style.display = "none";
  }

});