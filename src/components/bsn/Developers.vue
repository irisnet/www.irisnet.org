<template>
	<div class="developers_container">
		<div class="developers_title_container">
			<div class="developers_title_wrap">
				<div class="developers_title_content">{{$store.state.messages.developer.title}}</div>
			</div>
			
		</div>
		<div class="developers_content_wrap">
			<div class="developers_content">
				<div class="developers_content_title">{{$store.state.messages.developer.content.title}}</div>
				<div class="developers_content_doc">
					<div class="developers_img_content">
						<img src="../../assets/bsn/bsn_developer.png" alt="">
					</div>
					<div>
						<ul class="developers_right_content">
							<li class="developers_right_content_item" v-html="$store.state.messages.developer.content.rightContent1"></li>
							<li class="developers_right_content_item" v-html="$store.state.messages.developer.content.rightContent2"></li>
							<li class="developers_right_content_item bond_style">{{$store.state.messages.developer.content.rightContent3}}</li>
<!--							<li class="developers_right_content_item" v-html="$store.state.messages.developer.content.rightContent4"></li>-->
<!--							<li class="developers_right_content_item" v-html="$store.state.messages.developer.content.rightContent5"></li>-->
<!--							<li class="developers_right_content_item" v-html="$store.state.messages.developer.content.rightContent6"></li>-->
						</ul>
						<div class="developers_create_account_content">
							<div class="developers_create_account_btn">
								<button class="developers_create_btn_doc" @click="jumpUrl($store.state.messages.developer.content.createDeveloperHref)"><span>{{$store.state.messages.developer.content.createDeveloperBtnDoc}}<img src="../../assets/rightArrow.png" alt=""></span></button>
							</div>
							<a class="irisnet_doc_link" :href="$store.state.messages.developer.content.irisnetDocHref" target="_blank">{{$store.state.messages.developer.content.irisnetDoc}}</a>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="testnet_container">
			<h3 class="testnet_title">{{$store.state.messages.developer.testnet.title}}</h3>
			<div class="testnet_item_container">
				<div class="testnet_card">
					<div class="testnet_content_wrap">
						<h3 class="testnet_content_title">{{$store.state.messages.developer.testnet.content.title}}</h3>
						<p class="testnet_content">{{$store.state.messages.developer.testnet.content.content}}</p>
						<a class="testnet_content_btn" rel="noreferrer noopener" :href="$store.state.messages.developer.testnet.content.link">{{$store.state.messages.developer.testnet.content.btnLabel}}</a>
					</div>
					<div class="bg_content">
<!--						<img src="../../assets/testnet_image.png" alt="">-->
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: "Developers",
		data () {
			return {
			
			}
		},
		methods:{
			jumpUrl(url){
				window.open(url,'_blank')
				this.$umeng.push('reservation',"click")
			},
		}
	}
</script>

