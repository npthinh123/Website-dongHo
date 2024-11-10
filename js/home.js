$(document).ready(function(){
    // var txtTinh = document.getElementById("tinh").value;
    // var address = "Hồ Chí Minh";
    $("#xacNhan").click(function(){
        var selectedOption = $("#tinh").children("option:selected").text();
        var iconHTML = ' <i class="fa-solid fa-caret-down"></i>';
        $("#address").html(selectedOption + iconHTML);

        $("#tinh, #quan, #phuong").val("");
    })
    
})
