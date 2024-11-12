<template>
    <div ref="content" class="page">
        <div class="title">{{ pageData?.name }}</div>
        <div class="items">
            <div class="item" v-for="item in pageData?.images">
                <img :src="item.url" alt="">
            </div>
            <div class="desc" v-if="pageData?.desc">
                {{ pageData.desc }}
            </div>
        </div>
        <div class="ending">
            <span>御全展览成立至今,专业从事展览工作有超过10年+的经验,提供全面的各种以展览服务给客户。</span><br>
            <span>联系电话：18201718661/柴小姐/13167294134 /胡小姐</span>
        </div>
        <ul class="more">
            <a :href="`/case/${index}`" class="item" v-for=" item, index in dataList.slice(0, 8)">
                <li>
                    {{ item.name }}
                </li>
            </a>
        </ul>
    </div>
</template>

<script setup>
import useScroll from "@/hooks/useScroll";
import axios from "axios";

const dataList = ref([]);

import { ref } from "vue";
import { baseURL } from "~/config";
const route = useRoute();
const pageData = ref({
    name: "",
    images: []
});
const id = route.params.id;
onMounted(async () => {
    let { data } = await axios(baseURL + "/case");
    // console.log(data);
    dataList.value = data;
    pageData.value = data[id - 1];
    
    // console.log(data.value);
})
//     return dataList[id - 1];
// }
const content = ref(null);
useScroll(content);

</script>

<style lang="less" scoped>
.page {
    width: 80%;
    margin: 0px auto;
    margin-top: 100px;

    .title {
        box-sizing: border-box;
        padding: 40px 0px;
        font-size: 24px;
        color: #232323;
        border-bottom: 1px solid #e5e3df;
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 50px 0px;

        .item {
            width: 100%;

            img {
                width: 100%;
                height: 100%
            }
        }

        .desc {
            margin-top: 15px;
            line-height: 22px;
            color: #8c8c8c;
            font-size: 12px;
        }
    }

    .ending {
        box-sizing: border-box;
        padding-bottom: 50px;
        border-bottom: 1px solid #e5e3df;

        span {
            font-size: 14px;
            color: #8c8c8c;
        }
    }

    .more {
        display: flex;
        box-sizing: border-box;
        padding: 20px 0px 50px;
        flex-wrap: wrap;

        .item {
            display: flex;
            align-items: center;
            width: calc(100% - 16px);
            overflow: hidden;
            font-size: 15px;
            line-height: 1em;
            color: #c4c4c4;
            width: 24%;
        }

        .item::before {
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #c4c4c4;
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
        }
    }
}

@media screen and (max-width: 750px) {
    .page {
        width: 95%;

        .more {
            .item {
                width: 100%;
            }
        }

        .title {
            padding: 0px 0px 20px 0px;
        }

        .items {
            margin: 20px 0px;
        }
    }
}
</style>