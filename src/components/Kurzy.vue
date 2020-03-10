<template>
  <div class="Kurzy container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col bg-light p-4 rounded border">
              <div class="row">
                <div class="col">
                  <p>1 €uro sa rovná</p>
                  <h2>1,13 americký dolár</h2>
                  <p>{{currencies.date}}, 18:32 UTC - vylučenie zodpovednosti</p>
                  <div class="row">
                    <div class="col">
                       <div class="input-group mb-3">                        
                        <p type="text" class="form-control" > {{anotherSelect}} </p>
                      </div>
                    </div>
                    <div class="col">
                      
                      <select class="custom-select custom-select-sm mb-3"  v-model="anotherSelect">
                        <option  selected>{{currencies.base}}</option>
                        <option v-for="(currencyValue, currencyName, currencyIdx) in currencies.rates" :key="currencyIdx" :value="currencyValue">{{ currencyName }}</option>                    
                    </select>
                   
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                       <div class="input-group mb-3">                        
                        <p type="text" class="form-control" > {{selected}} </p>
                      </div>
                    </div>
                    <div class="col">
                      <select class="custom-select custom-select-sm mb-3" v-model="selected">
                        <option  selected>{{currencies.base}}</option>
                       <option v-for="(currencyValue, currencyName, currencyIdx) in currencies.rates" :key="currencyIdx" :value="currencyValue">{{ currencyName }}</option>                      
                    </select>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <p>tu bude graf </p>
                </div>
              </div>
              <p class="mt-3">Udaje o mene poskytla spoločnosť Morningstar a informacie o kryptomene spoločnosť Coinbase.</p>
        </div>
        <div class="col-2"> </div>
      </div>
      <div class="col mt-5"> {{currencies.rates}}</div>
  </div>
</template>

<script>
import {menoveKurzy} from '@/api/api.js'

export default {
  name: "Kurzy",
  data(){
      return {
        selected: '',
        anotherSelect: '',
        currencies: [  
               ],
      }
    },
    mounted () {
      menoveKurzy().then( currencyName=>{
        this.currencies = currencyName;
      })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
