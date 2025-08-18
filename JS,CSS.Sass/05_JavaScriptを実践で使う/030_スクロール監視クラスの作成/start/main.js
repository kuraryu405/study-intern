document.addEventListener('DOMContentLoaded', function () {

    const els = document.querySelectorAll('.animate-title');
    const cb = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const ta = new TextAnimation(entry.target);
                ta.animate();
                observer.unobserve(entry.target);
            } else {
            }
        });
    };
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
});

class ScrollObserver {
    constructor(els, cb){
        this.els = document.querySelectorAll(els);
        this.cb = cb;
        this._init();
    }
    _init(){
        this.els.forEach(el => {
            this.cb(el);
        });
    }
}