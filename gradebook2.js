
let getAverage = (grades) => {
  let sum = 0;
  for (let grade of grades) {
    sum += grade;
  }
  return sum / grades.length;
}

let getGrade = (score) => {
  if (score === 100) {
    return "A+";
  }
  else if (score >= 90 && score <= 99) {
    return "A";
  }
  else if (score >= 80 && score <= 89) {
    return "B";
  }
  else if (score >= 70 && score <= 79) {
    return "C";
  }
  else if (score >= 60 && score <= 69) {
    return "D";
  }
  else {
    return "F";
  }
};

let hasPassingGrade = (score) => {
  return getGrade(score) !== "F";
};

let studentMsg = (scores, score) => {
  if (hasPassingGrade(score)) {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You passed the course.`
  }
  else {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You failed the course.`
  }
}

let students = [
  { name: "Alex", score: 95 },
  { name: "John", score: 72 },
  { name: "Sarah", score: 45 },
  { name: "Mike", score: 88 }
];

let generateGradebook = (students) => {

  students.forEach((student) => {
    student.grade = getGrade(student.score);
    student.passed = hasPassingGrade(student.score);
  });

  let scores = students.map(student => student.score);

  let classAverage = getAverage(scores);

  return {
    students: students,
    classAverage: classAverage
  };
};

console.log(generateGradebook(students));

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getGrade(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])));
// // console.log()
// console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));