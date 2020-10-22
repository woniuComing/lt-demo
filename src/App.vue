<template>
<div class="wrap">
    <div class="header">
        <Title />
        <div class="nav" v-show='showRoute'>
            <RouterLink to="/">所有</RouterLink>
            <RouterLink to="/personal">我的</RouterLink>
        </div>
    </div>
    <RouterView />
</div>
</template>

<script lang="ts">
import {
    computed,
    defineComponent,
    provide
} from 'vue';
import {
    RouterLink,
    RouterView
} from 'vue-router';
import Title from '@/components/title/index.vue';
import {
    useStore
} from 'vuex';
export default defineComponent({
    name: 'App',
    components: {
        RouterLink,
        RouterView,
        Title
    },
    setup() {
        const store = useStore();

        const showRoute = computed(() => {
            if (store.state.currentPage === 'detail') {
                return false;
            };
            return true;
        })

        return {
            showRoute
        }
    }
});
</script>

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
        background-color: $headerbgc;
        color: $headerColor;
        display: flex;
        flex-direction: column;
        align-items: center;

        .nav {
            width: 100%;
            display: flex;
            height: 0.3rem;

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

}
</style>
