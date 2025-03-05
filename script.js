//your JS code here. If required.
const btn = document.querySelector(".increment");
const output = document.querySelector(".output");

let count = 0;
btn.addEventListener('click', ()=>{
	count++;
	alert(count);
	output.innerText = count;
})