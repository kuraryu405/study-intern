const child = document.querySelector('.child')
const cb = function(){
    alert('interesting')
}
const io = new IntersectionObserber(cb);

io.observe(child);
