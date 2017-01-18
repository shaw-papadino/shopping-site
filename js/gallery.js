/*ギャラリー部分の動き*/
$(window).load(function(){
    $("#pict_list a img").click(function(){
        var img_src =$(this).attr("src");
        $("#main_view>img").attr("src", img_src);
        return false;
    });
});