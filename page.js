$(document).ready(function(){
  $("#checkbox1").change(function(){
    if(this.checked)
		$("div").show();
	else
		$("div").hide();
  });
});