<template>
    <div>
        <div class="app" style="width: 100%;height:100%;">
            <div class="head">
                <img src="../assets/app/irislogo.png" class="imglogo"  @click="goToHome">
                <div class="div_en">
                    <img src="../assets/app/list.png" @click="menuIs=!menuIs"/>
                    <span @click="changeLang('CN')" v-if="$store.state.lang!='CN'">
                        CN
                    </span>
                    <span  @click="changeLang('EN')" v-if="$store.state.lang=='CN'">
                        EN
                    </span>
                </div>

            </div>
            <div class="newCenter">
                <div class="warp">
                    <div class="testnet_title">{{title}}</div>
                    <div class="testnet_info">
                    <p>{{testnetFirstParagraph}}</p>
                    <p>{{testnetSecendParagraph}}</p>
                    <p>{{testnetText}}</p>
                    </div>
                    <a :href="howToJoinHref" target="_blank">
                        <div class="join_container">
                            <span>{{howToJoin}}</span>
                            <div class="help_img">
                                <img src="../assets/app/defaulthelp.png">
                            </div>
                        </div>
                    </a>
                    <a :href="faqHref" target="_blank">
                        <div class="faq_container">
                            <span>{{faq}}</span>
                                <div class="faq_img">
                                    <img src="../assets/app/defaulthelp.png">
                                </div>
                        </div>
                    </a>
                    <a :href="irisplorerHref" target="_blank">
                        <div class="faq_container">
                            <span>{{irisplorerBtn}}</span>
                            <div class="faq_img">
                                <img src="../assets/app/explorerDefault.png">
                            </div>
                        </div>
                    </a>
                    <a :href="downloadRainbowAppHref" target="_blank">
                        <div class="faq_container">
                            <span>{{rainbowAppBtn}}</span>
                            <div class="faq_img">
                                <img src="../assets/app/walletDefault.png">
                            </div>
                        </div>
                    </a>
                    <div class="community_container">
                        <span>{{join}}</span>
                    </div>
                    <div class="join_ways_container">
                        <div class="join_ways_content">
                            <div class="join_ways_img">
                                <img src="../assets/app/qq.png">
                            </div>
                            <div class="join_ways_info">
                                <div>
                                    <p>{{qq}}</p>
                                    <p class="info_address">{{qqNum}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a :href="riotAddressHref" target="_blank">
                        <div class="join_ways_rito">
                            <div class="join_ways_rito_content">
                                <div class="join_ways_rito_content_img">
                                    <img src="../assets/app/riot.png">
                                </div>
                                <div class="join_ways_rito_info">
                                    <div>
                                        <p>{{riot}}</p>

                                            <p class="riot_address">{{riotAddress}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
            <div class="menu" v-show="menuIs">
                <section>
                    <a @click="skipMainnet">{{$store.state.lang=='CN'? '主网' :'Mainnet'}}</a>
                </section>
                <section>
                    <a @click="skipTestNet">{{$store.state.lang=='CN'?'测试网':'Testnet'}}</a>
                </section>
                <section v-for="(item,index) in links">
                    <a v-if="item.href.indexOf('ttp')==-1" @click="gotojump(index,item)">
                        {{item.txt}}
                    </a>
                    <a v-if="item.href.indexOf('ttp')!=-1" :href="'h'+item.href" @click="gotojump(index)">
                        {{item.txt}}
                    </a>
                </section>
                <section>
                    <a :href="$store.state.lang=='CN' ? 'https://www.irisnet.org/docs/zh/' : 'https://www.irisnet.org/docs/'" target="_blank">{{$store.state.lang=='CN'?'文档':'Docs'}}</a>
                </section>
                <section>
                    <a class="item medium_img_content" :href="$store.state.lang=='CN' ? 'https://medium.com/irisnet-blog' : 'https://medium.com/irisnet-blog' " target="_blank">
                        <span>{{$store.state.lang=='CN'?'博客':'Blog'}}</span>
                        <img class="medium_img" src="../assets/mobile_medium.png">
                    </a>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import message from '../common/message';
    let Reveal
    if (process.env.VUE_ENV === 'client') {
        Reveal = require('reveal.js')
    }
    export default {
        name: "TestNetApp",
        watch:{
            $route(){
                console.log(this.$store.lang)
            }

        },
        methods: {
            skipMainnet(){
                this.$router.push('/mainnet/app');
            },
            skipTestNet(){
                this.$router.push('/testnets/app');
            },
            skipHackathon(){
                this.$router.push('/hackathon/app');
            },
            img(src) {
                return 'app/'+src;
            },
            txtShow(index) {
                this.list.forEach(v => {
                    v.is = false;
                })
                this.list[index].is = true;
            },
            blank(item) {
                if (item == 'Wechat') {
                    this.wechatIs = true;
                }
            },
            goToHome(){
                this.$router.push(`/app?lang=${this.$store.state.lang}`)
            },
            format(param){
                return message[this.$store.state.lang=='CN'?'cn':'en'].testnet[param];
            },
            getInfo(){
                this.title = this.format('title');
                this.testnetFirstParagraph = this.format('testnetFirstParagraph');
                this.explorerHref = this.format('explorerHref');
                this.testnetSecendParagraph = this.format('testnetSecendParagraph');
                this.testnetText = this.format('testnetText');
                this.linkText = this.format('linkText');
                this.testnetHereHref = this.format('testnetHereHref');
                this.faq = this.format('faq');
                this.faqHref = this.format('faqHref');
                this.join = this.format('join');
                this.qq = this.format('qq');
                this.qqNum = this.format('qqNum');
                this.riot = this.format('riot');
                this.riotAddress = this.format('riotAddress');
                this.riotAddressHref = this.format('riotAddressHref');
                this.howToJoin = this.format('howToJoin');
                this.howToJoinHref = this.format('howToJoinHref');
                this.irisplorerBtn = this.format('irisplorerBtn');
                this.irisplorerHref = this.format('irisplorerHref');
                this.rainbowAppBtn = this.format('rainbowAppBtn');
                this.downloadRainbowAppHref = this.format('downloadRainbowAppHref');
            },
            changeLang(lang){
                this.$store.state.lang = lang;
                this.getInfo();
                this.links = message[lang.toLowerCase()].head.txt;
            },
            gotojump(index,item){
                this.menuIs = false;
                //解决点击导航后无法再次重复导航问题
                new Promise((resolve)=>{
                    this.$router.push(`/app?lang=${this.$store.state.lang}`);
                    resolve();
                }).then(()=>{
                    this.$router.push(`/app/${item.href}`);
                })
            },
            scroll(top) {
                $('html,body').animate({
                        scrollTop: top
                    }, 500
                );
            },
        },
        data() {
            return {
                list: [
                    {is: true},
                    {is: false},
                    {is: false},
                    {is: false},
                ],
                menuIs: false,
                wechatIs: false,
                links:message[this.$store.state.lang=='CN'?'cn':'en'].head.txt,
                title:'',
                testnetFirstParagraph:"",
                explorerHref:"",
                testnetSecendParagraph:"",
                testnetText:"",
                linkText:"",
                faq:"",
                faqHref:"",
                join:"",
                qq:"",
                qqNum:"",
                riot:"",
                riotAddress:"",
                riotAddressHref:"",
                testnetHereHref:'',
                howToJoin:'',
                howToJoinHref:'',
                irisplorerBtn:'',
                irisplorerHref:'',
                rainbowAppBtn: '',
                downloadRainbowAppHref:''
            }
        },
        mounted(){
            this.getInfo();
        }

    }
</script>

<style scoped lang='less'>
    @import "../assets/style/testnetapp.less";
</style>