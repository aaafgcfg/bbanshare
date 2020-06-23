// JavaScript source code
// 


//document.querySelector("div div.f4 span");




document.querySelector("div span p input").addEventListener("click",(a)=>{
	let ret={
		"question":"",
		"answer":""
	};
	alert("ah");
	ret.question = document.querySelector("fieldset legend").innerText;
	let varis = document.querySelectorAll("fieldset table tbody tr");
	for( let one of varis){
		if(one.querySelector("input").checked){
			ret.answer+=one.innerText+"\n";
		}
	}
	chrome.runtime.sendMessage(null, ret);
})



