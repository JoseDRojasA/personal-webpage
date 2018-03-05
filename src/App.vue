<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/common/Navbar';

export default {
    name: 'App',
    components: {
        navbar
    }
};
</script>

<style>
body {
    margin: 0;
    overflow-x: hidden;
}
.fullpage {
    height: 100vh;
    width: 100%;
}
.full-image {
    position: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
* {
    font-family: 'roboto';
}

/**
    BUTTONS STYLES
**/

.btn,
.btn-large {
    text-decoration: none;
    text-align: center;
    background-color: #eee;
    color: #222;
    padding: 18px 28px;
    height: 54px;
    margin-right: 10px;
    letter-spacing: 0.5px;
    -webkit-transition: 0.2s ease-out;
    transition: 0.2s ease-out;
    cursor: pointer;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
}

.btn-large {
    height: 54px;
    line-height: 54px;
}
</style>
