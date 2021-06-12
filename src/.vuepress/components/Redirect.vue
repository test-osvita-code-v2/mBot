<template>
</template>


<script>
    export default {
        name: 'Redirect',
        props: {
            to: {
                type: String,
                required: true
            }
        },
        beforeMount() {
            this.$router.push(this.to)
        }
    }
</script>