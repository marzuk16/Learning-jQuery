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
                minlength: 4,
                maxlength: 10,
                userNameChecker: true
            },
            email: {
                required: true,
                emailChecker: true,
                /* remote: {
                    // unique email check in DB
                    url: "/user/find-by-email",
                    type: "post",
                    data: {
                      username: function() {
                        return $( "#username" ).val();
                      },
                      dataType: 'json'
                    }
                  } */
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
            // validator.form(); // returns true if form is valid otherwise false
            // validator.resetForm(); // resets the controlled form
            // validator.element( "#myselect" ); // validates a single element, return true if it is valid, false otherwise.
            // validator.destroy(); // After this point the #toValidateForm form is back to its original boring state.
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