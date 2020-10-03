<template>
    <div class="glass-piece">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.glass-piece {
    width: 100px;
    height: 100px;
    /* Google Chrome */

    /* 设置背景半透明黑色 */
    // background-color: #f2f2f2;
    backdrop-filter: blur(30px);
    // opacity: 0.4;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
