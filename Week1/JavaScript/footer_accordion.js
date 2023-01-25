let footerColumns = document.querySelectorAll('.footer__column');

footerColumns.forEach(footerColumn => {
    footerColumn.addEventListener('click', () => {
        if (footerColumn.classList.contains('active')) {
            footerColumn.classList.remove('active');
        } else {
            footerColumns.forEach (footerColumn => {
                footerColumn.classList.remove('active');
            });
            footerColumn.classList.toggle('active');
        }
    });
});
console.log("PAMAGITIIII");