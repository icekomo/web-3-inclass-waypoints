var isNavVisible=!1,navigationWidth=$("nav").width(),navItems=["#hero","#believe","#hero-2","#everything","#gallery","#circle"];$("nav ul li").on("click",burgerClick),$(window).resize((function(){console.log(navigationWidth),navigationWidth=$("nav").width()})),gsap.set("#outline",{alpha:0}),gsap.set(".lines",{transformOrigin:"50% 50%"});var linesToLine=gsap.timeline({paused:!0});linesToLine.to("#top-line",{duration:.25,y:5},"moveLine").to("#bottom-line",{duration:.25,y:-5},"moveLine"),$("#burger-container").on("mouseenter",(function(){console.log("mouse enter"),!1===isNavVisible&&(linesToLine.invalidate().restart(),linesToLine.play())})),$("#burger-container").on("mouseleave",(function(){console.log("mouse leave"),!1===isNavVisible&&(linesToLine.invalidate().restart(),linesToLine.reverse())})),gsap.set("#outline",{drawSVG:"0%"});var lineToX=gsap.timeline({paused:!0});lineToX.to("#burger-container",{duration:.25,rotate:-180},"twist").to("#top-line",{duration:.5,rotate:-45},"twist").to("#bottom-line",{duration:.5,rotate:45},"twist").to("#outline",{duration:.4,drawSVG:"100%"},"twist");var xToLines=gsap.timeline({paused:!0});function burgerClick(){console.log("click"),!1===isNavVisible?(lineToX.invalidate().restart(),lineToX.play(),gsap.set("#outline",{alpha:1}),gsap.to("main",{duration:.25,x:-navigationWidth}),gsap.to("nav",{duration:.25,x:-navigationWidth}),isNavVisible=!0):(xToLines.invalidate().restart(),xToLines.play(),gsap.to("main",{duration:.25,x:0}),gsap.to("nav",{duration:.25,x:0}),gsap.to(window,{duration:2,scrollTo:{y:navItems[$("nav ul li").index(this)],offsetY:67}}),isNavVisible=!1)}xToLines.to("#burger-container",{duration:.25,rotate:0},"twist").to("#top-line",{duration:.5,rotate:0,y:0},"twist").to("#bottom-line",{duration:.5,rotate:0,y:0},"twist").to("#outline",{duration:.4,drawSVG:"0%"},"twist"),$("#burger-container").on("click",burgerClick),$(document).ready((function(){gsap.registerPlugin(DrawSVGPlugin,ScrollToPlugin)}));