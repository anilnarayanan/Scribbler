function signUp() {
  var template =
    "<div id='segment2-modal' class='segment-2-child-modal'>\
    <form><p class='title-prop'><label>Get Started</label><span class='close-win-prop'><i class='fa fa-times' aria-hidden='true' onclick='closeSegment2Parent()'></i></span></p>\
          <hr>\
          <p class='segment-2-p'><label class='label-prop'>Name</label></p>\
          <p class='segment-2-p'>\
              <input type='text' id='input-name' class='input-text-prop input-text-prop-width' placeholder='Enter your name' required></input>\
          </p>\
          <p class='segment-2-p'><label class='label-prop'>Username</label></p>\
          <p class='segment-2-p'>\
              <input type='text' id='input-username' class='input-text-prop input-text-prop-width' placeholder='Enter your username' required></input>\
          </p>\
          <p class='segment-2-p'><label class='label-prop'>Password</label></p>\
          <p class='segment-2-p'>\
              <input type='password' id='input-pwd' class='input-text-prop input-text-prop-width' placeholder='Enter your password' required></input>\
          </p>\
          <p class='segment-2-p'><label class='label-prop'>Confirm Password</label></p>\
          <p class='segment-2-p'>\
              <input type='password' id='input-confirmpwd' class='input-text-prop input-text-prop-width' placeholder='Re-enter your password' required></input>\
          </p>\
          <p class='segment-2-p'><button class='segment-2-btn' onclick='signUpUser(input-name, input-username, input-pwd, input-confirmpwd)'>Sign Up</button></p>\
          </form></div>";
  document.getElementById("segment2").innerHTML = template;
}

function signUpUser(name, username, pwd, confirmpwd) {}

function closeSegment2Parent() {
  document.getElementById("segment2-modal").remove();
}

function signIn() {
  var template =
    "<div id='segment2-modal' class='segment-2-child-modal'>\
    <form><p class='title-prop'><label>Welcome Back!</label><span class='close-win-prop'><i class='fa fa-times' aria-hidden='true' onclick='closeSegment2Parent()'></i></span></p>\
          <hr>\
          <p class='segment-2-p'><label class='label-prop'>Username</label></p>\
          <p class='segment-2-p'>\
              <input type='text' id='input-username' class='input-text-prop input-text-prop-width' placeholder='Enter your username' required></input>\
          </p>\
          <p class='segment-2-p'><label class='label-prop'>Password</label></p>\
          <p class='segment-2-p'>\
              <input type='password' id='input-pwd' class='input-text-prop input-text-prop-width' placeholder='Enter your password' required></input>\
          </p>\
          <p class='segment-2-p2'>Not a member? <a href='#' onclick = 'closeSegment2Parent();signUp()'>Sign Up</a></p>\
          <p class='segment-2-p'><button class='segment-2-btn' onclick='signUpUser(input-name, input-username, input-pwd, input-confirmpwd)'>Sign In</button></p>\
          </form></div>";
  document.getElementById("segment2").innerHTML = template;
}

function createPost() {
  var template =
    "<div id='segment2-modal' class='segment-2-child-modal'>\
        <form><div><p class='title-prop'><label>Pen Your Post</label><span class='close-win-prop'><i class='fa fa-times' aria-hidden='true' onclick='closeSegment2Parent()'></i></span></p>\
          <hr>\
          <p class='segment-2-p'><label class='label-prop'>Title</label></p>\
          <p class='segment-2-p'>\
              <input type='text' id='input-username' class='input-text-prop input-text-prop-width' placeholder='Enter title of your post' required></input>\
          </p>\
          <p class='segment-2-p'><label class='label-prop'>Contents</label></p>\
          <p class='segment-2-p'>\
              <textarea class='input-text-prop input-text-prop-width' rows='20' cols='120' placeholder='Enter the contents of your post' required></textarea>\
          </p>\
          <span class='test'><p class='segment-2-p'><button class='createPostBtn' onclick='' style=''>Create</button></p></span>\
      </div></form>\
    </div>";
  document.getElementById("segment2").innerHTML = template;
}

function redirectAllPostsPage() {
  window.open("./html/postslist.html", "_self");
}
