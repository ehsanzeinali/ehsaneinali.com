var templateParams = {
    name: 'James',
    notes: 'Check this out!',
};


function sendMail() {
    const username = document.getElementById("user_name_inp").value;
    const userMail = document.getElementById("user_email_inp").value
    const userDesc = document.getElementById("user_desc_inp").value
    console.log(username);

    emailjs.send('service_sh4om3q', 'template_hcbl6ph', { user_name: username, user_description: userDesc, user_email: userMail }).then(
        function (response) {

            console.log('SUCCESS!', response.status, response.text);
        },
        function (err) {
            console.log('FAILED...', err);
        },
    );
    document.getElementById("user_name_inp").value = ""
    document.getElementById("user_email_inp").value = ""
    document.getElementById("user_desc_inp").value = ""
}
