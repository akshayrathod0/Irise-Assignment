function sendData(){
    var object1 = {StudentName: "rathod", Address: "Hinjewadi Pune"};
    localStorage.setItem("user", JSON.stringify(object1));
    return alert("Data Send Successfully");
}

function retrieveData(){
    // const data = JSON.parse(localStorage.getItem("object1"));
    // console.log(data, "data here");
    // return alert(`${data.Address} - Name of student`);
    const dataFromLs = JSON.parse(localStorage.getItem("user"))
    console.log(dataFromLs, "- data here")
    alert(`${dataFromLs.StudentName} - NO OF STUDENTS.`)
    return
}
function deleteData(){
    localStorage.removeItem("user");
    alert("data Removed successfully");
    return
}
