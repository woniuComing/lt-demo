<template>
<div class="home">
    <h1>This is home page</h1>
</div>
</template>

<script>
import {
    getTop
} from '@/api/index'
import {
    defineComponent,
    onMounted
} from 'vue'

export default defineComponent({
    setup() {
        const getTopData = async () => {
            const res = await getTop();
            console.log('topdata', res);
        }

        onMounted(() => {
            getTopData()
        })
    }
})
</script>
