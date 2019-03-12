
$(document).ready(function() {


    function addValidationError(id) {
        $("#" + id).addClass("validation_error");
    }

    function removeValidationError(id) {
        $("#" + id).removeClass("validation_error");
    }

    function addCheckMark(id) {
        $("#" + id).children("img.check").css("display","inline");
    }
    
    function removeCheckMark(id) {
        $("#" + id).children("img.check").css("display","none");
    }

    function addErrorMark(id) {
        $("#" + id).children("img.error").css("display", "inline");
    }

    function removeErrorMark(id) {
        $("#" + id).children("img.error").css("display", "none");
    }

    var fields = ["name","email","password","password2","termsOfService"];
    var required_fields = {};

    $("#signup_form").submit(function(event) {
        
        event.preventDefault();
        
        var name = {};
        name["name"] = $("#name").children("input").val();
        required_fields["name"] = name;

        var email = {};
        email["email"] = $("#email").children("input").val();
        required_fields["email"] = email;

        var password = {};
        password["password"] = $("#password").children("input").val();
        required_fields["password"] = password;

        var password2 = {};
        password2["password2"] = $("#password2").children("input").val();
        required_fields["password2"] = password2;

        var termsOfService = {};
        if ($("#termsOfService").children("input").is(":checked"))
            termsOfService["termsOfService"] = true;
        else
            termsOfService["termsOfService"] = "";
        required_fields["termsOfService"] = termsOfService;
        
        for (let i = 0; i < fields.length; i++) {
            
            var field = fields[i];
            var elem = required_fields[field];
            if (elem[field] == "" | undefined ) {
                removeCheckMark(field);

                addValidationError(field);
                addErrorMark(field);
            } else {
                removeValidationError(field);
                removeErrorMark(field);
                
                addCheckMark(field);
            }
        }


    })

})