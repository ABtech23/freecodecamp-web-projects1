let questions = [];

let question1 = {
  category: "this",
  question: "what are you talking about",
  choices: ["yeah you are right", "yeah perhaps", "nothing"],
  answer: "nothing"
};

let question2 = {
  category: "that",
  question: "why are you talking about",
  choices: ["yeah you are right", "yeah perhaps", "no reason"],
  answer: "no reason"
}

let question3 = {
  category: "there",
  question: "where were you talking about",
  choices: ["nowhere", "right there", "yep your right"],
  answer: "nowhere"
}

let question4 = {
  category: "that",
  question: "How were you talking about",
  choices: ["by talking", "by here and there", "by phone"],
  answer: "by here and there"
}

let question5 = {
  category: "these",
  question: "what were these talking about",
  choices: ["I have no idea", "you already know", "about anything"],
  answer: "about anything"
}

questions.push(question1);
questions.push(question2);
questions.push(question3);
questions.push(question4);
questions.push(question5);

let getRandomQuestion = (questions) => {
  return questions[Math.floor(Math.random() * questions.length)];
};

let getRandomComputerChoice = (choices) => {
  return choices[Math.floor(Math.random() * choices.length)];
};

let getResults = (question, computerChoice) => {
  return computerChoice == question.answer ? "The computer's choice is correct!" : `The computer's choice is wrong. The correct answer is: ${question.answer}`;
};
