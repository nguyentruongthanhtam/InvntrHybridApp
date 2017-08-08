<template>

 <div>
      <f7-searchbar
          search-list="#Yale-list"
      
          placeholder="Search in list"
      
          :clear-button="true"
      
          @searchbar:search="onSearch"
          @searchbar:enable="onEnable"
          @searchbar:disable="onDisable"
          @searchbar:clear="onClear"
          
          class="bg-pink"
          id="searchBar"
      ></f7-searchbar>
      
      <f7-list class="searchbar-not-found">
          <f7-list-item title="Nothing found"></f7-list-item>
      </f7-list>

      
      <f7-list class="searchbar-found" id="Yale-list">
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
    
  export default {
    
    data: function () {
      return {
        items: [],
        
        
      }
    },
    methods: {
      onSearch: function (query, found) {
        console.log('search', query)
      },
      onClear: function (event) {
        console.log('clear')
      },
      onEnable: function (event) {
        console.log('enable')
      },
      onDisable: function (event) {
        console.log('disable')
      },
      fetchData(){
         $.getJSON('static/Yale.json',(data,status)=>{
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
      this.fetchData()
    } 
  }
</script>