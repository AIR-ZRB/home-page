<template>
    <div class="glass-piece">
        <div class="piece">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.glass-piece {
    width: 25%;
    float: left;
    display: flex;
    justify-content: center;
    margin: 0 0 70px 0;
    .piece {
        width: 80px;
        height: 80px;

        /* 设置背景半透明黑色 */
        backdrop-filter: blur(1px);
        // background-color: #fff;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        img {
            width: 25px;
            height: 25px;
        }
        .description {
            position: absolute;
            bottom: -30px;
            color: #fff;
        }
    }
}
</style>
