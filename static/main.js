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
const updateViewportHeight = () => document.body.height = window.innerHeight;
window.addEventListener('resize', () => updateViewportHeight);

// The resize event must be called immediately on page load, so that 
// the initial dimensions of the iOS toolbar can be accounted for.
// Subsequent re-sizings are automatically detected by the 'onresize'
// event listener.
window.addEventListener('load', updateViewportHeight);