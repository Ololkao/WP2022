// let enter = document.getElementsByClassName("enter")[0];
// enter.addEventListener("hover", move_feather, false);

// function move_feather() {
//     let feather = document.getElementsByClassName("feather")[0];
//     feather.style.backgroundColor = 'blue';
// }

$(document).ready(function(){
    $('i.enter').hover(
        function(){
            $("i.feather").css(
                {left: '+=170px'}
            )},
        function(){
            $("i.feather").css(
                {left: '-=170px'}
            )}
    );
    
    $("i.enter").click(function(){
            var url = "res_new/enter-yellow.png";
            $(this).css(
                "background-image", "url(" + url + ")"
            );
        }
    )
});