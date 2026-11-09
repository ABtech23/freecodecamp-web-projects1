const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

let compactFragments = (fragments) => {
  let cFragments = [];

  for (let i = 0; i < fragments.length; i++) {
    if (fragments[i] !== undefined) {
      cFragments.push(fragments[i]);
    } else {
      console.log("[COMPACTED] Removed an empty fragment");
    }
  }

  return cFragments;
};
let compactedShuffledFragments = compactFragments(shuffledFragments);

let sortFragments = (fragments) => {
  let sFragments = [...fragments];
  for (let i = 0; i < sFragments.length; i++) {
    for (let j = 0; j < sFragments.length - 1 - i; j++) {
      if (sFragments[j].id > sFragments[j + 1].id) {
        let temp = sFragments[j];
        sFragments[j] = sFragments[j + 1];
        sFragments[j + 1] = temp;
      }
    }
  }
  return sFragments;
};
let sortedFragments = sortFragments(compactedShuffledFragments);

let dedupeFragments = (fragments) => {
  let dFragments = [];
  for (let i = 0; i < fragments.length; i++) {
    let exists = false;

    for (let j = 0; j < dFragments.length; j++) {
      if (fragments[i].id === dFragments[j].id) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      dFragments.push(fragments[i]);
    } else {
      console.log(`[DEDUPED] Removed duplicate ID: ${fragments[i].id}`);
    }
  }
  return dFragments;
};
let dedupedFragments = dedupeFragments(sortedFragments);

let fillMissingFragments = (fragments) => {
  let fmFragments = [];
  for (let i = 0; i < fragments.length; i++) {
    fmFragments.push(fragments[i]);
    if (i < fragments.length - 1) {
      let nextId = fragments[i].id + 1;
      while (nextId < fragments[i + 1].id) {
        fmFragments.push({
          id: nextId,
          text: "[...]"
        });
        console.log(`[FILLED] Added missing ID: ${nextId}`);
        nextId++;
      }
    }
  }
  return fmFragments;
};
let filledFragments = fillMissingFragments(dedupedFragments);

let assembleStory = (fragments) => {
  let storyFragments = "";
  for (let i = 0; i < fragments.length; i++) {
    storyFragments += fragments[i].text;
    if (i < fragments.length - 1) {
      storyFragments += "\n";
    }
  }
  return storyFragments;
};
let assembledStory = assembleStory(filledFragments);

console.log(assembledStory)
