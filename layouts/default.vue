<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <div v-if="!drawer">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </div>
      <div v-else>
        <v-icon @click.stop="drawer = !drawer" >mdi-menu-left</v-icon>
      </div>
      

      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} Auto Generated on : {{ generated }}</span>

      <v-spacer></v-spacer>
      <span>
        Made with &hearts; by
        <a href="mailto:msawood@redhat.com">msawood@redhat.com</a>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Home - CI JOBS",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Source Files",
          to: "/source"
        },
        {
          icon: "mdi-chart-bubble",
          title: "linter results",
          to: "/lint"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Docstyle results",
          to: "/docstyle"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Code Coverage",
          to: "/codecoverage"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Cyclomatic Complexity",
          to: "/cyclomatic"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Maintainablity Index",
          to: "/maintainablity"
        },
        {
          icon: "mdi-information",
          title: "Remarks",
          to: "/remarks"
        }

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Code Ready Analytics QA Dashboard"
    };
  },
  async fetch() {
    try {
      await this.$store.dispatch("getjson");
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    generated() {
      return this.$store.getters.getgeneratedon;
    }
  }
};
</script>
