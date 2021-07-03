
const navbar = document.getElementById("navbar");
const aboutText = document.getElementById("about-text")
const aboutImg = document.getElementById("about-img")

const sticky = navbar.offsetTop;

const stickyHeaderToggle = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  if(window.pageYOffset >= 230){
    aboutText.classList.add("rightwards")
    aboutImg.classList.add('leftwards')
  }
  if(window.pageYOffset >= 600){
    document.getElementById('card').classList.add('card-upwards')
  }
  if(window.pageYOffset >= 900){
    document.querySelector('.clients').classList.add('client-grow')
  }
}

const alignImages = () => {
  var $grid = $('.portfolio-images').masonry({
    // options
    itemSelector: '.portfolio-image',
    columnWidth: 10,
    percentPosition: true,
  });
}

const changeActiveButtonColor = (e) => {
  const btnArr = document.querySelectorAll('.portfolio-buttons button')
  for(el of btnArr){
    if(el !== e){
      el.classList.remove('active')
    }
    e.classList.add('active')
  }
} 


window.addEventListener('load',() => {
  alignImages()
})

const filterImages = (e) => {
  let id = e.innerHTML.toLowerCase()
  changeActiveButtonColor(e)
  const arr = document.querySelectorAll('.portfolio-image')
  for(el of arr){
    el.style.display = 'block'
    alignImages()
  }
  for(el of arr){
    if(!el.classList.contains(id) && id !=='all'){
        el.style.display = 'none'
        alignImages()
    }
  }
}

window.onscroll = () => stickyHeaderToggle();


function myMap() {
		
  const mapOptions = {
    center:new google.maps.LatLng(19.373341, 78.662109),
    zoom:7
  }
  const map = new google.maps.Map(document.getElementById("googleMap"),mapOptions);
          
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(17.088291, 78.442383),
    map: map,
  });
}

const openDropdown = (id) => {
  const dropdown = document.getElementById(id)
  if(dropdown.style.display === 'none'){
    dropdown.style.display = 'block'
  }else{
    dropdown.style.display = 'none'
  }
}

const openMobileNav = () => {
  document.getElementById('navbar-mobile').style.display = 'block'
  document.querySelector('.overlay').style.display = 'block'
}

const closeMobileNav = () => {
  document.getElementById('navbar-mobile').style.display = 'none'
  document.querySelector('.overlay').style.display = 'none'
}

let currentActiveLink = 'home-link'

const changeActive = (id) => {
  document.getElementById(currentActiveLink).classList.remove('active')
  currentActiveLink = id
  document.getElementById(currentActiveLink).classList.add('active')
}


