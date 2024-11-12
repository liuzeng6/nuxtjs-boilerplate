<template>
    <div class="warp2">
        <ul class="case clear">
            <a :href="`/case/${index + 1}`" target="_blank" v-for="item, index in caseList" class="item">
                <li class="el">
                    <watermark :src="item.img"></watermark>
                    <!-- <img :src="item.img.url" :alt="item.name" class="lazy tran imgbig"> -->
                    <div class="case-summary" style="display: none;">
                        <img src="../assets/index/watermark.png" alt="" class="logo">
                        <div style="position: relative;width:100%;height: 100%">
                            <p class="p2">
                                <br>
                                <span class="syl">{{ item.name }}</span>
                            </p>
                        </div>
                    </div>
                </li>
            </a>
        </ul>
        <a href="/case/" v-if="showMore" class="case-more">
            MORE
            <i>&gt;</i>
        </a>
        <div v-else class="space">

        </div>

    </div>
</template>
<script setup>
// import logo from "../assets/index/logo_2.png";
import watermark from "./watermark.vue";
// import axios form "axios";
const props = defineProps({
    showMore: {
        default: false,
        type: Boolean
    },
    maximum: {
        default: 6,
        type: Number
    },
    category: {
        type: Number,
        default: 9999999
    }
});


const categoryList = ref([])
const caseList = ref([]);
let dataList = [];
import axios from "axios";
import { baseURL } from "~/config";

onMounted(async () => {
    let { data } = await axios(baseURL + "/case");
    let { data: categoryData } = await axios(baseURL + "/category");
    categoryList.value = categoryData;
    dataList = data;
    caseList.value = limit(dataList);
})

const limit = (arr) => {
    // if (props.maximum == 6) {
    // arr.push(...arr);
    // arr.push(...arr);
    // }
    return arr.slice(0, props.maximum);
}


watch(() => props.category, (index) => {

    if (index == -1) {
        caseList.value = dataList.slice(0, props.maximum);
        return false;
    };
    caseList.value = limit(dataList.filter(el => el.classify == categoryList.value[index]));
})
</script>
<style lang="less">
@media screen and (max-width: 750px) {
    .case {
        .item {
            width: 100% !important;
            margin: 10px 0px !important;
        }
    }

    .space {
        height: 35px !important;
    }

    .case-more {
        margin: 50px auto !important;
    }
}

.warp2 {
    color: #5f6061;
    padding: 0;
    font-family: "PingFang SC", "HanHei SC", "Helvetica Neue", Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
    line-height: 2em;
    font-size: 14px;
    width: 95%;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    background-color: #fff;


    .case {
        display: flex;
        flex-wrap: wrap;
        color: #5f6061;
        margin: 0;
        padding: 0;
        font-family: "PingFang SC", "HanHei SC", "Helvetica Neue", Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
        line-height: 2em;
        list-style: none;
        font-size: 14px;
        zoom: 1;

        .item {

            font-family: "PingFang SC", "HanHei SC", "Helvetica Neue", Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
            line-height: 2em;
            list-style: none;
            font-size: 14px;
            color: #5f6061;
            text-decoration: none;
            width: 33.333333%;
            float: left;
            position: relative;
            overflow: hidden;
            display: block;

            .el {
                color: #5f6061;
                margin: 0;
                padding: 0;
            }

            .imgbig {
                // width: 100%;
                // height: auto;
                border: 0;
                display: block !important;
                transition: all .3s ease;
                width: 100%;
                height: auto;
                transform: scale(1);
            }

            .el:hover .imgbig {

                transform: scale(1.1);
            }

            .el:hover .case-summary {
                display: block !important;

            }

            .case-summary {
                background-color: rgba(0, 0, 0, .5) !important;
                font-size: 14px;
                width: 90%;
                height: 90%;
                background: url(black.png) repeat;
                top: 0;
                left: 0;
                position: absolute;
                padding: 5%;
                display: none;
                opacity: 1;
                color: #fff;

                .logo {
                    width: 172px;
                    height: 118px;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                }

                .p1 {
                    position: absolute;
                    top: 0;
                    font-size: 18px;
                }

                .p2 {
                    position: absolute;
                    bottom: 0;

                    .syl {
                        font-size: 24px;
                    }

                    .desc {
                        font-size: 14px;
                    }
                }
            }
        }

    }

    .case-more {
        font-family: "PingFang SC", "HanHei SC", "Helvetica Neue", Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
        text-decoration: none;
        display: block;
        margin: 100px auto;
        color: #b9b9b9;
        height: 50px;
        transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
        border-radius: 0px;
        text-align: center;
        text-indent: 0px;
        line-height: 50px;
        font-size: 13px;
        border: none;
        position: relative;
        width: 231px;
        border: 1px solid #D9D9D9;
    }

    .space {
        height: 100px
    }

    .case-more:hover {
        transform: scale(1.1);
    }
}
</style>