function bigx(){
bigimg.style.display='none';
}
function o(){
bigimg.style.display= 'block';
}
var r = 0;
var adi = new Array
(
"../assets/image/ad1.jpg",
"../assets/image/ad2.jpg",
"../assets/image/ad3.jpg",
)
var adtime = setInterval("adchange()",6000);
function adchange()
{
adc();
adimg.src=adi[r];
ado(r);
if(r >1)
	r = 0;
else
	r++;
}
function adc(){
document.getElementById("adr1").style.opacity="0.3";
	document.getElementById("adr2").style.opacity="0.3";
	document.getElementById("adr3").style.opacity="0.3";
}
function ado(r){
	document.getElementById("adr"+(r+1)).style.opacity="1";
}
function adstop(t){
clearInterval(adtime);
adc();
document.getElementById("adr"+(t)).style.opacity="1";
adimg.src=adi[t-1];
}
function adstrat(){
adtime = setInterval("adchange()",6000);
}