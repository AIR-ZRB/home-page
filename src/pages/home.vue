<template>
    <div class="home">
        <!-- 主页头部 -->

        <div class="me-message">
            <div class="me-message-box">
                <div class="author"></div>
                <div class="me-description">
                    <h2>{{ myMessage.name }}</h2>
                    <p v-for="item in myMessage.description" :key="item">
                        {{ item }}
                    </p>
                </div>
            </div>
        </div>

        <!-- 博客 -->
        <div class="blogs">
            <blogTopImageLayout/>
            <blogRightImageLayout/>
        </div>
    </div>
</template>

<script>
import blogTopImageLayout from "../components/blog-top-image-layout";
import blogRightImageLayout from "../components/blog-right-image-layout";
export default {
    data() {
        return {
            myMessage: {
                name: "青空",
                description: [
                    " Why do we fall sir? So that we can learn to pick ourselves up.",
                    "-「Dark Knight」",
                ],
            },
        };
    },
    components: {
        blogTopImageLayout,
        blogRightImageLayout
    }
};
</script>

<style lang="scss">
.home {
    // background: black;
    width: 100%;
    height: 100%;
    // background-size: 100% 100%;
}
.me-message {
    display: flex;
    justify-content: center;
    align-items: center;

    // position: absolute;
    // top: 0;
    // bottom: 0;
    // margin: auto 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background-image: url("../assets/home-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    .author {
        width: 120px;
        height: 120px;
        background-image: url("../assets/me-portrait.jpg");
        background-size: 100% 100%;
        border-radius: 50%;
        display: inline-block;
    }

    .me-description {
        color: #fff;
        h2 {
            font-size: 36px;
        }
        p {
            font-size: 18px;
            margin-top: 10px;
            font-weight: 700;
        }
    }
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
        background: skyblue;
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
             transition: all .5s;
        }
       
        &:hover {
            .blog-image {
                transform: scale(1.05);
            }
        }
    }

   
  
}
</style>
