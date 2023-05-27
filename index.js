$(document).ready(function () {
  $("#contact_form")
    .bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
        valid: "glyphicon glyphicon-ok",
        invalid: "glyphicon glyphicon-remove",
        validating: "glyphicon glyphicon-refresh",
      },
      fields: {
        first_name: {
          validators: {
            stringLength: {
              min: 2,
            },
            notEmpty: {
              message: "Please enter your First Name",
            },
          },
        },
        last_name: {
          validators: {
            stringLength: {
              min: 2,
            },
            notEmpty: {
              message: "Please enter your Last Name",
            },
          },
        },
        user_name: {
          validators: {
            stringLength: {
              min: 8,
            },
            notEmpty: {
              message: "Please enter your Username",
            },
          },
        },
        user_password: {
          validators: {
            stringLength: {
              min: 8,
            },
            notEmpty: {
              message: "Please enter your Password",
            },
          },
        },
        confirm_password: {
          validators: {
            stringLength: {
              min: 8,
            },
            notEmpty: {
              message: "Please confirm your Password",
            },
          },
        },
        email: {
          validators: {
            notEmpty: {
              message: "Please enter your Email Address",
            },
            emailAddress: {
              message: "Please enter a valid Email Address",
            },
          },
        },
        contact_no: {
          validators: {
            stringLength: {
              min: 12,
              max: 12,
              notEmpty: {
                message: "Please enter your Contact No.",
              },
            },
          },
          department: {
            validators: {
              notEmpty: {
                message: "Please select your Department/Office",
              },
            },
          },
        },
      },
    })
    .on("success.form.bv", function (e) {
      $("#success_message").slideDown({ opacity: "show" }, "slow"); // Do something ...
      $("#contact_form").data("bootstrapValidator").resetForm();

      // Prevent form submission
      e.preventDefault();

      // Get the form instance
      var $form = $(e.target);

      // Get the BootstrapValidator instance
      var bv = $form.data("bootstrapValidator");

      // Use Ajax to submit form data
      $.post(
        $form.attr("action"),
        $form.serialize(),
        function (result) {
          console.log(result);
        },
        "json"
      );
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact_form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user input values
    const firstName = document.querySelector('input[name="first_name"]').value;
    const lastName = document.querySelector('input[name="last_name"]').value;
    const department = document.querySelector('select[name="department"]').value;
    const username = document.querySelector('input[name="user_name"]').value;
    const password = document.querySelector('input[name="user_password"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const contactNo = document.querySelector('input[name="contact_no"]').value;

    // Create an object to store the user details
    const userDetails = {
      firstName: firstName,
      lastName: lastName,
      department: department,
      username: username,
      password: password,
      email: email,
      contactNo: contactNo
    };

    // Convert the user details object to a string
    const userDetailsString = JSON.stringify(userDetails);

    // Store the user details in the local storage
    localStorage.setItem("userDetails", userDetailsString);

    // Display a success message
    const successMessage = document.getElementById("success_message");
    successMessage.style.display = "block";

    // Reset the form
    form.reset();
  });
});

