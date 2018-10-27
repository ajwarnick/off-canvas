//var matches = container.querySelectorAll("li[data-active='1']");

export default function offcanvas() {
  var elements = document.getElementsByClassName('offcanvas--wrapper');
  var wrapper = elements[0];

  document.querySelectorAll(".offcanvas--toggle--nav").forEach(function(element) {
    element.addEventListener("click", function(element){
      let clst = "offcanvas--show--" + element.target.dataset.direction;  
      if( wrapper.classList.contains(clst) ){
          wrapper.classList.remove("offcanvas--show--left", "offcanvas--show--right");
      }else{
        wrapper.classList.add(clst);
        element.stopPropagation();



        document.querySelectorAll(".offcanvas--content").forEach(function(element) {
          element.addEventListener("click", function(){
            wrapper.classList.remove("offcanvas--show--left", "offcanvas--show--right");
          });
        }); 

      }
    });
  });

  document.querySelectorAll(".close-nav").forEach(function(element) {
    element.addEventListener("click", function(){
      wrapper.classList.remove("offcanvas--show--left", "offcanvas--show--right");
    });
  }); 

}




  
  
  
  