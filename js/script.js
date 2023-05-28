 let caret = document.querySelector('#caret')
 let search = document.querySelector('#search')
 let course = document.querySelector('#course')
 course.addEventListener('click', ()=>{
    caret.classList.toggle('fa-angle-up')
 })
 search.addEventListener('click',()=>{
 modal.style.disply = 'block'
 })