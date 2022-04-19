$().ready(function(){
    const usersEnglishName_defaultText = $("#englishNameHelp").text();
    const usersBanglaName_defaultText = $("#banglaNameHelp").text();
    const phoneNumber_defaultText = $("#phoneNumberHelp").text();
    const userName_defaultText = $("#userNameHelp").text();
    const email_defaultText = $("#emailHelp").text();
    const password_defaultText = $("#passwordHelp").text();

    let formValue = {
        englishName: {},
        banglaName: {},
        phoneNumber: {},
        userName: {},
        email: {},
        password: {},
        tncChecked: {}
    };

    $(".btn").click(function(event){
       
        let tncChecked = $("#tncCheck").is(":checked");
        if(!tncChecked){
            $("#tncCheck").addClass("is-invalid");
            $("#form-check-label-id").text("You have to agree with terms & conditions.");
            event.preventDefault();
        }

        let isValidForm = false;

        Object.keys(formValue).forEach(item => item.valid ? isValidForm = true : isValidForm = false);

        if(isValidForm) alert("Submit success");
        else{
            console.log("---------------");

            
            event.preventDefault();
        }
    });

    $("#usersEnglishName").keyup(function(){
        let value = $("#usersEnglishName").val();
        let flag = isEnglishNamePartial(value);
        formValue.englishName.value = value;

        if(!flag){
            $("#usersEnglishName").addClass("is-invalid");
            $("#englishNameHelp").text(banglaMessages.person_name);
            $("#englishNameHelp").addClass("text-danger");
            formValue.englishName.valid = false;
            formValue.englishName.errorMessage = banglaMessages.person_name;
        }else{
            $("#usersEnglishName").removeClass("is-invalid");
            $("#englishNameHelp").text(usersEnglishName_defaultText);
            $("#englishNameHelp").removeClass("text-danger");
            formValue.englishName.valid = true;
        }
    });

    $("#usersBanglaName").keyup(function(){
        let value = $("#usersBanglaName").val();
        let flag = containingBanla(value);
        formValue.banglaName.value = value;

        if(!flag){
            $("#usersBanglaName").addClass("is-invalid");
            $("#banglaNameHelp").text(banglaMessages.bengali_only);
            $("#banglaNameHelp").addClass("text-danger");
            formValue.banglaName.valid = false;
            formValue.banglaName.errorMessage = banglaMessages.bengali_only;

        }else{
            $("#usersBanglaName").removeClass("is-invalid");
            $("#banglaNameHelp").text(usersBanglaName_defaultText);
            $("#banglaNameHelp").removeClass("text-danger");
            formValue.banglaName.valid = true;
        }
    });

    $("#phoneNumber").keyup(function(){
        let value = $("#phoneNumber").val();
        let flag = isValidBDPhone(value);
        formValue.phoneNumber.value = value;
        
        if(!flag){
            $("#phoneNumber").addClass("is-invalid");
            $("#phoneNumberHelp").text(banglaMessages.phone_number);
            $("#phoneNumberHelp").addClass("text-danger");
            formValue.phoneNumber.valid = false;
            formValue.phoneNumber.errorMessage = banglaMessages.phone_number;

        }else{
            $("#phoneNumber").removeClass("is-invalid");
            $("#phoneNumberHelp").text(phoneNumber_defaultText);
            $("#phoneNumberHelp").removeClass("text-danger");
            formValue.phoneNumber.valid = true;
        }
    });

    $("#userName").keyup(function(){
        let value = $("#userName").val();
        let flag = isValiduserName(value);
        formValue.userName.value = value;

        if(!flag){
            $("#userName").addClass("is-invalid");
            $("#userNameHelp").text(banglaMessages.phone_number);
            $("#userNameHelp").addClass("text-danger");
            formValue.userName.valid = false;
            formValue.userName.errorMessage = banglaMessages.phone_number;
        }else{
            $("#userName").removeClass("is-invalid");
            $("#userNameHelp").text(userName_defaultText);
            $("#userNameHelp").removeClass("text-danger");
            formValue.userName.valid = true;
        }
    });

    $("#email").keyup(function(){
        let value = $("#email").val();
        let flag = isValidEmail(value);
        formValue.email.value = value;

        if(!flag){
            $("#email").addClass("is-invalid");
            $("#emailHelp").text(banglaMessages.email);
            $("#emailHelp").addClass("text-danger");
            formValue.email.valid = false;
            formValue.email.errorMessage = banglaMessages.email;
        }else{
            $("#email").removeClass("is-invalid");
            $("#emailHelp").text(email_defaultText);
            $("#emailHelp").removeClass("text-danger");
            formValue.email.valid = true;
        }
    });

    $("#password").keyup(function(){
        let value = $("#password").val();
        let flag = isValidPassword(value);
        formValue.password.value = value;

        if(!flag){
            $("#password").addClass("is-invalid");
            $("#passwordHelp").text(banglaMessages.valid_password);
            $("#passwordHelp").addClass("text-danger");
            formValue.password.valid = false;
            formValue.password.errorMessage = banglaMessages.valid_password;
        }else{
            $("#password").removeClass("is-invalid");
            $("#passwordHelp").text(password_defaultText);
            $("#passwordHelp").removeClass("text-danger");
            formValue.password.valid = true;
        }
    });
});