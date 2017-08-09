<template>  
    <f7-page tabs no-page-content toolbar-fixed>
        <f7-page-content tab active id="phillipsTab">
            <phillipsComp></phillipsComp>
        </f7-page-content>
  
        <f7-page-content tab id="yaleTab">
            <yaleComp></yaleComp>
        </f7-page-content>

        <f7-toolbar tabbar labels bottom>
            <f7-link icon-material="lightbulb_outline" text="Phillips" tab-link="#phillipsTab" active></f7-link>
            <f7-link icon-material="lock_outline" text="Yale" tab-link="#yaleTab"></f7-link>
        </f7-toolbar>
    </f7-page>
</template>

<script>
    import phillipsComp from './assets/vue/pages/phillipsTab.vue'
	import yaleComp from './assets/vue/pages/yaleTab.vue'
	export default {
		components: {
			phillipsComp,
			yaleComp
		
		},

	}
</script>