function signUp() {
  var template =
    "<div id='segment2-child' class='segment-2-child-div'>\
    <form><p class='segment-2-title'><label>Get Started</label><span class='segment-2-close'><i class='fa fa-times' aria-hidden='true' onclick='closeSegment2Parent()'></i></span></p>\
          <hr>\
          <p class='segment-2-p'><label class='segment-2-label'>Name</label></p>\
          <p class='segment-2-p'>\
              <input type='text' id='input-name' class='segment-2-input' placeholder='Enter your name' onblur='inputValidation(this)' required'></input>\
          </p>\
          <p class='segment-2-p'><label class='segment-2-label'>Username</label></p>\
          <p class='segment-2-p'>\
              <input type='text' id='input-username' class='segment-2-input' placeholder='Enter your username'></input>\
          </p>\
          <p class='segment-2-p'><label class='segment-2-label'>Password</label></p>\
          <p class='segment-2-p'>\
              <input type='password' id='input-pwd' class='segment-2-input' placeholder='Enter your password'></input>\
          </p>\
          <p class='segment-2-p'><label class='segment-2-label'>Confirm Password</label></p>\
          <p class='segment-2-p'>\
              <input type='password' id='input-confirmpwd' class='segment-2-input' placeholder='Re-enter your password'></input>\
          </p>\
          </form><p class='segment-2-p'><button class='segment-2-btn' onclick='signUpUser(input-name, input-username, input-pwd, input-confirmpwd)'>Sign Up</button></p>\
          </div>";
  document.getElementById("segment2-parent").innerHTML = template;
}

function signUpUser(name, username, pwd, confirmpwd) {}

function inputValidation(inputTxt) {
  if (inputTxt.value == "") {
    console.log(inputTxt.value);
    inputTxt.focus();
  }
}

function closeSegment2Parent() {
  document.getElementById("segment2-child").remove();
}

function signIn() {
  var template =
    "<div id='segment2-child' class='segment-2-child-div'>\
    <form><p class='segment-2-title'><label>Welcome Back!</label><span class='segment-2-close'><i class='fa fa-times' aria-hidden='true' onclick='closeSegment2Parent()'></i></span></p>\
          <hr>\
          <p class='segment-2-p'><label class='segment-2-label'>Username</label></p>\
          <p class='segment-2-p'>\
              <input type='text' id='input-username' class='segment-2-input' placeholder='Enter your username'></input>\
          </p>\
          <p class='segment-2-p'><label class='segment-2-label'>Password</label></p>\
          <p class='segment-2-p'>\
              <input type='password' id='input-pwd' class='segment-2-input' placeholder='Enter your password'></input>\
          </p>\
          </form><p class='segment-2-p'><button class='segment-2-btn' onclick='signUpUser(input-name, input-username, input-pwd, input-confirmpwd)'>Sign In</button></p>\
          <p class='segment-2-p2'>Not a member? <a href='#' onclick = 'closeSegment2Parent();signUp()'>Sign Up</a></p>\
          </div>";
  document.getElementById("segment2-parent").innerHTML = template;
}
