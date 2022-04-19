// $.validator.addMethod(methodName, function(value:string, element, params:object), message);
$.validator.addMethod("englishNameChecker", isEnglishName, banglaMessages.person_name);
$.validator.addMethod("banglaNameChecker", isOnlyBengaliDigits, banglaMessages.bengali_only);
$.validator.addMethod("phoneNumberChecker", isValidBDPhone, banglaMessages.phone_number);
$.validator.addMethod("userNameChecker", isValiduserName, banglaMessages.bengali_only);
$.validator.addMethod("emailChecker", isValidEmail, banglaMessages.custom_email);
$.validator.addMethod("passwordChecker", isValidPassword, banglaMessages.valid_password);
$.validator.addMethod("tncChecker", isChecked, "You have to agree with terms & conditions");

