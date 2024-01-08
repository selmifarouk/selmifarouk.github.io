let h = document.querySelector(".about-coord").offsetHeight
$( ".home" ).on( "click", function() {
  $(".home").addClass("active")
  $(".dashboard").removeClass("active")
  $(".projects").removeClass("active")
  $(".kpi").removeClass("active")
  $(".documents").removeClass("active")
  document.querySelector(".allSections").scrollTo(0, 0);
} );
$( ".dashboard" ).on( "click", function() {
  $(".home").removeClass("active")
  $(".dashboard").addClass("active")
  $(".projects").removeClass("active")
  $(".kpi").removeClass("active")
  $(".documents").removeClass("active")
  document.querySelector(".allSections").scrollTo(0, h);
} );
$( ".projects" ).on( "click", function() {
  $(".home").removeClass("active")
  $(".dashboard").removeClass("active")
  $(".projects").addClass("active")
  $(".kpi").removeClass("active")
  $(".documents").removeClass("active")
  document.querySelector(".allSections").scrollTo(0, 2 * h);
} );
$( ".kpi" ).on( "click", function() {
  $(".home").removeClass("active")
  $(".dashboard").removeClass("active")
  $(".projects").removeClass("active")
  $(".kpi").addClass("active")
  $(".documents").removeClass("active")
  document.querySelector(".allSections").scrollTo(0, 3 * h);
} );
$( ".documents" ).on( "click", function() {
  $(".home").removeClass("active")
  $(".dashboard").removeClass("active")
  $(".projects").removeClass("active")
  $(".kpi").removeClass("active")
  $(".documents").addClass("active")
  document.querySelector(".allSections").scrollTo(0, 4 * h);
} );