<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButton"
        >Stored Resources</base-button
      >
      <base-button @click="setSelectedTab('add-resource')" :mode="addResButton"
        >Add Resource</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>
<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    AddResource,
    StoredResources,
  },
  data: function () {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'Official vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'Google',
          title: 'Google',
          description: 'Learn to google',
          link: 'https://google.com',
        },
      ],
    };
  },
  computed: {
    storedResButton() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButton() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, desc, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: desc,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
        const index = this.storedResources.findIndex(res => res.id === resId);
        this.storedResources.splice(index, 1);
    }
  },
};
</script>