const getData = () => {
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  if (email == "") {
    document.getElementById("email").focus();
  } else {
    if (phone == "") {
      document.getElementById("phone").focus();
    } else {
      console.log(`${email} ${phone}`);
      email = document.getElementById("email").value = "";
      phone = document.getElementById("phone").value = "";
      document.getElementById("email").focus();
    }
  }
};
