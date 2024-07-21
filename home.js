// import { details } from "./details.js";/
import { search } from "./details.js";
import { detailHome} from "./ui.js";

let form=document.querySelector(".Name");
        document.querySelectorAll("a").forEach((link)=>{
            link.addEventListener("click", ()=>{
               let x= link.getAttribute("aria");
               console.log(x)
               api(x);
            })
        })
       let  loading= document.querySelector(".loading")
export async function api(term) {
        loading.classList.remove('d-none');

      const response = await fetch(`https://api.themoviedb.org/3/${term}?api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`);
      const data = await response.json(); // Data is lowercase for convention
      console.log(data.results);
      detailHome(data.results);
      loading.classList.add('d-none');        
          
    }

    api("movie/now_playing");  

    form.addEventListener('keyup', function (e){
        if(e.target.value){
            search(e.target.value)
        }
        else{
            api("movie/now_playing");
        }
    }) 
     
  $(".icon2").on("click" ,()=>{
    $(".black").css("left","-15rem")
    $(".icon2").css("display","none")
    $(".icon1").css("display","block")
    $(".white").css("left","0")
  })
  $(".icon1").on("click" ,()=>{
    $(".black").css("left","0")
    $(".icon1").css("display","none")
    $(".icon2").css("display","block")
    $(".white").css("left","15rem")
  })
  $(".con").on("click",()=>{
    console.log("sara hello")
   let o=$(".contact").offset().top;
   $('html, body').animate({scrollTop:o}, 2000);
  })
  document.querySelectorAll(".form-control").forEach((form)=>{
  form.addEventListener("keyup",()=>{
    $(".info").css("display","block")
  })
  })
  $(window).on("scroll",()=>{
  let windowscroll=$(window).scrollTop();
  if(windowscroll >= 100){
    $(".arrow").css("display","flex")
    $(".arrow").on("click",()=>{
        $('html, body').animate({scrollTop:0},20);
    })
  }else{
    $(".arrow").css("display","none")
  }
  })