/**
 * SocialMedia Word Counter App
 * The App is to count how many words the user has typed based on the 
 * Social Media handle they have selected. And when they reach the limit
 * of the SM handle they receive a message You have reached your maximum word count.
 * 
 * Bellow are the word counts for each social media
 * Twitter = 280
 * Facebook = 63206
 * Instagram = 2200
 * Others = 8000. 
 * 
 * When a user selects a SocialMedia Handle, Words in the html page
 * changes from 0 to the desired number of words. E.g if twitter is selected, word changes form 0 280.centered
 * 
 * When a user begins to type in the textarea, Word Count increases while word decreases.
 * 
 * Once word decreases to 0. The user is unable to type any further characters and gets the
 * congratulatory message. 
 * 
 * NOTE
 * 1. Your code must be properly commented.
 * 2. Use Es6 syntax wherever possible.  
 */
//sellect social media, words and word count
const twitter = document.querySelector("#twitter")
const facebook = document.querySelector("#facebook")
const instergram = document.querySelector("#instergram")
const others = document.querySelector("#others")
const words = document.querySelector("#words")
const WordCount = document.querySelector("#count")
//Add event listener to social media radio buttons
let maxNum; 
let inputs=document.querySelectorAll("input[type=radio]"),
x=inputs.length;
while(x--){
inputs[x].addEventListener("click", function(){
    if(twitter.checked){
     textarea.setAttribute("maxLength", 280)
        maxNum = 280
        words.innerHTML = maxNum
        WordCount.innerHTML = 0 
}else if(facebook.checked){
    textarea.setAttribute("maxLength", 63206)
    maxNum = 63206
    words.innerHTML = maxNum
    WordCount.innerHTML = 0
}else if(instergram.checked){
    textarea.setAttribute("maxLength", 2200)
    maxNum = 2200
    words.innerHTML = maxNum
    WordCount.innerHTML = 0
}else if(others.checked){
    textarea.setAttribute("maxLength", 8000)
    maxNum = 8000
    words.innerHTML = maxNum
    WordCount.innerHTML = 0
}else{
    words.innerHTML = 0
    WordCount.innerHTML = 0
}
})
//Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
//sellectin textarea, add event listener to listen for changes in textarea and count through
const message = document.querySelector("#message")
const textarea = document.querySelector("#text")
message.style.color ="peru";
message.style.fontFamily = "Lucida Console,Courier New,";
textarea.addEventListener("keyup", function(){
if(twitter.checked || facebook.checked || instergram.checked || others.checked){
    let text = textarea.value
    words.innerHTML = maxNum-text.length
    WordCount.innerHTML = text.length
}else {
    message.innerHTML = '' 
}
if(textarea.value.length === maxNum && twitter.checked || facebook.checked || instergram.checked || others.checked){
    message.innerHTML = 'You have reached your maximum word count'
}else{
    message.innerHTML = ''
} 

})
}









