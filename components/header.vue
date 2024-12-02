<template>
    <div class="header clear on-top">
        <div class="header-in clear">
            <a href="/" class="logo">
                <img class="img1" :src="logoImg" alt="巴顿品牌设计logo">
            </a>
            <ul class="mheader-nav right">
                <li class="on nav0">
                    <a href="/">Home<span>首页</span></a>
                </li>
                <li class=" nav1">
                    <a href="/case/">Work<span></span>案例</a>
                </li>
                <li class=" nav3">
                    <a href="/about/">Profile<span></span>关于</a>
                </li>
                <li class=" nav5">
                    <a href="/contact/">Contact<span></span>联系</a>
                </li>
            </ul>
            <div class="meun-off" @click="show">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="nav" v-show="open">
                <div class="close" @click="hide()">
                    ×
                </div>
                <ul>
                    <li @click="hide()">
                        <a href="/">Home<span></span></a>
                    </li>
                    <li @click="hide()">
                        <a href="/case/">Case<span></span></a>
                    </li>
                    <li @click="hide()">
                        <a href="/about/">About<span></span></a>
                    </li>
                    <li @click="hide()">
                        <a href="/contact/">Contact<span></span></a>
                    </li>
                </ul>
                <!-- <p class="nav-tel">TEL：0571-87203952&nbsp;&nbsp;|&nbsp;&nbsp;©Paton Design&nbsp;&nbsp;2008-2021 </p>
                <a href="javascript:void(0)" class="close"><img src=""></a> -->
            </div>
        </div>
    </div>
</template>
<script setup>
import logoImg from "@/assets/index/logo.png";
import { ref } from "vue";
const open = ref(false);
const show = () => {
    open.value = true;
}
const hide = () => {
    open.value = false;
}
</script>
<style lang="less" scoped>
.header-small {
    height: 40px !important;
    background: #fff;
    transition: all .3s ease;
    box-shadow: rgba(0, 0, 0, .1) 0 1px 5px;

    .header-in {
        margin: 5px auto !important;
    }

    .logo {
        overflow: hidden;
        height: 19px !important;

        img {
            position: absolute;
            margin-top: 0px !important;
            height: 30px !important;
        }
    }
}

.header {
    height: 100px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    transition: all .3s ease;

    .header-in {
        width: 95%;
        margin: 35px auto;
        height: 30px;
        transition: all .3s ease
    }

    .clear {
        zoom: 1;
    }

    .mheader-nav {
        float: right;
        display: flex;

        li {
            list-style: none;
            margin-right: 50px;
            font-size: 15px;
        }
    }

    .meun-off {
        display: none;

        span {
            font-family: "PingFang SC", "HanHei SC", "Helvetica Neue", Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
            line-height: 2em;
            font-size: 14px;
            color: #5f6061;
            width: 23px;
            height: 2px;
            background-color: #000;
            display: block;
            margin: 6px auto;
            transition: all .3s ease-in-out;
        }
    }

    .nav {
        color: #000;
        margin: 0;
        padding: 0;
        line-height: 2em;
        font-size: 14px;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #fff;
        display: block;

        .close {
            position: absolute;
            right: 15px;
            top: 5px;
            // font-weight: 600;
            font-size: 50px;
            line-height: 50px;
            height: 50px;
        }

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: inherit;

            li {
                a {
                    font-weight: 600;
                    list-style: none;
                    display: block;
                    text-transform: uppercase;
                    font-size: 32px;
                    line-height: 60px;
                }
            }
        }
    }

}


.header {
    // height: 100px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    transition: all .3s ease;

    .header-in {
        width: 95%;
        margin: 35px auto;
        height: 30px;
        transition: all .3s ease
    }

    .clear {
        zoom: 1;
    }

    .mheader-nav {
        display: flex;

        li {
            list-style: none;
            margin-right: 50px;
            font-size: 15px;
        }
    }
    .logo {
        overflow: hidden;
        height: 19px !important;
        // margin-top: 3px !important;

        img {
            margin-top: -20px;
            height: 60px;
            // height: inherit;
        }
    }
    .right {
        float: right;
    }
}





@media screen and (max-width: 750px) {
    .header {
        // height: 100px;

        .header-in {
            // padding: 15px 0px;
            margin: 15px auto !important;
            // padding: 15px 0xp !important;
        }

        .clear {}

        .mheader-nav {
            display: none
        }

        .meun-off {
            float: right;
            display: block;
        }

        .right {}
    }

    .header-small {
        height: 60px !important;
        .header-in {
            // padding: 15px 0px !important;
            // margin: 15px auto !important;
        }

        .logo {

            img {
            }
        }
    }
}
</style>