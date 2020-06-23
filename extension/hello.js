 button.addEventListener((a)=>{
            text.value+=text.value;
            chrome.tabs.executeScript({
                code: 'document.body.style.backgroundColor="red"'
            }).then((returned)=>{
                document.write(returned);
            });
        });
        chrome.runtime.onMessage.addListener((msg,sendr)=>{
            div.innerHTML=msg.question+"<br>"+msg.answer;
            alert(msg);
        }) 