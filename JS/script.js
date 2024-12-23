
//Home page image changer
const slideTrack = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".slide");
const captionElement = document.getElementById("caption");
let slideWidth; // updated width of each slide
if(window.innerWidth <= 768){
  slideWidth = 360;
  
}
else if(window.innerWidth >= 768 && window.innerWidth <= 1024 ){
  slideWidth = 600;
}
else {
  slideWidth = 1280;
}
let index = 0;

captionElement.textContent = slides[index].getAttribute("data-caption");
function updateSlidePosition() {
  slideTrack.style.transition = "transform 0.5s ease";
  slideTrack.style.transform = `translateX(-${index * slideWidth}px)`;
  
  captionElement.textContent = slides[index].getAttribute("data-caption"); // Update caption

}

function nextSlide() {
  if (index >= slides.length / 2 - 1) {
    index++;
    updateSlidePosition();
    setTimeout(() => {
      slideTrack.style.transition = "none";
      index = 0;
      slideTrack.style.transform = `translateX(0px)`;
    }, 500);
  } else {
    index++;
    updateSlidePosition();
  }
}

function prevSlide() {
  if (index <= 0) {
    index--;
    updateSlidePosition();
    setTimeout(() => {
      slideTrack.style.transition = "none";
      index = slides.length / 2 - 1;
      slideTrack.style.transform = `translateX(-${index * slideWidth}px)`;
    }, 500);
  } else {
    index--;
    updateSlidePosition();
  }
}
// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 3000);






// about us menu mouseover and mouseout handler// 
let dropdownaboutus=document.querySelectorAll(".dropdownaboutus")
let dropdowncontentaboutus=document.querySelectorAll(".dropdown-contentaboutus")
dropdownaboutus.forEach(element => {
  element.addEventListener('mouseover', () => {
 
      dropdowncontentaboutus.forEach(element=>{
        element.style.display="block"
      })

  });
  element.addEventListener('mouseout', () => {
    dropdowncontentaboutus.forEach(element=>{
      element.style.display="none"
    })
 });

});
// service and products menu mouseover and mouseout handler// 
let dropdownservice=document.querySelectorAll(".dropdownservice")
let dropdowncontentservice=document.querySelectorAll(".dropdown-contentservice")
dropdownservice.forEach(element => {
  element.addEventListener('mouseover', () => {
 
    dropdowncontentservice.forEach(element=>{
        element.style.display="block"
      })

  });
  element.addEventListener('mouseout', () => {
    dropdowncontentservice.forEach(element=>{
      element.style.display="none"
    })
 });

});
// media menu mouseover and mouseout handler// 
let dropdownmedia=document.querySelectorAll(".dropdownmedia")
let dropdowncontentmedia=document.querySelectorAll(".dropdown-contentmedia")
dropdownmedia.forEach(element => {
  element.addEventListener('mouseover', () => {
 
    dropdowncontentmedia.forEach(element=>{
        element.style.display="block"
      })

  });
  element.addEventListener('mouseout', () => {
    dropdowncontentmedia.forEach(element=>{
      element.style.display="none"
    })
 });

});














//----end of image changer

let aboutuscontent=document.getElementById("aboutuscontent");
let sectionphoto=document.getElementById("sectionphoto");
let missiontext=document.getElementById("missiontext");
let hirepurchasecontent=document.getElementById("hirepurchasecontent")
let financialleasecontent=document.getElementById("financialleasecontent")
let traningcontent=document.getElementById("traningcontent")
let consultancycontent=document.getElementById("consultancycontent")
let newscontent=document.getElementById("newscontent")
let brochuercontent=document.getElementById("brochuercontent")
let reportcontent=document.getElementById("reportcontent")
let plancontent=document.getElementById("plancontent")
let leasefinancecontent=document.getElementById("leasefinancecontent")
let contactuscontent=document.getElementById("contactuscontent")
let faqcontent=document.getElementById("faqcontent")

let requirementcontent=document.getElementById("requirementcontent")

 let stakeholderscontent=document.getElementById("stakeholderscontent")    

let announcementcontent=document.getElementById("announcementcontent")
let reqseemorecontent=document.getElementById("reqseemorecontent")
let contactseemorecontent=document.getElementById("contactseemorecontent")




  



