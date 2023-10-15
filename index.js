const bars = document.querySelector('.bars')
const navMenu = document.querySelector('.nav-menu')
const dropdownLink = document.querySelectorAll('.dropdown-link')
const displaySize = document.body.clientWidth;

if(displaySize <= '749' ){
    
    bars.addEventListener('click',()=>{
        navMenu.classList.toggle('active')
        bars.classList.toggle('display')
      
    })

    dropdownLink.forEach((link)=>{
        link.addEventListener('click',()=>{
            const dropli = link.parentElement
            dropli.classList.toggle('show')
            bars.addEventListener('click', ()=>{
                dropli.classList.remove('show')
            })
        })
    })
}

