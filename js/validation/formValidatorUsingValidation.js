$(document).ready(function(){
    $("#toValidateForm").validate({
        rules: {
            usersEnglishName: {
                englishNameChecker : true
            },
            usersBanglaName: {
                banglaNameChecker: false
            },
            phoneNumber: {
                phoneNumberChecker: true
            },
            userName: {
                userNameChecker: true
            },
            email: {
                emailChecker: true
            },
            password: {
                passwordChecker: true
            },
            tncCheck: {
                tncChecker: true
            }
        },
        messages: {},
        submitHandler: function(e){
            alert("submit success!")
            console.log($("form").serializeArray());
            FormData.submit();
            e.preventDefault();
        }
    });
    togglePasswordVisibility();
});