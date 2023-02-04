let mainPhoto = document.querySelector('.main__photo > img');
let optionalPhotos = document.querySelectorAll('.optional__photos__item > img');

optionalPhotos.forEach(item => {
   item.addEventListener("click", e => {
       const optionalSrc = mainPhoto.src;
       mainPhoto.src = e.target.src;

       e.target.src = optionalSrc;
   });
});
