$( "#menu-bar .filter" ).on( "click", function() {
  $("#menu-bar .filter-links").toggleClass("show")
  $( "#menu-bar .filter" ).toggleClass("active")
} );

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
      filter_d[i].style.color = "black"
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
      filter_p[i].style.color = "black"
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
      filter_th[i].style.color = "black"
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
      filter_e[i].style.color = "black"
    }  
  });
}

/************************************Show hide sidebar*****************************************/
$("#menu-bar .logo-ep-head i").on( "click", function() {
  $("aside").toggleClass("close");
  $("#menu-bar .logo-ep-head i").toggleClass("uil-bars uil-multiply");
});
