/*****
Global objects to be used
*****/
var dom = function(id, v, isLocked){
  this.id = id;
  this.obj = document.getElementById(this.id);
  this.v = (typeof v === 'undefined') ? null : v;
  this.isLocked = (typeof isLocked === 'undefined') ? false : isLocked;
  this.centerH = function(){
    this.obj.style.left = window.innerWidth/2 - this.obj.offsetWidth/2 + "px";
    this.v = new vect(this.obj);
  };
  this.centerV = function(){
    this.obj.style.top = window.innerHeight/2 - this.obj.offsetHeight/2 + "px";
    this.v = new vect(this.obj);
  };
}
var vect = function(obj, xf, yf){
  this.xi = (typeof obj === 'undefined') ? 0 : obj.getBoundingClientRect().left;
  this.yi = (typeof obj === 'undefined') ? 0 : obj.getBoundingClientRect().top;
  this.xf = (typeof xf === 'undefined') ? 0 : xf;
  this.yf = (typeof yf === 'undefined') ? 0 : yf;
  this.m = this.xf-this.xi == 0 ? 0 : (this.yf-this.yi)/(this.xf-this.xi);
}


/*****
DOM objects
*****/
var logo = new dom("logo");
logo.centerH();
logo.v.xf = 40;
logo.v.yf = 10;

var banner = new dom("banner");


/*****
Event Listeners
*****/
window.addEventListener("windowScroll", function (e) {
  if(e.detail.y >= 400){
    logo.obj.style.left = logo.v.xf + "px";
    logo.obj.style.top = logo.v.yf + "px";
    banner.obj.style.height = "70px";
    banner.obj.style["box-shadow"] = "0px 10px 20px black";
    //logo.isLocked = true;
  }
  else{
    logo.obj.style.left = logo.v.xi - ((logo.v.xi-logo.v.xf)/logo.v.yi)*e.detail.y*e.detail.y/logo.v.xi + "px";
    logo.obj.style.top = logo.v.yi - ((logo.v.yi-logo.v.yf)/logo.v.yi)*e.detail.y*e.detail.y/logo.v.xi + "px";
  }
}, false);


/*****
Window scroll event
*****/
window.onscroll = function(){
  var y = window.pageYOffset;
  
  if(y >= 0){
    if(y == 0){
      banner.obj.style.height = "0px";
    }
    if(!logo.isLocked){
      var windowScroll = new CustomEvent("windowScroll", { detail: { y: y } });
      window.dispatchEvent(windowScroll);
    }
  }
};