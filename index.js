/*
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
};
  
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData),
};
  
fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
    })
    .catch(function (error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    });
*/


function userData(userName, userEmail){
    return {
        name: userName,
        email: userEmail
    };
}

function submitData(userName, userEmail)
{
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(userData(userName, userEmail))
    })
    .then(res => res.json())
    .then(user => document.body.innerHTML += user.id)
    .catch((error) => {
        let p = document.createElement('p');
        p.textContent = 'Unauthorized Access';

        document.body.appendChild(p);
    });
}



document.addEventListener("DOMContentLoaded", () => {
    let submitForm = document.querySelector('#submit-form');
    submitForm.addEventListener('submit', (e) => {
        submitData(e.target.username.value, e.target.useremail.value)
        submitForm.reset();
    })

});