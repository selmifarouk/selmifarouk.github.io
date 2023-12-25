for (let i = 1; i <= 10; i++) {
  document.querySelector(".project-code.l" + i).addEventListener("click", ()=>{
    document.querySelector(".deff.l" + i).classList.toggle("hide");
  });
}

for (let i = 1; i <= 1; i++) {
  document.querySelector(".state.l" + i).addEventListener("click", ()=>{
    document.querySelector(".defs.l" + i).classList.toggle("hide");
  });
}