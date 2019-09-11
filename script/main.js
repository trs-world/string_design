timer = 0;
function main(id, top, num, sentence_length) {
    string_design(id, top, num, sentence_length);
    $('span').fadeOut(3000);
    if(num == 1) {
        $('#sentence0').fadeIn();
    }
    $('#sentence' + Math.ceil(num / 2)).fadeIn();
}

function string_design(id, top, num, sentence_length) {
    var mainId = document.getElementById(id);
    span_tag = 'sentence'
    for(var i = 0;i < num;i++) {
        let sentence = `<span class='blur' id='${span_tag + i}'>${randomString(sentence_length)}</span>`;
        mainId.innerHTML += sentence;
        document.getElementById(span_tag + i).style.cssText = `transform: translateY(${-30 -i * 5}%);top: ${top + i * 5}%;`;
    }
    spoilerAlert('spoiler, .blur', {max: 4, partial:4, click:4});
    interval = setInterval(function(){
        for(var i = 0; i < num; i++) {
            var getId = document.getElementById(span_tag + i);
            if(timer >= 26) {
                var fadeInTag;
                if(num == 1) {
                    fadeInTag = span_tag + 0;
                }
                else {
                    fadeInTag = span_tag + Math.ceil(num / 2);
                }
                document.getElementById(fadeInTag).innerHTML = '　　　　　　　　　　　　　　1.048599';
            }
            else {
                getId.innerHTML = randomString(sentence_length);
            }
        }
        if(timer >= 26) {
            spoilerAlert('spoiler, .blur', {max: 0, partial:0, click:0});
            clearInterval(interval);
        }
        timer += 1;
    },100);
}

function randomString(len) {
	let str =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let cl = str.length;
　　 var r = "";
    for(var i = 0; i < len; i++){
    	var num = Math.random() * 20;
    	if(num < 10) {
    		r += str[Math.floor(Math.random()*cl)];
    	}
    	else {
    		r += "&nbsp;&nbsp;";
    	}
    }
    return r;
}
