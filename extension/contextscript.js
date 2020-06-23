// JavaScript source code
// 


//document.querySelector("div div.f4 span");




document.querySelector("div span p input").addEventListener("click",(a)=>{
	let ret={
		"userid":"",
		"question":"",
		"answer":""
	};
	ret.userid=document.querySelector("a#global-nav-link").innerText;
	ret.question = document.querySelector("fieldset legend").innerText.replace(/\n|\t/gi,'');
	let varis = document.querySelectorAll("fieldset table tbody tr");
	for( let one of varis){
		if(one.querySelector("input").checked){
			ret.answer+=one.innerText.replace(/\n|\t/gi,'')+' <br>';
		}
	}
	ret.answer+=document.querySelector("fieldset select").selectedOptions[0].innerText
	alert(JSON.stringify(ret));
	chrome.runtime.sendMessage(null, JSON.stringify(ret));
})



