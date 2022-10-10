const header = document.querySelector('header');
const footer = document.querySelector('footer');
const main = document.querySelector('main');

// Since there are two copies of each icon in the footer 
// so that the correct icon can be rendered after the color
// theme is determined, sometimes the page can load before 
// the icons have been correctly positioned, resulting in 
// a flash on the page. To mitigate against this, the footer
// bar is hidden from view until the DOM is fully parsed.
window.addEventListener('load', () => {
    document.querySelector('footer').style.visibility = 'visible';
})

// iOS Safari's toolbar affects the viewport dimensions for the
// screen. 100vh is initially set assuming that the toolbar is
// hidden. However, if the toolbar is displayed then the main
// content of the window is smaller than expected. This negatively
// impacts the layout and visibility of elements on screen.
// Accordingly, vh must be recalculated everytime vh changes.
//
// The resize event must be called immediately on page load, so that
// the initial dimensions of the iOS toolbar can be accounted for.
// Subsequent re-sizings are automatically detected by the 'onresize'
// event listener.
function updateMainHeight() {
    const headerHeight = header.getBoundingClientRect().height;
    const footerHeight = footer.getBoundingClientRect().height;
    main.style.height = `${window.innerHeight - headerHeight - footerHeight}px`;
}

window.addEventListener('resize', updateMainHeight);
window.addEventListener('load', updateMainHeight);