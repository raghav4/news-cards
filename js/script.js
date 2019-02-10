var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=#';
 
var ourRequest = new XMLHttpRequest();
    ourRequest.open('Get',url)
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData);
        renderHTML(ourData);
    };
    ourRequest.send();
function renderHTML(data){
   if(data.status=="ok"){
      for(var i=0;i<2;i++){
        let dt = data.articles[i].source.name;
        console.log(dt);
      }
    // console.log
    console.log(data);
   }
}