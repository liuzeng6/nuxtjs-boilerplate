<template>
    <div ref="content">
        <div class="warp-type case-type clear">
            <p class="museo-light ">SEE OUR WORK</p>
            <div class="warp-type-list" id="filters">
                <a href="#" class="active" @click.prevent="onChange(-1)">All</a>
                <a href="#" v-for="item, index in categoryList" @click="onChange(index)">{{ item
                    }}</a>
            </div>
        </div>
        <CaseList :maximum="10" :category="cur"></CaseList>
    </div>
</template>
<script setup>
import useScroll from "@/hooks/useScroll";
import { ref, onMounted } from "vue";
import CaseList from "@/components/caseList.vue";
import axios from "axios";
import { baseURL } from "~/config";
let content = ref();
const cur = ref(-1);
const categoryList = ref([]);
const onChange = (index) => {
    if (cur.value == index) {
        return false
    } else {
        cur.value = index;
    }
}
useScroll(content);

onMounted(async () => {
    const { data } = await axios(baseURL + "/category");
    categoryList.value = data;
    nextTick(() => {
        let oAs = document.querySelectorAll("#filters a");
        oAs.forEach(el => {
            // oAs.forEach(el=>{el.el.classList.remove("active")})
            el.onclick = () => {
                oAs.forEach(item => { item.classList.remove("active") })
                el.classList.add("active");
                // console.log(el);
            }
        })
    })

})
</script>
<style lang="less" scoped>
.warp-type {
    box-sizing: border-box;
    padding: 0px 35px;
    margin-top: 150px;
    min-height: 50px;
    position: relative;
    margin-bottom: 25px;
    display: flex;

    .museo-light {
        // flex: 1;
        color: #5f6061;
        margin: 0;
        margin-right: 20px;
        padding: 0;
        font-size: 18px;
        // line-height: 50px;
    }

    .warp-type-list {
        flex: 1;
        flex-wrap: wrap;
        display: flex;

        a {
            display: block;
            margin-right: 10rpx;
            font-family: "PingFang SC", "HanHei SC", "Helvetica Neue", Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
            text-decoration: none;
            color: #888889;
            font-size: 14px;
            margin-right: 15px;

        }

        a.active {
            text-decoration: underline;
            color: #000;
            font-size: 16px;
        }

        a:hover {
            text-decoration: underline;
        }
    }
}

@media screen and (max-width: 750px) {
    .warp-type {
        margin-top: 100px;
        min-height: 30px;
        display: block;
        padding: 0px 15px;

        .museo-light {
            font-size: 14px;
        }

        .warp-type-list {
            display: flex;

            a {
                line-height: 30px;
                font-size: 12px;
            }

        }
    }

}
</style>