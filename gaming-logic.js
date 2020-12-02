var answer;
var score = 0;
var backgroundImages = [];

function newxtQuestion() {
  const n1 = Math.floor(Math.random() * 5);
  document.getElementById('n1').innerHTML = n1;
  const n2 = Math.floor(Math.random() * 6);
  document.getElementById('n2').innerHTML = n2;
  answer = n1 + n2;
}

function checkAnswer(){
  const prediction = predictImage();
  console.log(`answer: ${answer}, prediction: ${prediction}`);

  if (prediction == answer) {
    score++;
    console.log(`Correct! Score is ${score}`);
    if (score <= 6) {
      backgroundImages.push(`url('images/background${score}.svg')`)
      document.body.style.backgroundImage = backgroundImages;
    } else {
      alert('Well done! Your math garden is in full bloom! Lets start again!')
      score = 0;
      backgroundImages = [];
      document.body.style.backgroundImage = backgroundImages;
    }

  } else {
    if (score != 0) {score--;}
    console.log(`Nah mate, score is ${score}`);
    alert('Oops, something went wrong! Check your calculations or make sure your handwriting is neat enough to bloom.');
    setTimeout(function(){
      backgroundImages.pop();
      document.body.style.backgroundImage = backgroundImages;
    }, 1000);
  }
}
