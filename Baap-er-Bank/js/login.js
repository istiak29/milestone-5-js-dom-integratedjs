// step-1: add click event handler with  the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log("submit button clicked")

    // step-2: get the email input field value
    const userEmail = document.getElementById('user-email')
    console.log(userEmail.value)

    // step-3: get the value of user password
    const userPassword = document.getElementById('user-password')
    console.log(userPassword.value)

    // step-4: verify [NOT A Valid way to verify]
    if (userEmail.value === 'zufe@gmail.com' && userPassword.value === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Invalid User Name or Password')
    }
})