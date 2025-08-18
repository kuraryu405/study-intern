const child = document.querySelector('.child')
const cb = function(entries, observer){
    console.log('IntersectionObserver triggered!', entries);
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log('Element is visible!');
            entry.target.style.backgroundColor = 'red';
        }else{
            console.log('Element is hidden!');
            entry.target.style.backgroundColor = 'blue';
        }
    });
}
const options = {
    root: null,
    rootMargin: '-400px 0px -400px 0px',
    threshold: 0,//0~1の間で指定する。0は画面に入った時に実行、1は画面に入った時に実行。
}
const io = new IntersectionObserver(cb, options);

io.observe(child);
