<%-- 
    Document   : fileupload.jsp
    Created on : 2017-3-12, 22:20:32
    Author     : huanlu
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link href="css/style.css" type="text/css" rel="stylesheet"/>
        <script src="js/jquery-1.11.js" type="text/javascript"></script>
        <script type="text/javascript">
            $(function(){
                $(".thumbs a").click(function(){
                    var largePath = $(this).attr("href");
                    var largeAlt = $(this).attr("title");
                    $("largeimg").attr({
                        src:largePath,
                        alt:largeAlt
                    });
                    return false;
                });
            });
        </script>
    </head>
    <body>
        <h1>File Upload!</h1>
        <img id="largeimg" src="img/01.jpg" alt="Large Image"/>
        <p class="thumbs">
            <a href="img/02.jpg" tilte="IMG02"><img src="img/02.jpg"/></a>
            <a href="img/03.jpg" tilte="IMG03"><img src="img/03.jpg"/></a>
            <a href="img/04.jpg" tilte="IMG04"><img src="img/04.jpg"/></a>
            <a href="img/05.jpg" tilte="IMG05"><img src="img/05.jpg"/></a>
        </p>
    </body>
</html>