let aboutusmenu=document.getElementById("aboutusmenu")
let hirepurchasemenu=document.getElementById("hirepurchasemenu");
let financialleasemenu = document.getElementById("financialleasemenu")
let traningmenu = document.getElementById("traningmenu")
let consultancymenu = document.getElementById("consultancymenu")
let newsmenu  = document.getElementById("newsmenu")
let brochuermenu  = document.getElementById("brochuermenu")
let reportmenu=document.getElementById("reportmenu")
let planmenu  = document.getElementById("planmenu")
let leasefinancemenu  = document.getElementById("leasefinancemenu")
let contactusmenu  = document.getElementById("contactusmenu")
let faqmenu  = document.getElementById("faqmenu")

let requirementlink=document.getElementById("requirementlink")

let stakeholderslink=document.getElementById("stakeholderslink")

let announcementlink=document.getElementById("announcementlink")
let reqseemore=document.getElementById("reqseemore")
let contactseemore=document.getElementById("contactseemore")
let home=document.getElementById("home")




// at startup /


  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
  reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"
 
requirementcontent.style.display="none"

stakeholderscontent.style.display="none"

announcementcontent.style.display="none"

reqseemorecontent.style.display="none"
contactseemorecontent.style.display="none"



//end of at start up
home.addEventListener("click",function(e){
  e.preventDefault();
  sectionphoto.style.display="block";
  missiontext.style.display="block";
  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
   reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"

  requirementcontent.style.display="none"
 
  stakeholderscontent.style.display="none"

  announcementcontent.style.display="none"
})
aboutusmenu.addEventListener("click",function(e){
  e.preventDefault()
 
  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="block";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
   reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"

  requirementcontent.style.display="none"
 
  stakeholderscontent.style.display="none"

  announcementcontent.style.display="none"
  dropdownaboutus.forEach(element => {
   
  dropdowncontentaboutus.forEach(element=>{
    element.style.display="none"
  })
})
})


hirepurchasemenu.addEventListener("click",function(e){
  e.preventDefault();
  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="block"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
   reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"
 
  requirementcontent.style.display="none"

  stakeholderscontent.style.display="none"

  announcementcontent.style.display="none"
  dropdownservice.forEach(element => {
   
    dropdowncontentservice.forEach(element=>{
      element.style.display="none"
    })
  })
 
})

 financialleasemenu.addEventListener("click",function(e){
  e.preventDefault()
  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="none"
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="block"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
   reportcontent.style.display="none"
    reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"
 
  requirementcontent.style.display="none"
 
  stakeholderscontent.style.display="none"

  announcementcontent.style.display="none"
  dropdownservice.forEach(element => {
   
    dropdowncontentservice.forEach(element=>{
      element.style.display="none"
    })
  })
 })
 traningmenu.addEventListener("click",function(e){
  e.preventDefault()
  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="block"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
   reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"
 
  requirementcontent.style.display="none"

  stakeholderscontent.style.display="none"
 
  announcementcontent.style.display="none"
  dropdownservice.forEach(element => {
   
    dropdowncontentservice.forEach(element=>{
      element.style.display="none"
    })
  })
 })
 consultancymenu.addEventListener("click",function(e){
  e.preventDefault()
  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="block"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
   reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"
 
  requirementcontent.style.display="none"

  stakeholderscontent.style.display="none"

  announcementcontent.style.display="none"
  dropdownservice.forEach(element => {
   
    dropdowncontentservice.forEach(element=>{
      element.style.display="none"
    })
  })
 })
 newsmenu.addEventListener("click",function(e){
  e.preventDefault()
  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="block"
  brochuercontent.style.display="none"
   reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"
 
  requirementcontent.style.display="none"

  stakeholderscontent.style.display="none"

  announcementcontent.style.display="none"
  dropdownmedia.forEach(element => {
   
    dropdowncontentmedia.forEach(element=>{
      element.style.display="none"
    })
  })
 })
 brochuermenu.addEventListener("click",function(e){
  e.preventDefault()
  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="block"
   reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"
 
  requirementcontent.style.display="none"
 
  stakeholderscontent.style.display="none"
 
  announcementcontent.style.display="none"
  dropdownmedia.forEach(element => {
   
    dropdowncontentmedia.forEach(element=>{
      element.style.display="none"
    })
  })

  //slide effect
  const images = document.querySelectorAll('.image-slide');

  // Immediately slide in the first image
  
  // images[0].classList.add('visible');


window.scrollBy(0,1);   // little scroll effect for 1st image to slide

  window.addEventListener('scroll', function() {
      images.forEach((img, inde) => {
        // if (inde === 0) return;
          const imgPosition = img.getBoundingClientRect().top; // Get position relative to viewport
          const scrollPosition = window.innerHeight; // Trigger animation when the image is in view

          if (imgPosition < scrollPosition) {
              img.classList.add('visible'); // Slide in the image when it reaches scroll position
          }
      });
  });
  window.scrollBy(0,-1); // remove the little scroll effect for 1st image to slide
  // end of slide effect
 })
 reportmenu.addEventListener("click",function(e){
  e.preventDefault() 
  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
  reportcontent.style.display="block"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"
 
  requirementcontent.style.display="none"

  stakeholderscontent.style.display="none"

  announcementcontent.style.display="none"
  dropdownmedia.forEach(element => {
   
    dropdowncontentmedia.forEach(element=>{
      element.style.display="none"
    })
  })
 })
 planmenu.addEventListener("click",function(e){
  e.preventDefault() 
  
  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
   reportcontent.style.display="none"
  plancontent.style.display="block"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"
 
  requirementcontent.style.display="none"

  stakeholderscontent.style.display="none"

  announcementcontent.style.display="none"
  dropdownmedia.forEach(element => {
   
    dropdowncontentmedia.forEach(element=>{
      element.style.display="none"
    })
  })
 })
 leasefinancemenu.addEventListener("click",function(e){
  e.preventDefault() 

  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
   reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="block"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"
 
  requirementcontent.style.display="none"
 
  stakeholderscontent.style.display="none"
 
  announcementcontent.style.display="none"
 })
 contactusmenu.addEventListener("click",function(e){
  e.preventDefault() 

  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
   reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="block"
  faqcontent.style.display="none"
 
  requirementcontent.style.display="none"
 
  stakeholderscontent.style.display="none"

  announcementcontent.style.display="none"
 })
 faqmenu.addEventListener("click",function(e){
  e.preventDefault() 

  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
   reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="block"
 
  requirementcontent.style.display="none"
 
  stakeholderscontent.style.display="none"

  announcementcontent.style.display="none"
 })

