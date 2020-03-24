<template >
  <div class="Kurzy container" v-on:load="blockE()">
      <div class="row">
        <div class="col-2"></div>
        <div class="col bg-light p-4 rounded border">
              <div class="row">
                <div class="col"  @currencyWasChanged="eur = $event">
                  <p>1 €uro sa rovná</p>
                  <h2>1,13 americký dolár</h2>
                  <p>{{currencies.date}}, 18:32 UTC - vylučenie zodpovednosti</p>
                  
                  <div class="row">
                    <div class="col">
                       <div class="input-group mb-3">                        
                        <input type="number" class="form-control blockE"  v-model="eur" @change="currencyExchange()" @keypress="onlyNumber"> 
                      </div>
                    </div>
                    <div class="col">                     
                      <select class="custom-select custom-select-sm mb-3"  v-model="selected">
                        <option selected></option>
                       <option v-for="(currencyValue, currencyName, currencyIdx) in currencies.rates" :key="currencyIdx" :value="currencyValue">{{ currencyName }}</option>                      
                    </select>                  
                    </div>
                  </div>
 <!-- 
                  <div class="row">
                     <div class="col">
                        <p type="number" class="form-control"  ></p>                      
                    </div>
                    <div class="col">                     
                       <p> {{currencies.base}}</p>      
                    </div>
                  </div>
--> 
                  <div class="row">
                    <div class="col">
                       <div class="input-group mb-3">                        
                      <input type="number" class="form-control blockE" :placeholder="[[currencyExchange()]]" @keypress="onlyNumber">                       
                      </div>
                    </div>
                    <div class="col">
                      <select class="custom-select custom-select-sm mb-3" v-model="anotherSelect">
                        <option selected ></option>
                       <option v-for="(currencyValue, currencyName, currencyIdx) in currencies.rates" :key="currencyIdx" :value="currencyValue" >{{ currencyName }}</option>                      
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
  props:{
    currencies: {
      type: Object,
      required: true
    },
    eur: {
      type:Number,
      default: 0,
    }
  },
  data(){
      return { 
        anotherSelect:'',     
        selected: '',
        currencyValue: '',
        currencyRates: {},       
      };
    },
    mounted () {
      menoveKurzy().then( currencyName=>{
        this.currencies = currencyName;
        this.currencyRates = currencyName.rates;
      });
  },
   methods: {
     currencyExchange: function(){
      return (this.eur * this.selected * this.anotherSelect).toFixed(2);  
    
     },
       // zablokuje písanie e a +-  do number inputu
     onlyNumber($event) {
        //console.log($event.keyCode); //keyCodes value
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
            $event.preventDefault();
        }
    },
  
     test(e){
       this.eur = parseInt(e);
     }
   }
};


</script>


<style scoped>
/* hide spinners from input number */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

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
