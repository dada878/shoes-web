<template>
    <section class="footer">
        <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 pb-2">
            <div class="col-md-4 d-flex align-items-center">
                <span class="m-3 text-muted">© 2022 Anan Company, Inc</span>
            </div>
            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex icons m-3">
                <li class="ms-3"><a class="text-muted" href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a></li>
                <li class="ms-3"><a class="text-muted" href="https://manager.line.biz/account/@892xuszk/"><font-awesome-icon icon="fa-brands fa-line" /></a></li>
                <li class="ms-3"><a class="text-muted" href="https://www.facebook.com/anan.smartshoes"><font-awesome-icon icon="fa-brands fa-facebook" /></a></li>
            </ul>
        </footer>
    </div>
    </section>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({

})
</script>
<style lang="scss">
.icons {
    font-size: 1.5rem;
}
.footer {
    // background-image: linear-gradient(135deg, #c3cfe2 0%, #f5f7fa 100%);
    background-color: #d7dfeb;
}
</style>