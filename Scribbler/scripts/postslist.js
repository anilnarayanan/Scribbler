function deletePost(post) {
  //   document.getElementById("segment1").setAttribute("class", "bg-ontrash");
  //   document.getElementsByClassName("bg")[0].setAttribute("class", "bg-ontrash");
  var template =
    "<div id='trashPopup' class='trash'>\
        <p>Are you sure you want to delete this post?</p>\
        <p><button class='trash-dialog trash-dialog-yes'>Yes</button>\
        <button class='trash-dialog trash-dialog-no' onclick='closeTrashPopup(trashPopup)'>No</button></p>\
    </div>";
  document.getElementById("container").innerHTML += template;
}

function closeTrashPopup(trashPopup) {
  trashPopup.remove();
}
