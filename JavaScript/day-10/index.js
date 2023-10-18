function sendData(event){
    event.preventDefault();
    const emailData = document.getElementById("email").value;
    const passwordData = document.getElementById("password").value;
    console.log(emailData, passwordData);
    
    if (emailData && passwordData) {
        const List = {email : emailData, password : passwordData};
        localStorage.setItem("UserCredential", JSON.stringify(List));
        document.getElementById("email").value = "";
        document.getElementById("password").value = ""
        return alert("data send successfully");
    }else {
        return alert("All field are mandatory");
    } 
}