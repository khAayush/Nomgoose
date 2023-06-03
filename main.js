function estimateReadingTime() {
    var paragraph = document.getElementById("paragraph");
    var timeElementA = document.getElementById("timea");
    var timeElementB = document.getElementById("timeb");
    
    var wordsPerMinuteNative = 200;
    var wordsPerMinuteNonNative = 150;
    
    var words = paragraph.value.trim().split(/\s+/);
    var wordCount = words.length;
    
    var readingTimeA = Math.ceil(wordCount / wordsPerMinuteNative);
    var readingTimeB = Math.ceil(wordCount / wordsPerMinuteNonNative);
    console.log(wordCount);
    if(paragraph.value == ""){
        document.getElementById("paragraph").style.border = "1px solid #c82333";
        timeElementA.innerText = 0;
        timeElementB.innerText = 0;
    }
    
    else{
        document.getElementById("paragraph").style.border = "1px solid white";
        if(wordCount < 190){
            timeElementA.innerText = "< 1";
        }   
        else{
            timeElementA.innerText = readingTimeA;
        }
    
        if(wordCount < 140){
            timeElementB.innerText = "< 1";    
        }
        else {
            timeElementB.innerText = readingTimeB;
        }
    }

  } 
  