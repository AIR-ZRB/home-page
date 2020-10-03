<template>
    <div id="app">
        <Home />
    </div>
</template>

<script>
import Home from "@/pages/home.vue";
export default {
    data() {
        return {};
    },
    components: {
        Home,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body,
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
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
