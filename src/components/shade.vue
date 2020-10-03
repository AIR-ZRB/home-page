<template>
    <div class="shade" @click="shadeIsHide">
        <div class="shade-content">
            <h2>关于我</h2>
            <glass-piece v-for="item in link" :key="item.link">
                <a :href="item.link">
                    <img :src="require(`@/assets/icons/${item.icon}.png`)" />
                </a>
                <span class="description">{{ item.icon }}</span>
            </glass-piece>
        </div>
    </div>
</template>

<script>
import glassPiece from "@/components/glass-piece.vue";
export default {
    props: ["shadeIsShow"],
    data() {
        return {
            link: [
                { icon: "Github", link: "https://github.com/AIR-ZRB" },
                {
                    icon: "CSDN",
                    link: "https://blog.csdn.net/weixin_46187747",
                },
                {
                    icon: "QQ",
                    link: "http://sighttp.qq.com/msgrd?v=1&uin=1824735904",
                },

                {
                    icon: "Music",
                    link: "https://music.163.com/#/playlist?id=4895282025",
                },
            ],
        };
    },
    methods: {
        shadeIsHide() {
            this.$emit("update:shadeIsShow", false);
        },
    },
    components: {
        glassPiece,
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
.shade {
    width: 100%;
    height: 100%;
    position: absolute;
    backdrop-filter: blur(15px);
    top: 0;
    left: 0;
    background: rgba($color: #000000, $alpha: 0.5);
    color: #fff;
    h2 {
        width: 100%;
        margin-bottom: 60px;
    }
    .shade-content {
        width: 50%;
        margin: 100px auto;
        @include flex-layout(space-between, center);
    }
}
</style>
