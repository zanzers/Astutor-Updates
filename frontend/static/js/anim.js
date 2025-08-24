

$(document).ready(function () {
    
    console.log("tet")

    const numbStars = 100;
    const $container = $('#stars-container')

    for (let i = 0; i < numbStars; i++){
        const $star = $('<div class="star"></div>').css({
            top:  `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 2}s`,
        });

        $container.append($star);

    }


})
