let scroll = document.getElementsByClassName("container")[0];
let cards = scroll.getElementsByClassName("block");
let details = block.getElementsByClassName("details");

function forward(){
    // details[1].classList.remove('shadow');
    scroll.append(cards[0]);
    // details[1].classList.add('shadow');
}

function reverse(){
    scroll.prepend(cards[cards.length - 1]);
}