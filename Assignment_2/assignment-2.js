

const submitBtn = document.querySelector("#btn");

        submitBtn.addEventListener("click",
        function validation(){
            let first = document.getElementById('fname').value;
    
            if(first === '' || first == null){
                document.getElementById('f_error').innerHTML = "Please enter first name";
            }
        } );
