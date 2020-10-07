$(_=>{
    // Variables
    const x_hamburger = document.querySelector('#x-hamburger');
    const header = document.querySelector('#header');

    // Loaders
    const bg_loader = document.querySelector('#bg-loader');
     
    // Listeners
    x_hamburger.addEventListener('click', e=>{
        if(e.target.classList.contains('fa-bars') && !header.classList.contains('md-open')){
            header.classList.add('md-open');
            e.target.classList.remove('fa-bars')
            e.target.classList.add('fa-times')
        }else if(e.target.classList.contains('fa-times') && header.classList.contains('md-open')){
            header.classList.remove('md-open');
            e.target.classList.add('fa-bars')
            e.target.classList.remove('fa-times')
        }
    });

    header.addEventListener('click', e=>{
        if(header.classList.contains('md-open') && e.target !== x_hamburger){
            header.classList.remove('md-open');
            x_hamburger.classList.add('fa-bars')
            x_hamburger.classList.remove('fa-times')
        }
    });

    // Initialize aos
    AOS.init({
        duration:1200
    });
});