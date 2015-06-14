

  
  $("#register-form").submit(function() {
    console.log("Testing!");

    //Clear email errors
    $("#email_error_mes").hide();
    $("#email_error_mes").text("");
    
    var email = $("#email").val();

    //Validate the email with regex
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email) == false)
    {
      $("#email-error-mes").show().text("Please enter a valid email address.");
      $( ".noodle-input .form-control").css({"border": "3px solid #a94442"});
    }

    else
    { 
      $("#email_error_mes").hide();
      console.log("works!");

          
      $(".radio-user-type").html("<div style='padding:20px 30px 50px;'><h1>Thanks for signing up.</h1> <h2>We'll contact you as soon as we release our open beta.</h2></div>");               
    } /* End of ELSE */ 

                  
    }); /* End of SUBMIT */

 