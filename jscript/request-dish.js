modal2 = document.getElementsByClassName("background-blured")[1];

function openModal2(){
    modal2.classList.remove("hide2");
    // const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

function closeModal2(){
    modal2.classList.add("hide2");
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.height = '';
    body.style.overflowY = '';
    
}