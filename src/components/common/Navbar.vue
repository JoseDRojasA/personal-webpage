<template>
  <div>
    <div class="menu-btn-container">
        <button class="menu-btn" v-on:click="showMenu = true">
            <i class="fas fa-bars"></i>
        </button>
    </div>
    <div class="menu-container fullpage full-image" v-bind:class="{'active': showMenu}">
      <div class="content">
          <div class="profile-column">
              <div class="picture-container">
                  <img src="./../../assets/profile.jpeg">
              </div>
              <div class="social-network-container">
                <a target="_blank" href="https://github.com/JoseDRojasA">
                    <i class="fab fa-linkedin-in"></i>  
                </a> 
                <a target="_blank" href="https://www.linkedin.com/in/josedrojas/">
                    <i class="fab fa-github"></i>
                </a>
              </div>
              <div class="phone">
                    <label><i class="fab fa-whatsapp"></i> (+57) 316-748-73-85 </label>
              </div>
              <div class="email">
                  <label><i class="far fa-envelope-open"></i> josedrojas@hotmail.com</label>
              </div>
          </div>
          <div class="options-container">
              <ul>
                  <li v-for="(option, index) in options" :key="index">
                      {{option.label}}
                  </li>
              </ul>
          </div>
          <div class="menu-btn-container">
            <button class="menu-btn" v-on:click="showMenu = false">
                <i class="far fa-times-circle"></i>
            </button>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            showMenu: false,
            options: [
                {
                    label: 'About Me'
                },
                {
                    label: 'Resume'
                },
                {
                    label: 'Portfolio'
                },
                {
                    label: 'Contact Me'
                }
            ]
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-btn-container {
    position: fixed;
    right: 0;
    padding: 15px 15px 0px 0px;
}
.content .menu-btn-container {
    z-index: 2;
    top: 0;
}
.menu-btn {
    background: none;
    border: none;
    color: white;
}
.menu-container,
.menu-btn-container {
    z-index: 2;
}
.menu-container {
    height: 100%;
    background-image: url('./../../assets/menu-background.jpeg');
    transition: 0.4s ease-in;
    opacity: 0;
    pointer-events: none;
}
.menu-container.active {
    opacity: 1;
    pointer-events: all;
}
.menu-container > div {
    position: absolute;
}
.profile-column,
.options-container {
    position: relative;
    display: table-cell;
}
.options-container {
    padding-top: 15%;
}
.options-container > ul {
    list-style-type: none;
}
.options-container > ul > li {
    font-size: 3rem;
    font-weight: 700;
    color: white;
    font-family: 'roboto';
    cursor: pointer;
    padding: 10px 30px;
}
.options-container > ul > li:hover,
.options-container > ul > li.active {
    color: #ffc107;
}
.profile-column {
    height: 100vh;
    width: 33vw;
    background-color: rgba(63, 81, 181, 0.8);
}
.picture-container,
.social-network-container,
.phone,
.email {
    text-align: center;
    color: white;
}
.phone {
    padding: 15px 0px;
}
.social-network-container {
    margin: 15px 0px;
}
.social-network-container > a {
    margin: 0px 4px;
    cursor: pointer;
    color: white;
}
.picture-container img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
.options-container {
    height: 100vh;
    width: 77vw;
    background-color: rgba(0, 0, 0, 0.6);
}
.fa-bars {
    color: white;
    font-size: 30px;
    cursor: pointer;
}
.fa-times-circle {
    color: white;
    font-size: 30px;
    cursor: pointer;
}
</style>
