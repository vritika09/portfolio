$(document).ready(function ()
{
    $(window).scroll(function ()
    {
        if (this.scrollY > 20)
        {
            $('.navbar').addClass("sticky");
        } else
        {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass("show");
        } else
        {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //slide  script

    $('.scroll-up-btn').click(function ()
    {
        $('html').animate({scrollTop: 0});
    });

// toggle script
    $('.menu-btn').click(function ()
    {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

//typing anumantion

var types = new Typed(".typing", {
    strings: ["Software Developer...", "Web Developer..."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});

var types = new Typed(".typing2", {
    strings: ["Software Developer...", "Web Developer..."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});

// var btn = document.getElementById('btn');
// btn.addEventListener('click', function(e)
// {
//     e.preventDefault()
//     var fname = document.getElementById('fname').value;
//     var lname = document.getElementById('lname').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;
//     var body = 'fname : '+fname + '<br/> lname '+lname +'<br/> email '+ email + '<br/> message '+message;

//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "vritikajangir09042001@gmail.com",
//         Password : "frpqzohnmxtpuyaz",
//         To : 'vritikajangir09042001@gmail.com',
//         From : email,
//         Subject : 'Enquary',
//         Body : body
//     }).then(
//       message => alert(message)
//     );
// })