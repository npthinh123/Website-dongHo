$(document).ready(function(){
    var sdt = $("#sdt");
    var tbsdt = $("#tb_sdt");
    var icon_yes = $("#icon_check_yes");
    var icon_no = $("#icon_check_no");
    var inputSDT = /^0[2-9]{1}\d{8}$/;
    
    icon_yes.css("display", "none");
    icon_no.css("display", "none");
    function checkSDT(){
        if (sdt.val() == ""){
            tbsdt.html("Vui lòng nhập số điện thoại vào");
            icon_no.css("display", "block");
            icon_no.css("color", "red");
            icon_yes.css("display", "none");
            return false;
        }

        if (!inputSDT.test(sdt.val())){
            tbsdt.html("Vui lòng nhập số điện thoại vào");
            icon_no.css("display", "block");
            icon_no.css("color", "red");
            icon_yes.css("display", "none");
            return false;
        }
        
        tbsdt.html("");
        icon_no.css("display", "none");
        icon_yes.css("display", "block");
        icon_yes.css("color", "green");
        return true;
    }
    sdt.blur(checkSDT);
});