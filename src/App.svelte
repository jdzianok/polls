<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import PollList from './components/PollList.svelte';
  import Tabs from './blocks/Tabs.svelte';
  import PollForm from './components/PollForm.svelte';

  let items = ['Current Polls', 'Add New Poll'];
  let activeItem = 'Current Polls';

  const tabChange = e => {
    activeItem = e.detail;
  };

  let polls = [
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
  ];

  const handleAdd = e => {
    const poll = e.detail;
    polls = [poll, ...polls];
    activeItem = "Current Polls";
    console.log(polls);
  };

  const handleVote = e => {
    const { id, option } = e.detail;
    let copiedPolls = [...polls];
    let upvotedPoll = copiedPolls.find(poll => poll.id === id);
    if (option === 'a') {
      upvotedPoll.votesA++;
    } else if (option === 'b') {
      upvotedPoll.votesB++;
    }

    polls = copiedPolls;
  }
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange}/>
  {#if activeItem === "Current Polls"}
     <PollList {polls} on:vote={handleVote}/>
  {:else if activeItem === "Add New Poll"}
   <PollForm on:add={handleAdd}/>
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
    padding: 0 10px;
  }
</style>
