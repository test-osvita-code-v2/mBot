<template>
</template>
<script>
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Work+Sans:300,600);
.question {
    font-size: 25px;
    margin-bottom: 10px;
}
.answers {
    margin-bottom: 20px;
    text-align: left;
    display: inline-block;
}
.answers label {
    font-size: 20px;
    display: block;
    margin: 10px 0 10px 0;
}
.btn {
    font-family: 'Work Sans', sans-serif;
    font-size: 22px;
    background-color: #279;
    color: #fff;
    border: 0px;
    border-radius: 3px;
    padding: 20px;
    cursor: pointer;
    margin-bottom: 20px;
}
.btn:hover {
    background-color: #38a;
}
.slide {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.5s;
}
.active-slide {
    opacity: 1;
    z-index: 2;
}
.quiz-container {
    position: relative;
    height: 200px;
    margin-top: 40px;
}
</style>