const typedTextSpan = document.querySelector("#typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["heart pieces"];
const typingDelay = 200;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) 
  {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  }
}




// ----------

let texts = {
  first: "frst text",
  second: "second",
  third: "third"
}

let indices = {
  first: 0,
  second: 0,
  third: 0,
}

function startType(typeel){
  console.log('typeel', typeel)
  let element_id = typeel.parentElement.parentElement.id;
  let our_text = texts[element_id];
  let our_idx = indices[element_id];
  console.log(element_id, our_text, our_idx);

  if (our_idx < our_text.length){
    typeel.textContent += our_text[our_idx]
    indices[element_id] += 1;
    setTimeout(function(){startType(typeel)}, typingDelay);
  }


}





 // ----------

let observers = [];
document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
  
  let heartText = document.getElementsByClassName("typed-heartpieces");
  for (let i = 0; i < heartText.length; i++) {

    // let options = {
    //   root: heartText[i],
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }

    // observers[i] = new IntersectionObserver(function(){startType(heartText[i])}, options);
    startType(heartText[i]);
   }
  console.log(heartText);

  
});


