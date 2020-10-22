<template>
<div class='lt_title'>
    <div class='lt_title_lpart'>
        <div class="logo_wrap" v-if='!showBackBtn'>
            <i class='logo'></i>
            <span>联想电脑管家</span>
        </div>
        <div v-else>
            <span @click='goback'>返回</span>
        </div>
    </div>
    <div class='lt_title_btn'>
        <span class='search_btn'>?</span>
        <span class='refresh_btn'>-</span>
        <span class='close_btn'>x</span>
    </div>
</div>
</template>

<style lang='scss' src='./index.scss'></style>

<script lang="ts">
import {
    defineComponent,
    computed
} from 'vue'
import {
    useStore
} from 'vuex';
import {
    useRouter
} from 'vue-router'
export default defineComponent({
    setup() {
        const store = useStore();
        const router = useRouter();

        console.log('store', store.state, store.state.currentPage)
        const showBackBtn = computed(() => {
            console.log('store.state.currentPage', store.state.currentPage);
            switch (store.state.currentPage) {
                case 'home':
                    return false;
                case 'personal':
                    return false;
                case 'detail':
                    return true;
            }
        });

        // 返回按钮
        const goback = () => {
            router.push(`/${store.state.fromPage}`)
        }

        return {
            showBackBtn,
            goback
        }
    }
})
</script>
