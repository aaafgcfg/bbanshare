// JavaScript source code
// 


//document.querySelector("div div.f4 span");

var executed= (a)=>{
	alert(a);
}

chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="orange"'
});

chrome.tabs.executeScript(null,
{
"code":`

let ret={
"question":"",
"answer":""
};


ret.question = document.querySelector("fieldset legend").innerText;
let varis = document.querySelectorAll("fieldset table tbody tr");
for( let one of varis){
	if(one.querySelector("input").checked){
		ret.answer+=one.innerText+"\n";
	}
}
ret;
`
},executed);

