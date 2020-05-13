function second(a,b,c){
if(a==0){
if(b==0){
if(c==0){
    alert("infinity solution")
}else{
    alert("there is no solution")
}
    
}else{ 
x4=(-c)/b; alert("the solution is " + x4)
}     
}else{
var x1; var x2; var x3;
var delta=(b**2)-4*(a*c);

        if(delta>0){
x1=((-b)-Math.sqrt(delta))/(2*a); 
x2=((-b)+Math.sqrt(delta))/(2*a);
    alert("first solution is " +x1+" second solution "+ x2);
}
    
        else if(delta==0){
x3=(-b)/(2*a);
    alert("double solution " + x3);
}

        else{ alert("there is no solution ")
}
}
}
second(1,1,1)