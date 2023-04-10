scroll_prompt_m = document.querySelector(".scroll-prompt");
home_m = document.querySelector("#home");
about_m = document.querySelector("#about");
skills_m = document.querySelector("#skills");
portfolio_m = document.querySelector("#portfolio");
contact_m = document.querySelector("#contact");
body_m = document.getElementById("body");
name_m = document.getElementById("name");
nav_m = document.getElementById("nav");
bar_m = document.getElementById("bars");
xmark_m = document.getElementById("xmark");
dark_m = document.getElementById("dark");
light_m = document.getElementById("light");
profile_m = document.getElementById("header1");
main1 = document.getElementById("main");
home_m = document.getElementById("home");
about_m = document.getElementById("about");
skills_m = document.getElementById("skills");
portfolio_m = document.getElementById("portfolio");
contact_m = document.getElementById("contact");
nav_link_m = document.getElementById("nav_link");
nav_span_home_m = document.querySelector(".nav_span_home");
nav_span_about_m = document.querySelector(".nav_span_about");
nav_span_skills_m = document.querySelector(".nav_span_skills");
nav_span_portfolio_m = document.querySelector(".nav_span_portfolio");
nav_span_contact_m = document.querySelector(".nav_span_contact");
navs_ul_m = document.querySelector("#navs_ul");
about_right_row_m = document.querySelector(".about_right_row");
about_h2_m = document.querySelector(".about_h2");
facts_h2_m = document.querySelector(".facts_h2");
skills_h2_m = document.querySelector(".skills_h2");
portfolio_h2_m = document.querySelector(".portfolio_h2");
contact_h2_m = document.querySelector(".contact_h2");
skills_container_m = document.querySelector(".skills_container");
facts_main_box_m = document.querySelector(".facts_main_box");
project_border1_m = document.querySelector("#project_border1");
project_border2_m = document.querySelector("#project_border2");
project_border3_m = document.querySelector("#project_border3");
project_border4_m = document.querySelector("#project_border4");
project_border5_m = document.querySelector("#project_border5");
project_border6_m = document.querySelector("#project_border6");
contact_icon1_m = document.querySelector("#contact_icon1");
contact_icon2_m = document.querySelector("#contact_icon2");
contact_icon3_m = document.querySelector("#contact_icon3");
// ...............................
// ..................................

scroll_prompt_m.onclick = function(){   
    home_m.style.display="block";
    about_m.style.display="block";
    skills_m.style.display="block";
    portfolio_m.style.display="block";
    contact_m.style.display="block";   
     
}

nav_span_home_m.onclick = function () {
    home_m.style.display="block";
    about_m.style.display="none";
    skills_m.style.display="none";
    portfolio_m.style.display="none";
    contact_m.style.display="none";    
}

nav_span_about_m.onclick = function () {
    home_m.style.display="none";
    about_m.style.display="block";
    skills_m.style.display="none";
    portfolio_m.style.display="none";
    contact_m.style.display="none";    
}

nav_span_skills_m.onclick = function () {
    home_m.style.display="none";
    about_m.style.display="none";
    skills_m.style.display="block";
    portfolio_m.style.display="none";
    contact_m.style.display="none";  
}

nav_span_portfolio_m.onclick = function () {
    home_m.style.display="none";
    about_m.style.display="none";
    skills_m.style.display="none";
    portfolio_m.style.display="block";
    contact_m.style.display="none";
}

nav_span_contact_m.onclick = function () {
    home_m.style.display="none";
    about_m.style.display="none";
    skills_m.style.display="none";
    portfolio_m.style.display="none";
    contact_m.style.display="block";
}

nav_m.onclick = function () {
    profile_m.style.left = "-100%";
    main1.style.marginLeft = "0px";
    bar_m.style.display = "block";
    xmark_m.style.display = "none";
}

bar_m.onclick = function () {
    profile_m.style.left = "0px";
    bar_m.style.display = "none";
    xmark_m.style.display = "block";
    lucky(x)
}

