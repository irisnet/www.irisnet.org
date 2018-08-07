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
                <div class="h110"></div>
                <div class="warp">
                    <div class="center_content">
                        <h2 class="join_test_net">{{join}}</h2>
                        <p class="join_iris">{{title}}</p>
                        <span class="join_btn" @click="skipLink(1)"
                              style="background: rgb(114,75,227);color:#ffffff;border:0.01rem solid #724BE3;"
                        >{{btn1}}</span>
                        <span class="join_btn" @click="skipLink(3)">{{btn3}}</span>
                    </div>
                </div>
                <div class="h110"></div>
            </div>
            <div class="menu" v-show="menuIs">
                <section v-for="(item,index) in links">
                    <a v-if="item.href.indexOf('ttp')==-1" @click="gotojump(index,item)">
                        {{item.txt}}
                    </a>
                    <a v-if="item.href.indexOf('ttp')!=-1" :href="'h'+item.href" @click="gotojump(index)">
                        {{item.txt}}
                    </a>
                </section>
                <section>
                    <a @click="skipTestNet">{{$store.state.lang=='CN'?'测试网':'Testnet'}}</a>
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
            skipTestNet(){
                this.$router.push('/testnets/app');
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
                this.$router.go('/newApp')
            },
            format(param){
                return message[this.$store.state.lang=='CN'?'cn':'en'].test[param];
            },
            getInfo(){
                this.join = this.format('join');
                this.title = this.format('title');
                this.btn1 = this.format('btn1');
                this.btn3 = this.format('btn3');
            },
            changeLang(lang){
                this.$store.state.lang = lang;
                this.getInfo();
                this.links = message[lang.toLowerCase()].head.txt;
            },
            skipLink(num){
                if(this.$store.state.lang=='CN'){
                    if(num === 1){
                        window.open('https://github.com/irisnet/testnets/blob/master/README_CN.md')
                    }else if(num === 3){
                        window.open('https://github.com/irisnet/irisnet/blob/master/IRISnetFAQ_CN.md')
                    }
                }else{
                    if(num === 1){
                        window.open('https://github.com/irisnet/testnets/blob/master/README.md')
                    }else if(num === 3){
                        window.open('https://github.com/irisnet/irisnet/blob/master/IRISnetFAQ.md')
                    }
                }

            },
            gotojump(index,item){
                this.menuIs = false;
                //解决点击导航后无法再次重复导航问题
                new Promise((resolve)=>{
                    this.$router.push(`/newApp?lang=${this.$store.state.lang}`);
                    resolve();
                }).then(()=>{
                    this.$router.push(`/newApp#/${item.href}`);
                }).then(()=>{
                    if(index == 0){
                        this.scroll(0)
                    }else if(index == 1){
                        this.scroll(364)
                    }else if(index == 2){
                        this.scroll(1036)
                    }else if(index == 3){
                        this.scroll(1678)
                    }else if(index == 4){
                        this.scroll(2278)
                    }else if(index == 5){
                        this.scroll(3542)
                    }
                })

                /*setTimeout(()=>{
                    console.log(13)

                },1000)*/

            },
            scroll(top) {
                console.log(top,9966)
                $('body,html').animate({
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
                join:'',
                title:'',
                btn1:'',
                btn2:'',
                btn3:'',
                links:this.$store.state.messages.head.txt,
            }
        },
        mounted(){
            this.getInfo();
        }

    }
</script>

