<template>
    <div id="app">
       <Home />
    </div>
</template>

<script>
import Home from "./pages/home.vue"
export default {
    data() {
        return {
            activeIndex: "home",
        };
    },
    components: {
        Home
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
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,body,#app {
    /* // width: 100%; */
    height: 100%;
}

.copyright {
    position: absolute;
    bottom: 0;
}

.nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    /* // background: rgba(255, 255, 255, 0.05); */
    top: 0;
    z-index: 9999;
    transition: all .5s;
   
}
 .el-menu.el-menu--horizontal {
        border-bottom: 0;
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
