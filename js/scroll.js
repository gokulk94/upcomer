$('#scroll-down').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

function formSubmit() {
    console.log('clicked OK');
    var email = document.getElementById('email').value;
    console.log(email);
    var flag = false;
    if (localStorage.getItem("mails") != null) {
        var mail = JSON.parse(window.localStorage.mails);
        console.log(mail.email_id.length);
        for (var i = 0; i < mail.email_id.length; i++) {
            if (email === mail.email_id[i]) {
                flag = true;
                alert("Already Subscribed");
            }
        }
        if (!flag) {
            mails = {};
            mails.email_id = mail.email_id;
            mails.email_id.push(email);
            localStorage.mails = JSON.stringify(mails);
        }
    } else {
        mails = {};
        mails.email_id = [];
        mails.email_id.push(email);
        localStorage.mails = JSON.stringify(mails);
    }
}

function formSubmit_footer() {
    var email = document.getElementById('email_footer').value;
    var flag = false;
    if (localStorage.getItem("mails") != null) {
        var mail = JSON.parse(window.localStorage.mails);
        console.log(mail.email_id.length);
        for (var i = 0; i < mail.email_id.length; i++) {
            if (email === mail.email_id[i]) {
                flag = true;
                alert("Already Subscribed");
            }
        }
        if (!flag) {
            mails = {};
            mails.email_id = mail.email_id;
            mails.email_id.push(email);
            localStorage.mails = JSON.stringify(mails);
        }
    } else {
        mails = {};
        mails.email_id = [];
        mails.email_id.push(email);
        localStorage.mails = JSON.stringify(mails);
    }
}
