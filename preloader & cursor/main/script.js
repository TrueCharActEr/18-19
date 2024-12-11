var preloaderImage = 'Chara_screenshot_jumpscare.gif';

var preloader = document.createElement('img');

preloader.setAttribute('src', preloaderImage);
preloader.setAttribute('id', 'preloader');
preloader.style.position = 'absolute';
preloader.style.width = '100vw';
preloader.style.height = '100vh';

document.body.appendChild(preloader);

window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
    }, 9000);
});