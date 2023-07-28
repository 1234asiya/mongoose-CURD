var validateEmail=(e)=>{
    console.log("hi",2)
    var email=$("#email").val()
    var mailFormat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(mailFormat)){
        $("#emailval").hide()
        // var emailVal=$.ajax({
        $.ajax({
            url:`/validateEmail/${email}`,
            type:"Get",
            dataType:"JSON",
        }).done((data)=>{console.log(data)}).fail((err)=>{
            var error=err.responseText;
            console.log(err)
            if(error=="Valid"){
                $("#emailExist").show()
                return false
            }else{
                $("#emailExist").hide()
                return true;
            }
        })
    }
    else{
        $("#emailVal").show()
        return false
    }
}