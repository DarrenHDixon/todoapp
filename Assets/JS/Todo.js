//check off todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
    //make the li disappear and remove after fadeout
        $(this).parent().fadeOut(500, function(){
            $(this).remove;
        });
    //stop bubbling effect through lis,ul,divs etc
        event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    //enter key is which = 13
    if(event.which === 13){
        //grab new todo text from input
        var todoText = $(this).val();
        //now empty the input
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});



























// $("li").click(function(){
//     //If li is grey
//     if ($(this).css("color") === "rgb(128, 128, 128)"){
//         //turn it black
//         $(this).css({
//             color: "black",
//             textDecoration: "none",   
//         });
        
//     }
//     //else
//     else {
//         // turn grey
//         $(this).css({
//             color: "grey",
//             textDecoration: "line-through",   
//         });
//     }
// });