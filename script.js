const header=document.querySelectorAll("header");
window.addEventListener("scroll",function(){
    header.classlist.toggle("sticky",this.window.scrollY >0);
})