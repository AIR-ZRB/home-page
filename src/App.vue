<template>
    <div id="app">
        <nav class="nav" ref="nav">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                background-color="transparent"
                :router="true"
                active-text-color="#000"
            >
                <el-menu-item
                    v-for="item in navList"
                    :key="item.listName"
                    :index="item.listName"
                    >{{ item.listCNName }}</el-menu-item
                >
            </el-menu>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: "home",
            navList: [
                { listName: "home", listCNName: "主页" },
                { listName: "blog", listCNName: "博客" },
                { listName: "items", listCNName: "个人项目" },
                { listName: "leaveWord", listCNName: "留言" },
            ],
        };
    },
    methods: {
        navTop(windowScrollTop) {
            windowScrollTop > 0
                ? (this.$refs.nav.style.backgroundColor =
                      "rgba(255,255,255,.95)")
                : (this.$refs.nav.style.backgroundColor = "");
        },
    },
    mounted() {
        window.onscroll = () => this.navTop(window.pageYOffset);
    },
    components: {},
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body,
#app {
    // width: 100%;
    height: 100%;
}

.nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    // background: rgba(255, 255, 255, 0.05);
    top: 0;
    z-index: 9999;
    .el-menu.el-menu--horizontal {
        border-bottom: 0;
    }
}

*::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
*::-webkit-scrollbar-thumb {
    background: #49b1f5;
}
*::-webkit-scrollbar-track {
    background-color: transparent;
}
</style>
