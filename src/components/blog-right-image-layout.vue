<template>
    <div class="blog right-image-layout">
        <div class="blog-message">
            <h3 class="blog-title">青空的第一篇日志</h3>
            <p class="blog-date">2020-6-17</p>
            <p>content的内容</p>
            <p>content的内容</p>
            <p>content的内容</p>
            <p>content的内容</p>
            <p>content的内容</p>
        </div>
        <div class="blog-image"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.right-image-layout {
    height: 280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .blog-image {
        width: 400px;
        height: 100%;
        background-image: url(../assets/about-background.jpg);
        // background-size: 150% 150%;
        background-position: 50% 50%;
    }
    .blog-message {
        padding: 20px;
        line-height: 30px;
    }
}
</style>
