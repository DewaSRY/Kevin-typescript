import "./public/index.css";
// import typescriptLogo from "./typescript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.ts";
import MathQuiz from "./views/MathQuiz.ts";
import GameScore from "./views/GameScore.ts";
import MathQuizObserver from "./app/MathQuizObserver.ts";
const rootElement = document.querySelector<HTMLDivElement>("#app")!;
rootElement!.innerHTML = `
  <div class="main-container">
      <div  id="score-board" class="score-board">
        <h2 id="current-score">Score: 0</h2>
        <h2 id="hight-score">Hight Score: 0</h2>
      </div>
      <div id="math-quiz">
        <h2 id="math-question">1 + 1 + 5= ?</h2>
        <div class="option-container">
          <p class="option">1</p>
          <p class="option">1</p>
          <p class="option">1</p>
          <p class="option">1</p>
          <p class="option">1</p>
        </div>
      </div>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const mathQuizElement = document.getElementById("math-quiz")!;
const scoreElement = document.getElementById("score-board")!;
MathQuiz.setUp(mathQuizElement);
GameScore.setUp(scoreElement);
MathQuizObserver.getSubject().notify();
