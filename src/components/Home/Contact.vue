<template>
    <div class="home">
    
    </div>
</template>
<script>
import News from "./News.vue";
import UnlockFeatures from "./UnlockFeatures.vue";
import EtymoTree from '../../images/flc.jpg'

export default {
    components: { News, UnlockFeatures },

    data() {
        return {
            etymotree: EtymoTree
        }
    }
}
</script>