const form=document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
})
function checkInputs(){
    const name=document.getElementById('username').Value.trim();
    const mail=document.getElementById('email').Value.trim();
    const pass=document.getElementById('password').Value.trim();
    const pass2=document.getElementById('passwordcheck').Value.trim();
    if(name=='')
    {
        setErrorFor(username,'username dont kept empty');//function call
    }
    else
    {
        setSuccessFor('username');
    }
    function setErrorFor(input,message)
    {
        const formcontrol=input.parentElement;
        const small=formcontrol.querySelector('small');
        small.innerText=message;
    }
    function setSuccessFor(input)
    {
        const formcontrol=input.parentElement;
        formcontrol.className='form-control success';
    }
}