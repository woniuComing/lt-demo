<template>
<div class="home">
    <h1>This is home page</h1>
</div>
</template>

<script>
import {
    getTop,
    getFirstPage
} from '@/api/index';
import {
    defineComponent,
    onMounted
} from 'vue';

export default defineComponent({
    setup() {
        const getTopData = async () => {
            const res = await getTop();
            const res2 = await getFirstPage();
            console.log('topdata', res);
            console.log('firstpagedata', res2);
        };

        onMounted(() => {
            getTopData();
        });
    }
});
</script>
