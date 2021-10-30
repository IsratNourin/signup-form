
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const pass = document.getElementById('pass')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    console.log(e)

    let messages = []
    if (firstname.value == '' || firstname.value == null) {
        
        messages.push('firstname cannot be empty')
    }
    
    
    if (email.value == ''|| email.value == null){
        messages.push('email cannot be empty')
    } else if(isEmail(email.value)){
        messages.push('email is not valid')
    }



    if (messages.length > 0){
        e.preventDefault() 
        errorElement.innerText = messages.join(', ')
    }





    function isEmail(email){
        
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return true;
        }
        
    }
    
})