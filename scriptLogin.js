/**********************************Show change password*************************************/
document.querySelector(".login-page .login-form .create-account").addEventListener("click", ()=>{
    document.querySelector(".login-page .login-form .signin-f").style.display = 'block';
  });

/***********************************Check user login info**************************************/
document.querySelector(".log-btn").addEventListener("click", ()=>{
  
  if(document.getElementById('sonaxxxx').value.length == 0 || document.getElementById('password').value.length == 0){
    document.getElementById('error-message').innerText = "Veuillez introduire votre utilisateur et mot de pass";
    document.getElementById('error-type').innerText = "Erreur de connexion";
    document.getElementById('error-msg').style.display='block';
  } else{
    let i = sonaUser.indexOf(document.getElementById('sonaxxxx').value);
    if (i < 0){
        i= emailUser.indexOf(document.getElementById('sonaxxxx').value);
    }
    if (i < 0){
      document.getElementById('error-message').innerText = "Cet utilisateur n'existe pas";
      document.getElementById('error-type').innerText = "Erreur de connexion";
      document.getElementById('error-msg').style.display='block';
    } else{
      if(passwordUser[i] == document.getElementById('password').value){
        /********************** Enter user *************************/
        document.querySelector(".login-page").classList.add("close");
        document.querySelector(".projects-filter").style.display='block';
        document.querySelector("aside").classList.remove("close");

        /********************** set user info ***********************/
        document.getElementById('sonaUser').innerText = sonaUser[i];
        document.getElementById('nameUser').innerText = nameUser[i];
      } else{
              document.getElementById('error-message').innerText = "Mot de pass incorrect";
              document.getElementById('error-type').innerText = "Erreur de connexion";
              document.getElementById('error-msg').style.display='block';
        }
    }
  }
});

/***********************************Change password**************************************/
document.querySelector(".change-pass-btn").addEventListener("click", ()=>{
  if(document.getElementById('sona-password-change').value.length == 0){
    document.getElementById('error-message').innerText = "Veuillez introduire votre utilisateur";
    document.getElementById('error-type').innerText = "Changement de mot de pass";
    document.getElementById('error-msg').style.display='block';
  } else{
    let i = sonaUser.indexOf(document.getElementById('sona-password-change').value);
    if (i < 0){
        i= emailUser.indexOf(document.getElementById('sona-password-change').value);
    }
    if (i<0){
      document.getElementById('error-message').innerText = "Utilisateur n'existe pas, un émail vous sera envoyé dès sa creation";
      document.getElementById('error-type').innerText = "Changement de mot de pass";
      document.getElementById('error-msg').style.display='block';
      sonaUser.push(document.getElementById('sona-password-change').value);
      emailUser.push("prenom.nom@sonatrach.dz");
      nameUser.push("NOM Prenom");
      passwordUser.push("0000");
    } else{
      document.getElementById('error-message').innerText = "Votre mot de pass a été changé avec succès verifier votre émail";
      document.getElementById('error-type').innerText = "Changement de mot de pass";
      document.getElementById('error-msg').style.display='block'; 
      passwordUser[i] = "0000";
    }
  }
});
