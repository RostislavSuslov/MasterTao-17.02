$(document).ready(function() {
    $('.first-screen-slider').slick({
        dots: true,
        speed: 1000,
        appendArrows: ".container-arrows",
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    // fade: true,
                }
            },

        ]
    });

    // $('.navbar-toggler').on('click', function(){
    //   $('.navbar').toggleClass('margin-bottom')
    // })


});


function checkboxContainerPadding() {
    const checkButton2 = document.querySelectorAll('.check-button');
    
    checkButton2.forEach(item => {
        item.closest('[class*="col"]').classList.add('padding-top');
    }) 
}


if (document.querySelector('.calculation-form')) {
      checkboxContainerPadding()
} else {
    null
}