requirementlink.addEventListener("click",function(e){
  e.preventDefault() 

  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
   reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"

  requirementcontent.style.display="block"
 
  stakeholderscontent.style.display="none"

  announcementcontent.style.display="none"
  dropdownservice.forEach(element => {
   
    dropdowncontentservice.forEach(element=>{
      element.style.display="none"
    })
  })
 })

 stakeholderslink.addEventListener("click",function(e){
  e.preventDefault();

  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
   reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"
 
  requirementcontent.style.display="none"
 
  stakeholderscontent.style.display="block"
 
  announcementcontent.style.display="none"

  dropdownaboutus.forEach(element => {
   
    dropdowncontentaboutus.forEach(element=>{
      element.style.display="none"
    })
  })
 })

announcementlink.addEventListener("click",function(e){

  e.preventDefault(); 

  sectionphoto.style.display="none";
  missiontext.style.display="none";
  aboutuscontent.style.display="none";
  hirepurchasecontent.style.display="none"
  financialleasecontent.style.display="none"
  traningcontent.style.display="none"
  consultancycontent.style.display="none"
  newscontent.style.display="none"
  brochuercontent.style.display="none"
   reportcontent.style.display="none"
  plancontent.style.display="none"
  leasefinancecontent.style.display="none"
  contactuscontent.style.display="none"
  faqcontent.style.display="none"

  requirementcontent.style.display="none"
 
  stakeholderscontent.style.display="none"

  announcementcontent.style.display="block"
  dropdownmedia.forEach(element => {
   
    dropdowncontentmedia.forEach(element=>{
      element.style.display="none"
    })
  })
 })
 reqseemore.addEventListener("click",function(e){
  e.preventDefault()
  reqseemorecontent.style.display="block"
  reqseemore.style.display="none"
 
 })
 contactseemore.addEventListener("click",function(e){
  e.preventDefault()
  contactseemorecontent.style.display="block"
  contactseemore.style.display="none"
 })
 //Languagechange mobile
 function changeLanguage() {
  const selectedlanguage = document.getElementById("language-select").value;
    window.location.href=selectedlanguage

}
 //end of Language change