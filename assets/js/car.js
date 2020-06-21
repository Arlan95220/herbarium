var con = 0;
function stotal(st){
document.getElementById("stotalout"+st).innerHTML=(parseInt(document.getElementById("number"+st).value)*parseInt(document.getElementById("price"+st).value));
if(con<st)
	con = st;
btotal();
}
function btotal(){
var bt = 0;
for(var j = 1;j<=con;j++ ){
bt+= parseInt(document.getElementById("stotalout"+j).innerHTML);
}
document.getElementById('btotalout').innerHTML= bt;
}