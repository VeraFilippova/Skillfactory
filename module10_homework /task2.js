const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    window.alert(`Width: ${window.screen.width} px
Height: ${window.screen.height} px`);
});