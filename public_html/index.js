
let z = ["Agra" , "Kochi" , "Udaipur" , "New Delhi" , "Shimla" , "Darjeeling" , "Bengalure" , "Goa" , "Gantok" , "Shillong"];
let c = ["cyan" , "coral" , "aqua" , "chocolate" , "crimson" , "teal" , "tan" , "slategray" , "azure" , "darkmagenta"];
let k = 0;

//let t = setInterval(changeplace , 30000);

function changeplace(){
    document.getElementById("pname").innerHTML = z[k];
    document.getElementById("back").style.backgroundColor = c[k];
    k++;
    if(k == c.length)k = 0;
}

let sandr = ["About Ixigo" , "Popular Flight Routes" , "Info" , "Popular Buses Routes" , "Airlines"];
document.getElementsByClassName("but")[0].setAttribute("style" , "border-bottom:2px solid crimson;");

function read(i){
    for(let k = 0 ; k < 5 ;  k++ ){
        document.getElementsByClassName("but")[k].setAttribute("style" , "border-bottom:none");
    }
    document.getElementsByClassName("but")[i].setAttribute("style" , "border-bottom:2px solid crimson;");
    document.getElementById("andread").innerHTML = sandr[i];
}





setInterval(exact , 1000)
function exact(){
    let d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleDateString() + " " + d.toLocaleTimeString();
}



function mobile(){
    window.alert("This facility is not available yet");
}

function trip(){
    document.getElementById("by").innerHTML = "by ";
}