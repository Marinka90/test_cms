<script>
  import { onMount } from 'svelte';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text/index';
  import Page from '../components/Page.svelte';
  import Button, { Label } from '@smui/button';
  import Checkbox from '@smui/checkbox';
  import CircularProgress from '@smui/circular-progress';

  let pokemon = null;

  onMount(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then(res => res.json())

      .then(data => pokemon = data)
  });

  function save() {
    console.log('pokemon', pokemon);
  }

  let name = '';

</script>


<Page title="Форма">
  {#if pokemon === null}
    <div style="display: flex; justify-content: center">
      <CircularProgress
          class="my-four-colors"
          style="height: 32px; width: 32px;"
          indeterminate
          fourColor
      />
    </div>
  {:else}
    <Textfield
        style="margin-bottom: 12px"
        value={pokemon.name}
        on:change={(e) => (pokemon = {...pokemon, name: e.target.value})}
        label="Name"
    >
      <HelperText slot="helper">Название</HelperText>
    </Textfield>

    <div class="default">
      <Checkbox
          checked={Boolean(pokemon.is_default)}
          on:click={(e) => (pokemon = {...pokemon, is_default: e.target.checked})}
      />
      <span>Is default</span>
    </div>

    <Button on:click={save} variant="raised">
      <Label>Save</Label>
    </Button>
  {/if}

</Page>

<style>
    .default {
        margin-bottom: 12px;
        display: flex;
        align-items: center;
    }
</style>
