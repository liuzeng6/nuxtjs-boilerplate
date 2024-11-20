<template>
    <div class="page">
        <div class="swiper-box">
            <div class="btn pre" @click="pre()">&lt;</div>
            <div class="btn next" @click="next()">&gt;</div>
            <Swiper
                class="swiper"
                @swiper="onSwiper"
                :pagination="{ el: '.swiper-pagination', clickable: true }"
                :modules="[
                    SwiperAutoplay,
                    SwiperEffectCreative,
                    SwiperPagination,
                ]"
                :slides-per-view="1"
                :loop="true"
                :effect="'creative'"
                :autoplay="{
                    delay: 7000,
                    disableOnInteraction: false,
                }"
                :creative-effect="{
                    prev: {
                        shadow: false,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }"
            >
                <SwiperSlide
                    v-for="(slide, index) in slides"
                    :key="slide"
                    class="banner"
                >
                    <NuxtLink :href="slide.link">
                        <img :src="slide.image" alt="" width="100%" />
                    </NuxtLink>
                </SwiperSlide>
                <div class="swiper-pagination" slot="pagination"></div>
            </Swiper>
        </div>
        <div class="warp1" ref="content">
            <div class="pflex">
                <h3 class="pingfang">
                    <a href="/about" style="color: #2c2c2c"
                        >御全=全球临展X企业展厅X企业活动X商业活动X舞台物美服务商</a
                    >
                </h3>
                <div class="warp1-content">
                    <a href="/about" rel="nofollow">
                        <p>
                            14年专注临展，活动，展厅道具展柜设计与施工这一件事，致力于成为行业高标准高要求的一家展览服务型公司
                        </p>
                        <p>
                            我们秉持“精准定制”战略，深入剖析客户品牌、目标受众，打造个性化展览方案，让每一场展览都成为品牌独特的发声器。
                        </p>
                        <p>
                            我们还是效率和品质的守护者。一站式的服务流程，如同精密的齿轮，从策划、搭建到撤展，每一个环节都紧密咬合，有运转。确保为您呈现出最完美的展览空间。'Design、Pentawards、香港HKDA环球设计等国际权威大奖...
                        </p>
                    </a>
                </div>
            </div>
            <div class="mflex">
                <div class="flex">
                    <a class="mn font20" href="javascript:;">OUR WORK</a>
                    <p class="mn font20">DO one thing BEST.</p>
                </div>
            </div>
        </div>

        <CaseList :showMore="true" class="case-list"></CaseList>
        <div class="bk02">
            <img
                src="https://shyq-expo.fss-my.vhostgo.com/images/bk_02f.png"
                alt=""
            />
        </div>
        <div class="box">
            <div class="titsh s1"><b>合作流程</b><i class="hr1 s1"></i></div>
            <ul class="lihzlc">
                <li>
                    <i
                        ><img
                            src="https://shyq-expo.fss-my.vhostgo.com/images/ni_l01.png"
                            alt=""
                    /></i>
                    <b>明确需求</b>
                    <p>电话沟通 明确需求</p>
                </li>
                <li>
                    <i
                        ><img
                            src="https://shyq-expo.fss-my.vhostgo.com/images/ni_l02.png"
                            alt=""
                    /></i>
                    <b>方案设计</b>
                    <p>方案策划 达成共识</p>
                </li>
                <li>
                    <i
                        ><img
                            src="https://shyq-expo.fss-my.vhostgo.com/images/ni_l03.png"
                            alt=""
                    /></i>
                    <b>确认方案</b>
                    <p>核算报价 签订合同</p>
                </li>
                <li>
                    <i
                        ><img
                            src="https://shyq-expo.fss-my.vhostgo.com/images/ni_l05.png"
                            alt=""
                    /></i>
                    <b>报馆审批</b>
                    <p>支付首款 跟进报馆</p>
                </li>
                <li>
                    <i
                        ><img
                            src="https://shyq-expo.fss-my.vhostgo.com/images/ni_l04.png"
                            alt=""
                    /></i>
                    <b>合同预付</b>
                    <p>出施工图 确认定稿</p>
                </li>
                <li>
                    <i
                        ><img
                            src="https://shyq-expo.fss-my.vhostgo.com/images/ni_l06.png"
                            alt=""
                    /></i>
                    <b>施工制作</b>
                    <p>材料放样 物料制作</p>
                </li>
                <li>
                    <i
                        ><img
                            src="https://shyq-expo.fss-my.vhostgo.com/images/ni_l07.png"
                            alt=""
                    /></i>
                    <b>现场搭建</b>
                    <p>现场安装 验收尾款</p>
                </li>
                <li>
                    <i
                        ><img
                            src="https://shyq-expo.fss-my.vhostgo.com/images/ni_l08.png"
                            alt=""
                    /></i>
                    <b>现场服务</b>
                    <p>质保维护 更新替换</p>
                </li>
            </ul>
        </div>
        <div class="warp5">
            <div class="title">懂美学，更懂生意</div>
            <a class="more" href="/case/">Paton brand strategy design </a>
        </div>

        <div class="boxpat">
            <div class="titsd">
                <em>御全</em>与他们一起做有追求的事
                <div class="mark-line"></div>
            </div>
            <div class="pat">
                <div class="list">
                    <div class="item" v-for="(item, index) in 30">
                        <img
                            :src="`${baseURL}/upload/logo/${item
                                .toString()
                                .padStart(2, '0')}.jpg`"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

// import bannerList from "@/data/banner"
// import about_img1 from "../assets/index/about3-img-top.jpg";
// import about_img2 from "../assets/index/1722318097_1502.jpg";
import CaseList from "@/components/caseList.vue";

import useScroll from "@/hooks/useScroll";
import axios from "axios";
import { baseURL } from "~/config";

const content = ref(null);
useScroll(content);

let slides = ref([]);
onMounted(async () => {
    let { data } = await axios(baseURL + "/banner");
    // console.log(data);
    slides.value = data;
});
let useSwiper = null;
const onSwiper = (swiper) => {
    useSwiper = swiper;
};
const pre = () => {
    // clg
    useSwiper.slidePrev();
};
const next = () => {
    console.log("下一页");
    useSwiper.slideNext();
};
</script>
<style scoped lang="less">
.page {
    background-color: #fff;
}

.swiper-box {
    position: relative;

    .btn {
        cursor: pointer;
        width: 100px;
        height: 50%;
        position: absolute;
        top: 25%;
        // background-color: red;
        z-index: 9999;
        font-size: 40px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pre {
        left: 0px;
    }

    .next {
        right: 0px;
    }

    position: fixed;
    z-index: -1;
    top: 0px;
    left: 0px;
    height: calc((100vw / 256) * 97);
    width: 100vw;
}

.swiper {
    --swiper-theme-color: #ffff00;
}

.banner {
    width: 100%;

    img {
        width: 100%;
    }
}

.warp1 {
    .pflex {
        color: #5f6061;
        margin: 0;
        margin-top: calc((100vw / 256) * 97);
        font-family: "PingFang SC", "HanHei SC", "Helvetica Neue",
            Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
        line-height: 2em;
        font-size: 14px;
        position: relative;
        z-index: 9;
        background-color: #fff;
        padding: 55px 0 80px;
        padding-left: calc((100% - 1080px) / 2);
        padding-right: 2.5%;

        h3 {
            font-size: 36px;
            font-weight: 500;
            color: #5f6061;
            margin-bottom: 48px;
        }

        .warp1-content {
            color: #5f6061;
            margin: 0;
            padding: 0;
            font-family: "PingFang SC", "HanHei SC", "Helvetica Neue",
                Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial",
                sans-serif;
            line-height: 2em;
            font-size: 14px;

            a {
                p {
                    font-size: 14px;
                }

                letter-spacing: -1px;
                color: #9fa0a0;
                transition: all 0.3s ease;
                font-family: "Helvetica Neue", Helvetica, Arial,
                    "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC",
                    "WenQuanYi Micro Hei", sans-serif;
            }

            a:hover {
                color: #000;
            }
        }
    }

    .mflex {
        display: none;
    }
}

.bk02 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "微软雅黑", "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
    font-size: 20px;
    color: #666666;
    user-select: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 412px;
    background: url(http://www.shyq-expo.com/theme/cqxk/images/bk_02.png)
        #60c0c6 no-repeat center center / cover;
    img {
        width: 60%;
    }
}
.box {
    .titsh {
        font-family: "微软雅黑", "Helvetica Neue", Helvetica, "PingFang SC",
            "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
        font-size: 20px;
        color: #666666;
        user-select: none;
        margin: 0;
        text-align: center;
        padding: 4em 0 2em;
        b {
            display: block;
            color: #333;
            font-size: 36px;
            font-weight: normal;
        }
    }
    .lihzlc {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        // padding: 0px 50px;
        max-width: 1200px;
        margin: 0px auto;
        li:not(:nth-last-child(1)):after {
            content: "";
            display: block;
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-left: 15px solid #e8e8e8;
            border-bottom: 10px solid transparent;
            position: absolute;
            top: 25%;
            transform: translate(0, -25%);
            right: -7.5px;
        }
        li:nth-last-child(5)::after {
            display: none;
        }
        li {
            position: relative;
            width: 25%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 50px;
            i {
                box-shadow: 0 4px 13px 0 rgba(0, 0, 0, 0.1);
                border-radius: 50%;
                background-color: #fff;
                display: block;
                width: 90px;
                height: 90px;
                margin: 0 auto 12px;
            }
            b {
                font-family: "微软雅黑", "Helvetica Neue", Helvetica,
                    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial,
                    sans-serif;
                user-select: none;
                list-style: none;
                text-align: center;
                margin: 0;
                padding: 0;
                font-size: 1.2em;
                color: #333;
                display: block;
                font-weight: normal;
                margin-bottom: 0.3em;
            }
            p {
                font-family: "微软雅黑", "Helvetica Neue", Helvetica,
                    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial,
                    sans-serif;
                user-select: none;
                list-style: none;
                text-align: center;
                margin: 0;
                padding: 0;
                font-size: 0.8em;
                color: #999;
            }
        }
    }
}
.boxpat {
    font-family: "微软雅黑", "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
    font-size: 20px;
    color: #666666;
    user-select: none;
    width: 100%;
    background-color: #f6f6f6;
    // max-width: 1200px;
    padding: 0 1em;
    position: relative;
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    text-align: center;
    padding-bottom: 70px;
    .titsd {
        font-family: "微软雅黑", "Helvetica Neue", Helvetica, "PingFang SC",
            "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
        color: #666666;
        user-select: none;
        text-align: center;
        margin: 0;
        font-size: 28px;
        padding: 60px 0 40px;
        letter-spacing: 4px;
        padding-left: 4px;
        em {
            font-family: "微软雅黑", "Helvetica Neue", Helvetica, "PingFang SC",
                "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
            user-select: none;
            text-align: center;
            font-size: 28px;
            letter-spacing: 4px;
            margin: 0;
            padding: 0;
            font-style: normal;
            color: #57bdc9;
        }
    }
    .pat {
        .list {
            box-sizing: border-box;
            padding: 0px 100px;
            display: flex;
            flex-wrap: wrap;
            .item {
                margin-bottom: 10px;
                width: 20%;
                overflow: hidden;
                // width: 20px;
                img {
                    border-radius: 15px;
                    width: 90%;
                }
            }
        }
    }
}
.warp5 {
    height: calc(100vh);
    // height: 800px;
    margin: 100px 0px 0px;
    // padding-top: 300px;
    position: relative;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed;
    width: 100%;
    background-image: url("../assets/index/1722234398_6949.gif");
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .title {
        margin: 0;
        padding: 0;
        font-family: "PingFang SC", "HanHei SC", "Helvetica Neue",
            Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
        line-height: 1em;
        color: #fff;
        font-size: 5vw !important;
    }

    .more {
        font-family: "PingFang SC", "HanHei SC", "Helvetica Neue",
            Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
        text-decoration: none;
        display: block;
        margin: 0 auto;
        position: absolute;
        left: 50%;
        width: 15.3vw;
        height: 3.516vw;
        line-height: 3.516vw;
        border: 1px solid #fff;
        bottom: 20.7%;
        font-size: 0.7vw;
        transition: all 0.3s ease;
        transform: translateX(-50%);
        text-align: center;
        text-indent: 0px;
        min-width: 120px;
        overflow: hidden;
        background: #fff;
        color: #444;
    }
}

.about3-img {
    img {
        width: 100%;
        height: auto;
    }

    .logo-box {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    margin-bottom: 80px;
}

@media screen and (max-width: 750px) {
    .swiper-box {
        display: none !important;
    }

    .warp1 {
        .pflex {
            display: none !important;
        }

        .mflex {
            margin-top: 80px;
            display: block;

            .flex {
                display: flex;

                .mn {
                    font-size: 10px;
                    margin-left: 20px;
                    text-transform: uppercase;
                    color: #414141;
                    flex: 1;
                }
            }
        }
    }

    .case-list {
    }

    .bk02 {
        // display: flex;
        // align-items: center;
        // justify-content: center;
        // font-family: "微软雅黑", "Helvetica Neue", Helvetica, "PingFang SC",
        //     "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
        // font-size: 20px;
        // color: #666666;
        // user-select: none;
        // margin: 0;
        // padding: 0;
        // overflow: hidden;
        // height: 412px;
        // background: url(http://www.shyq-expo.com/theme/cqxk/images/bk_02.png)
        //     #60c0c6 no-repeat center center / cover;
        img {
            width: 80%;
        }
    }
    .box {
        .titsh {
            // font-family: "微软雅黑", "Helvetica Neue", Helvetica, "PingFang SC",
            //     "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
            // font-size: 20px;
            // color: #666666;
            // user-select: none;
            // margin: 0;
            // text-align: center;
            // padding: 4em 0 2em;
            b {
                // display: block;
                // color: #333;
                font-size: 30px;
                // font-weight: normal;
            }
        }
        .lihzlc {
            // display: flex;
            // flex-wrap: wrap;
            // box-sizing: border-box;
            // // padding: 0px 50px;
            // max-width: 1200px;
            // margin: 0px auto;
            // li:not(:nth-last-child(1)):after {
            //     content: "";
            //     display: block;
            //     width: 0;
            //     height: 0;
            //     border-top: 10px solid transparent;
            //     border-left: 15px solid #e8e8e8;
            //     border-bottom: 10px solid transparent;
            //     position: absolute;
            //     top: 25%;
            //     transform: translate(0, -25%);
            //     right: -7.5px;
            // }
            // li:nth-last-child(5)::after {
            //     display: none;
            // }
            li {
                width: 50%;
                // position: relative;
                // display: flex;
                // flex-direction: column;
                // align-items: center;
                // margin-bottom: 50px;
                // i {
                //     box-shadow: 0 4px 13px 0 rgba(0, 0, 0, 0.1);
                //     border-radius: 50%;
                //     background-color: #fff;
                //     display: block;
                //     width: 90px;
                //     height: 90px;
                //     margin: 0 auto 12px;
                // }
                // b {
                //     font-family: "微软雅黑", "Helvetica Neue", Helvetica,
                //         "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
                //         Arial, sans-serif;
                //     user-select: none;
                //     list-style: none;
                //     text-align: center;
                //     margin: 0;
                //     padding: 0;
                //     font-size: 1.2em;
                //     color: #333;
                //     display: block;
                //     font-weight: normal;
                //     margin-bottom: 0.3em;
                // }
                // p {
                //     font-family: "微软雅黑", "Helvetica Neue", Helvetica,
                //         "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
                //         Arial, sans-serif;
                //     user-select: none;
                //     list-style: none;
                //     text-align: center;
                //     margin: 0;
                //     padding: 0;
                //     font-size: 0.8em;
                //     color: #999;
                // }
            }
        }
    }

    .boxpat {
        font-family: "微软雅黑", "Helvetica Neue", Helvetica, "PingFang SC",
            "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
        font-size: 20px;
        color: #666666;
        user-select: none;
        width: 100%;
        background-color: #f6f6f6;
        // max-width: 1200px;
        padding: 0 1em;
        position: relative;
        margin: 0 auto;
        -webkit-box-sizing: border-box;
        text-align: center;
        padding-bottom: 70px;
        .titsd {
            font-family: "微软雅黑", "Helvetica Neue", Helvetica, "PingFang SC",
                "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
            color: #666666;
            user-select: none;
            text-align: center;
            margin: 0;
            font-size: 28px;
            padding: 60px 0 40px;
            letter-spacing: 4px;
            padding-left: 4px;
            em {
                font-family: "微软雅黑", "Helvetica Neue", Helvetica,
                    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial,
                    sans-serif;
                user-select: none;
                text-align: center;
                font-size: 28px;
                letter-spacing: 4px;
                margin: 0;
                padding: 0;
                font-style: normal;
                color: #57bdc9;
            }
        }
        .pat {
            .list {
                box-sizing: border-box;
                padding: 0px !important;
                display: flex;
                flex-wrap: wrap;
                .item {
                    margin-bottom: 10px;
                    width: 33% !important;
                    overflow: hidden;
                    // width: 20px;
                    img {
                        border-radius: 15px;
                        width: 90%;
                    }
                }
            }
        }
    }

    .warp5 {
        height: 200px;
        margin: 0px;

        .title {
        }

        .more {
            font-family: "PingFang SC", "HanHei SC", "Helvetica Neue",
                Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial",
                sans-serif;
            text-decoration: none;
            display: block;
            margin: 0 auto;
            position: absolute;
            // left: 50%;
            width: 15.3vw;
            height: 5.516vw;
            line-height: 5.516vw;
            border: 1px solid #fff;
            bottom: 20.7%;
            font-size: 10px;
            min-width: 120px;
        }
    }
}
</style>
