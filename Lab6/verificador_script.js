function verificar(){
    let p1 = document.getElementById("password").value;
    let p2 = document.getElementById("password2").value;
    let campo = document.getElementById("change");

    if(!p1 || !p2){
        campo.innerHTML = "Porfavor, llene los campos correctamente";
        campo.style="color: gray";
    }else if(p1 == p2){
        campo.innerHTML = "Password igual";
        campo.style="color:green";
    }else{
        document.getElementById("change").innerHTML = "Password diferente, intente otra vez"
        campo.style="color:red";
    }
    
}




