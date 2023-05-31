let i = 0;
load = () => {
    if(i == 0){
        i = 1;
        let elem = document.querySelector('#Web');
        let wid = 1;
        let id = setInterval(() => {
           if(wid >= 100){
            clearInterval(id);
           } else{
            wid++;
            elem.style.width = wid + "%";
           }
        }, 2000);
    }
}

// the social media button 
function button () {
    var options = {
        instagram: "md_angelwhite", // Instagram username
        whatsapp: "+2348102678284", // WhatsApp number
        call_to_action: "Message me", // Call to action
        button_color: "black", // Color of button
        position: "left", // Position may be 'right' or 'left'
        order: "instagram,whatsapp", // Order of buttons
        pre_filled_message: "Hello, I want to make an enquiry, my name is ...", // WhatsApp pre-filled message
    };
    var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
}
button();
