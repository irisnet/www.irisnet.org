<template>
    <div class="footer_container" ref="contact">
        <div class="footer_wrap">
            <div class="content">
                <div class="community_link_content">
                    <div class="social_community_content">
                        <p class="community">Social Community</p>
                        <ul class="community_link_list">
                            <div v-show="$store.state.footerWeChatIcon"  class="mobileBox" @touchmove.prevent>
                                <div class="qrcode" @touchmove.prevent>
                                    <img src="../assets/wechat.jpg" alt="" @touchmove.prevent>
                                    <div class="arrow"></div>
                                    <img src="../assets/closeIcon.png" alt="" class="closeIcon" @touchmove.prevent>
                                </div>
                            </div>
                            <li class="community_link_item" v-for="item in $store.state.messages.footer.socialCommunity" :key="item.id">
                                <a :href="item.href" target="_blank" @click="jumpUrl($event, item.href)">
                                    <img :src='UrlSrc + item.src'>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tech_community_content">
                        <p class="community">Tech Community</p>
                        <ul class="community_link_list">
                            <li class="community_link_item" v-for="item in $store.state.messages.footer.techCommunity" :key="item.id">
                                <a :href="item.href" target="_blank">
                                    <img :src="UrlSrc + item.src">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="newsletter_content">
                    <h4 class="newsletter_title">{{$store.state.messages.footer.submitBtn.title}}</h4>
                    <input v-model="mailAddress" class="email_input" :class="flShowError ? 'error_style' : ' '" type="text" :placeholder="$store.state.messages.placehooder.placehooder">
                    <p :class="flShowError ? 'show_error' : 'hide_error'">{{$store.state.messages.errEmail.err}}</p>
                    <button class="submit_btn" @click="commitMail">{{subscription}}</button>
                </div>
            </div>
        </div>
        <div class="copyright_wrap">
            <div class="copyright_content">
                <p class="irisnet">{{$store.state.messages.footer.irisnetInproduction}}</p>
                <p><span class="copyright">Copyright &#169 2018 IRIS Foundation Ltd. All rights reserved.</span><a :href="'/privacy/?lang='+$store.state.lang"> Privacy</a> <span class="connector"> & </span> <a :href="'/terms?lang='+$store.state.lang">Terms</a></p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "v-footer",
        data () {
            return {
                mailAddress: '',
                flShowError: false,
                submitTimer: '',
                errorTimer: '',
                subscription: this.$store.state.messages.footer.submitBtn.subscribe
            }
        },
        watch:{
            $route(){
                this.onresize();
            }
        },
        methods:{
            commitMail(){
                clearTimeout(this.submitTimer);
                clearTimeout(this.errorTimer);
                let address =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(address.exec(this.mailAddress)){
                    this.flShowError = false;
                }else {
                    this.flShowError = true;
                    let that = this;
                    this.errorTimer = setTimeout(function () {
                        that.flShowError = false;
                    },2000)
                    return
                }
                axios({
                    method: 'post',
                    url:"/",
                    data: {
                        email:this.mailAddress,
                    }
                }).then((data)=>{
                    this.subscription = this.$store.state.messages.submit.success;
                    let that = this;
                    this.submitTimer = setTimeout(function () {
                        that.subscription = that.$store.state.messages.submit.Subscribe;
                        that.mailAddress = "";
                    },2000)
                })
                .catch((e)=>{
                })
            },
            onresize(){
                let that = this;
                //解决因为页面没有渲染完成取offsetTop出错
                setTimeout(function () {
                    that.$store.commit('contact',that.$refs.contact.offsetTop)
                },100);
            },
            jumpUrl (e, url) {
                e.stopPropagation()
                if (url) {
                    window.location.href = url
                } else {
                    this.$store.commit('controlWeChat', true)
                }
            },
            showWeChat (e) { 
                e.stopPropagation()
                this.$store.commit('controlWeChat', true)
            }
        },
        mounted () {
            this.onresize();
            window.addEventListener('resize',this.onresize())
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/style/footer";
</style>