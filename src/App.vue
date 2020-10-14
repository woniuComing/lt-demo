<template>
<div class="wrap">
    <div class="header">
        <p>联想电脑管家</p>
    </div>
    <div class="nav">
        <RouterLink to="/">所有</RouterLink>
        <RouterLink to="/personal">我的</RouterLink>
    </div>
    <RouterView />
</div>
</template>

<style lang="scss">
.wrap {
    width: 3.8rem;
    height: 100%;
    font-size: 16px;
    background-color: #fff;
    $headerbgc: rgb(31, 52, 176);
    $headerColor: rgba(255, 255, 255, 0.7);

    .header {
        width: 100%;
        height: 0.46rem;
        background-color: $headerbgc;
        color: $headerColor;
        display: flex;
        // justify-content: center;
        align-items: center;
    }

    .nav {
        display: flex;
        height: 0.3rem;
        background-color: $headerbgc;

        a {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 3px solid transparent;
            color: $headerColor;

            &.router-link-active {
                color: #fff;
                border-bottom-color: rgb(255, 160, 83);
            }
        }
    }
}
</style>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import {
    RouterLink,
    RouterView
} from 'vue-router';
export default defineComponent({
    name: 'App',
    components: {
        RouterLink,
        RouterView
    }
});
</script>
