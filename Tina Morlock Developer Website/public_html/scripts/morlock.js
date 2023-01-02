// function validates contact form

function validateForm() {


    // checking for name validation

    let x = document.forms["contactTina"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }

    // checking for email validation

    let y = document.forms["contactTina"]["email"].value;
    if (y == "") {
        alert("Email address must be filled out");
        return false;
    }

    // checking for phone validation

    let z = document.forms["contactTina"]["phone"].value;
    if (z == "") {
        alert("Phone number must be filled out");
        return false;
    }

    // checking for message validation

    let w = document.forms["contactTina"]["message"].value;
    if (w == "") {
        alert("Message must be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById("tinasForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("tinasForm").style.display = "none";
  }

