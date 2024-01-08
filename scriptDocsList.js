import nomenclature from './jsNomenclature.json'  assert { type: 'json' };
import projects from './jsProjects.json'  assert { type: 'json' };
import tst from './jstst.json'  assert { type: 'json' };
console.log(JSON.stringify(tst))
console.log(JSON.stringify(tst.tst0))
/********************************************** create main filters *****************************************************************************************/
/**/$('.main-list-document').append('<li class="list-data"><a class="filter-data" href="#">Données partagées<span class="fas fa-caret-down"></span></a>');/**/
/**/$('.main-list-document').append('<div class="sep"><h1>Documents</h1></div>')                                                                          /**/
/**/$('.main-list-document').append('<li class="list-proj"><a class="filter-proj" href="#">Projets<span class="fas fa-caret-down"></span></a>');          /**/
/**/$('.main-list-document').append('<li class="list-type"><a class="filter-type" href="#">Type de document<span class="fas fa-caret-down"></span></a>'); /**/
/**/$('.main-list-document').append('<li class="list-phas"><a class="filter-phas" href="#">Phase<span class="fas fa-caret-down"></span></a>');            /**/
/**/$('.main-list-document').append('<li class="list-resp"><a class="filter-resp" href="#">Responsable<span class="fas fa-caret-down"></span></a>');      /**/
/**/$('.main-list-document').append('<div><button class="btn-sel">selectionner tout</button><button class="btn-dsel">deselectionner tout</button></div>');/**/
/******************************************** end create main filters ***************************************************************************************/

/***************************************** create all filters ***************************************************/
/**/$(".main-list-document .list-data").append('<ul><li><a class="all-list-data" href="#">Tout</a></li></ul>')/**/
/**/$(".main-list-document .list-proj").append('<ul><li><a class="all-list-proj" href="#">Tout</a></li></ul>')/**/
/**/$(".main-list-document .list-type").append('<ul><li><a class="all-list-type" href="#">Tout</a></li></ul>')/**/
/**/$(".main-list-document .list-phas").append('<ul><li><a class="all-list-phas" href="#">Tout</a></li></ul>')/**/
/**/$(".main-list-document .list-resp").append('<ul><li><a class="all-list-resp" href="#">Tout</a></li></ul>')/**/
/*************************************** end create all filters *************************************************/

/********************************************show hide subfilters***************************************************/
$('.main-list-document .filter-data').click(function(){$('.main-list-document .list-data ul').toggleClass("show");});  
$('.main-list-document .filter-proj').click(function(){$('.main-list-document .list-proj ul').toggleClass("show");});
$('.main-list-document .filter-type').click(function(){$('.main-list-document .list-type ul').toggleClass("show");});
$('.main-list-document .filter-phas').click(function(){$('.main-list-document .list-phas ul').toggleClass("show");});
$('.main-list-document .filter-resp').click(function(){$('.main-list-document .list-resp ul').toggleClass("show");});
/*****************************************end show hide subfilters**************************************************/

/***************************************** create sub filters ************************************************************/
for(let i = 0; i < nomenclature.reserchAxe.length; i++)
    for(let j = 0; j < nomenclature.reserchAxe[i].length; j++)
        $('.main-list-document .list-data ul').append('<li><a href="#">' + nomenclature.reserchAxe[i][j] + '</a></li>');
/*******/
for(let i = 0; i < projects.infos.length; i++)
    $('.main-list-document .list-proj ul').append('<li><a href="#">' + projects.infos[i].abbriviation + '</a></li>');
/*******/
let docs0 = [], docs = []
for(let i = 0; i < nomenclature.responsabilities.length; i++)
    for(let j = 0; j < nomenclature.responsabilities[i].parPhase.length; j++)
        for(let k = 0; k < nomenclature.responsabilities[i].parPhase[j].documents.length; k++)
            docs0 = docs0.concat(nomenclature.responsabilities[i].parPhase[j].documents[k].split(" / "))
for(let k = 0; k < docs0.length; k++)
    if(!docs.includes(docs0[k]) && docs0[k] != "") docs = docs.concat(docs0[k])
for(let i = 0; i < docs.length; i++)
    $('.main-list-document .list-type ul').append('<li><a href="#">' + docs[i] + '</a></li>');
/*******/
for(let i = 0; i < nomenclature.abbriviations.projectPhase.length; i++)
    $('.main-list-document .list-phas ul').append('<li><a href="#">' + nomenclature.abbriviations.projectPhase[i].phase + '</a></li>');
/*******/
for(let i = 0; i < nomenclature.responsabilities.length; i++)
    $('.main-list-document .list-resp ul').append('<li><a href="#">' + nomenclature.responsabilities[i].Responsable + '</a></li>');
/*************************************** end create sub filters **************************************************************/


