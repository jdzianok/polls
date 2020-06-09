<script>
  import PollStore from "../stores/PollStore.js";
  import PollDetails from './PollDetails.svelte';
  // import { onMount, onDestroy } from 'svelte';
  // export let polls = [];

  // const unsubscribe = PollStore.subscribe(data => polls = data);

  // onMount(() => {
  //   console.log('mounted');
  // });

  // onDestroy(() => {
  //   console.log('destroyed');
  // });
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <PollDetails {poll}/>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>