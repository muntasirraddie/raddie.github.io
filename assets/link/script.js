const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function(){
    //Current WordIndex of Word
    const current =this.wordIndex % this.words.length;
    //Get full text
    const fullTxt = this.words[current];
    if (this.isDeleting) {
        this.txt =fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt =fullTxt.substring(0, this.txt.length + 1);
    }
    //insert time
    this.txtElement.innerHTML=`<span class ="text">${this.txt}</span>`;
    //type speed
    let typeSpeed = 300;

    if (this.isDeleting) {
        typeSpeed /=2;
    }
    //word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed =this.wait;
        this.isDeleting = true;
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed =500;
    }
    setTimeout(() => this.type(), typeSpeed)
}

//Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init app
function init(){
    const txtElement = document.querySelector('.txt');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //Init typeWriter

    new TypeWriter(txtElement,words,wait);
}


//coundown clock//

var countDownDate = new Date("Jan 1,2021 00:00:00").getTime();
var x =  setInterval(function(){
    var now = new Date().getTime();

var distance = countDownDate - now ;

var days =Math.floor(distance / (1000 * 60 * 60 * 24));
var hour = Math.floor((distance % (1000 * 60 * 60 *24))/ (1000 * 60 *60));
var minute = Math.floor((distance % (1000 * 60 *60))/(1000 * 60));
var seconds = Math.floor((distance %(1000 *60))/1000);

document.getElementById("demo").innerHTML= days + "d " + hour +"h " +minute + "m " +seconds + "s ";
})




