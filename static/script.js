document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.background').style.opacity = 1;

    // Check if the lottie-animation element exists before loading the animation
    var lottieContainer = document.getElementById('lottie-animation');
    if (lottieContainer) {
        lottie.loadAnimation({
            container: lottieContainer, // the DOM element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '/static/About_animation.json' // the path to the animation JSON file
        });
    }
});
