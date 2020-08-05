<template>
  <v-layout justify-center align-center>
    <v-flex xs12>
      <v-banner>
        <h3>Linter Results</h3>
      </v-banner>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Repository</th>
              <th class="text-left">Passed</th>
              <th class="text-left">Failed</th>
              <th class="text-left">Passed Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in source" :key="item.repository">
             <td><a target="_blank" :href="'https://github.com/fabric8-analytics/'+ item.repository"> {{item.repository }}</a></td>
              <td>{{ item.linter_passed }}</td>
              <td>{{ item.linter_failed }}</td>
              <td>
                <div v-if="item.linter_passed_percent == '100'">
                  <v-progress-linear color="green" striped v-model="item.linter_passed_percent" height="25">
                    <strong>{{ item.linter_passed_percent }}%</strong>
                  </v-progress-linear>
                </div>
                <div v-else>
                  <v-progress-linear color="amber" v-model="item.linter_passed_percent" height="25">
                    <strong>{{ item.linter_passed_percent }}%</strong>
                  </v-progress-linear>
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    source() {
      return this.$store.getters.getQuality;
    }
  }
};
</script>