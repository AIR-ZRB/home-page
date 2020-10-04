<template>
    <div class="shade" @click="shadeIsHide">
        <div class="shade-content">
            <h2>{{_props.showDatas.title}}</h2>
            <glass-piece v-for="item in _props.showDatas.datas" :key="item.link">
                <a :href="item.link">
                    <img :src="require(`@/assets/icons/${item.icon}.png`)" />
                </a>
                <span class="description">{{ item.icon }}</span>
            </glass-piece>
        </div>

        <div class="close" @click="shadeIsHide">
            <img src="@/assets/icons/close.png" alt="" />
        </div>
    </div>
</template>

<script>
import glassPiece from "@/components/glass-piece.vue";
export default {
    props: ["shadeIsShow","showDatas"],
    data() {
        return {};
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
    }
    .close {
        position: absolute;
        top: 10px;
        left: 10px;
        transition: all 0.3s;
        cursor: pointer;
        img {
            width: 40px;
            height: 40px;
        }
        &:hover {
            transform: rotate(360deg);
        }
    }
}
</style>
