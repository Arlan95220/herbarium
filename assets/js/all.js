function cate(){
if(HE.style.display=='block')
	HE.style.display='none';
else
	HE.style.display='block';
}

function sing(i){
if(i==1)
{
newra.style.display='none';
forget.style.display='none';

if(singwindow.style.display=='block')
	singwindow.style.display='none';
else
	singwindow.style.display='block';
}
else if(i==2)
{
singwindow.style.display='none';
forget.style.display='none';

if(newra.style.display=='block')
	newra.style.display='none';
else
	newra.style.display='block';
}
else
{
singwindow.style.display='none';
newra.style.display='none';
if(forget.style.display=='block')
	forget.style.display='none';
else
	forget.style.display='block';
}
}

function x(j){
if(j==1)
{
	singwindow.style.display='none';
}
else if(j==2)
{
	newra.style.display='none';
}
else
{
	forget.style.display='none';
}
}