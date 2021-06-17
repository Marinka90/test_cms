<script>
  import Page from '../components/Page.svelte';
  import { onMount } from 'svelte';
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

  let result = [];

  onMount(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(res => res.json())

      .then(data => result = data.results)
  });

</script>

<Page title="Таблица">
    <DataTable table$aria-label="People list" style="width: 100%;">
        <Head>
            <Row>
                <Cell>Name</Cell>
                <Cell>URL</Cell>
            </Row>
        </Head>
        <Body>
        {#each result as row}
            <Row>
                <Cell>{row.name}</Cell>
                <Cell>{row.url}</Cell>
            </Row>
        {/each}
        </Body>
    </DataTable>

</Page>
