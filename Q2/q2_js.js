// function myFunction() {
//     var x=document.getElementById("myDropdown");
//     console.log("check 123")
//     if(x.style.display==="none"){
//         console.log("check second 1")
//         x.style.display == "block";
//     }
//     else {
//     x.style.display='block';
//     }
// }
window.addEventListener("DOMContentLoaded", (event) => {
    const elToggle  = document.querySelector("#burgermenu");
    const elContent = document.querySelector("#myDropdown");
    const eldpend= document.querySelector("#dpend");
    const elcross =document.querySelector("#cross");
    const elicon =document.querySelector("#bm");
    const eldropdownmain = document.querySelector("#dropdownmain");
    const eldropdown1 =document.querySelector("#dropdown-content-list");
    
    const eliphone=document.querySelector("#iphone");
    const eliphoneinner=document.querySelector("#iphoneinner");
    const eliphonedd1=document.querySelector("#iphonedd1");
    const eliphonedd2=document.querySelector("#iphonedd2");
    
    const elsamsung=document.querySelector("#samsung");
    const elsamsunginner=document.querySelector("#samsunginner");
    const elsamsungdd1=document.querySelector("#samsungdd1");
    const elsamsungdd2=document.querySelector("#samsungdd2");
    
    const eloneplus=document.querySelector("#oneplus");
    const eloneplusinner=document.querySelector("#oneplusinner");
    const eloneplusdd1=document.querySelector("#oneplusdd1");
    const eloneplusdd2=document.querySelector("#oneplusdd2");
    
    const elaccessories=document.querySelector("#accessories");
    const elaccessoriesinner=document.querySelector("#accessoriesinner");
    const elaccessoriesdd1=document.querySelector("#accessoriesdd1");
    
    
    
    
        elToggle.addEventListener("click", function() {
            elContent.classList.toggle("is-hidden");
            var icon = document.getElementById("bm");
            if (icon.classList.contains("fa-bars")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            }else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
            elicon.classList.toggle("is-cross");
      });
    
      eldpend.addEventListener("click", function() {
        elContent.classList.toggle("is-hidden");
        var icon = document.getElementById("bm");
        if (icon.classList.contains("fa-bars")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        }else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
        elicon.classList.toggle("is-cross");
        });
        
        
        eliphone.addEventListener("click",function(){
            eliphonedd1.classList.toggle("is-hidden");
            closeall("iphone");
        });
        
        eliphoneinner.addEventListener("click",function(){
            eliphonedd2.classList.toggle("is-hidden");
        });
    
         
        elsamsung.addEventListener("click",function(){
            elsamsungdd1.classList.toggle("is-hidden");
            closeall("samsung");
        });
        
        elsamsunginner.addEventListener("click",function(){
            elsamsungdd2.classList.toggle("is-hidden");
        });
    
         
        eloneplus.addEventListener("click",function(){
            eloneplusdd1.classList.toggle("is-hidden");
            closeall("oneplus");
        });
        
        eloneplusinner.addEventListener("click",function(){
            eloneplusdd2.classList.toggle("is-hidden");
        });
    
         
        elaccessories.addEventListener("click",function(){
            elaccessoriesdd1.classList.toggle("is-hidden");
            closeall("accessories");
        });
        
        
        
    
    
        document.addEventListener("click", function(event){
            if(!event.target.matches("#bm") &&
             !event.target.matches("#burgermenu") &&
             !event.target.matches("#home") &&
             !event.target.matches("#vg a") &&
             !event.target.matches("#vg p") &&
             !event.target.matches("#vg-right")) {
                if(!elContent.className.match("dropdown-content is-hidden")){
                    elContent.classList.toggle("is-hidden");
                    var icon = document.getElementById("bm");
                    if (icon.classList.contains("fa-bars")) {
                        icon.classList.remove("fa-bars");
                        icon.classList.add("fa-times");
                    }else {
                        icon.classList.remove("fa-times");
                        icon.classList.add("fa-bars");
                        }
                        elicon.classList.toggle("is-cross");                        
                }
            }
                
        });
    
        /* eldropdownmain.addEventListener("click", function() {
            eldropdown1.classList.toggle("is-hidden");
            console.log(5);
    
        }); */
    
    
    });
    
    function closeall(x){
       /*  if(x==="iphone"){
            closeoneplus();
            closesamsung();
            closeaccessories();
        }
        else if(x==="samsung"){
            closeoneplus();
            closeaccessories();
            closeiphone();
        }
        else if(x==="oneplus"){
            closesamsung();
            closeaccessories();
            closeiphone();
        }
        else if(x==="accessories"){
            closesamsung();
            closeoneplus();
            closeiphone();
        }
     */
    }
    
    function closeiphone(){
        const eliphonedd1  = document.querySelector("#iphonedd1");
        const eliphonedd2  = document.querySelector("#iphonedd2");
    
        if(!eliphonedd1.className.match("dropdown-content is-hidden")){
            eliphonedd1.classList.toggle("is-hidden");
        }
        if(!eliphonedd2.className.match("dropdown-content is-hidden")){
            eliphonedd2.classList.toggle("is-hidden");
        }
    
    }
    
    function closesamsung(){
        const elsamsungdd1  = document.querySelector("#samsungdd1");
        const elsamsungdd2  = document.querySelector("#samsungdd2");
    
        console.log("elsamsungdd1 class: ", elsamsungdd1.className);
        console.log("elsamsungdd2 class: ", elsamsungdd2.className);
    
        if(!elsamsungdd1.className.match("dropdown-content is-hidden")){
            elsamsungdd1.classList.toggle("is-hidden");
        }
        if(!elsamsungdd2.className.match("dropdown-content is-hidden")){
            elsamsungdd2.classList.toggle("is-hidden");
        }
    
    }
    
    function closeoneplus(){
        const eloneplusdd1  = document.querySelector("#oneplusdd1");
        const eloneplusdd2  = document.querySelector("#oneplusdd2");
    
        if(!eloneplusdd1.className.match("dropdown-content is-hidden")){
            eloneplusdd1.classList.toggle("is-hidden");
        }
        if(!eloneplusdd2.className.match("dropdown-content is-hidden")){
            eloneplusdd2.classList.toggle("is-hidden");
        }
    
    }
    
    function closeaccessories(){
        const elaccessoriesdd1  = document.querySelector("#accessoriesdd1");
    
        if(!elaccessoriesdd1.className.match("dropdown-content is-hidden")){
            elaccessoriesdd1.classList.toggle("is-hidden");
        }
    }
    
    
    
    /* document.getElementById("burgermenu").addEventListener("click", function() {
        var icon = document.getElementById("bm");
        if (icon.classList.contains("fa-bars")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-times"); // Change to a different icon class, e.g., "fa-times"
        } else {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      }); */
      
    
    
    
    // window.onclick = function(event) {
    //     var x=document.getElementById("myDropdown");
    //     if(!event.target.matches('#burgermenu') && !event.target.matches('#myDropdown')){
    //         if(event.target.className !==null && event.target.className !==undefined){
    //             if(x.style.display==="block"){
    //                 x.style.display="none";
    //             }
    //         }
    //     }
    // }
    
    /* window.onclick=function(event){
        console.log(event.target.className);
    }
     */
    
    
      