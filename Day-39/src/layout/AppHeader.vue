<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="mailto: lalitkushwah52525@gmail.com"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Connect via mail"
          >
            <i class="fa fa-send"></i>
            <span class="nav-link-inner--text d-lg-none">Gmail</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.linkedin.com/in/lalit-kushwah-20951b103/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Connect on LinkedIn"
          >
            <i class="fa fa-linkedin"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="skype:lalitkushwah52525?chat"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Connect on Skype"
          >
            <i class="fa fa-skype"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
                <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="skype:lalitkushwah52525?chat"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Connect on Slack"
          >
            <i class="fa fa-slack"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block ml-lg-4">
          <a
            href="images/Resume.pdf"
            target="_blank"
            rel="noopener"
            download
            class="btn btn-neutral btn-icon"
          >
            <span class="btn-inner--icon">
              <i class="fa fa-cloud-download mr-2"></i>
            </span>
            <span class="nav-link-inner--text">Resume</span>
          </a>
        </li>
      </ul>
      <!-- <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Examples</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">Landing</router-link>
                    <router-link to="/profile" class="dropdown-item">Profile</router-link>
                    <router-link to="/login" class="dropdown-item">Login</router-link>
                    <router-link to="/register" class="dropdown-item">Register</router-link>
                </base-dropdown>
            </ul> -->
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
};
</script>
<style>
</style>
