<template>
  <f7-page>
		<f7-navbar :title="title" back-link="Back"></f7-navbar>
		<f7-block>
            <f7-button @click.prevent="getItemsFromBD">
                
                LOAD DB
            </f7-button>
            <f7-preloader v-if="isLoading" color="red" ></f7-preloader>
			<div class="data-table data-table-init-card" v-else>
                 <div class="card-header">
                    <!-- Table title -->
                    <div class="data-table-title">PHILLIPS</div>
                    <!-- Table actions -->
                    <div class="data-table-actions">
                    <a class="link icon-only"><i class="material-icons">sort</i></a>
                    <a class="link icon-only"><i class="material-icons">more_vert</i></a>
                    </div>
                </div>
                <div class="card-content">
                    
                    <table>
                        <thead>
                        <tr>
                            
                            <th class="numeric-cell">Ma VT</th>
                            <th class="label-cell">Ten VT</th>
                            <th class="numeric-cell">SL Ton</th>
                            <th class="tablet-only">DVT</th>
                        </tr>
                        </thead>
                        <tbody v-for="item in items" :data="item" :key="item.STT" @click="setItem(item)"  >
                            
                            <tr>
                                
                                <td class="numeric-cell">{{ item.MaVT }}</td>
                                <td class="label-cell">{{ item.TenVT }}</td>
                                <td class="numeric-cell">{{ item.SLTon }}</td>
                                <td class="tablet-only">{{ item.DVT }}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
		</f7-block>
	</f7-page>
</template>

<script>

export default{
    name: 'itemList',
    
    data(){
        return{
            title: "Item List View",
            items: [{}],
            item:{},
            isLoading: false
        }
    },
    methods:{
        getItems(){
            alasql.exec('USE inventoryDB')
            alasql.promise('SELECT * INTO PHILLIPS FROM JSON("/static/Phillips.json")').then((data)=>{
				console.log("IMPORTING"+ data)
				// this.items = data
			}).catch((err)=>{
				console.log(err)
			})
        },
        getItemsAndroid(){
            alasql.exec('USE inventoryDB')
            alasql('SELECT * FROM PHILLIPS',(data)=>{
				console.log("IMPORTING"+ data)
                if(data == 0)
                {
                    alasql.promise('SELECT * INTO PHILLIPS FROM JSON("file:///android_asset/www/static/Phillips.json")').then((data)=>{
                        // this.items = data
                    }).catch((err)=>{
                        console.log(err)
                    })
                }
            })
            
        },
        getItemsFromBD()
        {
            if(this.items.length<=1)
            {
                console.log("called array checking")
                this.isLoading =true
                alasql.promise('SELECT * FROM PHILLIPS').then((data)=>{
                    // console.log("GOT DATA FROM PHILLIPS DB"+ data)
                    this.items = data
                    this.isLoading =false
                }).catch((err)=>{
                    console.log(err)
                })

            }
        },
        setItem(obj){
        //   console.log(obj)
        // this.$f7.popup('#itemView', true, true)
          this.item = obj
          this.$router.load({url:'/item/'+this.item.STT})
        }
    },
    created(){
        // this.fetchDataP()
        this.getItems()
        this.getItemsAndroid()
        this.getItemsFromBD()
       
    }

}
</script>

<style lang="sass" scoped>
.data-table td
{
    padding-right: 2px;

}

</style>