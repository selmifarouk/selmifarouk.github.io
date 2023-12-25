/********************************lists creation****************************************************/
import nomenclature from './jsNomenclature.json'  assert { type: 'json' };
for(let i = 0; i < nomenclature.clients.length; i++)
  $('header .divisions .filter-sub-list').append('<li><a href="#" class="filter-d' + (i+1) +'">' + nomenclature.clients[i].divsion +'</a></li>');

for(let i = 0; i < nomenclature.abbriviations.projectPhase.length; i++)
  $('header .phases .filter-sub-list').append('<li><a href="#" class="filter-p' + (i+1) +'">' + nomenclature.abbriviations.projectPhase[i].phase +'</a></li>');

for(let i = 0; i < nomenclature.reserchAxe.length; i++)
  $('header .thematics .filter-sub-list').append('<li><a href="#" class="filter-th' + (i+1) +'">' + nomenclature.reserchAxe[i] +'</a></li>');

for(let i = 0; i < nomenclature.state.length; i++)
  $('header .etat .filter-sub-list').append('<li><a href="#" class="filter-e' + (i+1) +'">' + nomenclature.state[i] +'</a></li>');

/******************************Search************************************************/
let navbar = document.querySelector(".projects-filter");
let searchBox = document.querySelector(".projects-filter .projects-search-box .bx-search");
searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

/*************************Divisions filter********************************/
let filter_d = [];
for (let i = 1; i <= nomenclature.clients.length; i++) {
  filter_d[i] = document.querySelector(".filter-d" + i)
}

for (let i = 1; i <= nomenclature.clients.length; i++) {
  filter_d[i].addEventListener("click", ()=>{
    filter_d[i].classList.toggle("deselect");
    if(filter_d[i].classList.contains("deselect")){
      filter_d[i].style.fontStyle = "italic";
      filter_d[i].style.textDecoration = "line-through"
      filter_d[i].style.color = "grey"
    }else {
      filter_d[i].style.fontStyle = "normal";
      filter_d[i].style.textDecoration = "none"
      filter_d[i].style.color = "var(--shColor)"
    }  
  });
}

/*************************Phases filter********************************/
let filter_p = [];
for (let i = 1; i <= nomenclature.abbriviations.projectPhase.length; i++) {
  filter_p[i] = document.querySelector(".filter-p" + i)
}
for (let i = 1; i <= nomenclature.abbriviations.projectPhase.length; i++) {
  filter_p[i].addEventListener("click", ()=>{
    filter_p[i].classList.toggle("deselect");
    if(filter_p[i].classList.contains("deselect")){
      filter_p[i].style.fontStyle = "italic";
      filter_p[i].style.textDecoration = "line-through"
      filter_p[i].style.color = "grey"
    }else {
      filter_p[i].style.fontStyle = "normal";
      filter_p[i].style.textDecoration = "none"
      filter_p[i].style.color = "var(--shColor)"
    }  
  });
}

/*************************Thematique filter********************************/
let filter_th = [];
for (let i = 1; i <=  nomenclature.reserchAxe.length; i++) {
  filter_th[i] = document.querySelector(".filter-th" + i)
}
for (let i = 1; i <=  nomenclature.reserchAxe.length; i++) {
  filter_th[i].addEventListener("click", ()=>{
    filter_th[i].classList.toggle("deselect");
    if(filter_th[i].classList.contains("deselect")){
      filter_th[i].style.fontStyle = "italic";
      filter_th[i].style.textDecoration = "line-through"
      filter_th[i].style.color = "grey"
    }else {
      filter_th[i].style.fontStyle = "normal";
      filter_th[i].style.textDecoration = "none"
      filter_th[i].style.color = "var(--shColor)"
    }  
  });
}

/*************************Etat filter********************************/
let filter_e = [];
for (let i = 1; i <= nomenclature.state.length; i++) {
  filter_e[i] = document.querySelector(".filter-e" + i)
}
for (let i = 1; i <= nomenclature.state.length; i++) {
  filter_e[i].addEventListener("click", ()=>{
    filter_e[i].classList.toggle("deselect");
    if(filter_e[i].classList.contains("deselect")){
      filter_e[i].style.fontStyle = "italic";
      filter_e[i].style.textDecoration = "line-through"
      filter_e[i].style.color = "grey"
    }else {
      filter_e[i].style.fontStyle = "normal";
      filter_e[i].style.textDecoration = "none"
      filter_e[i].style.color = "var(--shColor)"
    }  
  });
}

/************************************Show hide sidebar*****************************************/
document.querySelector(".projects-filter .logo-ep-head i").addEventListener("click", ()=>{
  document.querySelector("aside").classList.toggle("close");
});
