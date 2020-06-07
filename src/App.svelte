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
    }
  ];

  const handleAdd = e => {
    const poll = e.detail;
    polls = [poll, ...polls];
    activeItem = "Current Polls";
    console.log(polls);
  };
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange}/>
  {#if activeItem === "Current Polls"}
     <PollList {polls}/>
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
