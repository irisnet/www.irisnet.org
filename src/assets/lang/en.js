export const message = {
    logo:'irisnet.png',
    
    header:{
        left:[
            {
                id:0,
                title:'Whitepaper',
                active:false,
            },
            {
                id:1,
                title:'Collaboration',
                active:false,
            },
            {
                id:2,
                title:'Contact',
                active:false,
            }
        ],
        right:[
            {
                id:0,
                title:'Mainnet',
                href:'',
                active: false,
            },
            {
                id:1,
                title:'Docs',
                href:'https://www.irisnet.org/docs/',
                active: false,
            },
            {
                id:2,
                title:'Blog',
                href:'https://medium.com/irisnet-blog',
                active: false,
            },
        ],
        mobileNavigation:[
            {
                id:0,
                title:'Mainnet',
                activeIndex: '',
                active:false,
            },
            {
                id:1,
                title:'Testnet',
                activeIndex: '',
                active:false,
            },
            {
                id:2,
                title:'WhitePaper',
                activeIndex: 0,
                active:false,
            },
            {
                id:3,
                title:'Roadmap',
                activeIndex: 3,
                active:false,
            },
            {
                id:4,
                title:'Collaboration',
                activeIndex: 1,
                active:false,
            },
            {
                id:5,
                title:'Contact',
                activeIndex: 2,
                active:false,
            },
        ],
        mobileLinkHrefNavigation:[
            {
                id:0,
                title:'Docs',
                href: "https://www.irisnet.org/docs/",
                activeIndex: '',
            },
            {
                id:1,
                title:'Blog',
                href: "https://medium.com/irisnet-blog",
                activeIndex: '',
            }
        ]
    },
    footer:{
        socialCommunityTitle: 'Social Community',
        TechCommunityTitle: 'Tech Community',
        socialCommunity:[
            {
                id:0,
                src: "irisnet_telegram.png",
                href: "https://t.me/irisnetworkcn"
            },
            {
                id:1,
                src: "irisnet_twitter.png",
                href: "https://twitter.com/irisnetwork"
            },
            {
                id:2,
                src: "irisnet_mail.png",
                href: "mailto:contact@irisnet.org"
            },
            {
                id:3,
                src: "irisnet_medium.png",
                href: "https://medium.com/irisnet-blog"
            },
            {
                id:4,
                src: "irisnet_wechat.png",
                "txt": "Wechat"
            },
            {
                id:5,
                src: "irisnet_weibo.png",
                href: "https://weibo.com/u/6455513027"
            },
            {
                id:6,
                src: "irisnet_riot.png",
                href: "https://riot.im/app/#/room/!bmimZgJrUWSmxqQEmG:matrix.org"
            },
        ],
        techCommunity:[
            {
                id:0,
                src: "irisnet_github.png",
                href: "https://github.com/irisnet"
            },
            {
                id:1,
                src: "irisnet_riot.png",
                "txt": "riot",
                href: ""
            },
            {
                id:2,
                src: "irisnet_qq.png",
                "txt": "qq",
                href: ""
            },
        ],
        submitBtn:{
            title: 'Newsletter',
            subscribe: 'Subscribe',
            success: "Success"
        },
        errEmailAddress:{
            error:'Please enter a valid email address'
        },
        irisnetInproduction:'IRISnet is named after Greek goddess Iris, said to be the personification of the rainbow and the faithful messenger between heaven and humanity'
    },
    home: {
        sectionOne: {
            title: 'IRIS Betanet',
            time: '2019.03.01 Launched',
            shareUrl: {
                telegramUrl: 'https://t.me/irisnetwork',
                githubUrl: 'https://github.com/irisnet/irishub',
                weChatUrl: ''
            },
            button: {
                buttonName: {
                    rainbowName: 'Rainbow Wallet',
                    explorerName: 'IRIS Explorer'
                },
                buttonUrl: {
                    rainbowUrl: 'https://www.rainbow.one/',
                    explorerUrl: 'https://www.irisplorer.io'
                }
            }
        },
        sectionTwo: {
            KeyInnovations: {
                title: 'Key Innovations',
                list: [
                    {id: 0, msg: 'Incorporation of a service-oriented infrastructure into Cosmos'},
                    {id: 1, msg: 'Integration of business services offered by heterogeneous systems,including public & consortium chains as well as legacy systems'},
                    {id: 2, msg: 'Incorporation of a service-oriented infrastructure into Cosmos'}
                ],
                buttonMsg: 'WHITE PAPER',
                WHITEPAPERUrl: 'https://github.com/irisnet/irisnet/blob/master/WHITEPAPER.md'
            },
            NetworkDesign: {
                title: 'Network Design',
                list: [
                    {id: 0, msg: 'Definition of standard ABCI transaction types supporting registration,binding, invocation, query, profiling and governance of IRIS Services(a.k.a. iServices)'},
                    {id: 1, msg: 'iService providers act as adaptors of business logic residing in public andconsortium blockchains as well as enterprise legacy systems'},
                    {id: 2, msg: 'iServices can be invoked across anextended IBC protocol'}]
            }
        },
        sectionThree: {
            title: 'Roadmap',
            road: [
                {id: 0, caption: 'HOUYI', time: 'BEYOND JAN 2020', msg: 'The fourth stage will focus on further technology innovations to the IRIS network, IRIS SDK and mobile client, as well as developer engagement.'},
                {id: 1, caption: 'KUAFU', time: 'OCT 2019 - DEC 2019', msg: 'The third stage will focus on incremental upgrades to the IRIS Network in order to support our planned advanced IRIS Service governance features.'},
                {id: 2, caption: 'NÜWA', time: 'APR 2019 - SEPT 2019', msg: 'In this stage we are aiming to have a beta version of the IRIS SDK ready for developers. We plan to upgrade IRISnet mobile client to support i-Services. We plan to establish collabrations with application specific blockchains and enable them as zones connecting to IRIS Hub. We also plan to accomplish the connection with Cosmos Hub at this stage.'},
                {id: 3, caption: 'PANGU', time: 'JAN 2018 - MAR 2019', msg: 'The first stage of the IRIS project will focus on having the IRIS Hub up and running. We also intend to release an initial version of the mobile client for the IRIS network. In this stage we also focus on building the fundamental IRIS Service Layer. This will involve enabling service definition, binding, invocation and query. We plan to collabrate with 1-2 ecosystem parteners to release i-Services to IRIShub.'}
            ]
        },
        sectionFour: {
            Collaboration: 'Collaboration',
            CoreDevelopmentTeams: {
                title: 'Core Development Teams',
                logos: [
                    {id:0, path: 'logos/irisnet_bianjiehover.png', url: 'https://www.bianjie.ai/'},
                    {id:1, path: 'logos/irisnet_tenderminthover.png', url: 'https://tendermint.com/'}
                ]
            },
            StrategicPartners: {
                title: 'Strategic Partners',
                logos: [
                    {id:0, path: 'logos/irisnet_InTERCHAIN.png', url: 'https://cosmos.network/about'},
                    {id:1, path: 'logos/irisnet_HASHKEY.png', url: 'https://www.hashkey.com/#/'}
                ]
            },
            EcosystemPartners: {
                title: 'Ecosystem Partners',
                logos: [
                    {id:0, path: 'logos/irisnet_Platonlogo.png', url: 'https://www.platon.network/#/index'},
                    {id:1, path: 'logos/irisnet_hashquark.png', url: 'https://www.hashquark.io/#/'},
                    {id:2, path: 'logos/irisnet_hashgardhover.png', url: 'https://www.hashgard.io/#/'}
                ]
            },
            Institutional: {
                title: {msg1: 'Institutional Supporters', msg2: '( Listed in no particular order )'},
                logos: [
                    {id:0, path: 'logos/irisnet_AminoCapital.png', url: 'http://www.aminocapital.com/'},
                    {id:1, path: 'logos/irisnet_Bibox.png', url: 'https://www.bibox.com/'},
                    {id:2, path: 'logos/irisnet_huobi.png', url: 'https://www.hbg.com/en-us/capital/'},
                    {id:3, path: 'logos/irisnet_GBIC.png', url: 'https://gbic.io/'},
                    {id:4, path: 'logos/irisnet_8decim.png', url: 'javascript:void(0)'},
                    {id:5, path: 'logos/irisnet_bihu.png', url: 'https://bihu.com/'},// 1
                    {id:6, path: 'logos/irisnet_ba.png', url: 'javascript:void(0)'},
                    {id:7, path: 'logos/irisnet_BKfund.png', url: 'javascript:void(0)'},
                    {id:8, path: 'logos/irisnet_byz.png', url: 'javascript:void(0)'},
                    {id:9, path: 'logos/irisnet_ChainPE.png', url: 'http://www.chainpe.com/'},
                    {id:10, path: 'logos/irisnet_CP.png', url: 'https://chainpool.io/'},
                    {id:11, path: 'logos/irisnet_COEFFICIENT.png', url: 'http://coefficient.network/'},// 2
                    {id:12, path: 'logos/irisnet_gongshi.png', url: 'http://consensuscapital.ca/'},
                    {id:13, path: 'logos/irisnet_dushu.png', url: 'javascript:void(0)'},
                    {id:14, path: 'logos/irisnet_genblock.png', url: 'https://genblock.capital/'},
                    {id:15, path: 'logos/irisnet_HAYEK.png', url: 'javascript:void(0)'},
                    {id:16, path: 'logos/irisnet_INK.png', url: 'http://ink.one/'},
                    {id:17, path: 'logos/irisnet_LINKVCcopy.png', url: 'http://www.linkvc.com/'},// 3
                    {id:18, path: 'logos/irisnet_MediSHares.png', url: 'http://medishares.org/'},
                    {id:19, path: 'logos/irisnet_jieshi.png', url: 'http://www.milestonevc.com/index.html'},
                    {id:20, path: 'logos/irisnet_nirvana-logo-white.png', url: 'http://nirvana.capital/'},
                    {id:21, path: 'logos/irisnet_NGC.png', url: 'http://ngc.fund/'},
                    {id:22, path: 'logos/irisnet_origin.png', url: 'http://www.theorigincapital.com/'},
                    {id:23, path: 'logos/irisnet_SatoshiFUnd.png', url: 'https://satoshi.fund/'},// 4
                    {id:24, path: 'logos/irisnet_guigu.png', url: 'http://www.svinsight.com/'},
                    {id:25, path: 'logos/irisnet_shicuo.png', url: 'javascript:void(0)'},
                    {id:26, path: 'logos/irisnet_huixiang.png', url: 'javascript:void(0)'},
                    {id:27, path: 'logos/irisnet_Unetwork.png', url: 'https://u.network/'},
                    {id:28, path: 'logos/irisnet_jiuhe.png', url: 'http://www.unityvc.com/'},
                    {id:29, path: 'logos/irisnet_UA.png', url: 'javascript:void(0)'},//5
                    {id:30, path: 'logos/irisnet_shuidi.png', url: 'http://waterdrip.io/'},
                    {id:31, path: 'logos/irisnet_yidao.png', url: 'javascript:void(0)'},
                ]
            }
        }
    },
    // "logo": 'irisnet.png',
    mainnet:{
        title: 'IRIS Network',
        production: 'Inter-chain service infrastructure and protocol for building trustworthy and distributed business applications',
        wallet: 'Rainbow Wallet',
        walletHref:'http://www.rainbow.one/',
        explorer: 'IRIS Explorer',
        explorerHref:'https://www.irisplorer.io/'
    },
    announcements:{
        title: 'Foundation Announcements',
        viewMore: 'View More',
        moreHref:'https://github.com/irisnet/iris-foundation/blob/master/betanet_work_plan.md',
        betaTitle:'Betanet Work Plan',
        betaContent:'The IRIS Foundation is excited to be announcing the launch plan of IRIS Betanet. And keep update the most recent status here.',
        readMore:'Read more',
        betaDate:'Feb 1, 2019',
        announcementList:[
            {
                id:'1',
                href:'https://github.com/irisnet/iris-foundation/blob/master/iris-betanet-plan.md',
                date:'Jan 16, 2019',
                title:'IRIS Foundation Announces Plan for Betanet',
                content:'The IRIS Foundation is excited to be announcing the launch of IRIS Betanet, which will happen in the middle of Feb 2019, right after Chinese New Year. 2019 is the Year of the Pig which represents carefree fun, good fortune and wealth.'
            },
            {
                id:'2',
                href:'https://github.com/irisnet/iris-foundation/blob/master/iris-betanet-expectations.md',
                date:'Jan 16, 2019',
                title:'Expectations for IRIS Betanet',
                content:'Expectations for IRIS Betanet\n' +
                'To better prepare the community for participating in IRIS Betanet, we would like to communicate the expectations for this network:'
            }
           
        ]
    },
    testnet:{
        title:'Fuxi Testnet',
        production: 'The FUXI testnet runs the same software as IRIS mainnet, providing a stable test environment for the developer community (wallets, browsers, iService providers/consumers).',
        testnetLink:'Ues The Testnet'
    },
    community:{
        title: 'Join Tech Community',
        joinWay:[
            {
                id:'1',
                src:'irisnet_community_qq.png',
                name: 'QQ group',
                linkName:'834063323',
                href: ''
            },
            {
                id:'2',
                src:'irisnet_community_riot.png',
                name: 'Riot room',
                linkName:'#irisvalidators:matrix.org',
                href: 'https://matrix.to/#/!bmimZgJrUWSmxqQEmG:matrix.org'
            }
        ]
    },
    testnetPage:{
        title: 'Fuxi Testnet',
        section:[
            {
                content:'The previous iterations of the testnets have accomplished their mission. '
            },
            {
                content:'In February 2019, the IRISnet development team released irishub v0.12.0 and successfully started the new testnet (chain-id : fuxi) with this version. '
            },
            {
                content:'The FUXI testnet runs the same software as IRIS mainnet, providing a stable test environment for the developer community (wallets, browsers, iService providers/consumers).'
            }
        ],
        joinTitle:'How to Use FUXI Testnet',
        joinHref:'https://www.irisnet.org/docs/get-started/Join-the-Testnet.html',
        faqTitle:'IRIShub FAQ',
        faqHref:'https://www.irisnet.org/docs/introduction/',
        explorerTitle:'IRISplorer (FUXI)',
        explorerHref:'https://testnet.irisplorer.io',
        walletTitle:'Rainbow App (PTR)',
        walletHref:'https://testnet.rainbow.one/'
    },
    "logo": 'irisnet.png',
    "white":'public/whiteDw.png',
    "whiteHref":"https://github.com/irisnet/irisnet/blob/master/WHITEPAPER.md",
    "next": 'what_next.png',
    "head": {
        'txt': [
            {
                'txt': "Whitepaper",
                "href": "#/0/1",
            },
            {
                'txt': "Collaboration",
                "href": "#/0/3",
            },
            {
                'txt': "Contact",
                "href": "#/0/5",
            },

        ]
    },
    "contact": {
        "img": [
            {
                "src": "telegram-default.png",
                "src_selected": "telegram.png",
                "txt": "Telegram",
                "href": "https://t.me/irisnetwork"
            },
            {
                "src": "twitter-default.png",
                "src_selected": "newtwitter.png",
                "txt": "Twitter",
                "href": "https://twitter.com/irisnetwork"
            },

            {
                "src": "github-default.png",
                "src_selected": "newgithub.png",
                "txt": "GitHub",
                "href": "https://github.com/irisnet"
            },
            {
                "src": "email-default.png",
                "src_selected": "email.png",
                "txt": "Email",
                "href": "mailto:contact@irisnet.org"
            },
            {
                "src": "medium-default.png",
                "src_selected": "newmedium.png",
                "txt": "Medium",
                "href": "https://medium.com/irisnet-blog"
            },
            {
                "src": "riot-default.png",
                "src_selected": "newriot.png",
                "txt": "Riot",
                "href": "https://riot.im/app/#/room/#iris:matrix.org"
            },
            {
                "src": "wechat-default.png",
                "src_selected": "newwechat.png",
                "txt": "Wechat"
            },
            {
                "src": "weibo-default.png",
                "src_selected": "newweibo.png",
                "txt": "Weibo",
                "href": "https://weibo.com/u/6455513027"
            },
        ],
        "title": "Contact"
    },





    "collaboration": {
        "title": "Collaboration",
        "txt": [
            'Core Development Team',
            'Strategic Partners'
        ],

        "core":{
            "title":"Core Development Teams",
            "list":[
                {
                    "img":"collaboration/bianjieai.png",
                    "pos":-56*0,
                    "title":"BIANJIE.AI",
                    "href":"https://www.bianjie.ai/"
                },
                {
                    "img":"collaboration/newtendermint.png",
                    "pos":-56*1,
                    "title":"Tendermint",
                    "href":"https://tendermint.com"
                },
            ]
        },

        "strategy":{
            "title":"Strategic Partners",
            "img":"collaboration/strategy.png",
            "list":[
                {
                    "img":"collaboration/interchain.png",
                    "pos":-56*0,
                    "title":"Interchain Foundation",
                    "href":"https://cosmos.network/about"
                },
                {
                    "img":"collaboration/hashkeygroup.png",
                    "pos":-56*2,
                    "href":"https://www.hashkey.com/#/"
                },
            ]
        },
        "ecosystem":{
            "title":"Ecosystem Partners",
            "list":[
                {
                    "img":"collaboration/Platonlogo.png",
                    "pos":-56*3,
                    "title":"Hashgard",
                    "href":"https://www.platon.network/#/index"
                },
                {
                    "img":"collaboration/hashquark.png",
                    "pos":-56*3,
                    "title":"Hashgard",
                    "href":"https://www.hashquark.io/#/"
                },
                {
                    "img":"collaboration/hashgard.png",
                    "pos":-56*3,
                    "title":"Hashgard",
                    "href":"https://www.hashgard.io/#/"
                }
            ]
        },
        "investment":{
            "title":"Institutional Supporters",
            "subtitle":"( Listed in no particular order )",
            "list":[
                {
                    "img":"collaboration/AminoCapital.png",
                    "pos":-56*0,
                    "title":"Amino Capital",
                    "href":"http://www.aminocapital.com"
                },
                {
                    "img":"collaboration/bibox.png",
                    "title":"Bibox",
                    "href":"https://www.bibox.com/"
                },
                {
                    "img":"collaboration/huobiCapital.png",
                    "title":"Huobi Capital",
                    "href":"https://www.hbg.com/en-us/capital/"
                },
                {
                    "img":"collaboration/gbic.png",
                    "title":"GBIC",
                    "href":"https://gbic.io/"
                },
                {
                    "img":"collaboration/bawei.png",
                    "pos":-56*1,
                    "title":"8 Decimal",
                    "href":""
                },
                {
                    "img":"collaboration/bihu.png",
                    "pos":-56*2,
                    "title":"BIHU",
                    "href":"https://bihu.com/"
                },
                {
                    "img":"collaboration/newbtts.png",
                    "pos":-56*3,
                    "title":"BA Capital",
                    "href":""
                },
                {
                    "img":"collaboration/newBKfund.png",
                    "pos":-56*4,
                    "title":"BKFund",
                    "href":""
                },
                {
                    "img":"collaboration/bzt.png",
                    "pos":-56*5,
                    "title":"Byzantium",
                    "href":""
                },
                {
                    "img":"collaboration/chainPEter.png",
                    "pos":-56*6,
                    "title":"Chain PE",
                    "href":"http://www.chainpe.com"
                },
                {
                    "img":"collaboration/cp.png",
                    "pos":-56*7,
                    "title":"Chain Pool",
                    "href":"https://chainpool.io/"
                },
                {
                    "img":"collaboration/coefficient.png",
                    "pos":-56*8,
                    "title":"Coefficient",
                    "href":"http://coefficient.network"
                },
                {
                    "img":"collaboration/gszb.png",
                    "pos":-56*9,
                    "title":"Consensus",
                    "href":"http://consensuscapital.ca"
                },
                {
                    "img":"collaboration/dsjj.png",
                    "pos":-56*10,
                    "title":"Dushu",
                    "href":""
                },
                {
                    "img":"collaboration/genblock.png",
                    "pos":-56*11,
                    "title":"Genblock",
                    "href":"https://genblock.capital"
                },
                {
                    "img":"collaboration/hayek.png",
                    "pos":-56*12,
                    "title":"Hayak",
                    "href":""
                },
                {
                    "img":"collaboration/ink.png",
                    "pos":-56*13,
                    "title":"Ink Labs",
                    "href":"http://ink.one"
                },
                {
                    "img":"collaboration/linkvc.png",
                    "pos":-56*14,
                    "title":"LinkVC",
                    "href":"http://www.linkvc.com"
                },
                {
                    "img":"collaboration/newmedishares.png",
                    "pos":-56*15,
                    "title":"Medi Shares",
                    "href":"http://medishares.org/"
                },
                {
                    "img":"collaboration/js.png",
                    "pos":-56*16,
                    "title":"MILESTONE",
                    "href":"http://www.milestonevc.com/index.html"
                },
                {
                    "img":"collaboration/nirvanacapital.png",
                    "pos":-56*16,
                    "title":"Nirvana Capital",
                    "href":"http://nirvana.capital/"
                },
                {
                    "img":"collaboration/ngc.png",
                    "pos":-56*17,
                    "title":"NEO GLOBAL",
                    "href":"http://ngc.fund"
                },
                {
                    "img":"collaboration/y.png",
                    "pos":-56*18,
                    "title":"Origin Capital",
                    "href":"http://www.theorigincapital.com"
                },
                {
                    "img":"collaboration/satoshifund.png",
                    "pos":-56*19,
                    "title":"Satoshi Fund",
                    "href":"https://satoshi.fund"
                },
                {
                    "img":"collaboration/ggtm.png",
                    "pos":-56*20,
                    "title":"SV Insight",
                    "href":"http://www.svinsight.com"
                },
                {
                    "img":"collaboration/sczb.png",
                    "pos":-56*21,
                    "title":"Timestamp",
                    "href":""
                },
                {
                    "img":"collaboration/hxjj.png",
                    "pos":-56*22,
                    "title":"Transference Fund",
                    "href":""
                },
                {
                    "img":"collaboration/unetwork.png",
                    "pos":-56*23,
                    "title":"U Network",
                    "href":"https://u.network"
                },
                {
                    "img":"collaboration/jhct.png",
                    "pos":-56*24,
                    "title":"UNITY VENTURES",
                    "href":"http://www.unityvc.com"
                },
                {
                    "img":"collaboration/ua.png",
                    "pos":-56*25,
                    "title":"Univalues Associates",
                    "href":""
                },
                {
                    "img":"collaboration/sdzb.png",
                    "pos":-56*25,
                    "title":"WATERDRIP CAPITAL",
                    "href":"http://waterdrip.io"
                },
                {
                    "img":"collaboration/ydzb.png",
                    "pos":-56*25,
                    "title":"",
                    "href":""
                }

            ]
        },

        "counsel":{
            "title":"Counsel",
            "img":"collaboration/counsel.png",

            "list":[
                {
                    "img":"collaboration/ey.png",
                    "pos":-56*0,
                    "title":"E&Y",
                    "href":""
                },
                {
                    "img":"collaboration/king.png",
                    "pos":-56*1,
                    "title":"KWM",
                    "href":""
                }
            ]
        },


        "list": [
            {
                "img": "collaboration/bianjie.png",
                "title": "BIANJIE.AI",
                "text": "bianjie.ai",
                "href": "https://bianjie.ai"
            },
            {
                "img": "collaboration/cosmos.png",
                "title": "COSMOS",
                "text": "cosmos.network",
                "href": "https://cosmos.network"
            },
            {
                "img": "collaboration/tendermint.png",
                "title": "Tendermint",
                "text": "tendermint.com",
                "href": "https://tendermint.com"
            },
            {
                "img": "collaboration/hashkeygroup.png",
                "href": "https://www.hashkey.com/#/"
            },
            {
                "img": "collaboration/base.png",
                "title": "Newchainbase",
                "text": "newchainbase.com",
                "href": "http://www.newchainbase.com"
            },
            {
                "img": "collaboration/waterdrip.png",
                "title": "WaterDrip",
                "text": "waterdrip.io",
                "href": "http://waterdrip.io/"
            },
            {
                "img": "collaboration/medishares.png",
                "title": "Medishares",
                "text": "medishares.org",
                "href": "https://medishares.org"
            },
            {
                "img": "collaboration/transference.png",
                "title": "Transference",
                "text": "",
                "href": ""
            },
            {
                "img": "collaboration/bkfund.png",
                "title": "BKFund",
                "text": "",
                "href": ""
            },
            {
                "img": "collaboration/timestamp.png",
                "title": "Timestamp",
                "text": "",
                "href": ""
            },
        ],
        "btnTxt":"Collaboration"
    },
    "about": {
        "title": 'Key Innovations',
        "imgtxt": " Facilitate construction of <br> distributed business applications",
        "txt": [
            'Incorporation of a service-oriented infrastructure into Cosmos',
            'Integration of business services offered by heterogeneous systems, including public & consortium chains as well as legacy systems',
            'Interoperability of those services across an internet of blockchains'
        ],
        "btnTxt":"WHITE PAPER",
        "checkTxt":"CHECK NETWORK"
    },
    "network": {
        "title": 'Network Design',
        "txt": [
            'Definition of standard ABCI transaction types supporting ' +
            'registration, binding, invocation, query, profiling and ' +
            'governance of IRIS Services (a.k.a. iServices)',
            'iService providers act as adaptors of business logic ' +
            'residing in public and consortium blockchains as well ' +
            'as enterprise legacy systems',
            'iServices can be invoked across an internet of ' +
            'blockchains over an extended IBC protocol'
        ],
        "src": 'white.png'
    },
    "privacy": {
        "title": "IRIS Foundation Limited",
        "title1": "Privacy policy",
        "list": [
            {
                'title': "Introduction",
                "txtList": [
                    'We are IRIS Foundation Limited, a company limited by guarantee and incorporated in Hong Kong (“the Foundation”, ' +
                    '“we” or “us”). ',
                    'Your privacy is important to us.  We are committed to protecting the privacy, confidentiality and security of the personal data we hold by ' +
                    'complying with the requirements under applicable laws and regulations.  We are equally committed to ensuring that all our employees, service ' +
                    'providers and agents uphold these obligations.',
                    'This policy explains how we manage personal data within our organization.'
                ]
            },
            {
                'title': "How we collect personal data",
                "txtList": [
                    'We collect personal data about you in the following ways: ' +
                    '<ul>' +
                    '<li>where you register for an account or to receive emails from us</li>' +
                    '<li>when you order products or services from us</li>' +
                    '<li>when you submit a query or request to us</li>' +
                    '<li>when you respond to a survey that we run or fill in forms on one of our websites</li>' +
                    '<li>by tracking your use of our websites and mobile applications</li>' +
                    '<li>from public sources</li>' +
                    '<li>from examination of public and private blockchains</li>' +
                    '<li>from third parties who are entitled to disclose that information to us</li>' +
                    '<li>when you apply for a job with us</li>' +
                    '</ul> ',
                    'In some cases we may be required by law to collect certain types of personal data about you.',
                    'Where we collect personal data from you, we will generally do so ourselves.  However, in some cases ' +
                    'we may collect personal data from a third party, such as through your representatives, contractors who ' +
                    'provide services to us, or third parties who refer you to us because they think you may be interested in our ' +
                    'products or services.'
                ]
            },
            {
                'title': "Kinds of personal data we collect",
                "txtList": [
                    'The kinds of personal data that we collect and hold about you may include: ' +
                    '<ul>' +
                    '<li>identifying information, such as your real name, nationality, ID type, ID number and other information required by the laws and regulations</li>' +
                    '<li>contact information, such as your postal address, email address and telephone number personal information</li>' +
                    '<li>social media handles and other social media profile information that you make available to us or to the public</li>' +
                    '<li>financial information, such as credit card, bank account or other payment details</li>' +
                    '<li>blockchain identifiers, such as blockchain addresses and public keys</li>' +
                    '<li>usernames and passwords that you create when registering for an account with us</li>' +
                    '<li>details of any products or services that we provide to you</li>' +
                    '<li>information about how you use the products and services we provide</li>' +
                    '<li>records of our communications with you, including any messages you send us</li>' +
                    '</ul> ',
                    'Without this information, we may not be able to provide you with our products or services (or with all of the features and functionality offered by our products or services) or to respond to queries or requests that you submit to us.'
                ]
            },
            {
                'title': "Purposes for which we use personal data",
                "txtList": [
                    'We use personal data that we collect about you for the following purposes: ' +
                    '<ul>' +
                    '<li>to verify your identity when you are dealing with us</li>' +
                    '<li>to determine your eligibility for any of our products or services</li>' +
                    '<li>to determine your compliance with the terms and conditions that apply to any of our products or services and applicable law</li>' +
                    '<li>to enable us to provide our products and services</li>' +
                    '<li>to improve our website based on your information and feedback</li>' +
                    '<li>to answer your queries and requests</li>' +
                    '<li>to comply with our legal and regulatory obligations</li>' +
                    '<li>to carry out market analysis and research</li>' +
                    '<li>to monitor use of our products and services</li>' +
                    '<li>to assess, maintain, upgrade and improve our products and services</li>' +
                    '<li>to carry out education and training programs for our staff</li>' +
                    '<li>to manage and resolve any legal or commercial complaints or issues</li>' +
                    '<li>to carry out planning and forecasting activities and other internal business processes</li>' +
                    '<li>to keep you informed about our activities, including by sending out newsletters</li>' +
                    '<li>to connect you with our users of our products and services</li>' +
                    '</ul> '
                ]
            },
            {
                'title': "Direct marketing",
                "txtList": [
                    'We may from time to time use your personal data in order to send you marketing materials about products ' +
                    'or services that we think you may be interested in (including in some cases products and services that ' +
                    'are provided by a third party).  We may not use your personal data unless we have received your consent.  ' +
                    'You can opt-out of receiving marketing communications from us by contacting us at ' +
                    '<a href="mailto:contact@irisnet.org" >contact@irisnet.org </a>. ',
                    'We may use your following personal data for the purpose of direct marketing:  ',
                    '<ul>' +
                    '<li>identifying information, such as your name and date of birth</li>' +
                    '<li>contact information, such as your postal address, email address and telephone number</li>' +
                    '<li>products and services portfolio information and demographic data held by us from time to time</li>' +
                    '</ul> ',
                    'We may use your personal data to market the following products and/or services to you:',
                    '<ul>' +
                    '<li>purchasing and/or trading digital assets</li>' +
                    '<li>providing, managing or accessing mobile wallets for holding digital assets; and</li>' +
                    '<li>other products or services related to digital assets</li>' +
                    '</ul> ',
                    'If we use your personal data in any direct marketing communications, you have the right to request that we provide ' +
                    'you with the source of that personal data.  There is no fee for requesting this information.  We will provide you ' +
                    'with the source of the personal data, unless it is impracticable or unreasonable to do so. ',
                    'Please indicate your consent to receiving information relating to the above by contacting us at ' +
                    '<a href="mailto:contact@irisnet.org" >contact@irisnet.org </a> . ',
                    'We may also use and disclose your information for other purposes in accordance with your requests or instructions.'
                ]
            },
            {
                'title': "People to whom we may disclose personal data",
                "txtList": [
                    'We may share personal data about you with: ',
                    '<ul>' +
                    '<li>your representatives, advisers and others you have authorised to interact with us on your behalf</li>' +
                    '<li>our staff who need the information to discharge their duties</li>' +
                    '<li>related entities within our corporate group</li>' +
                    '<li>our business partners, agents and service providersp</li>' +
                    '<li>payment system operators and financial institutions</li>' +
                    '<li>prospective purchasers of all or part of our business or a related entity</li>' +
                    '<li>professional advisers who we engage to provide advice on our business</li>' +
                    '<li>government authorities who ask us to disclose that information, or to other people as required by law</li>' +
                    '</ul> ',
                    'In some cases the people to whom we disclose your personal information may be located overseas.  Further, we may have servers ' +
                    'located overseas.  The jurisdictions in which these people and/or servers are likely to be located include  the United States, Japan, ' +
                    'and Singapore.  There may not be in place data protection laws which are substantially similar to, or serve the same purposes as the ' +
                    'applicable data privacy laws in Hong Kong.  This means your personal information may not be protected to the same or similar level in Hong Kong. ',
                    '[<span>We will never sell your personal data to any third party.</span>] [<span><b>optional clause</b></span>]'
                ]
            },
            {
                'title': "Cookies <div class='div1'>[optional clause, to be used if cookies are relevant to your business]</div> ",
                "txtList": [
                    '<span>[We use cookies to monitor and observe your use of our websites, compile aggregate data about that use, ' +
                    'and provide you with a more effective service (which may include customising parts of our websites based on ' +
                    'your preferences and past activities on those websites).  <b>"Cookies"</b> are small text files created and stored on ' +
                    'your hard drive by your internet browser software, in order to hold relevant information about the web page you are ' +
                    'currently viewing.  Most internet browsers have a facility that will allow you to disable cookies altogether – ' +
                    'please refer to your browser’s help menu to find out how to do this.  While you will still be able to browse our websites ' +
                    'with cookies disabled on your internet browser, some website functionality may not be available or may not function correctly.]</span> ',
                ]
            },
            {
                'title': "Storage and security of personal data ",
                "txtList": [
                    'We generally store the personal data that we collect in electronic databases, some of which may be held on our behalf by third party data storage ' +
                    'providers.  Sometimes we also keep hard copy records of this personal data in physical storage facilities.  We use a range of physical and technical ' +
                    'security processes and procedures to protect the confidentiality and security of the information that we hold, and we update these from time to time ' +
                    'to address new and emerging security threats that you become aware of.',
                    '[We also take steps to monitor access to and modification of your information by our staff, and ensure that our staff are aware of and properly trained ' +
                    'in their obligations for managing your privacy.] [<b>optional clause</b>]'
                ]
            },
            {
                'title': "Google Analytics <div class='div1'>[optional clause, to be used if Google Analytics are used]</div>",
                "txtList": [
                    '<span>[Our website uses Google Analytics, a web analytics service provided by Google, Inc. (“<b>Google</b>”). ' +
                    '<span> Google Analytics uses cookies to help the website analyse how users use our website.</span>',
                    '<span>The information generated by the cookie about your use of our website (including your IP address) will be transmitted to and stored ' +
                    'by Google on servers in the United States.  Google will use this information for the purpose of evaluating your use of the website, compiling ' +
                    'reports on website activity for website operators and providing other services relating to website activity and internet usage.  Google may also ' +
                    'transfer this information to third parties where required to do so by law, or where such third parties process the information on Google’s behalf.  ' +
                    'Google will not associate your IP address with any other data held by Google.</span> ',
                    '<span>You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use ' +
                    'the full functionality of our website.  By using our website, you consent to the processing of data about you by Google in the manner and for the purposes ' +
                    'set out above.]</span>'
                ]
            },
            {
                'title': "Retention of personal data",
                "txtList": [
                    'Your personal data will only be kept as long as required.',
                    'We may retain your personal data for a period of at least 12 months.  At our discretion, we may retain personal data for longer than the ' +
                    'said period if we consider it necessary or desirable to do so to meet our legal or regulatory obligations.  '
                ]
            },
            {
                'title': "Access and correction ",
                "txtList": [
                    'If you want to access any of the personal data that we hold about you or to correct some aspect of it (for example, because you think it is ' +
                    'incomplete or incorrect), please contact our privacy compliance team using the contact details set out below.  To protect the integrity and ' +
                    'security of the information we hold, we may ask that you follow a defined access procedure, which may include steps to verify your identity.  ' +
                    'In certain cases we may charge you an administration fee for providing you with access to the information you have asked for, but we will inform ' +
                    'you of this before proceeding.  There may be cases where we are unable to provide the information you request, such as where it would interfere ' +
                    'with the privacy of others or result in a breach of confidentiality.  In these cases we will let you know why we cannot comply with your request. ',
                    'Even if you do not request access to and/or correct your personal data held  by us, if we are satisfied that, having regard to the reasons for which we ' +
                    'hold your personal data, that personal data is inaccurate, incomplete, out-of-date, irrelevant or misleading, we may take reasonable steps to correct that ' +
                    'information. '
                ]
            },
            {
                'title': "Your consent",
                "txtList": [
                    'By using our website, providing personal data and/or using any of our products or services, you agree that:',
                    '<ul>' +
                    '<li>you consent to this privacy policy, as updated from time to time; and</li>' +
                    '<li>if you have provided personal data to us relating to any other person, you:' +
                    '<ul>' +
                    '<li>have a right to provide that information;</li>' +
                    '<li>have provided a copy of this privacy policy, as updated from time to time, to that person; and</li>' +
                    '<li>each such person has agreed to those terms.</li>' +
                    '</ul>' +
                    '</li>' +
                    '</ul>',
                ]
            },
            {
                'title': "Complaints",
                "txtList": [
                    'We try to meet the highest standards in order to protect your privacy.  However, if you are concerned about the way in which we are ' +
                    'managing your personal data and think we may have breached any applicable privacy laws, or any other relevant obligation, please contact ' +
                    'our privacy compliance team using the contact details set out below.  We will make a record of your complaint and refer it to our internal ' +
                    'complaint resolution department for further investigation.  We will deal with the matter as soon as we can, and keep you informed of the progress ' +
                    'of our investigation..',
                ]
            },
            {
                'title': "Changes to this policy",
                "txtList": [
                    'We may make changes to this policy from time to time, to take into account changes to our standard practices and procedures or where necessary to ' +
                    'comply with new laws and regulations.  The latest version of this policy will always be available on our website.'
                ]
            },
            {
                'title': "Contact details",
                "txtList": [
                    'If you want any further information from us on privacy matters, please contact our privacy compliance team at ' +
                    '<a href="mailto:contact@irisnet.org" >contact@irisnet.org </a>  .'
                ]
            },
        ]
    },
    "terms": {
        "title": "IRIS Foundation Limited",
        "title1": "Website terms of use",
        "list": [
            {
                'title': "Introduction",
                "txtList": [
                    'This website ("our website") is owned and operated by IRIS Foundation Limited, a company limited by ' +
                    'guarantee and incorporated in Hong Kong (“the Foundation”, "we" or "us").  Each reference in these terms ' +
                    'of use to “our website” includes all materials that we make available to you on our website.',
                    'By using our website, you agree to comply with these terms of use.  Please check this page each time you use our website, ' +
                    'as we may update these terms from time to time.',
                    'If you carry out any transaction through our website, that transaction may be subject to additional terms and conditions ' +
                    'which you will be asked to read and accept at the relevant time.  To the extent of any inconsistency with these terms, the terms ' +
                    'of the transaction apply to that transaction and any matters connected with it.',
                ]
            },
            {
                'title': "Your obligations",
                "txtList": [
                    'You must comply with any instructions we give you about how to use our website and must not do anything that interferes with or ' +
                    'adversely affects the normal operation of the website (including the ability of other users to access or use the website).',
                    'You are responsible for ensuring the security of the systems and devices that you use to access our website, including through ' +
                    'use of appropriate virus-checking and other security software.'
                ]
            },
            {
                'title': "Registration",
                "txtList": [
                    'You may need to register with us in order to access certain parts of our website.  Further details about registrations are ' +
                    'available here.  In this case, we may issue you with a user name and password, or other appropriate log-in details for your account.  ' +
                    'You are responsible for keeping your log-in details confidential so that they cannot be used without your permission.  You will be ' +
                    'responsible for any use of our website by anyone using your log-in details.'
                ]
            },
            {
                'title': "Rights to suspend or terminate access",
                "txtList": [
                    'We may suspend, terminate or block your access to all or any part of our website at any time and without prior notice to you.'
                ]
            },
            {
                'title': "Intellectual property",
                "txtList": [
                    'All of the intellectual property rights in and to our website belong to us and our licensors.  We may update and change the materials available on our ' +
                    'website, including by removing materials, at any time in our discretion without notice to you.',
                    'You may download or print sections of our website if needed for your own personal use, but otherwise you may not reproduce any part of our website without ' +
                    'our express prior consent.  To the extent that our website contains functionality that allows you to access or download specific materials through our website, ' +
                    'your use of that functionality and the downloaded materials may be subject to separate terms and conditions which you will be asked to read and accept at the ' +
                    'relevant time.'
                ]
            },
            {
                'title': "Website links",
                "txtList": [
                    'Our website may contain or link to information that has not been devised, verified or tested by us or any of our officers, employees or agents.  These are provided ' +
                    'for your information only.  We do not take any responsibility for that information, nor endorse its accuracy or completeness.  ',
                    'We do not guarantee that the information, or the provision of the hyperlinks to you, does not infringe third party rights.  If our website contains a link to ' +
                    'an external website, we do not endorse, recommend, approve, guarantee or introduce any third parties or the services and/or products that those third parties ' +
                    'may offer.  We accept no responsibility for them or any of the content available, or for any loss or damage that may arise from your use of them.',
                    'You may provide a link to the home page of our website at, on any website you operate, as long as you do not suggest any form of association, approval or ' +
                    'endorsement on our part without our express prior permission and you promptly delete the link at our request.',
                    'Except as set out in this clause, you may not link to our website.'
                ]
            },
            {
                'title': "No financial services activities or advice ",
                "txtList": [
                    'The information and any materials contained in this website should not be considered as an offer or solicitation to buy or sell financial instruments, provide ' +
                    'financial advice, create a trading platform, facilitate or take deposits or provide any other financial services of any kind in any jurisdiction.',
                    'The information contained on this website is not intended to provide and should not be construed as advice of any kind.  You should obtain appropriate ' +
                    'professional advice when necessary. It does not take into account your objectives, financial situation or needs. '
                ]
            },
            {
                'title': "Liability",
                "txtList": [
                    'While we will use reasonable care and skill in operating our website, we cannot promise that our website will always be available, ' +
                    'meet your requirements or completely free of faults, errors or compromise from cybersecurity events. ',
                    'To the maximum extent permitted by law, except as expressly set out in these terms of use, we exclude:',
                    '<ul>' +
                    '<li>all conditions, representations, warranties and statutory guarantees, whether express or implied, in relation to our website; and</li>' +
                    '<li>any liability, whether in contract, tort (including negligence), or otherwise, for any indirect or consequential loss, ' +
                    'damage or expense incurred by you or any other user in connection with our website.</li>' +
                    '</ul>',
                    'To the extent we are unable by law to exclude any implied condition, representation, warranty or statutory guarantee in relation to the provision of ' +
                    'goods or services through our website, we limit our liability for a breach to the re-supply of those goods or services, or payment for such re-supply.  ' +
                    'This is without limitation to any other exclusions or restrictions of our or others’ liability in connection with this website.'
                ]
            },
            {
                'title': "Privacy",
                "txtList": [
                    'We will manage any personal information that we collect through our website in accordance with our <a class="privacy"> Privacy Policy</a>, which you can access here. '
                ]
            },
            {
                'title': "Governing law",
                "txtList": [
                    'These terms of use are governed by the laws in force in Hong Kong and are subject to the exclusive jurisdiction of the courts in that place.'
                ]
            },
            {
                'title': "Questions?",
                "txtList": [
                    'Please contact us <a href="mailto:contact@irisnet.org" >contact@irisnet.org </a> if you have any questions about our website.'
                ]
            },
        ]
    },
    "qr":{
        "title":" Scan QR code",
        "txt":" to follow our Subscriptions"
    },
    // "community":{
    //     "title":"Community",
    //     "coming":"Coming soon"
    //
    // },
    "contactList":[
        {"infotitle":"IRISnet is named after Greek goddess Iris, said to be the "},
        {"infotitle":"personification of the rainbow and the faithful messenger "},
        {"infotitle":"between heaven and humanity"}
    ],
    "appcontact": {
        "appimg": [
            {
                "src": "telegran.png",
                "src_selected": "telegran_selected.png",
                "txt": "Telegram",
                "href": "https://t.me/irisnetworkcn"
            },
            {
                "src": "twitter.png",
                "src_selected": "twitter_selected.png",
                "txt": "Twitter",
                "href": "https://twitter.com/irisnetwork"
            },

            {
                "src": "github.png",
                "src_selected": "github_selected.png",
                "txt": "Github",
                "href": "https://github.com/irisnet"
            },
            {
                "src": "mail.png",
                "src_selected": "mail_selected.png",
                "txt": "Email",
                "href": "mailto:contact@irisnet.org"
            }],
        "appimg1":[{
            "src": "bluemedium.png",
            "src_selected": "redmedium-selected.png",
            "txt": "Medium",
            "href": "https://medium.com/irisnet-blog"
        },
            {
                "src": "riot.png",
                "src_selected": "riot_selected.png",
                "txt": "Riot",
                "href": "https://riot.im/app/#/room/!bmimZgJrUWSmxqQEmG:matrix.org"
            },
            {
                "src": "wechat.png",
                "src_selected": "wechat_selected.png",
                "txt": "Wechat"
            },
            {
                "src": "weibo.png",
                "src_selected": "weibo_selected.png",
                "txt": "Weibo",
                "href": "https://weibo.com/u/6455513027"
            }],

    },
    "submit":{
        'Subscribe': 'Subscribe',
        "success": "Success"
    },
    "errEmail":{
        "err":"Please enter a valid email address"
    },
    "newsLetter":{
        "letter":"Newsletter"
    },
    "placehooder":{
        "placehooder": "Please enter your email address"
    },
    "logo": [
        {
            "src": '../../../public/mainnet_en.png',
            "active": true
        },
        {
            "src": '../../../public/bug_bounty_en.gif',
            "active": false
        },
        {
            "src": '../../../public/irisnet_en.png',
            "active": false
        }

    ],
    "mobileLogo": [
        {
            "src": '../../../public/mobile_main_en.png',
            "active": true
        },
        {
            "src": '../../../public/mobile_bug_bounty_en.png',
            "active": false
        },
        {
            "src": '../../../public/mobile_irisnet_en.png',
            "active": false
        }
    ],
    // "announcements":[
    //     {
    //         src:'../../public/announcements_betanet.png',
    //         timestamp:"Feb 1, 2019",
    //         imgtext:'Betanet Work Plan',
    //         href: 'https://github.com/irisnet/iris-foundation/blob/master/betanet_work_plan.md'
    //     },
    //     {
    //         src:'../../public/announcements_mainnet.png',
    //         timestamp:"Jan 16, 2019",
    //         imgtext:'IRIS Foundation Announces Plan for Betanet',
    //         href:'https://github.com/irisnet/iris-foundation/blob/master/iris-betanet-plan.md'
    //     },
    //     {
    //         src:'../../public/announcements_irisnet.png',
    //         timestamp:"Jan 16, 2019",
    //         imgtext:'Expectations for IRIS Betanet',
    //         href:'https://github.com/irisnet/iris-foundation/blob/master/iris-betanet-expectations.md'
    //     }
    // ]
}
