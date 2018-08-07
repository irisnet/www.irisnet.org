<template>
    <div class="head" :style="color?'background:#16152d;':''">
        <div class="center">
            <a href="/"><img :src="UrlSrc+$store.state.messages.logo" style="width: 130px;"/></a>
            <div class="item_en" v-if="$store.state.lang=='EN'">
                <div @mouseenter="downShow" @mouseleave="downHide" class="item">
                    <img :src="UrlSrc+down"/> English
                </div>
                <a class="item_cn" href="?lang=CN">
                    中文
                </a>
            </div>
            <div class="item_en" v-if="$store.state.lang=='CN'">
                <div @mouseenter="downShow" @mouseleave="downHide" class="item">
                    <img :src="UrlSrc+down"/>中文
                </div>
                <a class="item_cn" href="?lang=EN">
                     English
                </a>
            </div>
            <div class="comm">
                <span @click="skipToTest"
                      :class="testActive?'active':''"
                      class="item">{{$store.state.lang=='CN'?'测试网':'Testnet'}}
                    <div></div>
                </span>
                <div class="div_h">
                </div>
                <a class="item" style="    margin-right: 10px;" @mouseenter="commHide" @mouseleave="commShow" v-show="!testActive">
                    <img :src="UrlSrc+comm">
                    Community
                    <div></div>
                </a>
            </div>
            <div style="float: right">
                <a :href="'/?lang='+$store.state.lang+item.href" v-for="item in $store.state.messages.head.txt" class="item">
                    {{item.txt}}
                    <div></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "head",
        props:['color'],
        data() {
            return {
                comm: 'community.png',
                down: 'arrow.png',
                testActive:false,
            }
        },
        mounted(){
            this.testActive = window.location.href.includes('testnets');
        },
        methods: {
            downShow() {
                this.down = '../public/down.png';
            },
            downHide() {
                this.down = '../public/arrow.png';
            },
            commShow() {
                this.comm = '../public/community.png';
            },
            commHide() {
                this.comm = '../public/community_selected.png';
            },
            skipToTest(){
                this.$router.push('/testnets/pc')
            },
        },
    }
</script>

<style scoped  lang='less'>
    .head {
        position: fixed;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 70px;
        background: #0b0b18;
        .comm {
            float: right;
            position: relative;
            margin-left: 20px;
            .active{
                color:#724BE3;
            }
            .div_h {
                height: 10px;
                width: 1px;
                background: #4b4d6c;
                position: absolute;
                top: 30px;
                left: -20px;
            }
            img {
                padding-top: 2px;
                float: left;
                margin-right: 6px;
            }
            a {
                margin-right: 20px;
            }
        }
        img {
            padding-top: 18px
        }
        .item_en {
            float: right;
            position: relative;
            &:hover {
                .item_cn {
                    display: block;
                }
            }
            .item {
                margin-right: 0;
            }
            img {
                padding-top: 6px;
                float: left;
                margin-right: 8px;
            }
            .item_cn {
                display: none;
                font-size: 12px;
                border-radius: 4px;
                line-height: 20px;
                text-align: center;
                position: absolute;
                cursor: pointer;
                height: 20px;
                width: 68px;
                top: 54px;
                left: 20px;
                color: #4b4e6d;
                background: #141426;
                &:hover {
                    color: #fff;
                }
            }
        }
        .item {
            float: left;
            margin: 20px 20px;
            color: #4b4d6c;
            padding-top: 8px;
            cursor: pointer;
            position: relative;
            font-size: 14px;
            div {
                width: 24px;
                height: 2px;
                background: #fff;
                margin-top: 20px;
                margin-left: 2px;
                display: none;
            }
            &:hover {
                color: #724be3;
                div {
                    display: block;
                    animation: nav-line 0.2s
                }
            }
        }
        .item_selected {
            color: #fff;
            div {
                background: #ec008c;
                display: block;
            }
        }
        .item:last-child {
            margin-right: 40px;
        }
        @keyframes nav-line{
            from{
                width: 0;
            }
            to{
                width: 24px;
            }
        }
    }
</style>