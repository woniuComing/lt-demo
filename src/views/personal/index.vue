<template>
<div class="personal">
    <h1>This is personal page</h1>
    <button @click='toDetail'>go detail</button>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    onBeforeMount
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
        onBeforeMount(() => {
            store.commit('setCurrentPage', 'personal')
        })
        const toDetail = () => {
            router.push({
                path: '/detail/456',
                query: {
                    frompage: 'personal'
                }
            });
        }
        return {
            toDetail
        };
    }
});
</script>
