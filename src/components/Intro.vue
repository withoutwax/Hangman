<template>
    <div>
        <h1>This is an Intro page</h1>
        <p>{{ test }}</p>   
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data: function() {
        return {
            test: '... And this is a Test text!'
        }
    }
}
</script>