xmark_m.onclick = function () {
    profile_m.style.left = "-100%";
    bar_m.style.display = "block";
    xmark_m.style.display = "none";
    main1.style.marginLeft = "0px";
}

light_m.onclick = function () {
    body_m.style.backgroundColor = "white";
    body_m.style.color = "#101218";
    light_m.style.display = "none";
    dark_m.style.display = "block";
    profile_m.style.backgroundColor = "#fff";
    profile_m.style.color = "#101218";
    profile_m.style.borderRight = "7px solid #040b14";
    name_m.style.color = "black";
    about_right_row_m.style.color = "#2d3f68e1";
    navs_ul_m.style.color = "#0a0754f0";
    nav_span_home_m.style.color = "#0a0754f0";
    nav_span_about_m.style.color = "#0a0754f0";
    nav_span_skills_m.style.color = "#0a0754f0";
    nav_span_portfolio_m.style.color = "#0a0754f0";
    nav_span_contact_m.style.color = "#0a0754f0";
    about_h2_m.style.color = "#00143c";
    facts_h2_m.style.color = "#00143c";
    skills_h2_m.style.color = "#00143c";
    portfolio_h2_m.style.color = "#00143c";
    contact_h2_m.style.color = "#00143c";
    facts_main_box_m.style.color = "#2d3f68e1";
    skills_container_m.style.color = "#2d3f68e1";
    project_border1_m.style.border="3px solid black";
    project_border2_m.style.border="3px solid black";
    project_border3_m.style.border="3px solid black";
    project_border4_m.style.border="3px solid black";
    project_border5_m.style.border="3px solid black";
    project_border6_m.style.border="3px solid black";
    contact_icon1_m.style.color="#dff3fc";
    contact_icon2_m.style.color="#dff3fc";
    contact_icon3_m.style.color="#dff3fc";
    contact_icon1_m.style.backgroundColor="#149ddd";
    contact_icon2_m.style.backgroundColor="#149ddd";
    contact_icon3_m.style.backgroundColor="#149ddd";
}

dark_m.onclick = function () {
    body_m.style.color = "#918989";
    body_m.style.backgroundColor = "#101218";
    dark_m.style.display = "none";
    light_m.style.display = "block";
    profile_m.style.color = "#ffffffaaf";
    profile_m.style.backgroundColor = "#040b14";
    name_m.style.color = "#ffffffaf";
    about_right_row_m.style.color = "#a8a9b4";
    navs_ul_m.style.color = "#a8a9b4";
    nav_span_home_m.style.color = "#a8a9b4";
    nav_span_about_m.style.color = "#a8a9b4";
    nav_span_skills_m.style.color = "#a8a9b4";
    nav_span_portfolio_m.style.color = "#a8a9b4";
    nav_span_contact_m.style.color = "#a8a9b4";
    about_h2_m.style.color = "#fff";
    facts_h2_m.style.color = "#fff";
    skills_h2_m.style.color = "#fff";
    portfolio_h2_m.style.color = "#fff";
    contact_h2_m.style.color = "#fff";
    facts_main_box_m.style.color = "#a8a9b4";
    skills_container_m.style.color = "#a8a9b4";
    project_border1_m.style.border="3px solid #fff";
    project_border2_m.style.border="3px solid #fff";
    project_border3_m.style.border="3px solid #fff";
    project_border4_m.style.border="3px solid #fff";
    project_border5_m.style.border="3px solid #fff";
    project_border6_m.style.border="3px solid #fff";
    contact_icon1_m.style.color="#149ddd";
    contact_icon2_m.style.color="#149ddd";
    contact_icon3_m.style.color="#149ddd";
    contact_icon1_m.style.backgroundColor="#dff3fc";
    contact_icon2_m.style.backgroundColor="#dff3fc";
    contact_icon3_m.style.backgroundColor="#dff3fc";
}

function lucky(x) {
    if (x.matches) {
        main1.style.marginLeft = "0px";
    } else {
        main1.style.marginLeft = "310px";
    }
}
var x = window.matchMedia("(max-width: 500px)")
x.addEventListener(lucky)