<template>
    <f7-page navbar-fixed>
		<f7-navbar title="About" back-link="Back"></f7-navbar>
		<f7-block>
        <f7-list form>
            <!-- Text Input -->
            <f7-list-item>
                
                
                    <div class="item-title label">Ma VT</div>
                    <div class="item-input">
                        <input type="text" name="Ma VT" :value="item.MaVT">
                    </div>
                
                
            </f7-list-item>
            <!-- Password -->
            <f7-list-item>
                
                   
                    <div class="item-title label">Ten VT</div>
                    <div class="item-input">
                        <input type="text" name="Ten VT" :value="item.TenVT">
                    </div>
                
            </f7-list-item>
        </f7-list>
    	</f7-block>
	</f7-page>

</template>

<script>
export default{
    name: 'item',
    // props: [inputItem],
    data(){
        return{
            id: null,
            item:{}
        }
    },
    methods:{
    
      getItem(i){
          //since i is a String , has to be converted into int by Number(i)
            alasql.promise('SELECT * FROM PHILLIPS WHERE STT = ?',[Number(i)]).then((res)=>{
				console.log("item selected"+res)
				this.item = res[0]
                console.log(this.item)
			}).catch((err)=>{
				console.log(err)
			})
        },
    },
    mounted(){
        this.id=this.$route.params.id
        
        this.getItem(this.id)
        
    }
}
</script>

<style>

</style>