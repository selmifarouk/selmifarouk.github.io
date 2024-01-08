
let sonaUser  = ['sona0001', 'sona0002', 'sona0003', 'sona0004', 'sona0005', 'sona0006', 'sona0007', 'sona0008', 'sona0009', 'sona0010', 'sona0011', 'sona0012', 'sona0013', 'sona0014'],
    emailUser = ['a1@sonatrach.dz', 'a2@sonatrach.dz', 'a3@sonatrach.dz', 'a4@sonatrach.dz', 'a5@sonatrach.dz', 'a6@sonatrach.dz', 'a7@sonatrach.dz', 'a8@sonatrach.dz', 'a9@sonatrach.dz', 'a10@sonatrach.dz', 'a11@sonatrach.dz', 'a12@sonatrach.dz', 'a13@sonatrach.dz', 'a14@sonatrach.dz'],
    nameUser  = ['SELMI Farouuk', 'SELMI Farouk', 'SELMI Farouk', 'SELMI Farouk', 'SELMI Farouk', 'SELMI Farouk', 'SELMI Farouk', 'SELMI Farouk', 'SELMI Farouk', 'SELMI Farouk', 'SELMI Farouk', 'SELMI Farouk', 'SELMI Farouk', 'SELMI Farouk'],
    passwordUser = ['m', 'yuikuy2', 'rerter3', 'ertuyu4', 'zei5', 'poîopiuouy6', 'zezert7', 'gu8', 'sdgfuyuyt9', 'sdferytuy10', 'qsretrtre11', 'qsdcfdsgfd12', 'sdfsder13', 'fdghgfhgfd14'];


    /******************************* */



document.querySelector(".show-hide-divs").addEventListener("click", ()=>{
    if (document.querySelector(".divisions").style.height === "0px"){
            document.querySelector(".divisions").style.height = "auto";    
    }else{
            document.querySelector(".divisions").style.height = "0px";
    }
    
});


function emphasizeDivision(sDiv) {
    document.querySelector("#left-pr").style.display = "none"
    document.querySelector("#right-pr").style.display = "none"
    document.querySelector("#left-ped").style.display = "none"
    document.querySelector("#right-ped").style.display = "none"
    document.querySelector("#left-for").style.display = "none"
    document.querySelector("#right-for").style.display = "none"
    document.querySelector("#left-exp").style.display = "none"
    document.querySelector("#right-exp").style.display = "none"
    document.querySelector("#left-lab").style.display = "none"
    document.querySelector("#right-lab").style.display = "none"
    document.querySelector("#left-ast").style.display = "none"
    document.querySelector("#right-ast").style.display = "none"
    document.querySelector("#left-" + sDiv).style.display = "block"
    document.querySelector("#right-" + sDiv).style.display = "block" 
}

/*document.querySelector(".pr.division").addEventListener("mouseover", ()=>{
    emphasizeDivision("pr");
});
document.querySelector(".ped.division").addEventListener("mouseover", ()=>{
    emphasizeDivision("ped");
});
document.querySelector(".for.division").addEventListener("mouseover", ()=>{
    emphasizeDivision("for");
});
document.querySelector(".exp.division").addEventListener("mouseover", ()=>{
    emphasizeDivision("exp");
});
document.querySelector(".lab.division").addEventListener("mouseover", ()=>{
    emphasizeDivision("lab");
});
document.querySelector(".ast.division").addEventListener("mouseover", ()=>{
    emphasizeDivision("ast");
});*/

/*******************************Move projects PED*********************************
function moveProjects(division, n){
    document.querySelector("#left-" + division).onmouseover=function(){moveLeft1();};
    var repeat
    function moveLeft1(){
            const divdmove = document.querySelector("." + division + " .projects");
            var boxLeftPos = divdmove.offsetLeft
            if (boxLeftPos < 0) {
                    divdmove.style.marginLeft = (boxLeftPos + 1) + 'px';
            }
            repeat = setTimeout(moveLeft1,10);
    }
    document.querySelector("#left-" + division).onmouseout = function(){clearTimeout(repeat);};

    document.querySelector("#right-" + division).onmouseover=function(){moveRight1();};
    function moveRight1(){
            const divdmove = document.querySelector("." + division + " .projects");
            var boxLeftPos = divdmove.offsetLeft,
                    boxRightPos = - (n - 1) * (document.querySelector("." + division + " .projects div").clientWidth + 5) + 5
            if (boxLeftPos >= boxRightPos) {
                    divdmove.style.marginLeft = (boxLeftPos - 1) + 'px';
            }
            repeat = setTimeout(moveRight1,10);
    }
    document.querySelector("#right-" + division).onmouseout = function(){clearTimeout(repeat);}; 
}
moveProjects("ped", nProjPED); moveProjects("pr", nProjPr); moveProjects("lab", nProjLab); 
moveProjects("exp", nProjExp); moveProjects("ast", nProjAst); moveProjects("for", nProjFor);*/

