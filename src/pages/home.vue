<template>
    <div class="home">
        <!-- 主页头部 -->
        <div class="me-message">
            <div class="me-message-box">
                <div class="author"></div>
                <div class="me-description">
                    <h2>{{ myMessage.name }}</h2>
                    <!-- <p v-for="item in myMessage.descriptions" :key="item">
                        {{ item }}
                    </p> -->
                    <p>{{ test }} <span class="flicker">|</span></p>
                </div>
                <div class="author-link">
                    <a
                        v-for="item in myMessage.link"
                        :key="item.link"
                        :href="item.link"
                    >
                        <img
                            :src="require(`../assets/icons/${item.icon}.png`)"
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: "",
            myMessage: {
                name: "青空",
                descriptions: [
                    "生于忧患死于安乐",
                    "与其怨天尤人,不如听命自己",
                    "你未来的模样都藏在现在的努力里",
                    "今でもあなたはわたしの光",
                ],
                link: [
                    { icon: "github", link: "https://github.com/AIR-ZRB" },
                    {
                        icon: "csdn",
                        link: "https://blog.csdn.net/weixin_46187747",
                    },
                    // { icon: "items", link: "sighttp.qq.com/m://sig" },
                    {
                        icon: "QQ",
                        link: "http://sighttp.qq.com/msgrd?v=1&uin=1824735904",
                    },

                    {
                        icon: "music",
                        link: "https://music.163.com/#/playlist?id=4895282025",
                    },
                ],
            },
        };
    },
    methods: {
        specialWords() {
            let num = 0; // 数组的索引
            let directionFlag = true; // 打字的方向
            let _wordNum = 0; // 字符反方向的索引
            let wordNum = 0; // 字符正方向的索引
            setInterval(() => {
                let current = this.myMessage.descriptions[num]; // 获取当前索引的句子
                if (wordNum > current.length) {
                    // 当正方向的索引大于句子的长度时
                    if (directionFlag) {
                        // 执行反方向（删除字）
                        _wordNum++;
                        this.test = current.substr(0, wordNum - _wordNum);
                        if (_wordNum === wordNum) {
                            // 当删除完之后
                            directionFlag = false;
                            _wordNum = 0;
                        }
                    } else {
                        // 添加索引，清空一些参数
                        wordNum++;
                        num++;
                        current = this.myMessage.descriptions[num];
                        wordNum = 0;
                    }
                } else {
                    // 输出字符
                    this.test = current.substr(0, wordNum);
                    wordNum++;
                    directionFlag = true;
                }

                if (num >= this.myMessage.descriptions.length) {
                    // 当索引大于数据索引时
                    num = 0;
                }
            }, 300);
        },
    },
    created() {
        this.specialWords();
    },
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
        // color: skyblue; // 字体颜色
        // color: #fff; // 字体颜色
        h2 {
            font-size: 36px;
        }
        p {
            font-size: 18px;
            margin-top: 10px;
            font-weight: 700;
        }

        .flicker {
            animation: flicker 0.4s;
            animation-iteration-count: infinite;
        }
    }
    .author-link {
        padding: 0px 20px;
        // height: 50px;
        // background: rgba(0,0,0,.5);
        border-radius: 10px;
        width: 350px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        img {
            width: 30px;
            height: 30px;
        }
    }
}

@keyframes flicker {
    from {
        opacity: 0;
        // display: none;
    }
    to {
        opacity: 1;
        // display: block;
    }
}

@media (max-width: 900px) {
    .home .blogs .blog {
        width: 90%;
        //    height: 300px;

        .blog-image {
            width: 100%;
        }
    }
}
@media (max-width: 500px) {
    .me-message {
        .me-description {
            // color: #f8f8d9; // 字体颜色
            color: #fff; // 字体颜色
        }
    }
}
</style>
