        function validate(){
            var name = document.getElementById("name").value;
            var addr = document.getElementById("addr").value;
            var phno = document.getElementById("phno").value;
            var email = document.getElementById("email").value;
            var username = document.getElementById("username").value;
            var state = document.getElementById("state").value;

            if (isalphabet(name)) {
                if (isalphanumeric(addr)) {
                    if (isnumber(phno)) {
                        if (checkemail(email)) {
                            if (checkuser(username)) {
                                if (checkstate(state)) {
                                    alert("Form Submitted Successfully");
                                }
                            }
                        }
                    }
                }
            }
        }

        function isalphabet(elem){
            var exp = /^[a-zA-Z\s]+$/;
            if (exp.test(elem)) {
                return true;
            } else {
                alert("Please Enter a valid Name");
                return false;
            }
        }

        function isalphanumeric(elem){
            var exp = /^[a-zA-Z0-9\s]+$/;
            if (exp.test(elem)) {
                return true;
            } else {
                alert("Please Enter a valid address");
                return false;
            }
        }

        function isnumber(elem){
            var exp = /^[0-9]+$/;
            if (exp.test(elem)) {
                if (elem.length == 10) {
                    return true;
                } else {
                    alert("Please Enter a valid Phone number that should be 10 characters long");
                    return false;
                }
            } else {
                alert("Please Enter a valid Phone number");
                return false;
            }
        }

        function checkemail(elem){
            var exp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (exp.test(elem)) {
                return true;
            } else {
                alert("Please Enter a valid email");
                return false;
            }
        }

        function checkuser(elem){
            var exp = /^[a-zA-Z0-9]+$/;
            if ((elem.length > 6) && (exp.test(elem))) {
                return true;
            } else {
                alert("Please Enter a valid username and username should be 6 characters long");
                return false;
            }
        }

        function checkstate(elem){
            if (elem!= "default") {
                return true;
            } else {
                alert("Please choose a state");
                return false;
            }
        }
    