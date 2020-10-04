<template>
    <div class="home">
        <!-- 主页头部 -->
        <div class="me-message">
            <div class="me-message-box">
                <div class="author"></div>
                <div class="me-description">
                    <h2>{{ myMessage.name }}</h2>
                    <p>{{ test }} <span class="flicker">|</span></p>
                </div>

                <div class="author-link">
                    <p @click="shadeToggle('About')">关于我</p>
                    <p @click="shadeToggle('Items')">作品</p>
                </div>

                <!-- 二级菜单，遮罩层 -->
                <transition name="shade">
                    <shade
                        v-show="shadeIsShow"
                        :showDatas="showDatas"
                        :shadeIsShow.sync="shadeIsShow"
                    />
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import shade from "@/components/shade.vue";
export default {
    data() {
        return {
            test: "",
            shadeIsShow: false,
            showDatas: {},
            myMessage: {
                name: "青空",
                descriptions: [
                    "生于忧患死于安乐",
                    "与其怨天尤人,不如听命自己",
                    "你未来的模样都藏在现在的努力里",
                    "今でもあなたはわたしの光",
                ],
            },
            // about
            link: [
                {
                    icon: "Github",
                    name: "Github",
                    link: "https://github.com/AIR-ZRB",
                },
                {
                    icon: "CSDN",
                    name: "CSDN",
                    link: "https://blog.csdn.net/weixin_46187747",
                },
                {
                    icon: "QQ",
                    name: "QQ",
                    link: "http://sighttp.qq.com/msgrd?v=1&uin=1824735904",
                },

                {
                    icon: "Music",
                    name: "Music",
                    link: "https://music.163.com/#/playlist?id=4895282025",
                },
            ],
            // items
            items: [
                {
                    icon: "Music1",
                    name: "青空云音乐",
                    link: "http://49.232.192.13:3001/",
                },
                {
                    icon: "tab-roulette",
                    name: "tab-game",
                    link: "http://air-zrb.gitee.io/tab-roulette/"
                },
                {
                    icon: "Money",
                    name: "记账软件",
                    link: "http://air-zrb.gitee.io/accounting/"
                },
            
            ],
        };
    },
    components: {
        shade,
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
        shadeToggle(flag) {
            const datas = flag === "About" ? this.link : this.items;
            const showDatas = {
                title: flag,
                datas,
            };

            this.showDatas = showDatas;

            this.shadeIsShow = true;
        },
    },
    created() {
        this.specialWords();
    },
};
</script>
<style lang="scss">
@mixin flex-layout($x: none, $y: none, $wrap: wrap) {
    display: flex;
    justify-content: $x;
    align-items: $y;
    flex-wrap: $wrap;
}
.home {
    width: 100%;
    height: 100%;
    color: #fff;
}
.me-message {
    @include flex-layout(center, center);
    width: 100%;
    height: 100%;
    text-align: center;
    background-image: url("../assets/home-background2.jpg");
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
        border-radius: 10px;
        width: 200px;
        margin: 20px auto;
        @include flex-layout(space-between);

        p {
            font-weight: 700;
            font-size: 20px;
            cursor: pointer;
            position: relative;
            &::before {
                content: "";
                position: absolute;
                bottom: -10px;
                left: 0;
                background: #fff;
                height: 2px;

                width: 0;
                transition: all 0.3s;
            }

            &:hover {
                &::before {
                    width: 100%;
                }
            }
        }
    }
}

.shade-enter,
.shade-leave-to {
    transform: translateY(2000px);
}
.shade-leave,
.shade-enter-to {
    transform: translateY(0);
}
.shade-enter-active,
.shade-leave-active {
    transition: all 0.3s;
}

@keyframes flicker {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@media (max-width: 900px) {
    .home .blogs .blog {
        width: 90%;
        .blog-image {
            width: 100%;
        }
    }
}

@media (max-width: 1000px) {
    .shade {
        .shade-content {
            width: 80%;
        }
    }
    .glass-piece {
        width: 33.3%;
    }
}

@media (max-width: 500px) {
    .me-message {
        .me-description {
            color: #fff; // 字体颜色
        }
    }

    // 遮罩层的宽度
    .shade {
        .shade-content {
            width: 80%;
        }
    }
    .glass-piece {
        width: 50%;
    }
}
</style>
