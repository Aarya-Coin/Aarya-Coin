window.addEventListener("load", ()=>{
    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const linksBg = document.querySelector('.links-bg')
    const links = document.querySelector('.links')
    
    toggleBtn.onclick = function (){
     linksBg.classList.toggle('open');
     const isOpen = linksBg.classList.contains('open');
     links.classList.toggle('linksPos');
    
      toggleBtnIcon.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
    }
    
});