<style scoped lang='less'>
    .app {
        position: fixed;
        min-height: 100%;
        top: 0;
        width: 100%;
        .menu {
            position: fixed;
            top: 60px;
            background: rgba(20, 20, 38, .85);
            width: 100%;
            z-index: 2;
            a {
                text-align: center;
                color: #7681e3;
                padding-top: 10px;
                padding-bottom: 10px;
                font-size: 14px;
                display: block;
            }
        }
        .contact {
            width: 84%;
            background: #141426;
            margin: 0 auto;
            border-radius: 10px;
            box-shadow: 0 0 20px #080B0F;
            margin-top: 6vh;
            position: relative;
            .contact_title {
                text-align: center;
                padding-top: 24px;
                font-weight: bold;
            }
            .contact_div {
                padding-top: 14px;
                padding-bottom: 24px;
                margin-left: 8%;
                overflow: hidden;
                .contact_radius {
                    margin-top: 4%;
                    float: left;
                    width: 44%;
                    height: 46px;
                    background: #1d1f37;
                    margin-right: 4%;
                    border-radius: 6px;
                    img {
                        margin-top: 9px;
                        width: 28px;
                        margin-left: 20%;
                        float: left;
                    }
                    div {
                        font-size: 12px;
                        color: #fff;
                        float: left;
                        margin-top: 17px;
                        margin-left: 10%;
                    }
                }
            }
        }
        .wechat {
            position: relative;
            position: fixed;
            height: 100%;
            width: 100%;
            top: 0;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 12;
            .wechat_warp {
                position: relative;
                position: absolute;
                color: #5c5c7c;
                text-align: center;
                height: 200px;
                width: 200px;
                background: #141426;
                border-radius: 8px;
                top: 50%;
                left: 50%;
                margin-top: -100px;
                margin-left: -100px;
                .cancel {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: #ed3d3d;
                    position: absolute;
                    margin-top: 14px;
                    right: 14px;
                    cursor: pointer;
                    img {
                        margin-top: 2px;
                        margin-left: 2px;
                        float: left;
                        display: none;
                    }
                    &:hover {
                        img {
                            display: block;
                        }
                    }
                }
                .wechat_img {
                    margin-top: 40px;
                    margin-bottom: 10px;
                    width: 100px;
                }
                .wechat_title {
                    font-size: 14px;
                }
                .wechat_txt {
                    font-size: 14px;
                    margin-top: 6px;
                }
            }
        }
        .collaboration {
            .collaboration_title {
                margin-top: 20px;
                text-align: center;
                font-weight: bold;
            }
            .collaboration_href {
                overflow: hidden;
                display: block;
                margin-bottom: 14px;
                .collaboration_warp {
                    width: 320px;
                    margin: 0 auto;
                    margin-top: 30px;
                    .collaboration_div {
                        float: right;
                        width: 160px;
                        background: #fff;
                        border-radius: 6px;
                        height: 60px;
                        position: relative;
                        img {
                            width: 64px;
                            float: left;
                            margin-left: -30px;
                            margin-top: -2px;
                        }
                        .collaboration_div_title {
                            color: #181e46;
                            font-weight: bold;
                            font-size: 16px;
                            margin-top: 16px;
                            text-indent: 6px;
                        }
                        .collaboration_div_text {
                            font-size: 12px;
                            color: #0a7dbe;
                            margin-top: 2px;
                            text-indent: 6px;
                        }
                        .collaboration_div_txt {
                            position: relative;
                            position: absolute;
                            text-align: left;
                            width: 130px;
                            left: -162px;
                            top: 0;
                            font-size: 12px;
                            color: #fff;
                        }
                        .collaboration_div1 {
                            position: absolute;
                            height: 1px;
                            background: #fff;
                        }
                    }
                }
            }

        }

        .network {
            width: 84%;
            background: #141426;
            margin: 0 auto;
            border-radius: 10px;
            box-shadow: 0 0 20px #080B0F;
            margin-top: 6vh;
            position: relative;
            .irispattern {
                width: 100%;
                height: 100%;
            }
            .network_title {
                position: absolute;
                top: 0;
                padding-top: 30px;
                text-align: center;
                font-weight: bold;
                img {
                    width: 90%;
                    margin-top: 40px;
                }
            }
        }

        .network_txt {
            height: 70%;
            width: 84%;
            background: #141426;
            margin: 0 auto;
            border-radius: 10px;
            box-shadow: 0 0 20px #080B0F;
            margin-top: 6vh;
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
            .network_text {
                position: absolute;
                top: 0;
                padding-top: 30px;
                text-align: center;
                .network_title {
                    font-weight: bold;
                }
                .network_list {
                    margin-left: 10%;
                    font-size: 12px;
                    line-height: 22px;
                    text-align: left;
                    width: 84%;
                    div {
                        margin-top: 30px;
                    }
                }
            }
        }

        .head {
            background: #16152d;
            height: 60px;
            width: 100%;
            .imglogo {
                width: 112px;
                margin-top: 12px;
                margin-left: 20px;
            }
            .div_en {
                float: right;
                color: #4b4e6d;
                line-height: 60px;
                img {
                    margin-left: 20px;
                    float: right;
                    width: 20px;
                    margin-top: 20px;
                    margin-right: 20px;
                }
            }
        }

        .reveal {
            width: 100% !important;
            position: fixed !important;
        }

    }

    html, body {
        min-width: auto !important;
    }

    .warp {
        min-height:4rem;
        display:flex;
        justify-content:center;
        .center_content{
            display:flex;
            flex-direction:column;
            align-items: center;
            color:#fff;
            .join_test_net{
                font-family: 'PingFang-SC-Semibold';
                color:#FFFFFF;
                font-size:0.24rem;
                font-weight:400;
                margin-top:0.7rem;
            }
            .join_iris{
                font-family: 'PingFang-SC-Regular';
                color:#D4D5DE;
                font-size:0.13rem;
                margin-top:0.4rem;
                margin-bottom:0.4rem;
            }
            .join_btn{
                color:#724BE3;
                width:2.82rem;
                height:0.4rem;
                border-radius:0.2rem;
                border:0.01rem solid #ffffff;
                margin-bottom:0.16rem;
                text-align: center;
                line-height:0.4rem;
                cursor:pointer;
                font-size:0.12rem;
            }
        }
    }
    .newCenter{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        background: #16152d;
        background-size: 375px;

    }
    .scroll-container{
        width: 90%;
        margin-left: 5%;
        margin-bottom: 60px;
    }
    .right-text{
        margin-bottom: 20px;
    }
</style>