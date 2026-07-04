
document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
        e.preventDefault();
        document.querySelector('#menu').scrollIntoView({behavior:'smooth'});
    });
});
