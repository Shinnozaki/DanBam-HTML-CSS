let emailTxt = document.getElementById("emailTxt")
let nameTxt = document.getElementById("nameTxt")
let maleRbtn = document.getElementById("maleRbtn")
let femaleRbtn = document.getElementById("femaleRbtn")
let addressTxt = document.getElementById("addressTxt")
let agreementBox = document.getElementById("agreementBox")
let submitBtn = document.getElementById("submitBtn")

function validate()
{
    let name = nameTxt.value
    let email = emailTxt.value
    let gender = null

    if(maleRbtn.checked == true)
    {
        gender = "male"
    }
    else if(femaleRbtn.checked == true)
    {
        gender = "female"
    }
    
    let address = addressTxt.value
    let agreement = agreementBox.checked

    if(name == "")
    {
        alert("Name must be filled!")
        return
    }
    //email validation
    if(email.includes("@") == false)
    {
        alert("email must include '@' ! ")
        return
    }

    if(email.startsWith("@") || email.endsWith("@"))
    {
        alert("email must not start or end with '@' !")
        return
    }

    if(email.startsWith(".") || email.endsWith("."))
    {
        alert("email must not start or end with '.' !")
        return
    }

    //validation gender
    if(gender == null)
    {
        alert("Gender must be filled!")
        return
    }

    //validation address
    if(address.includes("city") == false)
    {
        alert("address must be filled with 'city' ! ")
        return
    }

    //agreement validation
    if(agreement == false)
    {
        alert("You must agree to our terms and conditions!")
        return
    }

    let isConfirm = confirm(`Submitted Successfully!`)

    

}

submitBtn.addEventListener("click", validate)

