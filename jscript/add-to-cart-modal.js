
modal = document.getElementsByClassName("background-blured")[0];

function openModal(){
    modal.classList.remove("hide1");
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
}

function closeModal(){
    modal.classList.add("hide1");

    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.height = '';
    body.style.overflowY = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}