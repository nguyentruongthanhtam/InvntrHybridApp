<template>
    <f7-page navbar-fixed id="itemView">
		<f7-navbar title="Item" back-link="Back">
            <f7-nav-right v-show="isAdmin">
                <f7-link icon-material="save" @click.prevent="save" v-if="isEdit" ></f7-link>
                <f7-link icon-material="edit" @click.prevent="isEdit=true" v-else ></f7-link>
            </f7-nav-right>
        </f7-navbar>
        <f7-block-title>Detail</f7-block-title>
		<f7-block>
        <f7-list form>
            <!-- Text Input -->
            <f7-list-item>
                <div class="item-title label">Ma VT</div>
                <div class="item-input">
                    <input type="text" name="Ma VT" v-model="item.MaVT" :disabled="!isEdit">
                </div>
            </f7-list-item>
            <!-- Password -->
            <f7-list-item>
                <div class="item-title label">Ten VT</div>
                <div class="item-input">
                    <input type="text" name="Ten VT" v-model="item.TenVT" :disabled="!isEdit">
                </div>
            </f7-list-item>
          
            <!-- K13 -->
            <f7-list-item>
                <f7-grid>
                    <f7-col>
                        <div class="item-title label">DVT</div>
                        <div class="item-input">
                            <input type="text" name="DVT" v-model="item.DVT" :disabled="!isEdit">
                        </div>
                    </f7-col>
                    <f7-col>
                        <div class="item-title label">SL Ton</div>
                        <div class="item-input">
                            <input type="number" name="SLTon" :value="Number(item.K02)+Number(item.K19)+Number(item.K17)+Number(item.K13)" disabled>
                        </div>
                    </f7-col>
                </f7-grid>
            </f7-list-item>
            <!-- K13 -->
            <f7-list-item>
                <f7-grid>
                    <f7-col>
                        <div class="item-title label">K13</div>
                        <div class="item-input">
                            <input type="text" name="K13" v-model="item.K13" :disabled="!isEdit">
                        </div>
                    </f7-col>
                    <f7-col>
                        <div class="item-title label">K02</div>
                        <div class="item-input">
                            <input type="text" name="K02" v-model="item.K02" :disabled="!isEdit">
                        </div>
                    </f7-col>
                </f7-grid>
                
            </f7-list-item>
            
            <!-- K13 -->
            <f7-list-item>
                <f7-grid>
                    <f7-col>
                        <div class="item-title label">K17</div>
                        <div class="item-input">
                            <input type="text" name="K17" v-model="item.K17" :disabled="!isEdit">
                        </div>
                    </f7-col>
                    <f7-col>
                        <div class="item-title label">K19</div>
                        <div class="item-input">
                            <input type="text" name="K19" v-model="item.K19" :disabled="!isEdit">
                        </div>
                    </f7-col>
                </f7-grid>
                
            </f7-list-item>
            
            
            <!-- img  -->
            
            <photoComp :uri="item.IMG" @update:uri="val => item.IMG = val" v-if="isEdit"></photoComp>
            <img :src="item.IMG" alt="" v-else id="taken_photo">
            
        </f7-list>
    	</f7-block>
	</f7-page>

</template>

