const greet = name => console.log("Hello ", name);

const isEnglishName = name => {
    const pattern = /^[a-z]+([a-z ]?)+[a-z]+$/i;
    return pattern.test(name);
};

const isEnglishNamePartial = name => {
    const pattern = /^[a-z][a-z ]*$/i;
    return pattern.test(name);
};

const isBengaliName = name => {
    const pattern = /^([\u2437-\u2443\u2447-\u2448\u2451-\u2472\u2474-\u2480\u2482\u2486-\u2489\u2524-\u2525\u2527])+$/;
    return pattern.test(name);
};

const isOnlyBengaliDigits = text => {
    const pattern = /^[\u09E6-\u09EF]+$/;
    return pattern.test(text);
};

const isOnlyEnglishDigits = text => {
    const pattern = /^[0-9]+$/;
    return pattern.test(text);
};

const containingBanla = text => {
    const pattern = /^[\u981-\u09FE]+/;
    return pattern.test(text);
}

const isValidEmail = email => {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
    return pattern.test(email);
};

const isValidBDPhone = phone => {
    const pattern = /^((88)?|(\+88)?)01[1|3-9][0-9]{8}$/;
    return pattern.test(phone);
};

const isValidPassword = password => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
    return pattern.test(password);
};

const isValiduserName = userName => {
    const pattern = /^[a-z]+\w{3,9}$/i;
    return pattern.test(userName);
};

const isChecked = () => $("#tncCheck").is(":checked");

const ageCalculation = dob => {
    let date = dob.split("/");
    const formattedDOB = new Date(date[2], date[1] - 1, date[0]);
    let today = new Date();
    return Math.floor((today - formattedDOB) / (365.25 * 24 * 60 * 60 * 1000));
};

const togglePasswordVisibility = () => {
    $("#togglePassword").click(function () {
        if ($("#password").attr("type") === "password") {
            $("#password").attr("type", "text");
            $("#togglePassword").addClass("bi-eye");
        } else {
            $("#password").attr("type", "password");
            $("#togglePassword").removeClass("bi-eye");
        }
    });
};