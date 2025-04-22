function loader() {

    // first approach 
    // var loading = document.querySelector(".loader");
    // setTimeout(function(){
    //   loading.style.top = "-100%"
    // });
  
  
    // second Approach
    let loading = document.querySelector(".loader");
    let h1 = loading.querySelector("h2");
    function textChange() {
      // console.log("no error");
      setTimeout(function () {
        h1.innerText = "EXPERIENCES";
      }, 1000);
      setTimeout(function () {
        h1.innerText = "CONTENTS";
      }, 2000);
    }
    textChange();
    setTimeout(function () {
      loading.style.top = "-100%";
    }, 3000);
  }
  loader();
 