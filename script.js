const currentHash= window.location.hash;
const sidebarLinks= document.querySelectorAll('.side-menu a');
sidebarLinks.forEach(lnk=>{
    if (sidebarLinks.getAttribute('href')=== currentHash){
        sidebarLinks.classList.add('active');
    }
});