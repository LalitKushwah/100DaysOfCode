<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img v-lazy="'images/profile.jpg'" class="rounded-circle" />
                  </a>
                </div>
              </div>
              <div
                class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center"
              >
                <div class="card-profile-actions py-4 mt-lg-0">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://stackoverflow.com/users/4788592/lalit-kushwah"
                    class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
                    data-toggle="tooltip"
                    data-original-title="Follow us"
                  >
                    <i class="fa fa-stack-exchange"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/LalitKushwah"
                    class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg"
                    data-toggle="tooltip"
                    data-original-title="Like us"
                  >
                    <i class="fa fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.hackerrank.com/lalit_kush_wah"
                    class="btn btn-icon-only btn-hackrank btn-lg btn-round"
                    data-toggle="tooltip"
                    data-original-title="Follow us"
                  >
                    <i class="fab fa-hackerrank"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">3</span>
                    <span class="description">Organization</span>
                  </div>
                  <div>
                    <span class="heading">15+</span>
                    <span class="description">Projects</span>
                  </div>
                  <div>
                    <span class="heading">10+</span>
                    <span class="description">Open Source Contributions</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>
                Lalit Kushwah
                <span class="font-weight-light">, 25</span>
              </h3>
              <div class="h6 font-weight-300">
                <i class="ni location_pin mr-2"></i>Pune, India
              </div>
              <div class="h6 mt-4">
                <i class="ni business_briefcase-24 mr-2"></i>Software
                Development Engineer - Full Stack Developer
              </div>
              <div><i class="ni education_hat mr-2"></i>Mastercard</div>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <nav aria-label="breadcrumb" role="navigation">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/landing">Home</router-link></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Profile
                  </li>
                </ol>
              </nav>
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style>
.btn-hackrank {
  background-color: #2ec866 !important;
  color: white !important;
}
</style>
