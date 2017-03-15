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
});
