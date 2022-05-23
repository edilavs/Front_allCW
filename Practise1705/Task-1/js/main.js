let circle = document.getElementsByClassName('circle')[0];
let dot = document.getElementsByClassName('dot')[0];
let left = 0;
let topClick = 0;
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 39) {
        left += 2;
        circle.style.left = left + 'px';
    }
    if (e.keyCode == 37) {
        left -= 2;
        circle.style.left = left + 'px';
    }
    if (e.keycode == 38) {
        topClick += 2;
        circle.style.top = topClick + 'px';
    }
    if (e.keycode == 40) {
        topClick -= 2;
        circle.style.top = topClick + 'px';
    }




})