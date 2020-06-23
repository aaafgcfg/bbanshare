



button.addEventListener('click',(a)=>{
    //text.value+=text.value;
    chrome.runtime.sendMessage(null, JSON.stringify({
        "address":text.value
    }));
    //TODO: to server address
});

