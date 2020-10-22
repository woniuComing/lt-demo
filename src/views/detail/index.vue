<template>
<div class='detail'>
    <p>this is detail page</p>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    onBeforeMount,
    onMounted
} from 'vue';
import {
    useStore
} from 'vuex';
import {
    useRouter,
    useRoute
} from 'vue-router';
export default defineComponent({
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        onBeforeMount(() => {
            store.commit('setCurrentPage', 'detail');
            const fromPage = route.query.frompage ? route.query.frompage : 'home';
            store.commit('setFromPage', fromPage);
        });
        onMounted(() => {
            console.log('router', router, route.params);
        })
    }
})
</script>

<style lang='scss'></style>
