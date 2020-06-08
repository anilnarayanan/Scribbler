var postcard;
var postDetails = [
  {
    author: "Srishti Gupta",
    title: "‘let’ me be a ‘const’(ant), not a ‘var’(iable)!",
    content:
      "Since JavaScript does not have any type-checking, either of these\
    keywords can be used to declare a variable of any type (datatype) in\
    JavaScript. Though all the three keywords are used for the same\
    purpose, they are different.",
  },
  {
    author: "Colby Fayock",
    title: "What is linting and how can it save you time?",
    content:
      "One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have.",
  },
  {
    author: "Yazeed Bzadough",
    title: "How to Get More Views on Your Tech Blog",
    content:
      "If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry.",
  },
  {
    author: "Cedd Burge",
    title: "How to write easily describable code",
    content:
      "When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code.",
  },
  {
    author: "Srishti Gupta",
    title: "Everything you should know about ‘module’ & ‘require’ in Node.js",
    content:
      "Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz.",
  },
];

window.onload = function () {
  //when the document is finished loading, replace everything
  //between the <a ...> </a> tags with the value of splitText
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

/**
 *
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
