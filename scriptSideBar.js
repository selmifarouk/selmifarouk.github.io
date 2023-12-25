let h = document.querySelector(".about-coord").offsetHeight
/*************************** Select active btn ***************************/
document.querySelector("aside nav .A.propos").addEventListener("click", ()=>{
  document.querySelector("aside nav .A.propos").classList.add("active");
  document.querySelector("aside nav .Tableau").classList.remove("active");
  document.querySelector("aside nav .Projets").classList.remove("active");
  document.querySelector("aside nav .Mes").classList.remove("active");
  document.querySelector("aside nav .Favoris").classList.remove("active");
  document.querySelector(".allSections").scrollTo(0, 0);
});
  
  document.querySelector("aside nav .Tableau").addEventListener("click", ()=>{
    document.querySelector("aside nav .A.propos").classList.remove("active");
    document.querySelector("aside nav .Tableau").classList.add("active");
    document.querySelector("aside nav .Projets").classList.remove("active");
    document.querySelector("aside nav .Mes").classList.remove("active");
    document.querySelector("aside nav .Favoris").classList.remove("active");
    document.querySelector(".allSections").scrollTo(0, h);
  });
  
  document.querySelector("aside nav .Projets").addEventListener("click", ()=>{
    document.querySelector("aside nav .A.propos").classList.remove("active");
    document.querySelector("aside nav .Tableau").classList.remove("active");
    document.querySelector("aside nav .Projets").classList.add("active");
    document.querySelector("aside nav .Mes").classList.remove("active");
    document.querySelector("aside nav .Favoris").classList.remove("active");
    document.querySelector(".allSections").scrollTo(0, 2*h);
  });
  
  document.querySelector("aside nav .Mes").addEventListener("click", ()=>{
    document.querySelector("aside nav .A.propos").classList.remove("active");
    document.querySelector("aside nav .Tableau").classList.remove("active");
    document.querySelector("aside nav .Projets").classList.remove("active");
    document.querySelector("aside nav .Mes").classList.add("active");
    document.querySelector("aside nav .Favoris").classList.remove("active");
    document.querySelector(".allSections").scrollTo(0, 3*h);
  });
  
  document.querySelector("aside nav .Favoris").addEventListener("click", ()=>{
    document.querySelector("aside nav .A.propos").classList.remove("active");
    document.querySelector("aside nav .Tableau").classList.remove("active");
    document.querySelector("aside nav .Projets").classList.remove("active");
    document.querySelector("aside nav .Mes").classList.remove("active");
    document.querySelector("aside nav .Favoris").classList.add("active");
  });
  
  /********************************** Logout ***************************************/
  document.querySelector("aside nav .Déconnexion").addEventListener("click", ()=>{
    document.querySelector("aside").classList.add("close");
    document.querySelector(".login-page").classList.remove("close");
    document.querySelector(".login-page .login-form .signin-f").style.display = 'none';
    document.getElementById('sonaxxxx').value = ""
    document.getElementById('password').value = ""
    document.getElementById('sona-password-change').value = ""
  });