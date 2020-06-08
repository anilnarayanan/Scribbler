var postcard;

function deletePost(post) {
  postcard = post;
  console.log(postcard);

  document.querySelector(".bg-modal").style.display = "flex";
  document.querySelector(".modal-content").style.display = "flex";
  // var template =
  //   "Are you sure you want to delete this post?\
  //       <button class='trash-dialog-yes'>Yes</button>\
  //       <button class='trash-dialog-no' onclick='closeTrashPopup(trashPopup)'>No</button>";
  // document.getElementById("trashPopup").innerHTML += template;
}

function test() {
  postcard.remove();
  closeTrashPopup();
  location.reload();
}

function disp() {
  document.querySelector(".bg-modal").style.display = "flex";
  document.querySelector(".modal-content").style.display = "flex";
}

/**
 * Method to close/hide the trash diaglog
 */
function closeTrashPopup() {
  document.querySelector(".bg-modal").style.display = "none";
  document.querySelector(".modal-content").style.display = "none";
}
