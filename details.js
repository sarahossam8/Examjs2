import {detailHome} from "./ui.js";

function displaysearc(list){
    let contiar=``;       
    for(let i=0; i < list.length; i++){
        const category = list[i];
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

export async function search(val){
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${val}&api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`)
    const theData =await response.json();
    displaysearc(theData.results);

}


