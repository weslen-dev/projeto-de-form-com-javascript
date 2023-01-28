const form = document.queryselector("#form");
const nameInput = document.queryselector("#name");
const emailInput = document.queryselector("email");
const passwordInput = document.queryselector("#password");
const jobselect = document.queryselector("job");
const menssageTexterea = documento.queryselector("message");


form.addEventListener("submit", (Event)=>{
    Event.preventdefaut();
    // verificar se o nome está vazio
    if(nameInput.value ==="" ){
        alert("por favor, preencha o seu nome");
        return;
    }
    // verificar se o email está preechido e se é valido
    if(emailInput.value ===""){
        alert("por favor, preencha o seu email");
        return;

    }
    // se todos os campos estiverem corretamente preenchidos, envie o formulario 
    form.submit();
});
// função que valida email
function isEmailvalid (email) {

    // criar uma regex para validar email
    const emaiRegex = new RegExp(
        // usuario12@host
      /^[a-zA-z0-9._-]+@[a-zA-zO-9._-]\.[a-z]/
        );
        if(isEmailRegex.test(email)){
            returntrue;

        }
        return false;

}