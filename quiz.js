// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "Bạn có thường hay nghe thể loại nhạc nào?",
        imgSrc : "./img/18.jpg",
        choiceA : "Nhạc Party :)",
        choiceB : "Nhạc MrSiro :(",
        choiceC : "Thể loại khác :v",
        correct: "A"

    },{
        question : "Bạn có hứng thú khi đi học không??",
        imgSrc : "./img/13.jpg",
        choiceA : "Bình thường thui!",
        choiceB : "Có chớ!",
        choiceC : "Nope!",
        correct : "B"
    },{
        question : "Bạn thường hay nhờ tới sự giúp đỡ từ ai?",
        imgSrc : "./img/20.jpg",
        choiceA : "Người thân",
        choiceB : "Bạn bè",
        choiceC : "Bản thân tôi",
        correct : "A"
    },{
        question : "Trên trường học,bạn có cảm nắng ai chưa??",
        imgSrc : "./img/16.jpg",
        choiceA : "Rùi!",
        choiceB : "Nhà bao việc!",
        choiceC : "Cảm nắng thời tiết thì có",
        correct : "C"
    },{
        question : "Bạn có thường xuyên tham gia hoạt động ngoại khóa-xã hội?",
        imgSrc : "./img/88.jpg",
        choiceA : "Yes!Yes!Yes",
        choiceB : "No!No!No",
        choiceC : "Hoạt động ngoại khóa là gì thế?",
        correct : "A"
    },{
        question : "Bạn có hay tiêu tiền cho sở thích cá nhân quá nhiều???",
        imgSrc : "./img/17.png",
        choiceA : "Có! Sở thích mà (tôi giàu :v) ",
        choiceB : "Không ,thật vô bổ (thực ra là nghèo)",
        choiceC : "Thực ra là có nhưng mà không.Thỉnh thoảng tôi mới tiêu tiền thôi   vẫn là nghèo :))",
        correct : "C"
    },{
        question : "Bạn có cảm thấy body mình khác đi nhiều so với lúc trước?",
        imgSrc : "./img/99.jpg",
        choiceA : "Tôi béo lắm",
        choiceB : "Bộ trưởng bộ hài cốt",
        choiceC : "ý bạn là gì° ͜ʖ ͡° ??",
        correct : "C"
    },{
        question : "Bạn làm gì trước khi nhắm mắt ngủ?",
        imgSrc : "./img/95.jpg",
        choiceA : "Cầm điện thoại ",
        choiceB : "Mở mắt :)",
        choiceC : "biết cú đêm không?",
        correct : "A"
    },{
        question : "Bạn có phải người iu động vật?",
        imgSrc : "./img/03.jpg",
        choiceA : "Có !Tôi rất thích chúng!",
        choiceB : "Chó là bạn không phải mình                ͡° ͜ʖ ͡°",
        choiceC : "Tôi bình thường(Cơ mà thịt chó ngon lắm)",
        correct : "B"
    },{
        question : "Bạn là fan của Manga/Anime?",
        imgSrc : "./img/15.jpg",
        choiceA : "Có,tôi xem nhiều lắm!Bạn cũng xem à?Tôi xem rất nhiều đấy...",
        choiceB : "Tôi vẫn xem nhưng bình thường!",
        choiceC : "Đ## M# LŨ WJBU !",
        correct : "B"
    },{
        question : "Bạn có thói quen ăn uống tốt ko?",
        imgSrc : "./img/19.jpg",
        choiceA : "Very Heatlhy,very Balance!",
        choiceB : "Tôi thích ăn vặt",
        choiceC : "Tôi ăn kiêng!",
        correct : "B"
    },{
        question : "Bạn có hay nói chuyện,giao tiếp với bạn bè?",
        imgSrc : "./img/09.jpeg",
        choiceA : "Có!",
        choiceB : "Không,phiền phức vc!",
        choiceC : "Bạn hỏi gì cơ ? Tôi đang nói chuyện với bản thân nên không nghe rõ",
        correct : "B"
    },{
        question : "Bạn có hay để cảm xúc tự bộc phát?",
        imgSrc : "./img/01.png",
        choiceA : "Tôi không cảm xúc :((",
        choiceB : "Tôi tự tin với khả năng giữ cảm xúc tốt",
        choiceC : "Tôi nghĩ nó tự bốc phát :((",
        correct : "C"
    },{
        question : "Bố mẹ bạn có thường xuyên bận việc không?",
        imgSrc : "./img/07.jpg",
        choiceA : "Có,bận nhiều!",
        choiceB : "Không bận lắm .-.",
        choiceC : "Tôi mới là người bận việc ><",
        correct :"C"
    },{
        question : "Bạn có mặc cảm,tự ti về ngoại hình của mình với người khác?",
        imgSrc : "./img/08.jpg",
        choiceA : "Tôi đẹp :)",
        choiceB : "Tôi bình thường!",
        choiceC : "Có ai đang nói về tôi à??",
        correct :"C"
    },{
        question : "Bạn có thường hay cáu gắt?",
        imgSrc : "./img/11.jpg",
        choiceA : " Đ## M# ĐÁNH BỎ M# MÀY BÂY GIỜ HỎI ÍT THÔI!",
        choiceB : "Mình hiền mà ahihi :>",
        choiceC : "Đôi lúc tôi cáu đôi lúc tôi hiền",
        correct : "B"
    },{
        question : "Bạn có nghĩ bạn đã trưởng thành hơn?",
        imgSrc : "./img/97.jpg",
        choiceA : "Tôi còn bé lắm :)",
        choiceB : "Ừ ,tôi trưởng thành mà",
        choiceC : "Tùy bạn nghĩ ,tôi trưởng thành theo cách riêng của tôi !",
        correct : "C"
    },{
        question : "Bạn có phải người chịu nhiều áp lực từ cuộc sống",
        imgSrc : "./img/10.jpg",
        choiceA : "Có!",
        choiceB : "Bình thường!",
        choiceC : "tôi bị trầm cảm...",
        correct : "A"
    },{
        question : "Đôi lúc bạn có thấy cô đơn?",
        imgSrc : "./img/14.jpg",
        choiceA : "Không,tôi lạc quan lắm!  ",
        choiceB : "Đôi lúc ...",
        choiceC : "Uây bạn là người đầu tiên nói chuyện với tôi trong năm nay đấy...",
        correct : "B"
    }

]

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000*3600); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    if(scorePerCent>=80){
        scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
        scoreDiv.innerHTML+=`<div class="loiKhuyen"> Bạn là người rất yêu đời ^.^ <br> Cứ thế nhé :))</div>`;
    }
    else if(scorePerCent>=60){
        scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
        scoreDiv.innerHTML+=`<div class="loiKhuyen"> Bạn là người lạc quan ^^ <br> Hãy giữ vững tinh thần nhé :D</div>`;
    }
    else if(scorePerCent>=40){
        scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
        scoreDiv.innerHTML+=`<div class="loiKhuyen"> Tôi thấy bạn khá ổn ^-^ <br> Hãy cố gắng nhiều hơn trong cuộc sống nhé :v</div>`;
    }
    else if(scorePerCent>=20){
        scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
        scoreDiv.innerHTML+=`<div class="loiKhuyen"> Bạn đang mất tinh thần trong cuộc sống à? :< <br> Hãy cố gắng chia sẻ nhiều hơn!!! </div>`;
    }else{
        scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
        scoreDiv.innerHTML+=`<div class="loiKhuyen"> Đừng bi quan như thế chứ!! >< <br> Nghe bài nhạc này cho vui lên nhé ^^ <br>Link đây: <a href="https://www.youtube.com/watch?v=ADBe9c1sUmE">Reality ^^</a> </div>`
    }
    scoreDiv.innerHTML += `<a href="index.html"class="btn_hov choilai">Chơi lại :"> </a>`

}





