/****************************** select filter *********************************/
$.each($('.main-list-document .list-data ul a'), function(i, val) { 
    $(val).click(function(){
        $.each($('.main-list-document ul a'), function(i, val) { 
            if(!$(val).parents(".list-data").length)$(val).removeClass("active");
        });
        $(val).toggleClass("active");
        $(".main-list-document .list-data .all-list-data").removeClass("active")
    });
});
$(".main-list-document .list-data .all-list-data").click(function(){
    let j = 0
    $.each($('.main-list-document .list-data ul a'), function(i, val) { 
        if($(val).hasClass("active")) j = j + 1;
    });
    $.each($('.main-list-document .list-data ul a'), function(i, val) { 
        $(val).addClass("active");
    });
    if(j == $('.main-list-document .list-data ul a').length - 1)
        $.each($('.main-list-document .list-data ul a'), function(i, val) { 
            $(val).removeClass("active");
        });    
    $(".main-list-document .list-data .all-list-data").removeClass("active")
});
/*******************************************************************************/
$.each($('.main-list-document .list-proj ul a'), function(i, val) { 
    $(val).click(function(){
        $.each($('.main-list-document ul a'), function(i, val) { 
            if($(val).parents(".list-data").length)$(val).removeClass("active");
        });
        $(val).toggleClass("active");
        $(".main-list-document .list-proj .all-list-proj").removeClass("active")
    });
});
$(".main-list-document .list-proj .all-list-proj").click(function(){
    let j = 0
    $.each($('.main-list-document .list-proj ul a'), function(i, val) { 
        if($(val).hasClass("active")) j = j + 1;
    });
    $.each($('.main-list-document .list-proj ul a'), function(i, val) { 
        $(val).addClass("active");
    });
    if(j == $('.main-list-document .list-proj ul a').length - 1)
        $.each($('.main-list-document .list-proj ul a'), function(i, val) { 
            $(val).removeClass("active");
        });    
    $(".main-list-document .list-proj .all-list-proj").removeClass("active")
});
/*******************************************************************************/
$.each($('.main-list-document .list-type ul a'), function(i, val) { 
    $(val).click(function(){
        $.each($('.main-list-document ul a'), function(i, val) { 
            if($(val).parents(".list-data").length)$(val).removeClass("active");
        });
        $(val).toggleClass("active");
        $(".main-list-document .list-type .all-list-type").removeClass("active")
    });
});
$(".main-list-document .list-type .all-list-type").click(function(){
    let j = 0
    $.each($('.main-list-document .list-type ul a'), function(i, val) { 
        if($(val).hasClass("active")) j = j + 1;
    });
    $.each($('.main-list-document .list-type ul a'), function(i, val) { 
        $(val).addClass("active");
    });
    if(j == $('.main-list-document .list-type ul a').length - 1)
        $.each($('.main-list-document .list-type ul a'), function(i, val) { 
            $(val).removeClass("active");
        });    
    $(".main-list-document .list-type .all-list-type").removeClass("active")
});
/*******************************************************************************/
$.each($('.main-list-document .list-phas ul a'), function(i, val) { 
    $(val).click(function(){
        $.each($('.main-list-document ul a'), function(i, val) { 
            if($(val).parents(".list-data").length)$(val).removeClass("active");
        });
        $(val).toggleClass("active");
        $(".main-list-document .list-phas .all-list-phas").removeClass("active")
    });
});
$(".main-list-document .list-phas .all-list-phas").click(function(){
    let j = 0
    $.each($('.main-list-document .list-phas ul a'), function(i, val) { 
        if($(val).hasClass("active")) j = j + 1;
    });
    $.each($('.main-list-document .list-phas ul a'), function(i, val) { 
        $(val).addClass("active");
    });
    if(j == $('.main-list-document .list-phas ul a').length - 1)
        $.each($('.main-list-document .list-phas ul a'), function(i, val) { 
            $(val).removeClass("active");
        });    
    $(".main-list-document .list-phas .all-list-phas").removeClass("active")
});
/*******************************************************************************/
$.each($('.main-list-document .list-resp ul a'), function(i, val) { 
    $(val).click(function(){
        $.each($('.main-list-document ul a'), function(i, val) { 
            if($(val).parents(".list-data").length)$(val).removeClass("active");
        });
        $(val).toggleClass("active");
        $(".main-list-document .list-resp .all-list-resp").removeClass("active")
    });
});
$(".main-list-document .list-resp .all-list-resp").click(function(){
    let j = 0
    $.each($('.main-list-document .list-resp ul a'), function(i, val) { 
        if($(val).hasClass("active")) j = j + 1;
    });
    $.each($('.main-list-document .list-resp ul a'), function(i, val) { 
        $(val).addClass("active");
    });
    if(j == $('.main-list-document .list-resp ul a').length - 1)
        $.each($('.main-list-document .list-resp ul a'), function(i, val) { 
            $(val).removeClass("active");
        });    
    $(".main-list-document .list-resp .all-list-resp").removeClass("active")
});
/*******************************************************************************/
$(".btn-sel").click(function(){
    $.each($('.main-list-document ul a'), function(i, val) { 
        $(val).addClass("active");
    });
});
$(".btn-dsel").click(function(){
    $.each($('.main-list-document ul a'), function(i, val) { 
        $(val).removeClass("active");
    });
});
/****************************** end select filter *********************************/