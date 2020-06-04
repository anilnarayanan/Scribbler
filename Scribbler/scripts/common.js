function signUp() {
  var template =
    "<div id='segment2-child' class='segment-2-child-div'>\
    <form><p class='title-prop'><label>Get Started</label><span class='close-win-prop'><i class='fa fa-times' aria-hidden='true' onclick='closeSegment2Parent()'></i></span></p>\
          <hr>\
          <p class='segment-2-p'><label class='label-prop'>Name</label></p>\
          <p class='segment-2-p'>\
              <input type='text' id='input-name' class='input-text-prop input-text-prop-width' placeholder='Enter your name' onblur='inputValidation(this)' required'></input>\
          </p>\
          <p class='segment-2-p'><label class='label-prop'>Username</label></p>\
          <p class='segment-2-p'>\
              <input type='text' id='input-username' class='input-text-prop input-text-prop-width' placeholder='Enter your username'></input>\
          </p>\
          <p class='segment-2-p'><label class='label-prop'>Password</label></p>\
          <p class='segment-2-p'>\
              <input type='password' id='input-pwd' class='input-text-prop input-text-prop-width' placeholder='Enter your password'></input>\
          </p>\
          <p class='segment-2-p'><label class='label-prop'>Confirm Password</label></p>\
          <p class='segment-2-p'>\
              <input type='password' id='input-confirmpwd' class='input-text-prop input-text-prop-width' placeholder='Re-enter your password'></input>\
          </p>\
          </form><p class='segment-2-p'><button class='segment-2-btn' onclick='signUpUser(input-name, input-username, input-pwd, input-confirmpwd)'>Sign Up</button></p>\
          </div>";
  document.getElementById("segment2").innerHTML = template;
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
    <form><p class='title-prop'><label>Welcome Back!</label><span class='close-win-prop'><i class='fa fa-times' aria-hidden='true' onclick='closeSegment2Parent()'></i></span></p>\
          <hr>\
          <p class='segment-2-p'><label class='label-prop'>Username</label></p>\
          <p class='segment-2-p'>\
              <input type='text' id='input-username' class='input-text-prop input-text-prop-width' placeholder='Enter your username'></input>\
          </p>\
          <p class='segment-2-p'><label class='label-prop'>Password</label></p>\
          <p class='segment-2-p'>\
              <input type='password' id='input-pwd' class='input-text-prop input-text-prop-width' placeholder='Enter your password'></input>\
          </p>\
          </form><p class='segment-2-p'><button class='segment-2-btn' onclick='signUpUser(input-name, input-username, input-pwd, input-confirmpwd)'>Sign In</button></p>\
          <p class='segment-2-p2'>Not a member? <a href='#' onclick = 'closeSegment2Parent();signUp()'>Sign Up</a></p>\
          </div>";
  document.getElementById("segment2").innerHTML = template;
}

function createPost() {
  var template =
    "<div id='segment2-child' class='segment-2-child-div'>\
    <form><p class='title-prop'><label>Pen Your Post</label><span class='close-win-prop'><i class='fa fa-times' aria-hidden='true' onclick='closeSegment2Parent()'></i></span></p>\
          <hr>\
          <p class='segment-2-p'><label class='label-prop'>Title</label></p>\
          <p class='segment-2-p'>\
              <input type='text' id='input-username' class='input-text-prop input-text-prop-width' placeholder='Enter title of your post'></input>\
          </p>\
          <p class='segment-2-p'><label class='label-prop'>Contents</label></p>\
          <p class='segment-2-p'>\
              <textarea class='input-text-prop input-textarea-prop' rows='20' cols='120' placeholder='Enter the contents of your post'></textarea>\
          </p>\
          </form><p class='segment-2-p'><button class='segment-2-btn' onclick='' style=''>Create</button></p>\
          </div>";
  document.getElementById("segment2").innerHTML = template;
}

function redirectAllPostsPage() {
  window.open("./html/postslist.html", "_self");
}
