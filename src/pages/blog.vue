<template>
    <div>

        <div class="tabs">
          adlkfjdsaklf
        </div>
        <!-- 博客 -->
        <div class="blogs">
            <blogTopImageLayout />
            <blogRightImageLayout />
        </div>
    </div>
</template>

<script>
import blogTopImageLayout from "../components/blog-top-image-layout";
import blogRightImageLayout from "../components/blog-right-image-layout";
export default {
    components: {
        blogTopImageLayout,
        blogRightImageLayout,
    },
};
</script>

<style lang="scss">

.tabs {
  width: 300px;
  height: 70px;

}

.blogs {
    width: 100%;
    height: 100%;
    padding: 10px;
    // 博客的一些公共样式
    .blog {
        width: 900px;
        border-radius: 10px;
        margin: 0 auto;
        overflow: hidden;
        margin-bottom: 50px;
        background: #fff;
        box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.06);
        .icons {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
        .blog-date-pigeonhole-message {
            span {
                display: flex;
                align-items: center;
                float: left;
                margin-right: 10px;
            }
        }
        .blog-image {
            transition: all 0.5s;
        }

        &:hover {
            .blog-image {
                transform: scale(1.05);
                cursor: pointer;
            }
        }
    }
}
</style>
