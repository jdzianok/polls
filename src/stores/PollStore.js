import { writable } from 'svelte/store';

const PollStore = writable([
  {
    id: 1,
    question: "U mnie czy u Ciebie?",
    answerA: "U mnie",
    answerB: "U Ciebie",
    votesA: 1,
    votesB: 8
  },
  {
    id: 2,
    question: "Piwko i pizza?",
    answerA: "Tak",
    answerB: "Jak najbardziej",
    votesA: 4,
    votesB: 9
  }
]);

export default PollStore;