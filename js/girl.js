var myList = document.getElementById('getMyStaff');
var apiList = document.getElementById('girlPhoto');
var apiGirlPhoto = document.getElementById('PcGirlPhoto');
var myApi ="https://test-cms-alpha.herokuapp.com/sites/3/profiles.json"
document.write('<script src="../swiper.min.js"></script>');
fetch(myApi)
.then(function(response) {
   if (!response.ok) {
    throw new Error("HTTP error, status = " + response.status);
  }
  return response.json();
})
.then(function(json) {
  console.log(json);
  function indexGrilPhoto(){
    let winWidth = apiGirlPhoto.offsetWidth;
    if(winWidth==300){
      for(var i = 0; i < json.length; i++) {
        console.log(winWidth)
        var girlPhoto =document.createElement("div");
        girlPhoto.setAttribute("class","swiper-slide");
        girlPhoto.setAttribute("id","swiper2");
        girlPhoto.innerHTML = '<div class="girlPhotoBox"><img src="https://test-cms-alpha.herokuapp.com'+json[i].avatars[0]+'"><div class="girlPhotoName"> ' + json[i].name+ '</div>';
        apiGirlPhoto.appendChild(girlPhoto);
        var swiper = new Swiper('#Swiper0', {
          loop : true,
          autoplay:2000,
        });
      }
    }else{
      for(var i = 0; i < json.length; i++) {
        var girlPhoto =document.createElement("div");
        girlPhoto.setAttribute("class","swiper-slide");
        girlPhoto.setAttribute("id","swiper2");
        var j = i+i
        var k = i+i+1
        girlPhoto.innerHTML = '<div class="girlPhotoBigBox"><div class="girlPhotoBox"><img src="https://test-cms-alpha.herokuapp.com'+json[j].avatars[0]+'"> <div class="girlPhotoName"> ' + json[j].name+ '</div></div></div><div class="girlPhotoBigBox"><div class="girlPhotoBox"><img src="https://test-cms-alpha.herokuapp.com'+json[k].avatars[0]+'"><div class="girlPhotoName"> ' + json[k].name+ '</div></div></div>';
        apiList.appendChild(girlPhoto);
        var swiper = new Swiper('#Swiper99', {
          loop : true,
          autoplay:2000,
        });
      }
    }
  }
  function girlPegephoto(){
    for(let i = 0; i < json.length; i++) {
      var para=document.createElement("div");
      para.setAttribute("class","staff");
      var img =new Array
      for(var j=0;j<3;j++){
        img[j] ="https://test-cms-alpha.herokuapp.com"+json[i].avatars[j];
        if(img[j]=="https://test-cms-alpha.herokuapp.comundefined"){
          img[j]="staff/all.jpg"
        }
      }
      para.innerHTML = '<div class="lookBigPhoto" id="lookBigPhoto'+i+'"><div class="swiper-container photos" id="lookBig'+i+'"><div class="swiper-wrapper"><div class="swiper-slide"><img id="img1" src="'+ img[0]+'"></div><div class="swiper-slide"><img id="img1" src="'+ img[1]+'"></div><div class="swiper-slide"><img id="img1" src="'+ img[2]+'"></div></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div><div class="x" id="x'+i+'"></div></div><div class="staffBox"><div class="staPhotoffBox"><div class="staBigPhotoffBox"><div class="swiper-container" id="swiper'+i+'"><div class="swiper-wrapper" id="staffPro'+i+'"><div class="swiper-slide"><img id="img1" src="'+ img[0]+'"></div><div class="swiper-slide"><img id="img2" src="'+ img[1]+'"></div> <div class="swiper-slide"><img id="img3" src="'+ img[2]+'"></div></div></div></div><div class="staPhotoffBoxSmall"><ul><li><img id="" src="'+ img[0]+'"></li><li><img id="" src="'+ img[1]+'"></li><li><img id="" src="'+ img[2]+'"></li></ul></div></div><div class="txt"><h2 id="name">' + json[i].name+ '</h2> <br><h2 id="old">年齢:' + json[i].age+ '</h2><br><h3 id="sizi">3サイズ：' + json[i].abstract + '</h3><br><h4 id="txt">' + json[i].description + '</h4></div></div>';
      myList.appendChild(para);
      var  winHeight = window.screen.height;
      var staffPro = document.getElementById('staffPro'+[i]);
      staffPro.addEventListener("click",function() {
        let a=$(document).scrollTop()
        $('#lookBigPhoto'+i).css({
          "top":a+"px",
          "height":winHeight+"px",
          "width":"100%",
        })
        $('body').css({
          "overflow":" hidden"
        })
     });
     $(staffPro).click(function(){
      console.log("2342341www")
       document.addEventListener('touchmove',function(event){
         event.preventDefault();
       }, { passive: false });
     });
     $("#x"+i).click(function(){
       console.log("2342341aa")
       $('#lookBigPhoto'+i).css({"height":"0px"})
       $('#lookBigPhoto'+i).css({"width":"0"})
       $("body").css({
         　　"overflow":"scroll",
        });
     });
     var mySwiper = new Swiper('#lookBig'+i,{
       direction : 'horizontal',
       prevButton:'.swiper-button-prev',
       nextButton:'.swiper-button-next',
     }) 
    }
  }
  let url = window.location.pathname;
  url = url.substring(url.lastIndexOf('/') + 1, url.length);
  console.log(url);
  let urlIndex ="index.html"
  let urlnull =""
  let urlGirl ="girl.html"
  console.log(urlnull);
  if(url==urlIndex||urlnull){
    indexGrilPhoto();
  }if(url==urlGirl){
    girlPegephoto()
  }
})
.catch(function(error) {
  var p = document.createElement('p');
  // document.body.insertBefore(p, myList);
});
var myList1 = document.getElementById('catchMynews');
var myList2 = document.getElementById('catchMynews1');
var myApi1 ="https://test-cms-alpha.herokuapp.com/sites/3/tweets.json"
// console.log(myList1);
fetch(myApi1)
.then(function(response) {
  if (!response.ok) {
    // throw new Error("HTTP error, status = " + response.status);
  }
  return response.json();
})
.then(function(json) {
  for(var i=0; i<json.length; i++) {
    console.log(i);
    var listItem = document.createElement('div');
    listItem.innerHTML = '<p>' + json[i].created_at+ '</p>';
    listItem.innerHTML +='<hr>';
    listItem.innerHTML +='<p>' + json[i].content + '<p>';
    let winWidth = apiGirlPhoto.offsetWidth;
    if(winWidth==300){
      myList2.appendChild(listItem);
    }else{
       myList1.appendChild(listItem);
    }
   
  }
})
.catch(function(error) {
  var p = document.createElement('p');
  p.appendChild(
    // document.createTextNode('Error: ' + error.message)
  );
  document.body.insertBefore(p, myList);
});