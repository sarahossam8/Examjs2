import { api } from "./home.js";

let  loading= document.querySelector(".loading")

export function detailHome(list){
        let contiar=``;       
        for(let i=0; i < list.length; i++){
            const category= list[i];
        contiar +=`<div class="headInfo">
            <img  src="https://image.tmdb.org/t/p/w220_and_h330_face/${category.poster_path}" alt="">
    <div class="prag"><h2  class="heait">${category.original_title||category.name}</h2>
    <h2">${category.name}</h2>
    <p>${category.overview}</p>
    <p>${category.release_date}</p>
    <p>${category.vote_average}</p>
    </div></div>`
         
        }
        document.querySelector(".headin").innerHTML=contiar;
    }
    
