<template>
	<!-- App -->
	<div id="app">
		
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>
		
		<!-- Left Panel -->
		<f7-panel left reveal layout="dark">
			<f7-view id="left-panel-view" navbar-fixed>
				<f7-navbar title="Control Center"></f7-navbar>
				<f7-pages>
					<f7-page>
						
						<f7-block-title>Load page in panel</f7-block-title>
						<f7-list>
							<f7-list-item link="/about/" title="About"></f7-list-item>
							<f7-list-item link="/form/" title="Form"></f7-list-item>
						</f7-list>
						<f7-block-title>Load page in main view</f7-block-title>
						<f7-list>
							<f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>
		
		
		<!-- Main Views -->
		<f7-views>
			<f7-view id="main-view" main>
				<!-- Pages -->
				<f7-pages navbar-fixed >
						
					<f7-page tabs no-page-content toolbar-fixed>
						<f7-navbar class="bg-black">
							<f7-nav-left>
								<f7-link icon="icon-bars" open-panel="left"></f7-link>
							</f7-nav-left>

							<f7-nav-center sliding>Invntr</f7-nav-center>

							<f7-nav-right>
								<f7-link icon-material="info" href="/about/"></f7-link>
							</f7-nav-right>
						</f7-navbar>
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
				</f7-pages>
			</f7-view>

		</f7-views>
		
		<!-- Popup -->
		<f7-popup id="popup">
			<f7-view navbar-fixed>
				<f7-pages>
					<f7-page>
						<f7-navbar title="Popup">
							<f7-nav-right>
								<f7-link :close-popup="true">Close</f7-link>
							</f7-nav-right>
						</f7-navbar>
						<f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-popup>
		
		<!-- Login Screen -->
		<f7-login-screen id="login-screen">
			<f7-view>
				<f7-pages>
					<f7-page login-screen>
						<f7-login-screen-title>Login</f7-login-screen-title>
						<f7-list form>
							<f7-list-item>
								<f7-label>Username</f7-label>
								<f7-input name="username" placeholder="Username" type="text"></f7-input>
							</f7-list-item>
							<f7-list-item>
								<f7-label>Password</f7-label>
								<f7-input name="password" type="password" placeholder="Password"></f7-input>
							</f7-list-item>
						</f7-list>
						<f7-list>
							<f7-list-button title="Sign In" close-login-screen></f7-list-button>
							<f7-list-label>
								<p>Click Sign In to close Login Screen</p>
							</f7-list-label>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-login-screen>
	
	</div>
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
