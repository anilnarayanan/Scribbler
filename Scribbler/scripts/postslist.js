var postcard;

/**
 * Method to pre-populate post cards with appropriate values from the array dynamically
 */
window.onload = function () {
  document.getElementById("author1").innerHTML = this.postDetails[0].author;
  document.getElementById("title1").innerHTML = this.postDetails[0].title;
  document.getElementById("content1").innerHTML = this.postDetails[0].content;

  document.getElementById("author2").innerHTML = this.postDetails[1].author;
  document.getElementById("title2").innerHTML = this.postDetails[1].title;
  document.getElementById("content2").innerHTML = this.postDetails[1].content;

  document.getElementById("author3").innerHTML = this.postDetails[2].author;
  document.getElementById("title3").innerHTML = this.postDetails[2].title;
  document.getElementById("content3").innerHTML = this.postDetails[2].content;

  document.getElementById("author4").innerHTML = this.postDetails[3].author;
  document.getElementById("title4").innerHTML = this.postDetails[3].title;
  document.getElementById("content4").innerHTML = this.postDetails[3].content;

  document.getElementById("author5").innerHTML = this.postDetails[4].author;
  document.getElementById("title5").innerHTML = this.postDetails[4].title;
  document.getElementById("content5").innerHTML = this.postDetails[4].content;
};

/**
 * Method to delete a post
 *
 * @param {*} post
 */
function deletePost(post) {
  postcard = post;
  console.log(postcard);

  document.querySelector(".bg-modal").style.display = "flex";
  document.querySelector(".modal-content").style.display = "flex";
}

function test() {
  postcard.remove();
  closeTrashPopup();
  location.reload();
}

/**
 * Method to set the attributes of css classes dynamically
 */
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

function savePost(postNum) {
  sessionStorage.setItem("id", postNum);
  window.open("./post.html", "_self");
}
