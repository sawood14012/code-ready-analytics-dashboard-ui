<template>
  <v-layout justify-center align-center>
    <v-flex xs12>
       <v-banner>
    <h3>Maintainability Index</h3>
       </v-banner>

    <v-simple-table dense> 
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Repository</th>
          <th class="text-left">A</th>
          <th class="text-left">B</th>
          <th class="text-left">C</th>
         

         
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in source" :key="item.repository">
          <td><a target="_blank" :href="'https://github.com/fabric8-analytics/'+ item.repository"> {{item.repository }}</a></td>
          <td>{{ item['maintainability_index'].A }}</td>
          <td>{{ item['maintainability_index'].B }}</td>
          <td>{{ item['maintainability_index'].C }}</td>
          
          
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
        return {

        }
    },
    methods:{

    },
    computed:{
        source(){
            return this.$store.getters.getQuality
        }
    }
}
</script>