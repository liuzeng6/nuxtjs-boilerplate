<template>
    <div class="page">
        <div class="swiper-box">
            <div class="btn pre" @click="pre()">&lt;</div>
            <div class="btn next" @click="next()">&gt;</div>
            <Swiper class="swiper" @swiper="onSwiper" :pagination="{ el: '.swiper-pagination', clickable: true }"
                :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]" :slides-per-view="1" :loop="true"
                :effect="'creative'" :autoplay="{
                    delay: 7000,
                    disableOnInteraction: false,
                }" :creative-effect="{
                    prev: {
                        shadow: false,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }">
                <SwiperSlide v-for="slide,index in slides" :key="slide" class="banner">
                    <NuxtLink :href="slide.link">
                        <img :src="slide.image" alt="" width="100%">
                    </NuxtLink>
                </SwiperSlide>
                <div class="swiper-pagination" slot="pagination"></div>
            </Swiper>
        </div>
        <div class="warp1" ref="content">
            <div class="pflex">
                <h3 class="pingfang"><a href="/about" style="color:#2c2c2c;">巴顿 = 品牌战略咨询 X 产品战略 X 品牌设计公司</a></h3>
                <div class="warp1-content">
                    <a href="/about" rel="nofollow">
                        <p>15年专注品牌咨询设计这一件事，致力于为高标准要求品牌策略及形象的客户提供品牌战略咨询、品牌设计、产品战略、电商战略、门店空间战略、营销推广策略等服务。</p>
                        <p>我们拥有新一代策略美学设计团队，更懂新人群、新消费、新零售！我们不断学习、总结、改进，十余年的成长，让我们学会如何更好地协作。</p>
                        <p>由业内知名总监合力智建，众多作品荣获德国红点奖、IF、意大利A'Design、Pentawards、香港HKDA环球设计等国际权威大奖...</p>
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
        <div class="warp5">
            <div class="title">懂美学，更懂生意</div>
            <a class="more" href="/case/">Paton brand strategy design </a>
        </div>

        <div class="about3-img">
            <img :src="about_img1" alt="">
            <div class="logo-box">
                <img :src="about_img2" alt="">
            </div>
        </div>
    </div>



</template>
<script setup>
import { ref, onMounted } from "vue";

// import bannerList from "@/data/banner"
import about_img1 from "../assets/index/about3-img-top.jpg";
import about_img2 from "../assets/index/1722318097_1502.jpg";
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
})
let useSwiper = null;
const onSwiper = (swiper) => {
    useSwiper = swiper;
}
const pre = () => {
    // clg
    useSwiper.slidePrev();
}
const next = () => {
    console.log("下一页");
    useSwiper.slideNext();
}
</script>
<style scoped lang="less">
.page {
    background-color: #fff
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
    --swiper-theme-color: #FFFF00;
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
        font-family: "PingFang SC", "HanHei SC", "Helvetica Neue", Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
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
            font-family: "PingFang SC", "HanHei SC", "Helvetica Neue", Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
            line-height: 2em;
            font-size: 14px;

            a {
                p {
                    font-size: 14px;
                }

                letter-spacing: -1px;
                color: #9fa0a0;
                transition: all .3s ease;
                font-family: "Helvetica Neue",
                Helvetica,
                Arial,
                "Microsoft Yahei",
                "Hiragino Sans GB",
                "Heiti SC",
                "WenQuanYi Micro Hei",
                sans-serif;
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

.warp5 {
    height: calc(100vh);
    // height: 800px;
    margin: 100px 0px;
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
    background-image: url('../assets/index/1722234398_6949.gif');
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .title {
        margin: 0;
        padding: 0;
        font-family: "PingFang SC", "HanHei SC", "Helvetica Neue", Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
        line-height: 1em;
        color: #fff;
        font-size: 5vw !important;
    }

    .more {
        font-family: "PingFang SC", "HanHei SC", "Helvetica Neue", Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
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
                    flex: 1
                }
            }
        }
    }

    .case-list {}

    .warp5 {
        height: 200px;
        margin: 0px;

        .title {}

        .more {
            font-family: "PingFang SC", "HanHei SC", "Helvetica Neue", Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
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