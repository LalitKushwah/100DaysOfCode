<template>
  <div>    
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <span class="text-white">Welcome Visitors</span>
                <h1 class="display-3 text-white">
                  I am Lalit Kushwah
                  <span class="display-4">A Full Stack Developer </span>
                </h1>
                <p class="lead text-white">
                  I like to talk about "posibilities" instead of "probabilities"
                </p>
                <base-button type="secondary">
                    <router-link to="/profile">Know More About Me</router-link>
                </base-button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-check-bold"
                    type="primary"
                    rounded
                    class="mb-4"
                  >
                  </icon>
                  <h6 class="text-primary text-uppercase">Constant Learner</h6>
                  <p class="description mt-3">
                    I like to be updated with latest trends and technologies and it is one of my hobby to learn something new everyday
                  </p>
                  <div>
                    <badge type="primary" rounded>Tech Channels</badge>
                    <badge type="primary" rounded>Blogs</badge>
                    <badge type="primary" rounded>Udemy</badge>
                  </div>
                  <!-- <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button> -->
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-istanbul"
                    type="success"
                    rounded
                    class="mb-4"
                  >
                  </icon>
                  <h6 class="text-success text-uppercase">Team Player</h6>
                  <p class="description mt-3">
                    I can adapt myself according to the environment and always ready to help team if they are facing any blockers
                  </p>
                  <div>
                    <badge type="success" rounded>Faster Delivery</badge>
                    <badge type="success" rounded>Quality</badge>
                  </div>
                  <!-- <base-button tag="a" href="#" type="success" class="mt-4">
                                        Learn more
                                    </base-button> -->
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                  </icon>
                  <h6 class="text-warning text-uppercase">Optimistic</h6>
                  <p class="description mt-3">
                    I always look at the positive side of any challenging situation and able to take critics in positive way
                  </p>
                  <div>
                    <badge type="warning" rounded>Cheerful</badge>
                    <badge type="warning" rounded>Hopeful</badge>
                    <badge type="warning" rounded>launch</badge>
                  </div>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-8">
            <h2 class="display-3">Technologies/Framework I am working with</h2>
            <p class="lead text-muted">
              Frontend development is my primary skill but I also know and had worked with several backend framework and languages like nodejs, spring, spring-boot.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'images/angular.png'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px"
                title="angular"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'images/ionic.png'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px"
                title="ionic"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'images/mongodb.jpeg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px"
                title="mongodb"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'images/nodejs.png'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px"
                title="nodejs"
              />
            </div>
          </div>
        </div>
        <div class="row mt-5"></div>
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'images/vuejs.png'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px"
                title="vuejs"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'images/stenciljs.png'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px"
                title="stenciljs"
              />
              <!-- <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Romina Hadid</span>
                                    <small class="h6 text-muted">Marketing Strategist</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-facebook" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-dribbble" rounded
                                                 icon-only></base-button>
                                </div>
                            </div> -->
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'images/spring.png'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px"
                title="spring"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'images/jenkins.jpeg'"
                title="Jenkins CI/CD"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-3 bg-gradient-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-3 text-white">
              Organizations I have worked with
            </h2>
            <p class="lead text-white">
              Following are then Organizations esteemed Organizations I have
              worked with
            </p>
          </div>
        </div>
        <div class="row row-grid mt-5">
          <div class="col-lg-4">
            <img
              src="images/hotwax.png"
              style="height: 6rem"
              class="rounded float-center"
              alt="..."
            />
            <h5 class="text-white mt-3">Hotwax Systems</h5>
            <p class="text-white mt-3">
              Hotwax is an MNC providing designs solution related to ERP. Our
              technology services are driven by seasoned expertise in Custom ERP
              Development, Enterprise Architecture, Business Transformation
              Strategies, Unified OmniChannel Commerce, and more.
            </p>
          </div>
          <div class="col-lg-4">
            <img
              src="images/zensar.png"
              style="height: 6rem"
              class="rounded float-center"
              alt="..."
            />
            <h5 class="text-white mt-3">Zensar Technologies</h5>
            <p class="text-white mt-3">
              Zensar Technologies Limited is an Indian publicly traded software
              and services company, operating in many countries. The company's
              stock trades on the Bombay Stock Exchange and on the National
              Stock Exchange of India under the ticker symbol ZENSARTECH.
            </p>
          </div>
          <div class="col-lg-4">
            <img
              src="images/mastercard.png"
              style="height: 6rem"
              class="rounded float-center"
              alt="..."
            />
            <h5 class="text-white mt-3">mastercard</h5>
            <p class="text-white mt-3">
              Mastercard Incorporated is an American multinational financial
              services International Global Headquarters in Purchase, New York,
              United States. The Global Operations Headquarters is located in
              O'Fallon, Missouri, United States, a municipality of St. Charles
              County, Missouri.
            </p>
          </div>
        </div>
      </div>
    </section>            
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
};
</script>
