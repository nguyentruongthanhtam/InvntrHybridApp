<template>

 <f7-page>
    <f7-navbar title="Yale" back-link="Back"></f7-navbar>
		<f7-block inner>
      <f7-searchbar
          search-list="#search-list"
      
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

      
      <f7-list class="searchbar-found" id="search-list">
          <f7-list-item v-for="i in items" 
                        :title="i.MaVT + ' ' +i.TenVT"
                        :data= "i"              
                        :key= "i.STT"
          >
          </f7-list-item>
      </f7-list>
		</f7-block>
  </f7-page>

</template>

<script>
    import YaleJson from '../../json/Yale.json'
    
  export default {
    
    data: function () {
      return {
        items: [],
        yale: YaleJson,
        
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
      
    },
    mounted(){
        this.items = this.yale
    }
  }
</script>