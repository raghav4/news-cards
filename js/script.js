var url = 'https://newsapi.org/v2/top-headlines?' + 'country=in&' + 'apiKey=#';
 
var ourRequest = new XMLHttpRequest();
    ourRequest.open('Get',url)
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        //console.log(ourData);
        renderHTML(ourData);
    };
    ourRequest.send();
    
var pb = document.getElementById("prev-button");
var nb = document.getElementById("next-button");
pb.addEventListener("click", function(){
  console.log("previous button pressed!");
})
nb.addEventListener("click", function(){
  console.log("next button pressed!");
})
function renderHTML(data){
   if(data.status=="ok"){
      
    var myStr = "";
    var urlLink = "";
    var news_title = "";
    var art_author = "";
    var rmore = "";
    var pubDate = "";
    var news_source = "";
    for(var i=3;i<4;i++){
      myStr += "<p>" + data.articles[i].description;
      pubDate += "<p><small><b>Published at</b> : " + data.articles[i].publishedAt;
      news_title += "<h4> " + data.articles[i].title;
      art_author += "<p><small><b>Author</b> : " + data.articles[i].author;
      urlLink += data.articles[i].url;
      news_source += "<p><small><b>Source </b>: " + data.articles[i].source.name;
      //console.log(data.articles[i].);
    }
    myStr+="</p>";
    news_title += "</h4>"
    art_author +=" </small></p>"
    pubDate += "</small></p>";
    news_source += "</small></p>";
    rmore += '<a href="'+urlLink+'" target="blank" class="rm">Read more</a>';
    
  // console.log
  //console.log(data);
      container.insertAdjacentHTML('beforeend',news_title);
      container.insertAdjacentHTML('beforeend',news_source);
      container.insertAdjacentHTML('beforeend',art_author);
      container.insertAdjacentHTML('beforeend',pubDate);
      container.insertAdjacentHTML('beforeend',myStr);
      container.insertAdjacentHTML('beforeend',rmore);
   }
}