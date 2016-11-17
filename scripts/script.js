$(document).ready(function(){

  //for fullpage scrolling
  $('.fullpage').fullpage({
    anchors:['main','about','work','contact'],
    sectionsColor: ['#000000','#403F4C','#5B85AA','#F27935']
  });
  //typing effect on main page
  $('.typing').typed({
    strings: ["<h1 class='headerText'>Yvonne Chia<br><span style='font-size:70%'>Fullstack Web Developer</span></h1>"],
    loop:true,
    typeSpeed: 50
  });
});
