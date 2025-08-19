document.addEventListener('DOMContentLoaded', function() {
    const hero = new HeroSlider('.swiper');
    hero.start();

    const ta = new TweenTextAnimation('.tween-animate-title')
    ta.animate();

    const cb = function(el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }


});