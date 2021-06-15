<script>
  import Menu from '../components/Menu.svelte';

</script>

<div class="wrap">
    <div class="menu">
        <Menu/>
    </div>
    <slot/>
</div>

<style>
    .wrap {
        display: flex;
        width: 100%;
    }

    .menu {
        width: 20%;
    }
</style>
