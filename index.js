$(".one").on("click", function (){
$("body").css({background: "#fff" });
$(".circle1").css({background: "#000" });
$(".circle2").css({background: "#911116" });
$(".navbar a").removeClass("white-text").addClass("black-text");
$(".red-jordan img").attr("src", "./red.png");

$(".logo img").attr("src", "./logo.png");

$(".version").removeClass("active");
$(this).addClass("active");
});

$(".two").on("click", function (){
    $("body").css({background: "#000" });
    $(".circle1").css({background: "#fff" });
    $(".circle2").css({background: "#1E3F5A" });
    $(".navbar a").removeClass("black-text").addClass("white-text");

    $(".red-jordan img").attr("src", "./blue.png");
    
    $(".logo img").attr("src", "./logo2.png");
    
    $(".version").removeClass("active");
    $(this).addClass("active");
    });

    $(".three").on("click", function (){
        $("body").css({background: "#000" });
        $(".circle1").css({background: "#fff" });
        $(".circle2").css({background: "#cd5302" });
       
        $(".navbar a").removeClass("black-text").addClass("white-text");
        $(".red-jordan img").attr("src", "./orange.png");
        
        $(".logo img").attr("src", "./logo2.png");
        
        $(".version").removeClass("active");
        $(this).addClass("active");
        });

        const sr = ScrollReveal ({
            distance: '100px',
            duration: 1600,
            delay: 450,
            reset: true
        });
        
        sr.reveal('.navbar',{delay:200, origin:'top'});
        sr.reveal('.logo',{delay:200, origin:'top'});
        sr.reveal('.circle1',{delay:300, origin:'right'});
        sr.reveal('.circle2',{delay:200, origin:'left'});
        sr.reveal('.text',{delay:200, origin:'left'});
        sr.reveal('.red-jordan',{delay:200, origin:'right'});
        sr.reveal('.versions',{delay:200, origin:'bottom'});
        
