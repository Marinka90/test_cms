<script>
  import Checkbox from '@smui/checkbox';
  import Page from '../components/Page.svelte';

  let checked = false;

</script>

<Page title="Главная">
    <h1>Hello world!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    <Checkbox bind:checked/>
</Page>