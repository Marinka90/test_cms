<script>
  import List, { Item, Text, Graphic } from '@smui/list';
  import Logo from "./img/Logo.svg";
</script>

<div>
    <div class="logo">
        <Logo width="86"/>
    </div>
    <List>
        <Item on:SMUI:action={() => (window.location.href = '/')}>
            <Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
            <Text>Таблица</Text>
        </Item>
        <Item on:SMUI:action={() => (window.location.href = '/#/form')}>
            <Graphic class="material-icons" aria-hidden="true">book</Graphic>
            <Text>Форма</Text>
        </Item>
    </List>
</div>

<style>
    .logo {
        padding: 20px 24px;
    }
</style>