export function isValidEmail(email) {
  let regEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,3})+$/;

  if (email === "") {
    return "Enter Email";
  } else if (regEx.test(email)) {
    return "Valid Email";
  } else if (!regEx.test(email)) {
    return "Invalid email";
  }
}

export function isValidPass(password) {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    if (password === "") {
      return "Enter Password";
    } else if (regExp.test(password)) {
      return "Valid Password";
    } else if (!regExp.test(password)) {
      return "Invalid Password";
    } 
  };


