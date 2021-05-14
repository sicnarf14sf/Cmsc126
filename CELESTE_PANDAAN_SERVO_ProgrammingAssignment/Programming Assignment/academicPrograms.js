$(document).ready(function(){
$(".accordion h1").click(function(){
    console.log("booyah");
    var id = this.id;

    $(".accordion-content").each(function(){

        if($("#"+id).next()[0].id != this.id){
            $(this).slideUp();
        }
    });

    $(this).next().toggle();
});
});