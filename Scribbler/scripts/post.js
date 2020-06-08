var postcard;
var nLikes = 0;

/**
 * On document load, load post details appropriately between the tags
 */
window.onload = function () {
  var id = this.sessionStorage.getItem("id");
  document.getElementById("author").innerHTML = this.postDetails[id].author;
  document.getElementById("title").innerHTML = this.postDetails[id].title;
  document.getElementById("content").innerHTML = this.postDetails[id].content;
  document.getElementById("nLikes").innerHTML =
    "Be the first one to like this!";
};

/**
 * Method to edit Title and Contents of a post
 */
function edit() {
  document.getElementById("edit").innerHTML =
    "Save <i id='save' class='fa fa-save'></i>";
  document.getElementById("title").setAttribute("contentEditable", "true");
  document.getElementById("title").style.border = "thin solid red";
  document.getElementById("content").setAttribute("contentEditable", "true");
  document.getElementById("content").style.border = "thin solid red";
  document.getElementById("edit").setAttribute("id", "save");
  document.getElementById("save").setAttribute("onclick", "save()");
}

/**
 * Method to save changes applied in the Title and Contents elements
 */
function save() {
  document.getElementById("title").setAttribute("contentEditable", "false");
  document.getElementById("title").style.border = "0";
  document.getElementById("content").setAttribute("contentEditable", "false");
  document.getElementById("content").style.border = "0";
  document.getElementById("save").setAttribute("id", "edit");
  document.getElementById("edit").setAttribute("onclick", "edit()");
  document.getElementById("edit").innerHTML =
    "Edit <i id='edit' class='fa fa-edit'></i>";
}

/**
 * Increments number of Likes
 */
function like() {
  nLikes += 1;
  document.getElementById("nLikes").innerHTML = nLikes + " person likes this!";
  document.getElementById("like-button").innerHTML =
    "<i class='fa fa-thumbs-up'></i> Liked";
}

/**
 * Method to add comments to the post
 */
function addComment(comment) {
  document.querySelector(".div-comment").style.display = "flex";
  document.getElementById("labelComment").innerHTML = comment.value;
}
