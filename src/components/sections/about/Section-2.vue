<template>
<div class="section">
  <div class="container">
      <div class="row">
        <div class="col-sm-4">
            <div class="card">
                <div class="card-header">
                    <h2>
                        <i class="fas fa-code"></i>
                    </h2>
                </div>
                <div class="card-body">
                    <p>
                        <label>W</label>EB DEVELOPMENT
                    </p>
                    <p>
                        Angular, Vuejs, JavaServer Faces
                    </p>
                </div>
            </div>
        </div>
          <div class="col-sm-4">
            <div class="card">
                <div class="card-header">
                    <h2>
                        <i class="fas fa-mobile"></i>
                    </h2>
                </div>
                <div class="card-body">
                    <p>
                        <label>M</label>OBILE DEVELOPMENT
                    </p>
                    <p>
                        Ionic
                    </p>
                </div>
            </div>
          </div>
          <div class="col-sm-4">
           <div class="card">
                <div class="card-header">
                    <h2>
                    <i class="fas fa-server"></i>
                    </h2>
                </div>
                <div class="card-body">
                    <p>
                        <label>D</label>EV OPS DEVELOPMENT
                    </p>
                    <p>
                        Kubernetes
                    </p>
                </div>
            </div>
          </div>
      </div>
  </div>
</div>

</template>
<script>
export default {
    name: 'section2'
};
</script>

<style scoped>
.section {
    background-color: #f1f1f1;
}
.container {
    padding: 120px 0px 80px 0px;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    background-color: #ffffff;
    padding: 5px 20px;
}

.card-header h2 {
    text-align: center;
    font-size: 53px;
    color: #3c4a94;
}

.card-body {
    text-align: center;
}
.card-body p:first-child {
    font-weight: bolder;
    font-size: 20px;
}
.card-body label {
    color: #3c4a94;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
