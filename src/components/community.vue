<template>
    <div>
        <div class="app" style="width: 100%;height:100%;">
            <div class="head">
                <img src="../assets/app/irislogo.png" class="imglogo"  @click="goToHome">
                <div class="div_en" >
                    <a href="?lang=CN" v-if="$store.state.lang!='CN'">
                        CN
                    </a>
                    <a href="?lang=EN" v-if="$store.state.lang=='CN'">
                        EN
                    </a>
                    <!--<img src="../assets/app/list.png" @click="menuIs=!menuIs"/>-->
                    <img style="width: 20px;height:20px;" src="../../public/app/close.png" @click="goToHome">
                </div>
            </div>
            <!--<div class="menu" @click="goToHome">-->

                <!--<section v-for="item in $store.state.messages.head.txt">-->
                    <!--<a v-if="item.href.indexOf('ttp')==-1" :href="'newApp#'+item.href" @click="menuIs=false" >-->
                        <!--{{item.txt}}-->
                    <!--</a>-->
                    <!--<a v-if="item.href.indexOf('ttp')!=-1" :href="'h'+item.href" @click="menuIs=false" >-->
                        <!--{{item.txt}}-->
                    <!--</a>-->
                <!--</section>-->
            <!--</div>-->
            <div class="community-container" @click="goToHome">
                <div class="community-center">
                    <p>{{$store.state.messages.community.title}}</p>
                    <span>{{$store.state.messages.community.coming}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let Reveal
    if (process.env.VUE_ENV === 'client') {
        Reveal = require('reveal.js')
    }
    export default {
        name:"community",
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
                showScale: "",
            }
        },
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
    .community-container{
        width: 100%;
        height: 100%;
        background: #0b0b18 url('../../public/app/irispattern-background.png') no-repeat fixed center;
        background-size: 375px;
    }
    .community-center{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        color: #fff;
        p{
            font-size: 12px;
            margin-bottom: 10px;
        }
        span{
            color: #fff;
            font-size: 18px;
        }
    }
</style>