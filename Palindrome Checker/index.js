const input = document.getElementById("input")

function reversString(str){
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value
    const reverse =reversString(value)
   if(value === reverse){
    alert("P A L I N D R O M E")
   }else{
    alert("NO CHANCE!")
   }

   input.value = ""
}