<script>
import photoComp from './photoComp'
export default{
    name: 'item',
    
    components: { photoComp },
    data(){
        return{
            id: null,
            item:{},
            isEdit : false,
            isAdmin : false
        }
    },
    methods:{
        getItem(i)
			{
				// WORKING LOAD ENTRIES FROM DB
                let vm = this
				let db = window.sqlitePlugin.openDatabase({ name: 'my.db', location: 'default' }, function (db) {
				db.transaction(function (tx) {
					let query = "SELECT * FROM PHILLIPS WHERE MaVT = ?"
						tx.executeSql(query,[i],(tx,resultSet)=>{
							
								console.log("MA VT: " + resultSet.rows.item(0).MaVT +
									", TEN VT: " + resultSet.rows.item(0).TenVT+
									", K02: " + resultSet.rows.item(0).K02+
									", IMG URI: " + resultSet.rows.item(0).IMG)
                                let itemTemp = {}
                                itemTemp['MaVT'] =  resultSet.rows.item(0).MaVT
                                itemTemp['TenVT'] =  resultSet.rows.item(0).TenVT
                                itemTemp['DVT'] =  resultSet.rows.item(0).DVT
                                itemTemp['K02'] =  resultSet.rows.item(0).K02
                                itemTemp['K13'] =  resultSet.rows.item(0).K13
                                itemTemp['K17'] =  resultSet.rows.item(0).K17
                                itemTemp['K19'] =  resultSet.rows.item(0).K19
                                itemTemp['IMG'] =  resultSet.rows.item(0).IMG
                               
                                vm.item = itemTemp
						},(tx,error)=>{
                            console.log('update record error: ' + error.message);    
                        });
					}, function (error) {
						console.log('load DB transaction error: ' + error.message);
					}, function () {
						console.log("transaction OK");
                        
					});
				});
			},
            changePicture(){

            },
            getPicture(){

            },
            save()
            {
				// WORKING LOAD ENTRIES FROM DB
                let vm = this
                window.f7.confirm("Save this record ?", "Save", function(){
				let db = window.sqlitePlugin.openDatabase({ name: 'my.db', location: 'default' }, function (db) {
				db.transaction(function (tx) {
					let query = 'UPDATE PHILLIPS SET TenVT =?, K02 = ? , K13 = ? , K17 = ? , K19 = ? , IMG = ? WHERE MaVT = ?'
						tx.executeSql(query,[
                                            vm.item.TenVT,
                                            vm.item.K02,
                                            vm.item.K13,
                                            vm.item.K17,
                                            vm.item.K19,
                                            vm.item.IMG,
                                            vm.item.MaVT],
                            function(tx,res){
									console.log("insertId: " + res.insertId )
    								console.log("rowsAffected: " + res.rowsAffected )
                                    vm.isEdit = false
	    							window.f7.alert("Successfully Updated Record", "Record Updated")
							})
					}, function (error) {
						console.log('Updated record transaction error: ' + error.message);
					}, function () {
						console.log("Record " + vm.item.MaVT+"Updated!");
                        
						});
					});
				
                },()=>{})
            }
    //   getItem(i){
    //       //since i is a String , has to be converted into int by i)
    //         alasql.promise('SELECT * FROM PHILLIPS WHERE STT = ?',[i]).then((res)=>{
	// 			this.item = res[0]
              
	// 		}).catch((err)=>{
	// 			console.log(err)
	// 		})
    //     },
        // exportDataToJSON(){
        //     save1(){
        //      let query = "SELECT * INTO JSON('/static/Phillips.json') FROM PHILLIPS"
        //                 // "VALUES @{MaVT:?, TenVT:?, K02:?, K13:?, K17:?, K19:?, IMG:?"+
        //                 // "} WHERE STT = ?"
        //      alasql.promise(query).then((res)=>{
		// 		console.log("exported")
              
		// 	}).catch((err)=>{
		// 		console.log(err)
		// 	})
        // },
        
        //  save(){
        //      let query = 'UPDATE PHILLIPS SET MaVT = ?,TenVT =?, K02 = ? , K13 = ? , K17 = ? , K19 = ? , IMG = ? WHERE STT = ?'
        //      alasql.promise(query,[this.item.MaVT,
        //                            this.item.TenVT,
        //                            this.item.K02,
        //                            this.item.K13,
        //                            this.item.K17,
        //                            this.item.K19,
        //                            this.item.IMG,
        //                            this.item.STT]).then((res)=>{
		// 		console.log("UPDATED ENTRY")
        //         // this.exportDataToJSON()
		// 	}).catch((err)=>{
		// 		console.log(err)
		// 	})
        //  }
    },
    mounted(){
        this.id=this.$route.params.id
        this.getItem(this.id)
        console.log("Route params :   " + this.$route.params.v)
        if(this.$route.params.v == "viewOnly")
        {
             this.isAdmin=false
        }
        else
        {
            this.isAdmin = true
        }
    }
}
</script>

<style scoped lang="sass">
#taken_photo{
	width: 100%;
	height: auto;
}
</style>