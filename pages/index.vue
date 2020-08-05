<template>
<div>
  <div v-if="busy == true">
     <v-layout  justify-center align-center>
      <v-flex xs12>
        <center>
        <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
        </center>
      </v-flex>
     </v-layout>
    </div>
    <div v-else>
 

  <v-layout  justify-center align-center>
    
    <v-flex xs12>
      <v-banner>
    <h3>E2E Status</h3>
    <v-container>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-card-title> PR Job</v-card-title>
          <v-card-subtitle>Triggers when made a PR on the fabric8-analytics-common Repository</v-card-subtitle>
          <v-card-text> 
            <a href='https://ci.centos.org/job/devtools-e2e-fabric8-analytics/'><img src='https://ci.centos.org/buildStatus/icon?job=devtools-e2e-fabric8-analytics&style=flat-square'></a>
          </v-card-text>

        </v-card>
      </v-col>
       <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <v-card-title> Master Job</v-card-title>
         <v-card-subtitle>Triggers when a Merge on any repository takes place</v-card-subtitle>
          <v-card-text>
            
            <a href='https://ci.centos.org/job/devtools-f8a-master-deploy-e2e-test/'><img src='https://ci.centos.org/buildStatus/icon?job=devtools-f8a-master-deploy-e2e-test&style=flat-square'></a>
         
          </v-card-text>
        </v-card>
      </v-col>
       <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-card-title>Prod Job</v-card-title>
          <v-card-subtitle>Triggers hourly checks only for production API liveliness</v-card-subtitle>
           <v-card-text>
             
            <a href='https://ci.centos.org/job/devtools-test-end-to-end-prod-fabric8-analytics/'><img src='https://ci.centos.org/buildStatus/icon?job=devtools-test-end-to-end-prod-fabric8-analytics&style=flat-square'></a>
          </v-card-text>
           
        </v-card>
      </v-col>
    </v-row>
  </v-container>
    
  </v-banner>

    
     <v-divider></v-divider>

      <v-banner>
    <h3>All CI Jobs</h3>
    
  </v-banner>
    <v-simple-table dense> 
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Repository</th>
          <th class="text-left">Build Job</th>
          <th class="text-left">Test Job</th>
          <th class="text-left">Pylint Job</th>
          <th class="text-left">PyDocstyle Job</th>
         
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in source['ci_jobs']" :key="item.repo">
          <td><a target="_blank" :href="'https://github.com/fabric8-analytics/'+ item.repo"> {{item.repo }}</a></td>
          <td><div v-if="item.build_job == null">No Build Job</div> <div v-else><span v-html="item.build_job"></span></div></td>
          <td><div v-if="item.test_job == null">No Test Job</div> <div v-else><span v-html="item.test_job"></span></div></td>
          <td><div v-if="item.pylint_job == null">No pylint Job</div> <div v-else><span v-html="item.pylint_job"></span></div></td>
          <td><div v-if="item.pydoc_job == null">No pydoc Job</div> <div v-else><span v-html="item.pydoc_job"></span></div></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

   <v-divider></v-divider>
   <v-banner>
     <h3> Dashboard Generation Corn job</h3>
     <v-container>
    <v-row no-gutters>

       <a href="https://github.com/sawood14012/code-ready-analytics-dashboard"><img src="https://github.com/sawood14012/code-ready-analytics-dashboard/workflows/Dashboard%20Generate/badge.svg?branch=master&event=schedule"/></a>
    </v-row>

     </v-container>
    
   </v-banner>

    </v-flex>
      
    
  </v-layout>
    </div>
  </div>
</template>

<script>

export default {

computed:{
 result(){
   return states
 }
},
  data() {
    return {
      
    };
  },
  methods: {},
  computed: {
    source() {
      return this.$store.getters.getOthers;
    },
    busy(){
      return this.$store.getters.getBusy;
    }
  }
};
</script>
