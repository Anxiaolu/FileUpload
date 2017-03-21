/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {
    $(".thumbs a").click(function () {
        var largePath = $(this).attr("href");
        var largeAlt = $(this).attr("title");
        $("#largeimg").attr({
            src: largePath,
            alt: largeAlt
        });
        return false;
    });

    $("#myfile").change(function() {
        alert($("#myfile").val())
        $("#previewImg").attr("src", "file:///" + $("#myfile").val());
    });
});
function showPreview(obj){
    var str = obj.value;
    documentElement.getElementById("previewImg").innerHTML = 
    "<img src ='"+ str + "'/>";
}

$(function() {
$("#pic").click(function () {
$("#upload").click(); //隐藏了input:file样式后，点击头像就可以本地上传
$("#upload").on("change",function(){
var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
if (objUrl) {
$("#pic").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
}
});
});
});
 
//建立一個可存取到該file的url
function getObjectURL(file) {
var url = null ;
if (window.createObjectURL!=undefined) { // basic
url = window.createObjectURL(file) ;
} else if (window.URL!=undefined) { // mozilla(firefox)
url = window.URL.createObjectURL(file) ;
} else if (window.webkitURL!=undefined) { // webkit or chrome
url = window.webkitURL.createObjectURL(file) ;
}
return url ;
}
