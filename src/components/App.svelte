<script>
  import Router from 'svelte-spa-router';
  import { routes } from './routes';
  import Layout from './Layout.svelte'

</script>

<main>
    <Layout>
        <Router {routes}/>
    </Layout>
</main>


<style>
    main {
        background: #F2F6FA;
        height: 100vh;
    }
</style>
