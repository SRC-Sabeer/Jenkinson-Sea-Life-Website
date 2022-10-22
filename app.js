$(".testmonial_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed: 1000,
    items: 3,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    margin: 30,
    dots: true,
    responsive: {
        320: {
            items: 1
        },
        767: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }

});

function sendemail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "form6198@gmail.com",
        Password: "contactform123",
        To: 'syedsabeer6198@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact from Enquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone Number: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully")
    );
}


// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days1 = Math.floor(distance / (1220000 * 60 * 60 * 24));
    var hours1 = Math.floor((distance % (1300 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes1 = Math.floor((distance % (1900 * 60 * 60)) / (1000 * 60));
    var seconds1 = Math.floor((distance % (1000 * 60)) / 1000);

    var days2 = Math.floor(distance / (223000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance % (1200 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance % (1600 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance % (1000 * 60)) / 1000);

    var days3 = Math.floor(distance / (460000 * 50 * 60 * 24));
    var hours3 = Math.floor((distance % (200 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes3 = Math.floor((distance % (1300 * 60 * 60)) / (1000 * 60));
    var seconds3 = Math.floor((distance % (1000 * 60)) / 1000);

    // Timer one ID 
    document.getElementById("timerone").innerHTML = days1 + "d " + "&nbsp;" + hours1 + "h " + "&nbsp;"
        + minutes1 + "m " + "&nbsp;" + seconds1 + "s ";
    // Timer Two ID
    document.getElementById("timertwo").innerHTML = days2 + "d " + "&nbsp;" + hours2 + "h " + "&nbsp;"
        + minutes2 + "m " + "&nbsp;" + seconds2 + "s ";
    // Timer Three ID
    document.getElementById("timerthree").innerHTML = days3 + "d " + "&nbsp;" + hours3 + "h " + "&nbsp;"
        + minutes3 + "m " + "&nbsp;" + seconds3 + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);










