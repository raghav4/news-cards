const url = 'https://newsapi.org/v2/top-headlines?' + 'country=in&' + 'apiKey=2a3cd29248414c6aac7f7ece90cb82df';
let currentIndex = 0;
let data = false;
var ourRequest = new XMLHttpRequest();
    ourRequest.open('Get',url)
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData);
        data = ourData;
        renderHTML();
    };
    ourRequest.send();
    
var pb = document.getElementById("prev-button");
var nb = document.getElementById("next-button");

pb.addEventListener("click", function(){
  if (currentIndex === 0) {
    alert("No more previous articles!");
    return;
  }
  currentIndex--;
  console.log("previous button pressed!");
  renderHTML();
})
nb.addEventListener("click", function(){
  if (currentIndex === data.length -1) {
    alert("Try previous articles!");
    return;
  }
  currentIndex++;
  console.log("next button pressed!");
  renderHTML();
})
function getNewsCard() {
    var myStr = "";
    var urlLink = "";
    var news_title = "";
    var art_author = "";
    var rmore = "";
    var pubDate = "";
    var news_source = "";
    myStr += "<p>" + data.articles[currentIndex].description;
    pubDate += "<p><small><b>Published at</b> : " + data.articles[currentIndex].publishedAt;
    news_title += "<h4> " + data.articles[currentIndex].title;
    art_author += "<p><small><b>Author</b> : " + data.articles[currentIndex].author;
    urlLink += data.articles[currentIndex].url;
    news_source += "<p><small><b>Source </b>: " + data.articles[currentIndex].source.name;
    //console.log(data.articles[currentIndex].);
    myStr+="</p>";
    news_title += "</h4>"
    art_author +=" </small></p>"
    pubDate += "</small></p>";
    news_source += "</small></p>";
    rmore += '<a href="'+urlLink+'" target="blank" class="rm">Read more</a>';

    const card = news_title + news_source + art_author + pubDate + myStr + rmore;
    return card;
};
function renderHTML(){
   if(data && data.status=="ok"){
      const card = getNewsCard();
      container.innerHTML = card;
   }
}