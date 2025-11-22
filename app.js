const title= document.getElementById('title');
const name= document.getElementById('Namefield');
const signup= document.getElementById('signupBtn');
const signin= document.getElementById('signinBtn');


signup.onclick = function(){
    title.innerHTML = "Sign Up";
    name.style.display= "block";
    signin.value = "Sign Up"; 

}

signin.onclick = function(){
    title.innerHTML = "Login";
    name.style.display= "none";
    signin.value = "Login";
}




const toggle = document.getElementById('darkToggle');

toggle.onclick = function () {
    document.body.classList.toggle("dark");

    // Change button text
    if (document.body.classList.contains("dark")) {
        toggle.innerText = "☀️ Light Mode";
    } else {
        toggle.innerText = "🌙 Dark Mode";
    }
};
