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
        background-color: #EBEBEB;  
        // background-color: rgba(255, 255, 255, 0.7);
        border-radius: 5px;
    
        a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        img {
            width: 25px;
            height: 25px;
        }
        .description {
            margin-top: 10px;
            color: #fff;
        }
    }
}
</style>
