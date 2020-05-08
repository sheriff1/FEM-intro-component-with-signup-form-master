
/// If an error occurrs on the form field
/// Add CSS class of .form-error to that form field using ID
/// & set display: block to ____-error-occurred

document.getElementById("submit-button").addEventListener("click", () => {
  
  if( document.getElementById("password").value === ""){
    document.getElementById("password").classList.add("form-error");
    document.getElementsByClassName("password-error-occurred")[0].style.display = "block";
  }

  if( document.getElementById("email").value === ""){
    document.getElementById("email").classList.add("form-error");
    document.getElementsByClassName("email-error-occurred")[0].style.display = "block";
  }
  if( document.getElementById("first-name").value === ""){
    document.getElementById("first-name").classList.add("form-error");
    document.getElementsByClassName("first-name-error-occurred")[0].style.display = "block";
  }
  if( document.getElementById("last-name").value === ""){
    document.getElementById("last-name").classList.add("form-error");
    document.getElementsByClassName("last-name-error-occurred")[0].style.display = "block";
  }

});