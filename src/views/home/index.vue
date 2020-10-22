<template>
<div class="home">
    <h1>This is home page</h1>
    <button @click='toDetail'>jump detail</button>
</div>
</template>

<script lang="ts">
import {
    getTop,
    getFirstPage
} from '@/api/index';
import {
    defineComponent,
    onBeforeMount,
    onMounted,
    reactive,
    toRefs
} from 'vue';

import {
    useStore
} from 'vuex';

import {
    useRouter
} from 'vue-router';
export default defineComponent({
    setup() {
        const store = useStore();
        const router = useRouter();
        // const getTopData = async () => {
        //     const res = await getTop();
        //     const res2 = await getFirstPage();
        //     console.log('topdata', res);
        //     console.log('firstpagedata', res2);
        // };

        // onMounted(() => {
        //     getTopData();
        // });
        onBeforeMount(() => {
            store.commit('setCurrentPage', 'home')
        })
        const toDetail = () => {
            router.push({
                path: '/detail/123',
                query: {
                    frompage: 'home'
                }
            });
        }
        return {
            toDetail
        };
    }
});
</script>
