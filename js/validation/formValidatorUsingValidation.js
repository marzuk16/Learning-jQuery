$(document).ready(function(){
    $("#toValidateForm").validate({
        rules: {
            usersEnglishName: {
                required: true,
                englishNameChecker : true
            },
            usersBanglaName: {
                required: true,
                banglaNameChecker: false
            },
            phoneNumber: {
                required: true,
                phoneNumberChecker: true
            },
            userName: {
                required: true,
                userNameChecker: true
            },
            email: {
                required: true,
                emailChecker: true
            },
            password: {
                required: true,
                passwordChecker: true,
                // equalTo: "#id"
                // nowhitespace: true,
                // lettersOnly: true
                // alphanumeric: true
                // letterswithbasicpunc: true
                // url: true
                // range: [10, 20]
                // step: 5 // it accepts only that numbers who multiple of 5
                // digits: true // accepts only integer
                // date: true // formate: yyyy-MM-dd
                // min : 10
                // max: 20
            },
            tncCheck: {
                required: true,
                tncChecker: true
            },
            "gender[]": {
                required: true
            }
        },
        messages: {
            usersEnglishName: {
                required: banglaMessages.required
            },
            usersBanglaName: {
                required: banglaMessages.required
            },
            phoneNumber: {
                required: banglaMessages.required
            },
            userName: {
                required: banglaMessages.required
            },
            email: {
                required: banglaMessages.required
            },
            password: {
                required: banglaMessages.required
            },
            tncCheck: {
                required: banglaMessages.required
            },
            "gender[]": {
                required: banglaMessages.required
            }
            
        },
        highlight: function(element){
            $(element).addClass("is-invalid");
        },
        unhighlight: function(element){
            $(element).removeClass("is-invalid");
        },
        invalidHandler: function(element){
            let validator =$("#toValidateForm").validate();
            console.log(validator.numberOfInvalids()); // it returns number of invalid fields
        },
        submitHandler: function(e){
            alert("submit success!")
            console.log($("form").serializeArray());
            FormData.submit();
            e.preventDefault();
        }
    });
    togglePasswordVisibility();
});