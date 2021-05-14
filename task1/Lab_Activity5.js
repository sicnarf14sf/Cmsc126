function convert(){
    var decimal = document.getElementById("Input").value;
    var tempDecimal, rem, binary = 0, place = 1;
    tempDecimal = decimal;

    
    if(decimal<0){
        alert("Please Enter a positive integer");
        return -1;
    }
    while(tempDecimal>0){  
        rem= tempDecimal%2;
        binary= binary + (rem*place);
        tempDecimal= parseInt(tempDecimal/2);
        place= place*10;
    }

    document.getElementById("Input_2").value = decimal;
    document.getElementById("result").value = binary;
}