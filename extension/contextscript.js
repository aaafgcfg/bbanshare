// JavaScript source code
// 


//document.querySelector("div div.f4 span");




document.querySelector("div span p input").addEventListener("click",(a)=>{
	let ret={
		"question":"",
		"answer":""
	};
	ret.question = document.querySelector("fieldset legend").innerText.replace(/\n|\t/gi,'');
	let varis = document.querySelectorAll("fieldset table tbody tr");
	for( let one of varis){
		if(one.querySelector("input").checked){
			ret.answer+=one.innerText.replace(/\n|\t/gi,'')+' <br>';
		}
	}
	alert(JSON.stringify(ret));
	chrome.runtime.sendMessage(null, ret);
})



