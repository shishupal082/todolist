$("#ad").click(function(){

$($(".collaborator")[0]).clone().insertBefore($(".collaborator")[3]);


});




function myFunction(el) {
	var x = el.value;
	var y = document.createElement("li");
	y.innerHTML = x;
	$(el).parent().append(y);

	}


function mynewFunction1(el)
{
       var x=el.value;
       var y=document.createElement("li");
       y.innerHTML = x;
       $("#collaborator1").append(y);
}


function mynewFunction2(el)
{
       var x=el.value;
       var y=document.createElement("li");
       y.innerHTML = x;
       $("#collaborator2").append(y);
}

function mynewFunction3(el)
{
       var x=el.value;
       var y=document.createElement("li");
       y.innerHTML = x;
       $("#collaborator3").append(y);
}
function BACKLOG(el)
{
       var x=el.value;
       var y=document.createElement("li");
       y.innerHTML = x;
       $("#BACKLOG").append(y);
}
function DONE_ITEMS(el)
{
       var x=el.value;
       var y=document.createElement("li");
       y.innerHTML = x;
       $("#DONE_ITEMS").append(y);
}
