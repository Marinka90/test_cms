<script>
  export let title;
</script>

<div class="page">
    <div class="title">
        <div>{title}</div>
    </div>
    <div class="content">
        <slot/>
    </div>
</div>

<style>
    .page {
        width: 80%;
        height: 100vh;
        background: white;
    }

    .content {
        padding: 24px;
    }

    .title {
        font-size: 20px;
        height: 64px;
        display: block;
        box-sizing: border-box;
        position: relative;
        padding: 20px 24px;
    }

    .title:after {
        position: absolute;
        content: ' ';
        border-top: 1px solid lightgray;
        width: 100%;
        left: 0;
        bottom: 0;
    }

</style>