<style scoped lang="less">
	.developers_container{
		.developers_title_container{
			width: 100%;
			background: rgba(13,14,44,1);
			padding-top: 0.6rem;
			.developers_title_wrap{
				margin: 0 auto;
				max-width: 12rem;
				font-size: 0.52rem;
				height: 1.9rem;
				line-height: 1.9rem;
				display: flex;
				justify-content: flex-start;
				.developers_title_content{
					color: #fff;
					text-align: left;
				}
			}
		}
		.developers_content_wrap{
			width: 100%;
			background: #fff;
			.developers_content{
				max-width: 12rem;
				margin: 0 auto;
				.developers_content_title{
					color:#323C5A;
					font-size: 0.32rem;
					font-weight: 600;
					line-height: 0.45rem;
					margin: 0.7rem 0 0.48rem 0;
					max-width: 7.8rem;
				}
				.developers_content_doc{
					display: flex;
					flex-direction: row;
					margin-bottom: 1.2rem;
					.developers_img_content{
						flex: 1;
						margin-right: 1.2rem;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-left: 0.96rem;
						img{
							width: 100%;
						}
					}
					.developers_right_content{
						flex: 1;
						max-width: 4.8rem;
						.developers_right_content_item{
							color:#9BA5BE;
							font-size: 0.14rem;
							margin-top: 0.24rem;
							line-height: 0.24rem;
							word-wrap: break-word;
							word-break: normal;
						}
						.developers_right_content_item:first-child{
							margin-top: 0;
						}
						.developers_right_content_item:nth-child(5){
							margin-top: 0;
						}
						.developers_right_content_item:nth-child(6){
							margin-top: 0;
						}
						.bond_style{
							font-weight: bold;
							color: #7987A8;
						}
					}
					.developers_create_account_content{
						margin-top: 0.36rem;
						.developers_create_account_btn{
							margin-bottom: 0.24rem;
							.developers_create_btn_doc{
								width: 2rem;
								border: 0;
								font-size: 0.16rem;
								color: #fff;
								background: linear-gradient(to right, #714BE3, #653FD8);
								box-shadow: 0 0 0.16rem 0 rgba(58, 5, 218, 0.3);
								height: 0.5rem;
								border-radius: 0.33rem;
								display: flex;
								align-items: center;
								justify-content: center;
								span{
									padding: 0.16rem 0 0.16rem 0.24rem;
									img{
										position: relative;
										top: 0.05rem;
										height: 0.16rem;
										margin-left: 0.12rem;
										padding-right: 0.24rem;
										transform: translateY(-8%)
									}
								}
								
							}
						}
						.irisnet_doc_link{
							margin: 0 0 0 0.24rem;
							color: #714BE3;
							border-bottom: 0.01rem solid #714BE3;
						}
					}
				}
			}
		}
		.testnet_container{
			max-width: 12rem;
			margin: 0 auto;
			.testnet_title{
				font-size: 0.32rem;
				color: rgba(50, 60, 90, 1);
				line-height: 0.45rem;
				@media(max-width: 1200px){
					margin: 0 0.2rem;
				}
			}
			.testnet_item_container{
				margin-top: 0.24rem;
				margin-bottom: 1.2rem;
				display: flex;
				justify-content: space-between;
				.testnet_card{
					width: 100%;
					box-shadow: 0 0.04rem 0.16rem 0 rgba(26, 24, 44, 0.09);
					
					border-radius: 0.08rem;
					display: flex;
					justify-content: space-between;
					@media(max-width: 1200px){
						margin: 0 0.2rem;
					}
					.testnet_content_wrap{
						flex: 1;
						box-sizing: border-box;
						padding: 0.36rem 0.32rem;
						@media(max-width: 460px){
							padding: 0.24rem 0.16rem;
						}
						.testnet_content_title{
							font-size: 0.24rem;
							color: rgba(50, 60, 90, 1);
							line-height: 0.24rem;
							margin-bottom: 0.24rem;
						}
						.testnet_content{
							font-size: 0.14rem;
							color: rgba(155, 165, 190, 1);
							line-height: 0.24rem;
							max-width: 5.6rem;
							margin-bottom: 0.24rem;
						}
						.testnet_content_btn{
							display: inline-block;
							width: 2rem;
							height: 0.5rem;
							border-radius: 0.25rem;
							background: linear-gradient(95deg, #714BE3 0%, #653FD8 100%);
							box-shadow: 0 0 0.16rem 0 rgba(58, 5, 218, 0.3);
							color: rgba(255, 255, 255, 1);
							line-height: 0.5rem;
							text-align: center;
						}
					}
					.bg_content{
						flex: 1;
						width: 100%;
						height: 100%;
						background: url("../../assets/testnet_image.png") no-repeat center center;
						background-size: cover;
						@media(max-width: 768px){
							display: none;
						}
						img{
							width: 100%;
						}
					}
				}
			}
		}
	}
	@media screen and (max-width: 1200px){
		.developers_container{
			.developers_title_container{
				box-sizing: border-box;
				padding-left: 0.2rem;
				padding-right: 0.2rem;
			}
			.developers_content_wrap{
				box-sizing: border-box;
				padding-right: 0.2rem;
				padding-left: 0.2rem;
			}
		}
	}
	@media screen and (max-width: 1000px){
		.developers_container{
			.developers_content_wrap{
				.developers_content{
					.developers_content_doc{
						.developers_img_content{
							margin-right: 0.7rem;
							margin-left: 0.46rem;
						}
					}
				}
			}
		}
	}
	@media screen and (max-width: 768px) {
		.developers_container{
			.developers_title_container{
				padding-left: 0.3rem;
				padding-right: 0.3rem;
			}
			.developers_content_wrap{
				padding-right: 0.3rem;
				padding-left: 0.3rem;
				.developers_content{
					.developers_content_doc{
						flex-direction: column;
						align-items: center;
						margin-bottom: 0.6rem;
						.developers_img_content{
							max-width: 4.2rem;
							margin-left: 0;
							margin-right: 0;
						}
						.developers_right_content{
							margin-top: 0.48rem;
							width: auto;
							max-width: none;
						}
					}
				}
			}
		}
	}
	@media screen and (max-width: 375px) {
		.developers_container{
			.developers_title_container{
				padding-left: 0.2rem;
				padding-right: 0.2rem;
			}
			.developers_content_wrap{
				padding-right: 0.2rem;
				padding-left: 0.2rem;
				
			}
		}
	}
</style>
