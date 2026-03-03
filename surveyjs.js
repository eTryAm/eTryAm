$(function(){
$("#survey").submit(function (event){
if(!$(this.name).parents("div.label_color")add.Class("error");
event.preventDefault();
alert("You must enter your gender");
}
if(!$("input[name='gender']:checked",this).length){
$("input[name='gender']",this).parents("div.label_color").addClass("error");
}
});
});
