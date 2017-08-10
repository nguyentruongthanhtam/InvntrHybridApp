<template>
    <f7-page navbar-fixed id="itemView">
		<f7-navbar title="About" back-link="Back"></f7-navbar>
		<f7-block>
        <f7-list form>
            <!-- Text Input -->
            <f7-list-item>
                <div class="item-title label">Ma VT</div>
                <div class="item-input">
                    <input type="text" name="Ma VT" v-model="item.MaVT">
                </div>
            </f7-list-item>
            <!-- Password -->
            <f7-list-item>
                <div class="item-title label">Ten VT</div>
                <div class="item-input">
                    <input type="text" name="Ten VT" v-model="item.TenVT">
                </div>
            </f7-list-item>
            <!-- Password -->
            <f7-list-item>
                <div class="item-title label">DVT</div>
                <div class="item-input">
                    <input type="text" name="DVT" v-model="item.DVT">
                </div>
            </f7-list-item>
            <!-- K13 -->
            <f7-list-item>
                <div class="item-title label">K13</div>
                <div class="item-input">
                    <input type="text" name="K13" v-model="item.K13">
                </div>
            </f7-list-item>
            <!-- K02 -->
            <f7-list-item>
                <div class="item-title label">K02</div>
                <div class="item-input">
                    <input type="text" name="K02" v-model="item.K02">
                </div>
            </f7-list-item>
            <!-- K17 -->
            <f7-list-item>
                <div class="item-title label">K17</div>
                <div class="item-input">
                    <input type="text" name="K17" v-model="item.K17">
                </div>
            </f7-list-item>
            <!-- K19 -->
            <f7-list-item>
                <div class="item-title label">K19</div>
                <div class="item-input">
                    <input type="text" name="K19" v-model="item.K19">
                </div>
            </f7-list-item>
            <!-- SL Ton -->
            <f7-list-item>
                <div class="item-title label">SL Ton</div>
                <div class="item-input">
                    <input type="number" name="SLTon" :value="Number(item.K02)+Number(item.K19)+Number(item.K17)+Number(item.K13)" disabled>
                </div>
            </f7-list-item>
            <!-- img  -->
            <f7-list-item>
                <div class="item-title label">IMG</div>
                <div class="item-input">
                    <input type="text" name="imgURL" v-model="item.IMG">
                </div>
            </f7-list-item>
            <f7-button @click.prevent="save">
                Save
            </f7-button>
        </f7-list>
    	</f7-block>
	</f7-page>

</template>

<script>
export default{
    name: 'item',
    watch:{
    //    available:()=>{
    //         let k02 = this.item.K02)
    //         let k13 =  this.item.K13)
    //         let k17 =  this.item.K17)
    //         let k19 =  this.item.K19)
    //         this.available = k02+k13+k17+k19
    //    }
    },
    // props: [inputItem],
    data(){
        return{
            id: null,
            item:{},
            
        }
    },
    methods:{
    
      getItem(i){
          //since i is a String , has to be converted into int by i)
            alasql.promise('SELECT * FROM PHILLIPS WHERE STT = ?',[i]).then((res)=>{
				this.item = res[0]
              
			}).catch((err)=>{
				console.log(err)
			})
        },
        // exportDataToJSON(){
            save1(){
             let query = "SELECT * INTO JSON('/static/Phillips.json') FROM PHILLIPS"
                        // "VALUES @{MaVT:?, TenVT:?, K02:?, K13:?, K17:?, K19:?, IMG:?"+
                        // "} WHERE STT = ?"
             alasql.promise(query).then((res)=>{
				console.log("exported")
              
			}).catch((err)=>{
				console.log(err)
			})
        },
        
         save(){
             let query = 'UPDATE PHILLIPS SET MaVT = ?,TenVT =?, K02 = ? , K13 = ? , K17 = ? , K19 = ? , IMG = ? WHERE STT = ?'
             alasql.promise(query,[this.item.MaVT,
                                   this.item.TenVT,
                                   this.item.K02,
                                   this.item.K13,
                                   this.item.K17,
                                   this.item.K19,
                                   this.item.IMG,
                                   this.item.STT]).then((res)=>{
				console.log("UPDATED ENTRY")
                // this.exportDataToJSON()
			}).catch((err)=>{
				console.log(err)
			})
         }
    },
    mounted(){
        this.id=this.$route.params.id
        
        this.getItem(this.id)
        
    }
}
</script>

<style>

</style>