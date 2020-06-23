

chrome.runtime.onMessage.addListener((msg,sendr)=>{
    alert(sendr);
    alert(msg);

}) 