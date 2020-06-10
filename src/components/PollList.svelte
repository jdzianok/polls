<script>
  import PollStore from "../stores/PollStore.js";
  import PollDetails from './PollDetails.svelte';
  import { fade, slide, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
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
    <div in:fade out:scale|local animate:flip={{duration: 500}}>
      <PollDetails {poll}/>
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }
</style>