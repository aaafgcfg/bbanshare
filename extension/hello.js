



button.addEventListener('click',(a)=>{
    chrome.runtime.sendMessage(null, JSON.stringify({
        "address":text.value
    }));
});

