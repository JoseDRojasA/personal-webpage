<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">
                <img class="who-i-am-img" src="https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.0-9/22450061_1530574936997192_8129627759742393657_n.jpg?oh=e19a45677dc108e713dd2a1266958b93&oe=5B3B510C">
            </div>
            <div class="col-sm-6">
                <div class="bio">
                    <h3><label>WEB</label> DEVELOPER!</h3>
                    <p>
                        Computers has been my pasion since I was a child.
                    </p>
                    <p class="btn-container">
                        <a class="btn" target="_blank" href="../assets/josedrojasa-cv.pdf"><i class="fas fa-download"></i> DOWNLOAD CV</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'section1',
    data() {
        return {};
    }
};
</script>
<style scoped>
div {
    padding-left: 0;
    position: relative;
}

.who-i-am-img {
    width: 100%;
}

.bio {
    padding: 8% 8% 0 8%;
}
.bio h3 {
    text-align: center;
    color: rgb(37, 39, 47);
    font-size: 2.4rem;
    font-weight: 700;
}
.bio h3 label {
    color: #ffc107;
}

.bio .btn-container {
    text-align: right;
}

.bio p {
    color: #555;
}
</style>