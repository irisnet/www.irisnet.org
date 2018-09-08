<template>
    <div>
        <!--<img  src="../../public/app/irispattern-background.png" style="position:absolute;left:0; top:0;right:0;bottom:0;margin:auto;width:100%;background: #141426"/>-->
        <div class="app" style="width: 100%;height:100%;">
            <div class="head" >
                <img src="../assets/app/irislogo.png" class="imglogo" @click="goToHome">
                <div class="div_en" >
                    <a href="?lang=CN" v-if="$store.state.lang!='CN'">
                        CN
                    </a>
                    <a href="?lang=EN" v-if="$store.state.lang=='CN'">
                        EN
                    </a>
                    <img style="width: 20px;height:20px;" src="../../public/app/close.png" @click="goToHome">
                </div>
            </div>
            <!--<div class="menu" v-show="menuIs">-->
                <!--<section v-for="item in $store.state.messages.head.txt">-->
                    <!--<a v-if="item.href.indexOf('ttp')==-1" :href="'newApp#'+item.href" @click="menuIs=false" >-->
                        <!--{{item.txt}}-->
                    <!--</a>-->
                    <!--<a v-if="item.href.indexOf('ttp')!=-1" :href="'h'+item.href" @click="menuIs=false" >-->
                        <!--{{item.txt}}-->
                    <!--</a>-->
                <!--</section>-->
            <!--</div>-->
            <div class="newCenter">
                <div class="h110"></div>
                <div class="warp">
                    <div class="scroll-container">
                        <div class="warp_title">
                            {{$store.state.messages.privacy.title}}
                        </div>
                        <div class="warp_title2">
                            {{$store.state.messages.privacy.title1}}
                        </div>
                        <div class="warp_cont" v-for="item in  $store.state.messages.privacy.list">
                            <div class="warp_cont_left">
                                <div class="border"></div>
                                <div class="title" v-html="item.title">
                                </div>
                            </div>
                            <div class="warp_cont_right">
                                <div class="right-text" v-for="items in item.txtList" v-html="items">
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="h110"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    let Reveal
    if (process.env.VUE_ENV === 'client') {
        Reveal = require('reveal.js')
    }
    export default {
        name: "app",
        methods: {
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
                this.$router.push(`/newApp?lang=${this.$store.state.lang}`)
            }
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
                wechatIs: false
            }
        },
        mounted: function () {

            this.$store.state.messages.head.txt.forEach(v => {
                v.href = v.href.substr(1, v.href.length)
            })
            if (process.env.VUE_ENV === 'client') {
                Reveal.initialize({
                    progress: false,
                    mouseWheel: true,
                    controls:false
                });
                let _this = this;
                Reveal.addEventListener('slidechanged', function (event) {
                    let index = event.indexv;

                    let model = [];
                    _this.$store.state.messages.head.txt.forEach((v) => {
                        v.is = false;
                        model.push(v);
                    })
                    if(index>=2){
                        index++;
                    }
                    _this.$store.state.messages.head.txt = model;
                });
            }
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
            background: #141426;
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

        .warp_cont {
            overflow: hidden;
            .warp_cont_left {
                position: relative;
                .border {
                    width: 25%;
                    height: 2px;
                    background: #c83e66;
                }
                .title {
                    margin-top: 18px;
                    padding-bottom: 20px;
                    font-size: 24px;
                    color: #fff;
                    line-height: 30px;
                    .div1{
                        font-size: 14px;
                        line-height: 22px;
                        color: #d4d5de;  font-style: oblique;
                    }
                }
            }
            .warp_cont_right {
                border-top: 1px solid #2e3148;
                padding: 20px 8px;
                font-size: 12px;
                flex: 1;
                div {
                    font-size: 16px;
                    color: #d4d5de;
                    line-height: 26px;
                    margin-top: 28px;
                    span {
                        font-style: oblique;
                    }
                    a {
                        color: #7681e3;
                    }
                    ul {
                        list-style-type: disc;
                    }
                }
                div:first-child {
                    margin-top: 0;
                }
            }
        }
        .warp_title {
            font-size: 30px;
            color: #ffffff;
            padding-top: 20px;
            font-weight: bold;
        }
        .warp_title2 {
            color: #8c8fa6;
            font-size: 12px;
            margin-top: 14px;
            margin-bottom: 36px;
        }
    }
    .warp .warp_cont .warp_cont_right div{
        width: 100%;
        font-size: 12px;
    }
    .newCenter{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        background: #0b0b18 url('../../public/privacy.png') no-repeat fixed center;
        background-size: 375px;

    }
    .scroll-container{
        width: 90%;
        margin-left: 5%;
        margin-bottom: 40px;
    }
    .right-text{
        margin-bottom: 20px;
    }
</style>