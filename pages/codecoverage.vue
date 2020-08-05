<template>
  <v-layout justify-center align-center>
    <v-flex xs12>
      <v-banner>
        <h3>Code Coverage</h3>
      </v-banner>

      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Repository</th>
              <th class="text-left">Statements</th>
              <th class="text-left">Missed</th>
              <th class="text-left">Covered</th>
             
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in source" :key="item.repository">
              <td><a target="_blank" :href="'https://github.com/fabric8-analytics/'+ item.repository"> {{item.repository }}</a></td>

              <td>
                <div v-if="item['code_coverage']!== null">
                  <v-chip
                    class="ma-2"
                    color="green"
                    text-color="white"
                  >{{ item['code_coverage'].statements }}</v-chip>
                </div>
                <div v-else>N/A</div>
              </td>
              <td>
                <div v-if="item['code_coverage']!== null">
                  <v-chip
                    class="ma-2"
                    color="red"
                    text-color="white"
                  >{{ item['code_coverage'].missed }}</v-chip>
                </div>

                <div v-else>N/A</div>
              </td>
              <td>
                <div v-if="item['code_coverage']!== null">
                  
                  <div v-if="item['code_coverage'].coverage == 100">
                  <v-progress-linear color="green" striped :value="item['code_coverage'].coverage" height="25">
                    <strong>{{ parseInt(item['code_coverage'].coverage) }}%</strong>
                  </v-progress-linear>
                </div>
                <div v-else-if="item['code_coverage'].coverage < 40">
                  <v-progress-linear color="orange" :value="item['code_coverage'].coverage" height="25">
                    <strong>{{ parseInt(item['code_coverage'].coverage) }}%</strong>
                  </v-progress-linear>
                </div>
                <div v-else>
                  <v-progress-linear color="amber" :value="item['code_coverage'].coverage" height="25">
                    <strong>{{ parseInt(item['code_coverage'].coverage) }}%</strong>
                  </v-progress-linear>
                </div>
                
                </div>
                <div v-else>N/A</div>
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
  methods: {
      
  },
  computed: {
    source() {
      return this.$store.getters.getQuality;
    }
  }
};
</script>