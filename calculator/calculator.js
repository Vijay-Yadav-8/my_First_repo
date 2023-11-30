function f1(value){
    document.getElementById("input").value+=value;
}

function f2(){
    const value = document.getElementById("input").value;
    const out = eval(value);
    if(out)
    document.getElementById("input").value = out;
}

function f3(){
    document.getElementById("input").value="";
}

function f4(){
    const val = ""+document.getElementById("input").value;
    document.getElementById("input").value = val.substring(0,val.length-1);
}