export default function offcanvas() {
  console.log("Offcanvas Init");
  
  document.querySelectorAll(".toggle-nav").forEach(function(element) {
    element.addEventListener("click", function(element){
      let wrapper = document.getElementById('site-wrapper');
      let clst = "show-" + element.target.dataset.direction;  
      if( wrapper.classList.contains(clst) ){
          wrapper.classList.remove("show-left", "show-right");
      }else{
        wrapper.classList.add(clst);
        element.stopPropagation();
        let content = document.getElementById('site-content');
        content.addEventListener("click", function() {
          wrapper.classList.remove("show-left", "show-right");
        });
      }
    });
  });

  document.querySelectorAll(".close-nav").forEach(function(element) {
    let wrapper = document.getElementById('site-wrapper');
    element.addEventListener("click", function(){
      wrapper.classList.remove("show-left", "show-right");
    });
  }); 

}




  
  
  
  