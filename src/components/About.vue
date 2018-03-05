<template>
    <div>
        <div class="about fullpage full-image">
            <div class="content">
                <div class="title">
                    <p class="name-container">
                        <label>JOSE D.</label> 
                        <label>ROJAS A.</label>
                    </p>
                    <p class="pro-container">
                        <label>Software</label>
                        <label>Developer</label>
                    </p>
                </div>
            </div>
        </div>
        <div class="who-i-am">
            <!--<section1></section1> -->
        </div>
        <div class="skills">
            <section2></section2>
        </div>
        <div class="resume-link">

        </div>
        <div class="footer">
            <section4></section4>
        </div>
    </div>
</template>

<script>
import section1 from '@/components/sections/about/Section-1';
import section2 from '@/components/sections/about/Section-2';
import section4 from '@/components/sections/about/Section-4';

export default {
    name: 'About',
    components: {
        section1,
        section2,
        section4
    },
    data() {
        return {};
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
    background-image: url('./../assets/about-background-1.jpeg');
    background-color: rgba(0, 0, 0, 0.7);
}

.about .content {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
}

.about .content .title {
    position: relative;
    float: left;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.name-container,
.pro-container {
    text-align: center;
}

.name-container label {
    font-size: 76px;
    font-weight: bolder;
}

.pro-container label {
    font-size: 40px;
}

.name-container label:first-child {
    color: #e91e63;
}
.name-container label:last-child {
    color: #00bcd4;
}
.pro-container label:first-child {
    color: #ffffff;
}
.pro-container label:last-child {
    color: #e91e63;
}
div {
    position: relative;
}
</style>
