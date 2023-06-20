function highlight() {
    //Write your code here
	let elements = document.querySelectorAll("p strong");

  elements.forEach((ele)=>{
    ele.style.color="green";
  })


}


function return_normal() {
    //Write your code here
let elements = document.querySelectorAll("p strong");

  elements.forEach((ele)=>{
    ele.style.color="black";
  })
    
}
