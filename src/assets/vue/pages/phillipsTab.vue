<template>

 		<div>
      <f7-searchbar
          search-list="#Phillips-list"
      
          placeholder="Search in list"
      
          :clear-button="true"
      
          @searchbar:search="onSearchP"
          @searchbar:enable="onEnableP"
          @searchbar:disable="onDisableP"
          @searchbar:clear="onClearP"
          
          class="bg-pink"
          id="searchBar"
      ></f7-searchbar>
      
      <f7-list class="searchbar-not-found">
          <f7-list-item title="Nothing found"></f7-list-item>
      </f7-list>

      
      <f7-list class="searchbar-found" id="Phillips-list">
          <f7-list-item v-for="i in items" 
                        :title="i.MaVT + ' ' +i.TenVT"
                        :data= "i"              
                        :key= "i.STT"
          >
          </f7-list-item>
      </f7-list>
		</div>
 

</template>

<script>
    // import PhillipsJson from '../../json/Phillips.json'
  // import('../../json/Phillips.json').then(json=>{
  //     console.log(json)
  //     return json
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  export default {
    name: 'phillipsComp',
    data: function () {
      return {
        items: [],
        // phillips: PhillipsJson,
        
      }
    },
    methods: {
      onSearchP: function (query, found) {
        console.log('search', query)
      },
      onClearP: function (event) {
        console.log('clear')
      },
      onEnableP: function (event) {
        console.log('enable')
      },
      onDisableP: function (event) {
        console.log('disable')
      },

      fetchDataP(){
         $.getJSON('static/Phillips.json',(data,status)=>{
        if(status == "success")
        {
          this.items = data
        }
        else
        {
          console.log("JSON not load")
        }
      })
        // this.items = this.phillips
       
      }
      
    },
    mounted(){
      this.fetchDataP()
    } 
  }
</script>