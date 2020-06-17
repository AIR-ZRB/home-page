<template>
    <div class="blog top-image-layout">
        <div class="blog-image"></div>
        <div class="blog-message">
            <h3 class="blog-title">
                青空的第一篇日志
            </h3>
            <p class="blog-date-pigeonhole-message">
                <span class="blog-date">
                    <img class="icons" src="../assets/icons/calendar.png" />
                    2020-6-17
                </span>
                <span>|</span>
                <span class="blog-pigeonhole">
                    <img class="icons" src="../assets/icons/pigeonhole.png" />
                    日常日记
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.top-image-layout {
    .blog-image {
        width: 100%;
        height: 300px;
        background-image: url(../assets/about-background.jpg);
        background-size: 150% 150%;
        background-position: 50% 100%;
    }

    .blog-message {
        padding: 20px;
        line-height: 30px;
        overflow: hidden;
    }
}
</style>
