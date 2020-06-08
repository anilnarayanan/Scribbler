/**
 * Method to display the createpost modal
 */
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
            <span class='test'><button class='createPostBtn' onclick='' style=''>Create</button></span>\
        </div></form>\
      </div>";
  document.getElementById("segment2").innerHTML = template;
}

/**
 * Method to open the html file in the existing browser window
 */
function redirectAllPostsPage() {
  window.open("./html/postslist.html", "_self");
}
