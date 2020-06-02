// function signUp() {
//   var template =
//     "<span class='segment-2-span'>\
//         <p class='segment-2-title'><label>Get Started</label><span class='segment-2-close'><i class='fa fa-times' aria-hidden='true'></i></span></p>\
//         <hr>\
//         <p class='segment-2-p'><label class='segment-2-label'>Name</label></p>\
//         <p class='segment-2-p'>\
//             <input type='text' class='segment-2-input' placeholder='Enter your name'></input>\
//         </p>\
//         <p class='segment-2-p'><label class='segment-2-label'>Username</label></p>\
//         <p class='segment-2-p'>\
//             <input type='text' class='segment-2-input' placeholder='Enter your username'></input>\
//         </p>\
//         <p class='segment-2-p'><label class='segment-2-label'>Password</label></p>\
//         <p class='segment-2-p'>\
//             <input type='password' class='segment-2-input' placeholder='Enter your password'></input>\
//         </p>\
//         <p class='segment-2-p'><label class='segment-2-label'>Confirm Password</label></p>\
//         <p class='segment-2-p'>\
//             <input type='password' class='segment-2-input' placeholder='Re-enter your password'></input>\
//         </p>\
//         <p class='segment-2-p'><button class='segment-2-btn'>Sign Up</button></p>\
//       </span>";
//   document.getElementById("segment2").innerHTML += template;
// }

function signUp() {
  var template =
    "<div id='segment2-child' class='segment-2-child-div'>\
    <p class='segment-2-title'><label>Get Started</label><span class='segment-2-close'><i class='fa fa-times' aria-hidden='true'></i></span></p>\
          <hr>\
          <p class='segment-2-p'><label class='segment-2-label'>Name</label></p>\
          <p class='segment-2-p'>\
              <input type='text' class='segment-2-input' placeholder='Enter your name'></input>\
          </p>\
          <p class='segment-2-p'><label class='segment-2-label'>Username</label></p>\
          <p class='segment-2-p'>\
              <input type='text' class='segment-2-input' placeholder='Enter your username'></input>\
          </p>\
          <p class='segment-2-p'><label class='segment-2-label'>Password</label></p>\
          <p class='segment-2-p'>\
              <input type='password' class='segment-2-input' placeholder='Enter your password'></input>\
          </p>\
          <p class='segment-2-p'><label class='segment-2-label'>Confirm Password</label></p>\
          <p class='segment-2-p'>\
              <input type='password' class='segment-2-input' placeholder='Re-enter your password'></input>\
          </p>\
          <p class='segment-2-p'><button class='segment-2-btn'>Sign Up</button></p>\
          </div>";
  document.getElementById("segment2-parent").innerHTML = template;
}

function signIn() {}
