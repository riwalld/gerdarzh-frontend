<template>
    <div class="home">

        <section class="intro">
            <form @submit.prevent="submit">
                <section class="form-fields">
                    <div class="form-group row">
                        <div class="col-md-12 col-md-offset-3">
                            <h3>Envoyez-nous un message</h3>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-6 contact_email">
                            <input class="form-control" name="from" type="email" value="" placeholder="Votre Email">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-12">
                            <textarea class="form-control" name="message" placeholder="Votre message"
                                rows="5"></textarea>
                        </div>
                    </div>
                </section>
                <input type="submit" value="Ajouter">
            </form>
        </section>
    </div>
</template>
<script>
import EtymoTree from '../../images/flc.jpg'

export default {
    components: {},

    data() {
        return {
            etymotree: EtymoTree
        }
    }
}
</script>