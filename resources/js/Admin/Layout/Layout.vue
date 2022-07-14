<template>

    <div class="layout_body">
        <div class="main_section">
            <Header/>
            <div class="inner-section">
                    <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "./Includes/Header.vue";

export default {
    components: {Header}
}
</script>
