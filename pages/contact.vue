<template>
    <div class="contact" ref="content">
        <div class="contact-read clear">
            <div class="contact1-left">
                CONTACT US
            </div>
            <div class="contact1-right">
                <div class="contact1">
                    <p class="syl"><span
                            style="color: #000000;">很荣幸，有你的关注。御全展览创立于2011年，致力于为各类型展览会提供多样化的展览展示设计搭建。公司一贯秉承“创新、优质、高效”的服务原则，以严谨的工作态度，雄厚的设计实力，完善的客户服务，丰富的行业经验和不断的创新精神，为每个客户创造品牌更高价值。期待与您深度合作！</span>
                    </p>
                    <!-- <p class="msyhl">&nbsp;</p> -->
                </div>
                <div class="contact2">
                    <p><a name="dizhi"></a><span style="color: #000000; font-size: 22px;">御全展览，您身边的展览执行专家！</span><br>
                        <!-- <span style="color: #000000; font-size: 16px;">PATON BRAND CONSULTING AND DESIGN</span> -->
                    </p>
                    <p><a name="lianxi"></a><span style="color: #000000;">上海市松江区九新公路2888号2号楼2301<br></span><span
                            style="color: #000000;">电话：021-31029628<br></span><span
                            style="color: #000000;">邮箱：shyqzl@163.com<br><br>商务咨询:<br></span><span class="dinshicontact"
                            style="color: #000000;">13167294134 赵先生<br>13167294134
                            胡小姐</span></p>
                    <p>&nbsp;</p>
                    <!-- <p><span style="color: #000000;"><br></span></p> -->
                    <!-- <p>&nbsp;</p> -->
                    <p><img style="width: 300px;" :src="qr_code" alt="" width="undefined" height="undefined">
                    </p>
                    <p>&nbsp;</p>
                </div>
                <div class="contact3">
                    <p><strong style="color: #000000;">使命：</strong><span style="color: #000000;">帮助参展企业创造更高价值</span></p>
                    <p><strong style="color: #000000;">愿景：</strong><span style="color: #000000;">成为全球一流的临展设计公司</span>
                    </p>
                    <p><strong style="color: #000000;">价值观：</strong><span style="color: #000000;">长期主义，利他主义</span></p>
                    <p><strong style="color: #000000;">口号：</strong><span style="color: #000000;">御传典范，全示非凡</span></p>
                    <p><strong style="color: #000000;">经营理念：</strong><span style="color: #000000;">创建精美视觉、铸造精品展示</span></p>
                </div>
                <div>
                    <p><span style="color: #000000;">御全重视人才、有业内领先的人才发展机制 &nbsp;</span></p>
                </div>
                <div class="contact5">
                    <p><span style="color: #000000;"><strong>我们欢迎优秀的临展设计师、平面设计师、国内外资深销售、经营丰富的项目经理加入</strong></span></p>
                    <p><span style="color: #000000;">简历投递邮箱：shyqzl@163.com&nbsp;&nbsp;</span></p>
                    <p><span style="color: #000000;">每一份简历我们都会认真查阅</span></p>
                </div>
                <p><span id="pv-float-bar-container" style="display: none; top: 706px; left: 0px;"><span
                            class="pv-float-bar-button pv-float-bar-button-actual" style="display: none;"
                            title="查看原始(A)">&nbsp;</span><span class="pv-float-bar-button pv-float-bar-button-current"
                            title="查看当前(C)">&nbsp;</span></span></p>
            </div>
        </div>
    </div>
</template>
<script setup>

import qr_code from "@/assets/contact/qc_code.jpg"
import useScroll from "~/hooks/useScroll";
import { ref } from "vue";
let content = ref();
useScroll(content);

</script>
<style scoped lang="less">
@charset "utf-8";

.dinshicontact3 {
    /*display: flex;flex-flow: column-reverse;*/
}

html,
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: "PingFang SC", "HanHei SC", "Helvetica Neue", Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
    line-height: 2em
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block
}

html,
body {
    color: #5f6061
}

body {
    background: #fff
}

ul,
ol,
li {
    list-style: none
}

a {
    color: #5f6061;
    text-decoration: none
}

a:hover {
    text-decoration: none;
    -webkit-transition: background-color .2s ease;
    -moz-transition: background-color .2s ease;
    -ms-transition: background-color .2s ease;
    -o-transition: background-color .2s ease;
    transition: background-color .2s ease
}

img {
    border: 0;
}

b,
em,
i {
    font-style: normal
}

h1,
h2,
h3,
h4,
h5 {
    font-weight: normal
}

@-webkit-keyframes fadeleft {
    0% {
        -webkit-transform: translateY(40px);
        opacity: 0
    }

    100% {
        -webkit-transform: translateY(0px);
        opacity: 1
    }
}

@font-face {
    font-family: "museo-light";
    // src: url('museo-light.eot');
    // src: url('museo-light.eot?#iefix') format('embedded-opentype'), url('museo-light.woff') format('woff'), url('museo-light.ttf') format('truetype'), url('museo-light.svg') format('svg')
}

.museo-light {
    font-family: "museo-light" !important
}

::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    padding-right: 10px
}

::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #eee
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #000000
}

.imgbig {
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    display: block !important
}

.imgbig:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1)
}

.dinshicontact a {
    display: block;
}

.imgbigout {
    display: block;
    overflow: hidden
}

.clear:after,
.case-read-img p:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0
}

.clear,
.case-read-img p {
    zoom: 1
}

.case-read-img span {
    line-height: 1.35em;
}

.left {
    float: left
}

.right {
    float: right
}

.hide {
    display: none
}

.lazy {
    background: url("loading.gif") 50% 50% no-repeat
}

.tran {
    transition: all .3s ease
}

.back2top {
    display: block;
    width: 43px;
    height: 43px;
    background: url(back2top.png) no-repeat;
    position: fixed;
    right: 3.5%;
    bottom: 15%;
    opacity: .33;
    z-index: 99
}

.back2top:hover {
    opacity: 1
}

.pager {
    position: relative;
    width: 100%;
    color: #0f0b09;
    line-height: 30px;
    padding: 30px 0;
    font-size: 24px;
    text-align: center;
    height: 26px;
}

.pager a,
.pager span {
    text-decoration: none;
    height: 26px;
    line-height: 26px;
    display: inline-block;
    font-size: 13px;
    font-family: "Arial";
    color: #999;
    width: 26px;
    transition: all .2s ease-out;
    margin-right: 5px;
}

.pager a:after,
.pager span:after {
    display: block;
    margin: 2px auto;
    width: 0;
    height: 1px;
    background-color: #d4d4d4;
    content: "";
}

/* .pager .p1{font-size: 0;background: url(arrow2.png) center no-repeat;transform: rotate(180deg);}.pager .p1:first-child, .pager .p1:last-child{display: none;}.pager .p1:nth-child(2){transform: rotate(0);} */
.pager .p1,
.pager .p4 {
    display: none;
}

.pager .p2,
.pager .p3 {
    font-family: 'simsun';
}

.pager a:hover {
    color: #333;
    opacity: 1
}

.pager a:active {
    color: #333
}

.pager a.now {
    color: #333
}

.pager a:hover:after,
.pager .now:after {
    width: 10px;
}

.pager a.disabled {
    color: #0f0b09;
    display: none;
}

.current:first-child,
.pager .p1:last-child {
    display: none
}

.pager .p1:after {
    display: none
}

.header {
    height: 100px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    transition: all .3s ease
}

.header-small {
    height: 60px;
    background: #fff;
    -webkit-box-shadow: rgba(0, 0, 0, .1) 0 1px 5px;
    -moz-box-shadow: rgba(0, 0, 0, .1) 0 1px 5px;
    box-shadow: rgba(0, 0, 0, .1) 0 1px 5px;
    transition: all .3s ease
}

.header-in {
    width: 95%;
    margin: 35px auto;
    height: 30px;
    transition: all .3s ease
}

.header-in .logo img {
    transition: all .3s ease
}

.header-small .header-in {
    margin: 15px auto;
    transition: all .3s ease
}

.header-small .logo img {
    height: 22px;
    margin-top: 4px
}

.header .logo {
    float: left;
    margin-left: 10px
}

.header .meun-off {
    float: right;
    margin-right: 10px
}

.header .meun-off span {
    width: 23px;
    height: 2px;
    background-color: #000;
    display: block;
    margin: 6px auto;
    -webkit-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out
}

.header .meun-on #span2 {
    opacity: 0
}

.header .meun-on #span1 {
    -webkit-transform: translateY(8px) rotate(45deg);
    -ms-transform: translateY(8px) rotate(45deg);
    -o-transform: translateY(8px) rotate(45deg);
    transform: translateY(8px) rotate(45deg)
}

.header .meun-on #span3 {
    -webkit-transform: translateY(-8px) rotate(-45deg);
    -ms-transform: translateY(-8px) rotate(-45deg);
    -o-transform: translateY(-8px) rotate(-45deg);
    transform: translateY(-8px) rotate(-45deg)
}

.nav {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    display: none
}

.nav ul {
    margin: 0 auto;
    width: 50%;
    text-align: center;
    height: 500px;
    position: absolute;
    top: 50%;
    margin-top: -250px;
    left: 50%;
    margin-left: -25%
}

.nav ul li {
    -webkit-animation: DDInY .8s .3s ease both;
    -ms-animation: DDInY .8s .3s ease both;
    -moz-animation: DDInY .8s .3s ease both;
    animation: DDInY .8s .3s ease both
}

.nav ul a {
    display: block;
    height: 80px;
    overflow: hidden;
    margin: 10px 0
}

.nav ul span {
    display: block;
    font-size: 48px;
    line-height: 80px;
    text-transform: uppercase;
    color: #e9e7e8
}

.nav .nav-tel {
    position: absolute;
    left: 2%;
    bottom: 2%
}

.nav .close {
    display: block;
    position: absolute;
    top: 4%;
    right: 4%
}

.nav .close img {
    transition: all .5s ease
}

.nav .close:hover img {
    transform: rotate(180deg)
}

.fullSlide {
    position: relative;
    margin: 0 auto
}

.fullSlide2 {
    display: none
}

.slide {
    position: relative;
    margin: 0 auto
}

.slide .bd {
    position: relative;
    z-index: 0;
    overflow: hidden
}

.slide .bd li img {
    width: 100%;
    vertical-align: top
}

.slide .hd {
    position: relative;
    z-index: 1;
    margin-top: -60px;
    height: 30px;
    line-height: 30px;
    text-align: center
}

.slide .hd ul {
    text-align: center
}

.slide .hd ul li {
    cursor: pointer;
    display: inline-block;
    *display: inline;
    zoom: 1;
    width: 14px;
    height: 14px;
    margin: 5px;
    overflow: hidden;
    font-size: 0;
    background-color: #fff;
    border-radius: 50%
}

.slide .hd ul .on {
    background-color: #ff0
}

.slide .prev,
.slide .next {
    z-index: 1;
    display: block;
    width: 53px;
    height: 14px;
    position: relative;
    float: left;
    background: url(arrow.png) 0 0 no-repeat;
    filter: alpha(opacity=40);
    opacity: .4;
    position: absolute;
    top: 50%;
    margin-top: -7px
}

.slide .prev {
    left: 2.1%;
    margin-left: 10px
}

.slide .next {
    background-position: right 0;
    right: 2.1%;
    margin-right: 10px
}

.slide .prev:hover,
.slide .next:hover {
    filter: alpha(opacity=80);
    opacity: .8
}

.banner {
    width: 100%;
    position: relative;
    z-index: 1;
    overflow: hidden
}

.banner .bd ul {
    width: 100% !important
}

.banner .bd li {
    width: 100% !important;
    height: 913px;
    background-position: center 0;
    background-attachment: fixed;
    background-repeat: no-repeat;
    min-width: 1200px
}

.banner .bd li a {
    display: block;
    width: 1400px;
    margin: 0 auto;
    height: 100%
}

.banner .hd {
    position: fixed;
    left: 0;
    top: 850px;
    z-index: 1;
    width: 100%;
    overflow: hidden
}

.banner .hd ul {
    text-align: center
}

.banner .hd ul li {
    cursor: pointer;
    display: inline-block;
    *display: inline;
    zoom: 1;
    width: 10px;
    height: 10px;
    margin: 5px;
    overflow: hidden;
    font-size: 0;
    background-color: #fff;
    border-radius: 50%
}

.banner .hd ul .on {
    background-color: #ff0
}

.banner .prev,
.banner .next {
    z-index: 1;
    display: block;
    width: 53px;
    height: 44px;
    position: relative;
    float: left;
    background: url(arrow.png) 0 center no-repeat;
    filter: alpha(opacity=40);
    opacity: .4;
    position: absolute;
    top: 50%;
    margin-top: -22px
}

.banner .prev {
    left: 2.1%;
    margin-left: 10px
}

.banner .next {
    background-position: right 0;
    right: 2.1%;
    margin-right: 10px
}

.banner .prev:hover,
.banner .next:hover {
    filter: alpha(opacity=80);
    opacity: .8
}

.warp1 {
    /* width: 1080px; */
    /* margin: 0 auto; */
    padding: 57px 0 80px;

    padding-left: calc((100% - 1080px) / 2);
    padding-right: 2.5%;

    position: relative;
    z-index: 9;
    background-color: #fff
}

.warp1 h3 {
    font-size: 36px;
    color: #5f6061;
    margin-bottom: 48px
}

.warp1 p a,
.warp1 .warp1-content a {
    letter-spacing: -1px;
    color: #9fa0a0;
    transition: all .3s ease;
    font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
}

.warp1 div:hover p a,
.warp1 .warp1-content:hover a {
    color: #000
}

.warp1 h3 {
    -webkit-animation: fadeleft .8s .3s ease both;
    -ms-animation: fadeleft .8s .3s ease both;
    -moz-animation: fadeleft .8s .3s ease both;
    animation: fadeleft .5s .3s ease both;
    margin-top: 2px
}

.warp1 .p1,
.warp1 .warp1-content p {
    -webkit-animation: fadeleft .8s .3s ease both;
    -ms-animation: fadeleft .8s .3s ease both;
    -moz-animation: fadeleft .8s .3s ease both;
    animation: fadeleft .8s .3s ease both
}

.warp1 .p2 {
    -webkit-animation: fadeleft .8s .3s ease both;
    -ms-animation: fadeleft .8s .3s ease both;
    -moz-animation: fadeleft .8s .3s ease both;
    animation: fadeleft 1s .3s ease both
}

.warp1 .p3 {
    -webkit-animation: fadeleft .8s .3s ease both;
    -ms-animation: fadeleft .8s .3s ease both;
    -moz-animation: fadeleft .8s .3s ease both;
    animation: fadeleft 1.2s .3s ease both
}

.warp2 {
    width: 95%;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    background-color: #fff
}

.warp2 .warp-type {
    height: 50px;
    position: relative;
    margin-bottom: 25px
}

.warp2 .warp-type p {
    font-size: 18px;
    width: 1100px;
    line-height: 50px;
    position: absolute;
    left: 50%;
    margin-left: -550px;
    z-index: 0
}

.warp2 .warp-type p a:hover {
    color: #000
}

.warp2 .warp-type-list {
    float: right;
    position: absolute;
    z-index: 11;
    right: 0
}

.warp2 .warp-type-list .active {
    text-decoration: underline;
    color: #000;
    font-size: 18px
}

.warp2 .warp-type-list a {
    display: inline-block;
    margin-right: 25px;
    line-height: 50px;
    color: #888889;
    font-size: 14px
}

.warp2 .warp-type-list a:hover {
    text-decoration: underline;
    color: #000
}

.warp1-content a:hover {

    color: #000
}

.warp2 ul a {
    overflow: hidden
}

.warp2 ul a {
    display: block;
    width: 33.333333%;
    float: left;
    position: relative;
    overflow: hidden;
    display: block
}

.warp2 ul li img {
    width: 100%;
    height: auto;
    display: block
}

.warp2 ul li:hover img {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1)
}

.warp2 .case-summary {
    display: none;
    width: 90%;
    height: 90%;
    background: url(black.png) repeat;
    top: 0;
    left: 0;
    position: absolute;
    padding: 5%
}

.warp2 .case-summary p {
    color: #f9f9f9;
    position: absolute;
    left: 0;
    font-size: 20px
}

.warp2 .case-summary span {
    font-size: 24px
}

.warp2 .case-summary .p1 {
    top: 0
}

.warp2 .case-summary .p2 {
    bottom: 0;
    font-size: 16px
}

.warp2 .case-more {
    display: block;
    width: 148px;
    height: 40px;
    margin: 100px auto;
    border: 2px solid #959595;
    text-align: center;
    line-height: 40px
}

.warp3 {
    width: 1180px;
    margin: 0 auto;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 10;
    background-color: #fff;
    padding-top: 50px
}

.warp3 a {
    color: #898989
}

.warp3 .warp3-list {
    width: 250px;
    overflow: hidden
}

.warp3 .warp3-list ul li a {
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    color: #898989;
    font-size: 14px;
    transition: all 0.3s ease;
}

.warp3 .warp3-list ul li a:hover {
    color: #000;
}

.warp4 {
    width: 1180px;
    margin: 0 auto;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    padding: 80px 0 20px;
    margin-bottom: 100px;
    position: relative;
    z-index: 10;
    background-color: #fff
}

.warp4 h4 {
    text-align: center
}

.warp4 .warp4-list {
    width: 250px
}

.warp4 .warp4-title {
    color: #898989;
    font-size: 18px;
    padding-bottom: 15px;
    display: block
}

.warp4 .warp4-title:hover {
    color: #000
}

.warp3 .warp3-title {
    font-size: 18px;
    padding-bottom: 15px;
    display: block
}

.warp3 .warp3-title:hover {
    color: #000
}

.warp4 li a {
    color: #898989;
    font-size: 14px;
    transition: all .3s ease;
}

.warp4 li a:hover {
    color: #000;
}

.footer {
    background: #333;
    padding: 45px 0;
    position: relative;
    z-index: 10
}

.footer-in {
    width: 1180px;
    margin: 0 auto;
    color: #6a6a6a
}

.footer1 {
    width: 390px
}

.footer1-1 {
    width: 102px;
    font-size: 12px;
    text-align: center;
    color: #6a6a6a
}

.footer1-2 {
    width: 225px;
    font-size: 12px;
    color: #6a6a6a
}

.footer1-2 img {
    display: block;
    margin-bottom: 20px
}

.footer2 {
    width: 380px;
    margin-left: 75px
}

.footer2 dl {
    float: left;
    margin-right: 60px;
    margin-top: -15px
}

.footer2 dl dt {
    font-size: 24px;
    border-bottom: 1px solid #6a6a6a;
    margin-bottom: 14px;
    color: #999
}

.footer2 dl dd {
    height: 24px
}

.footer2 dl dd a {
    color: #6a6a6a;
    transition: all .3s ease;
    font-size: 12px;
    display: block;
    line-height: 24px
}

.footer2 dl dd a:hover {
    color: #fff
}

.footer3 {
    width: 255px;
    font-size: 12px;
    color: #757575
}

.footer-bottom {
    margin-top: 25px
}

.footer-bottom h3 {
    color: #6a6a6a;
    font-size: 14px
}

.footer-bottom ul li {
    width: 12.5%;
    float: left
}

.footer-bottom ul li a {
    font-size: 12px;
    color: #6a6a6a;
    transition: all .3s ease;
    line-height: 24px;
    display: block
}

.footer-bottom ul li a:hover {
    color: #fff
}

.t-footer {
    display: none
}

.case-content {
    padding-bottom: 150px
}

.case-list {
    width: 95%;
    margin: 150px auto 0
}

.case-list .warp-type {
    height: 50px;
    position: relative;
    margin-bottom: 25px
}

.case-list .warp-type p {
    font-size: 18px;
    line-height: 50px;
    position: absolute;
    left: 33.33333%;
    margin-left: -160px;
    z-index: 0;
    width: 160px
}

.case-list .warp-type-list {
    float: right;
    position: absolute;
    z-index: 11;
    right: 0
}

.case-list .warp-type-list .active {
    text-decoration: underline;
    color: #000;
    font-size: 16px
}

.case-list .warp-type-list a {
    display: inline-block;
    margin-right: 20px;
    line-height: 50px;
    color: #888889;
    font-size: 14px
}

.case-list .warp-type-list a:hover {
    text-decoration: underline
}

.case-list ul li {
    width: 33.3333333333%;
    float: left;
    position: relative;
    overflow: hidden;
    display: block
}


.case-list ul li img {
    width: 100%;
    height: auto;
    display: block
}

.case-list ul li:hover img {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1)
}

.case-list .case-summary {
    display: none;
    width: 90%;
    height: 90%;
    background: url(black.png) repeat;
    top: 0;
    left: 0;
    position: absolute;
    padding: 5%
}

.case-list .case-summary p {
    color: #f9f9f9;
    position: absolute;
    left: 0;
    font-size: 20px
}

.case-list .case-summary span {
    font-size: 24px
}

.case-list .case-summary .p1 {
    top: 0
}

.case-list .case-summary .p2 {
    bottom: 0;
    font-size: 16px
}

.case-list .case-more {
    display: block;
    width: 148px;
    height: 40px;
    margin: 100px auto;
    border: 2px solid #959595;
    text-align: center;
    line-height: 40px
}

.case-read {
    width: 1800px;
    margin: 0 auto;
    max-width: 94%;
    padding: 100px 0
}

.case-read .news-tool {
    display: none
}

.case-read img {
    width: 100%;
    height: auto !important;
    float: left;
    display: block;
    background: url(loading.gif) no-repeat center
}

.case-read img.small {
    width: 50%;
}

.case-read-top {
    padding: 70px 0;
    color: #fff;
    height: 730px
}

.case-read-top .left {
    width: 36%;
    text-align: right;
    font-size: 20px
}

.case-read-top .right {
    width: 40%;
    margin-right: 11%;
    position: relative;
    height: 100%
}

.case-read-top .right p {
    font-size: 20px;
    line-height: 1.8em;
    margin-bottom: 20px
}

.case-read-top .right ul {
    position: absolute;
    bottom: 0
}

.case-read-top .right ul li {
    font-size: 14px
}

.case-fixed {
    position: fixed;
    width: 28px;
    left: 50%;
    margin-left: 920px;
    top: 35%;
    display: none;
}

.case-fixed li {
    position: relative;
    height: 26px;
    margin-bottom: 17px
}

.case-fixed li .icon {
    background-image: url(icon.png);
    background-repeat: no-repeat;
    display: block;
    width: 28px;
    height: 26px
}

.case-fixed #close a {
    background-position: 0 -117px
}

.case-fixed #prev a {
    background-position: 0 -155px
}

.case-fixed #next a {
    background-position: 0 -194px
}

.case-fixed #close a:hover {
    background-position: -36px -117px
}

.case-fixed #prev a:hover {
    background-position: -36px -155px
}

.case-fixed #next a:hover {
    background-position: -36px -194px
}

.share-box .icon {
    background-image: url(icon.png);
    background-repeat: no-repeat
}

#share {
    width: 28px;
    height: 26px;
    float: right;
    position: relative;
    z-index: 99
}

.share {
    width: 28px;
    height: 26px;
    display: block
}

.ico-share {
    width: 28px;
    height: 26px;
    display: block;
    background-position: 2px -231px
}

.ico-share:hover {
    background-position: -33px -231px
}

.share-list {
    width: 100px;
    padding: 10px 20px;
    background: #363636;
    position: absolute;
    right: 0;
    top: 32px;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    -o-border-radius: 8px;
    -ms-border-radius: 8px;
    border-radius: 8px;
    visibility: hidden;
    z-index: -1;
    opacity: 0;
    -moz-transition: all .2s linear;
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear;
    -ms-transition: all .2s linear;
    transition: all .2s linear
}

.share-list.active {
    visibility: visible;
    z-index: 1;
    opacity: 1
}

.share-list li a {
    height: 24px;
    line-height: 24px;
    display: block;
    padding-left: 34px;
    color: #FFF;
    font-size: 14px;
    position: relative
}

.share-list li a:hover {
    color: #ffe514
}

.share-list li .icon {
    width: 24px;
    height: 24px;
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -12px
}

.share-list li .ico-weixin {
    background-position: -60px 0
}

.share-list li .ico-xlwb {
    background-position: -100px 0
}

.share-list li .ico-txwb {
    background-position: -140px 0
}

.share-list li .ico-douban {
    background-position: -180px 0
}

.share-list li .ico-tieba {
    background-position: -220px 0
}

.share-list li a:hover .ico-weixin {
    background-position: -60px -40px
}

.share-list li a:hover .ico-xlwb {
    background-position: -100px -40px
}

.share-list li a:hover .ico-txwb {
    background-position: -140px -40px
}

.share-list li a:hover .ico-douban {
    background-position: -180px -40px
}

.share-list li a:hover .ico-tieba {
    background-position: -220px -40px
}

.news {
    width: 1070px;
    margin: 0 auto;
    padding: 100px 0
}

.news-type {
    height: 60px;
    margin-bottom: 20px
}

.news-type h3 {
    float: left;
    font-size: 30px;
    width: 15%
}

.news-type ul {
    width: 85%;
    float: right
}

.news-type ul li {
    float: left;
    height: 60px;
    color: #898989
}

.news-type ul li a {
    line-height: 60px;
    font-size: 16px;
    padding: 0 30px;
    color: #898989
}

.news-type ul li a:hover {
    color: #5f6061
}

.news-list li {
    padding: 55px 0;
    border-bottom: 1px solid #eee
}

.news-list li .imgbigout {
    width: 44%;
    float: left
}

.news-list li .imgbigout img {
    width: 100%;
    height: auto
}

.news-list li .news-summary {
    float: right;
    width: 49%
}

.news-list li .news-summary h4 {
    color: #0f0b09;
    margin-bottom: 30px;
    font-size: 18px
}

.news-list li .news-summary p {
    margin-bottom: 30px
}

.news-list li .news-summary p a {
    color: #0f0b09;
    font-size: 24px;
    font-family: 'msyhl'
}

.news-list li .news-summary span {
    margin-bottom: 50px;
    display: block
}

.news-list li .news-summary span a {
    font-size: 16px;
    color: #898989;
}

.news-list li .news-summary .more {
    text-decoration: underline;
    font-size: 18px
}

.news-read {
    width: 1140px;
    margin: 0 auto;
    padding: 150px 0
}

.news-read .news-read-left {
    float: left
}

.news-read .news-read-left h3 {
    font-size: 24px
}

.news-read .news-read-left h4 {
    font-size: 16px
}

.news-read .news-read-right {
    float: right;
    width: 700px
}

.news-read .news-read-right .title {
    font-size: 30px;
    line-height: 30px;
    padding-bottom: 50px;
    border-bottom: 1px solid #ccc;
    color: #0f0b09;
    margin-bottom: 40px;
    font-family: 'msyhl'
}

.news-read .content p,
.news-read .content span,
.news-read .content div {
    font-size: 16px
}

.news-read .content img {
    max-width: 705px;
    height: auto;
}

.news-read .content {
    padding-bottom: 50px;
    border-bottom: 1px solid #ccc;
    font-size: 16px
}

.contact {
    padding: 225px 0 100px
}

.contact-read {
    width: 1150px;
    margin: 0 auto
}

.contact1-left {
    float: left;
    font-size: 36px;
    color: #595757;
    font-family: "museo-light";
    margin-top: -10px
}

.contact1-right {
    float: right;
    width: 610px
}

.contact1 p {
    font-size: 20px
}

.contact1 {
    margin-bottom: 130px
}

.contact2 p {
    margin-bottom: 1em
}

.contact2 {
    margin-bottom: 100px
}

.contact3,
.contact4,
.contact5 {
    margin-bottom: 55px
}

.contact-img {
    margin-bottom: 120px
}


/* 关于我们修改20240706 */
.w1700 {
    width: 88.8%;
    margin: 0 auto;
}

.w1410 {
    width: 73.4%;
    margin: 0 auto;
}

.f-27 {
    font-size: 27px;
    line-height: 1.37;
    color: #212121;
}

.f-27 p {
    margin-bottom: 1.37em;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: -1px;
    /*letter-spacing: -0.5px;*/
}

.f-27 p:last-child {
    margin-bottom: 0;
}

.bdabout-wrap1 {
    padding: 10.8vw 0 12.2vw;
}

.bdabout-wrap1 .bdabout-wrap1-inner {}

.bdabout-wrap1 .bdabout-wrap1-text {
    float: right;
    width: 61.2%;
}

.bdabout-wrap1 .bdabout-wrap1-text p {
    text-align: justify;
}

.bdabout-wrap2 {
    margin-bottom: 10vw;
}

.bdabout-wrap2 .bdabout-wrap2-inner {}

.bdabout-wrap2 .bdabout-wrap2-inner img {
    display: block;
    width: 100%;
    height: auto;
}

.bdabout-wrap3 {}

.bdabout-wrap3 .bdabout-section {
    margin-bottom: 6.25vw;
}

.bdabout-wrap3 .bdabout-section .bdabout-img {}

.bdabout-wrap3 .bdabout-section .bdabout-img img {
    display: block;
    width: 100%;
    height: auto;
}

.bdabout-wrap3 .bdabout-section .bdabout-main {
    margin-top: 6.25vw;
}

.bdabout-wrap3 .bdabout-section .bdabout-text {
    float: right;
    width: 46.13%;
}

.bdabout-wrap3 .bdabout-section .bdabout-text p {}

.bdabout-wrap3 .bdabout-section2 {
    margin-bottom: 7vw;
}

.bdabout-wrap3 .bdabout-section2 .bdabout-main {
    margin-top: 7vw;
}

.bdabout-wrap3 .bdabout-section3 {}

.bdabout-wrap3 .bdabout-section3 .bdabout-img {
    display: flex;
    justify-content: space-between;
}

.bdabout-wrap3 .bdabout-section3 .bdabout-img .bdabout-img-item {
    width: 46.13%;
}

.bdabout-wrap3 .bdabout-section4 {
    margin-bottom: 11.2vw;
}

.bdabout-wrap3 .bdabout-section5 {}

.bdabout-wrap3 .bdabout-section5 .bdabout-img {
    display: flex;
    justify-content: space-between;
}

.bdabout-wrap3 .bdabout-section5 .bdabout-img .bdabout-img-item:nth-child(1) {
    width: 34%;
}

.bdabout-wrap3 .bdabout-section5 .bdabout-img .bdabout-img-item:nth-child(2) {
    width: 58%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.bdabout-wrap3 .bdabout-section5 .bdabout-img .bdabout-text {
    float: none;
    width: 63%;
    margin-left: 22.3%;
    margin-bottom: 5%;
    margin-top: 5%;
}

.bdabout-wrap3 .bdabout-section6 {
    margin-bottom: 7vw;
}

.bdabout-wrap3 .bdabout-section6 .bdabout-main {
    margin-top: 7vw;
}

.bdabout-wrap3 .bdabout-section7 {
    margin-bottom: 11.25vw;
}

.bdabout-wrap3 .bdabout-section7 .bdabout-img {
    display: flex;
    justify-content: space-between;
}

.bdabout-wrap3 .bdabout-section7 .bdabout-img .bdabout-img-item {
    width: 30.5%;
}

.bdabout-wrap3 .bdabout-section8 {
    margin-bottom: 11.25vw;
}

.bdabout-wrap3 .bdabout-section9 {
    margin-bottom: 11.25vw;
}

.bdabout-wrap3 .bdabout-section10 {
    margin-bottom: 11.25vw;
}

.bdabout-wrap3 .bdabout-section10 .bdabout-img {
    display: flex;
    justify-content: space-between;
}

.bdabout-wrap3 .bdabout-section10 .bdabout-img .bdabout-img-item {
    width: 46.13%;
}

@media screen and (max-width: 1921px) {
    .f-27 {
        font-size: 18px;
    }
}

@media screen and (max-width: 1440px) {
    .f-27 {
        font-size: 14px;
    }

}

@media screen and (max-width: 768px) {

    .w1700,
    .w1410 {
        width: 94%;
    }

    .f-27 {
        font-size: 12px;
    }

    .bdabout-wrap1 {
        padding: 100px 0 50px;
    }

    .bdabout-wrap1 .bdabout-wrap1-text {
        float: none;
        width: auto;
    }

    .bdabout-wrap3 .bdabout-section .bdabout-text {
        float: none;
        width: auto;
    }

    .bdabout-wrap3 .bdabout-section5 .bdabout-img .bdabout-text {
        width: 100%;
        margin-left: 0;
        margin-bottom: 0;
    }
}

/* 关于我们修改end */







.about {
    padding: 225px 0 100px
}

.about1 {
    width: 1600px;
    margin: 0 auto
}

.about3 {
    width: 1870px;
    margin: 0 auto
}

.about1 .about1-left {
    float: left;
    font-size: 36px;
    color: #595757;
    font-family: "museo-light";
    margin-left: 200px;
    margin-top: -9px
}

.about1 .about1-right {
    float: right;
    width: 860px
}

.about3 .about3-right {
    float: right;
    width: 1000px
}

.about2 {
    width: 100%;
    background: url(about-fixed.jpg);
    height: 800px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: 170px 0 150px;
    position: relative
}

.about2 img {
    position: absolute;
    left: 13%;
    top: 45%
}

.about1-1 p {
    font-size: 24px;
    margin-bottom: 1.8em;
    line-height: 1.8em;
    color: #5f6061;
    font-family: "msyhl"
}

.about1-1 {
    margin-bottom: 150px
}

.about1-2 {
    float: left;
    width: 392px
}

.about1-2 h3 {
    font-size: 22px;
    margin-bottom: 20px;
    color: #0f0b09
}

.about1-2 p {
    margin-bottom: 1em;
    color: #5f6061
}

.about1-3 {
    float: right;
    width: 330px
}

.about1-3 h3 {
    font-size: 22px;
    margin-bottom: 20px;
    color: #0f0b09
}

.about1-3 p {
    margin-bottom: 1em;
    color: #5f6061
}

.about3-1 {
    float: left;
    width: 38%
}

.about3-2 {
    float: right;
    width: 48%
}

.about3-1 h3,
.about3-2 h3,
.about3-3 h3 {
    font-size: 22px;
    color: #0f0b09;
    margin-bottom: 1em
}

.about3-1 p,
.about3-2 p {
    margin-bottom: 1em
}

.about3-3 {
    margin-bottom: 35px;
    margin-top: 80px
}

.about3-4 dl {
    width: 25%;
    float: left;
    margin-bottom: 45px
}

.about3-4 dt {
    font-size: 16px;
    color: #0f0b09;
    margin-bottom: 14px
}

.news-tool {
    margin-top: 26px
}

.news-tool-right li {
    position: relative;
    height: 32px;
    float: left;
    margin: 0 7px
}

.news-tool-right li .icon {
    background-image: url(icon.png);
    background-repeat: no-repeat;
    display: block;
    width: 26px;
    height: 26px
}

.news-tool-right #close a {
    background-position: 0 -114px
}

.news-tool-right #prev a {
    background-position: 0 -155px
}

.news-tool-right #next a {
    background-position: 0 -194px
}

.news-tool-right #close a:hover {
    background-position: -36px -114px
}

.news-tool-right #prev a:hover {
    background-position: -36px -155px
}

.news-tool-right #next a:hover {
    background-position: -36px -194px
}

.service {
    display: none
}

@media screen and (max-width: 1920px) {

    html,
    body,
    div,
    dl,
    dt,
    dd,
    ul,
    ol,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    pre,
    code,
    form,
    fieldset,
    legend,
    input,
    textarea,
    p,
    blockquote,
    th,
    td {
        font-size: 14px
    }

    .header-small {
        height: 40px
    }

    .header-small .logo img {
        height: 19px;
        margin-top: 6px;
    }

    .header-small .header-in {
        margin: 5px auto
    }

    .fullSlide .hd {
        margin-top: -50px
    }

    .fullSlide .hd ul li {
        width: 10px;
        height: 10px
    }

    .banner .bd li {
        height: 685px;
        background-size: 1920px 685px
    }

    .banner .hd {
        top: 648px
    }

    .banner .hd ul li {
        width: 10px;
        height: 10px
    }

    .banner .bd li a {
        width: 1400px
    }

    .nav .close img {
        width: 42px
    }

    .warp1 {
        padding: 55px 0 80px;

        padding-left: calc((100% - 1080px) / 2);
        padding-right: 2.5%;
    }

    .warp1 h3 {
        margin-bottom: 60px;
    }

    .warp2 .case-summary .p1 {
        font-size: 18px
    }

    .warp2 .case-summary .p2 {
        font-size: 14px
    }

    .warp3 .warp3-list ul li a {
        font-size: 12px
    }

    .warp4 li a {
        font-size: 12px
    }

    .warp4 {
        margin-bottom: 50px
    }

    .case-read {
        width: 1700px
    }

    .case-read-top {
        height: 500px
    }

    .case-read-top .left {
        font-size: 16px
    }

    .case-read-top .right p {
        font-size: 16px;
        margin-bottom: 18px
    }

    .case-fixed {
        position: fixed;
        width: 25px;
        left: 50%;
        margin-left: 870px
    }

    .contact-read {
        width: 925px;
        margin: 0 auto
    }

    .contact1-left {
        float: left;
        font-size: 30px;
        color: #595757;
        margin-top: -10px
    }

    .contact1-right {
        float: right;
        width: 580px
    }

    .contact1 p {
        font-size: 16px
    }

    .about1,
    .about3 {
        width: 1120px;
        margin: 0 auto
    }

    .about2 {
        margin: 100px 0 110px
    }

    .about1 .about1-left {
        font-size: 27px;
        margin-left: 120px;
        margin-top: -7px
    }

    .about1 .about1-right {
        width: 640px;
        margin-right: 0
    }

    .about1-2 {
        float: left;
        width: 270px
    }

    .about1-3 {
        width: 240px
    }

    .about1-1 p {
        font-size: 18px
    }

    .about3 .about3-right {
        float: right;
        width: 750px;
        margin-right: -120px
    }

    .about1-2 h3,
    .about1-3 h3,
    .about3-1 h3,
    .about3-2 h3,
    .about3-3 h3 {
        font-size: 16px;
        margin-bottom: 10px
    }

    .about1-2 p,
    .about1-3 p {
        font-size: 12px
    }

    .about3 .about3-right p {
        font-size: 12px
    }

    .about3-1 p,
    .about3-2 p {
        margin-bottom: 2em
    }

    .about3-4 dt {
        font-size: 14px;
        margin-bottom: 2px
    }

    .about3-4 dd {
        font-size: 12px
    }

    .about3-3 {
        margin-bottom: 25px;
        margin-top: 60px
    }

    .service {
        margin-top: 74px !important
    }

    .news-list li .imgbigout img,
    .news-list li .imgbigout {
        width: 360px
    }

    .news-summary {
        margin-right: 130px
    }

    .news-list li .news-summary span a {
        font-size: 14px
    }

    .news-list li .news-summary p a {
        font-size: 22px
    }

    .news-list li .news-summary h4,
    .news-list li .news-summary .more {
        font-size: 16px
    }

    .news-list li {
        padding: 40px 0
    }

    .news-type ul li a {
        font-size: 14px
    }

    .news-read .news-read-right .title {
        font-size: 24px;
        padding-bottom: 36px
    }

    .news-read .news-read-left h3 {
        font-size: 20px
    }

    .news-read .news-read-left h4 {
        font-size: 14px
    }

    .news-read .news-read-left {
        margin-left: 70px
    }

    .news-read .content p,
    .news-read .content span,
    .news-read .content div {
        font-size: 14px
    }

    .news-tool-right li {
        transform: scale(0.7);
        -webkit-transform: scale(0.7);
        -moz-transform: scale(0.7);
        -ms-transform: scale(0.7)
    }

    .about3-4 dl {
        width: 25%
    }

    .case-read-top .right ul li {
        font-size: 12px
    }
}

@media screen and (max-width: 1440px) {
    .banner .bd li {
        height: 513px;
        background-size: 1440px 513px
    }

    .banner .hd {
        top: 480px
    }

    .banner .bd li a {
        width: 1200px
    }

    .news-read {
        width: 700px
    }

    .news-read-left {
        margin-bottom: 30px
    }

    .news-read .news-read-left,
    .news-read-right {
        float: none;
        width: 100%
    }

    .case-read {
        width: 1200px
    }

    .case-read-top {
        height: auto
    }

    .case-read-top .right ul {
        position: static;
    }

    .case-read-top .left {
        font-size: 16px
    }

    .case-read-top .right p {
        font-size: 16px;
        margin-bottom: 18px
    }

    .case-fixed {
        position: fixed;
        width: 25px;
        left: 50%;
        margin-left: 620px
    }

    .warp1 h3 {
        margin-top: 0;
        font-size: 30px
    }

    .warp1 p {
        font-size: 12px
    }

    .warp2 .warp-type p {
        font-size: 12px
    }

    .warp2 .warp-type-list a,
    .warp2 .warp-type-list .active {
        font-size: 12px
    }

    .warp2 .warp-type {
        margin-bottom: 6px
    }

    .warp2 .case-summary .p1 {
        font-size: 14px
    }

    .warp2 .case-summary .p2 {
        font-size: 12px
    }

    .warp2 .case-summary span {
        font-size: 18px
    }

    .service {
        margin-top: 48px !important;
        margin-bottom: 10px !important
    }

    .news {
        width: 830px
    }

    .news-list li .imgbigout img,
    .news-list li .imgbigout {
        width: 260px
    }

    .news-list li .news-summary p a {
        font-size: 16px
    }

    .news-list li .news-summary h4,
    .news-list li .news-summary .more {
        font-size: 14px
    }

    .news-list li .news-summary h4 {
        margin-bottom: 13px
    }

    .news-list li .news-summary p {
        margin-bottom: 15px
    }

    .news-list li .news-summary span a {
        font-size: 12px
    }

    .news-list li {
        padding: 30px 0
    }

    .pager a,
    .pager span {
        font-size: 18px
    }

    .pager .p1 {
        transform: scale(.8) rotate(180deg);
        top: 6px;
    }

    .pager .p1:nth-child(2) {
        transform: scale(.8) rotate(0);
    }

    .news-read .news-read-left {
        margin-left: 0
    }

    .about2 {
        margin: 70px 0 90px
    }

    .news-read .news-read-left h3 {
        font-size: 18px
    }

    .case-list .warp-type-list a {
        margin-right: 15px
    }
}

@media screen and (max-width: 1200px) {
    .warp2 ul li {
        width: 100%;
        float: left;
        position: relative;
        overflow: hidden
    }

    .banner .bd li a {
        width: 1000px
    }

    .news-read {
        width: 700px
    }

    .news-read-left {
        margin-bottom: 30px
    }

    .news-read .news-read-left,
    .news-read-right {
        float: none;
        width: 100%
    }

    .case-read {
        width: 1000px
    }

    .case-read-top {
        height: auto
    }

    .case-read-top .right ul {
        position: static
    }

    .case-read-top .left {
        font-size: 16px
    }

    .case-read-top .right p {
        font-size: 14px;
        margin-bottom: 18px
    }

    .case-fixed {
        position: fixed;
        width: 25px;
        left: 50%;
        margin-left: 520px
    }
}

@media screen and (max-width: 750px) {
    .footer {
        display: none
    }

    .banner {
        display: none
    }

    .header {
        height: 60px
    }

    .header-small {
        height: 40px
    }

    .header .logo img {
        height: 15px;
        margin-top: 9px
    }

    .header .meun-off {
        margin-right: 0
    }

    .nav .close img {
        width: 25px;
        height: auto
    }

    .nav ul {
        height: 360px;
        margin-top: -180px
    }

    .nav ul a {
        height: 60px
    }

    .nav ul span {
        font-size: 32px;
        line-height: 60px
    }

    .slide .hd {
        margin-top: -30px
    }

    .slide .hd ul li {
        width: 7px;
        height: 7px
    }

    .slide .prev,
    .slide .next {
        width: 25px;
        height: 14px
    }

    .warp2 {
        width: 95%
    }

    .warp-type {
        width: 100%;
        height: auto
    }

    .warp-type p {
        width: 100%;
        position: static;
        margin-left: 0;
        margin: 0 auto
    }

    .warp-type-list {
        position: static;
        float: left
    }

    .warp1 h3 {
        font-size: 16px;
        margin-bottom: 20px;
        line-height: 1em
    }

    .header-in {
        margin: 15px auto;
        width: 94%
    }

    .header .logo {
        margin-left: 0
    }

    .header-small .header-in {
        margin: 5px auto
    }

    .warp2 ul li {
        width: 100%;
        float: left;
        position: relative;
        overflow: hidden
    }

    .footer,
    .warp4,
    .warp3,
    .service {
        display: none
    }

    .fullSlide {
        display: none
    }

    .fullSlide2 {
        display: block !important
    }

    .warp1 {
        width: 94%;
        margin: 0 auto;
        padding: 40px 0
    }

    .case-list {
        margin-top: 80px;
        width: 94%
    }

    .case-list .warp-type {
        height: auto
    }

    .case-list ul li,
    .warp2 ul a {
        width: 100%
    }

    .case-list .warp-type-list a {
        line-height: 24px;
        margin-right: 25px;
        float: left
    }

    .case-list .warp-type p {
        position: static;
        margin-left: 0;
        font-size: 12px;
        line-height: 32px
    }

    .warp-type-list {
        position: static !important;
        float: static
    }

    .case-list .museo-light {
        width: 100%;
        display: block
    }

    .case-content {
        padding-bottom: 35px
    }

    .warp-type-list a {
        line-height: 35px;
        margin-right: 10px
    }

    .case-read {
        width: 94%;
        padding-bottom: 30px
    }

    .case-read .small {
        width: 100% !important
    }

    .case-read-top .left,
    .case-read-top .right {
        width: 90%;
        text-align: left;
        margin: 0 auto;
        float: none
    }

    .case-read-top {
        padding: 30px 0
    }

    .case-read-top .right ul {
        bottom: 30px
    }

    .case-fixed {
        display: none
    }

    .news-read {
        width: 94%;
        padding: 50px 0
    }

    .news-read img {
        max-width: 100% !important;
        height: auto
    }

    .news-read-left {
        margin-bottom: 30px
    }

    .news-read .news-read-left,
    .news-read-right {
        float: none;
        width: 100%
    }

    .news-read-right {
        width: 100% !important
    }

    .news-read-left {
        margin-bottom: 20px
    }

    .news {
        width: 94%;
        padding: 80px 0 10px
    }

    .news-read .news-read-right .title {
        font-size: 24px;
        padding-bottom: 20px;
        margin-bottom: 15px
    }

    .news-type h3 {
        width: 100%
    }

    .news-type ul {
        float: left;
        width: 100%
    }

    .news-type ul li {
        height: 30px
    }

    .news-type ul li a {
        padding: 0 15px;
        line-height: 30px
    }

    .news-summary {
        margin-top: 10px
    }

    .news-list li .imgbigout,
    .news-list li .news-summary {
        width: 100%
    }

    .news-list li {
        padding: 25px 0
    }

    .news-list li .news-summary {
        float: left
    }

    .news-list li .imgbigout img,
    .news-list li .imgbigout {
        width: 100%
    }

    .news-type ul li:first-child a {
        padding-left: 0
    }

    .news-list li .news-summary h4 {
        margin-bottom: 10px
    }

    .news-list li .news-summary p {
        margin-bottom: 20px
    }

    .news-list li .news-summary span {
        margin-bottom: 20px
    }

    .back2top {
        display: none !important
    }

    .t-footer {
        display: block;
        width: 94%;
        margin: 35px auto 0
    }

    .t-footer .t-footer-bottom .left {
        width: 55%
    }

    .t-footer-top {
        font-size: 24px;
        height: 40px;
        line-height: 40px
    }

    .t-back2top {
        display: block;
        width: 30px;
        height: 30px;
        background: url(back2top.png) no-repeat;
        background-size: 30px
    }

    .contact {
        padding: 100px 0 30px
    }

    .contact-read {
        width: 94%;
        margin: 0 auto
    }

    .contact1-left {
        float: left;
        font-size: 28px;
        color: #595757;
        font-size: arial
    }

    .contact1-right {
        float: right;
        width: 100%
    }

    .contact1 p {
        font-size: 16px
    }

    .contact1,
    .contact2,
    .contact3,
    .contact4,
    .contact-img {
        margin-bottom: 25px
    }

    .about {
        padding: 100px 0 30px
    }

    .about1,
    .about3 {
        width: 94%
    }

    .about1 .about1-left {
        font-size: 28px;
        width: 100%;
        margin-left: 0
    }

    .about1 .about1-right {
        width: 100%
    }

    .about3 .about3-right {
        width: 100%;
        margin-right: 0
    }

    .about3-4 dl {
        margin-bottom: 15px
    }

    .about2 {
        width: 100%;
        background: url(about-fixed.jpg);
        height: 250px;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        margin: 25px 0;
        position: relative
    }

    .about2 img {
        left: 50%;
        top: 40%;
        background-position: center;
        width: 200px;
        margin-left: -100px
    }

    .about1-2,
    .about1-3,
    .about3-1,
    .about3-2,
    .about3-4 {
        width: 100% !important;
        margin-right: 0
    }

    .about3-4 dl {
        width: 50%
    }

    .about1-1 {
        margin-bottom: 30px
    }

    .about1-1 p {
        font-size: 16px
    }

    .about h3 {
        font-size: 16px;
        margin-bottom: 10px
    }

    .warp2 .warp-type p {
        width: 94%;
        position: static;
        margin-left: 0
    }

    .warp2 .warp-type-list {
        width: 100%;
        position: static
    }

    .warp2 .warp-type {
        height: 80px
    }

    .warp2 .warp-type-list a {
        height: 30px;
        line-height: 30px;
        margin-right: 10px;
        font-size: 12px
    }

    .case-more {
        display: none !important
    }

    .share-list {
        left: 0
    }

    #qiao-wrap {
        display: none !important
    }

    .case-list .warp-type-list a {
        font-size: 12px
    }

    .case-list .warp-type-list .active {
        font-size: 12px
    }

    .case-list .warp-type-list .museo-light {
        font-size: 16px;
        margin-bottom: 14px
    }

    .case-read .news-tool {
        display: block
    }
}

.snews-list {
    width: 85.35%;
    max-width: 2185px;
    margin: 175px auto;
}

.snews-list ul li {
    width: 24%;
    margin-bottom: 60px;
    height: 106px;
    float: left;
    margin-right: 14%
}

.snews-list ul li:nth-child(3n+3) {
    margin-right: 0px;
}

.snews-list ul li .title {
    font-size: 16px;
    color: #444;
    margin-bottom: 15px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
}

.snews-list ul li .summary {
    font-size: 14px;
    color: #888;
    line-height: 26px
}

.news_swiper_box {
    height: 16px;
}

.picScroll-left {
    position: relative;
}

.picScroll-left a {
    font-size: 14px;
    line-height: 16px;
}

.snews-type {
    width: 100%;
    height: 32px;
    margin-bottom: 100px
}

.snews-type .snewtype-inner {
    width: 820px;
    float: right;
    height: 32px
}

.snews-type .stype-list {
    padding: 0 16px
}

.snews-type .stype-list .swiper-slide {
    text-align: center;
    line-height: 32px;
    height: 32px;
}

.snews-type .stype-list .swiper-slide:after {
    content: '';
    height: 10px;
    width: 1px;
    background: #c8c8c8;
    position: absolute;
    right: 0px;
    top: 50%;
    margin-top: -5px;
    display: block;
}

.snews-type .stype-list a {
    font-size: 14px;
    line-height: 32px;
    color: #888888;
    text-align: center;
    display: block;
    height: 32px;
}

.snews-type .stype-list .swiper-next {
    background: url(data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAQAAABuQZ3IAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkAhIQABTHLUhNAAAAeklEQVQY013OKxKDQBCE4X9m8xiJyAHiqYrmAAjkHiFH4ygcITIiMiIHQKDYCIpidrrdZ7olm3VMuOi5KR3ZU2rn8pFebrwPgoCphYAbVbiTw/RA987yZSh2Wo51uw4s60sdPGnWkZ9GAI2wUQWgEUAv9xpAMhjuCfwB9uMykQXYfywAAAAASUVORK5CYII=);
    right: 0px
}

.snews-type .stype-list .swiper-prev {
    background: url(data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAQAAABuQZ3IAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkAhIQADob+0WCAAAAe0lEQVQY013NsQ3CMBSE4f+9GMklRQqGCBIjUDBARmA0RqDMKClcMAJFCpOCR2Egfr7rPp10MuISyWFXw0GvdlcPPNeHenjdyNoCaAuFHIC2AEFPEpli3o67Y2Jv53eyxSjtBpill4sllu9qgAYLOfxRhRv9sSaYJazpA5kzPbQ2oRTBAAAAAElFTkSuQmCC);
    left: 0px;
}

.snews-type .stype-list .swiper-btn {
    width: 9px;
    height: 16px;
    display: block;
    position: absolute;
    top: 8px;
    z-index: 9999;
    cursor: pointer;
}

.snews-read {
    box-sizing: border-box;
    width: 100%;
    padding: 25px 190px 200px
}

.snews-read .sread-left {
    width: 65%;
    box-sizing: border-box;
    border-top: 1px solid #eeeeee
}

.snews-read .sread-right {
    width: 23%;
    border-top: 1px solid #eeeeee;
}

.snews-read .sread-left .title {
    font-size: 18px;
    color: #000000;
    line-height: 78px
}

.snews-read .sread-left .sread-content {
    padding-bottom: 100px
}

.snews-read .sread-left .sread-content p,
.snews-read .sread-left .sread-content span {
    font-size: 14px;
    color: #333;
}

.snews-read .sread-left .sread-content img {
    display: block;
    max-width: 100%;
}

.snews-read .sx-list {
    border-top: 1px solid #eeeeee;
    padding: 25px 0;
    height: 32px
}

.snews-read .sx-list li {
    position: relative;
    line-height: 32px
}

.snews-read .sx-list li a {
    font-size: 14px;
    color: #444
}

.snews-read .sx-list #prev {
    padding-left: 36px;
    float: left;
}

.snews-read .sx-list #next {
    padding-right: 36px;
    float: right
}

.snews-read .sx-list li:after {
    position: absolute;
    content: '';
    width: 9px;
    height: 16px;
    display: block;
    top: 8px;
}

.snews-read .sx-list #prev:after {
    background: url(data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAQAAABuQZ3IAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkAhIRCww2d2PnAAAAfElEQVQY013QsRGDMAyF4V8yuaP0IOTOIzBCsgEjMJpLOtggaSnZwG0okhQJWLbUfac7PUluFOVJ7orLHS4Pt6qZCDqz7YuW8OpJWgNoDT8qALQGaHQQz71NeXEjI/4T3z3PgxQYJOpCsFThkctgTn+ivfGPrrOvidLu0xdiXC2oWCOAyQAAAABJRU5ErkJggg==);
    left: 0px;
}

.snews-read .sx-list #next:after {
    background: url(data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAQAAABuQZ3IAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkAhIRCyQDwssdAAAAcklEQVQY013QsRGDMBBE0c+CMaE6MKXgDlQKJVCCS6ATKEGlKHQkEdjASRe+m/nBNt4NMwvm9BjzzFoQIU3ZWxTUKKhR/5dBXYkLu/buBjxbjt33Jvf8ENMqAzuv9CaohjNv4EcFgGoA9VMJ0HhwRLvEAR91Mns+BNJlAAAAAElFTkSuQmCC);
    right: 0px;
}

.xgnr-tags a {
    display: inline-block;
    border: 1px solid rgba(170, 170, 170, 0.2);
    padding: 0 14px;
    line-height: 26px;
    margin-right: 10px;
    color: #828282;
    font-size: 12px;
    margin-bottom: 10px
}

.xgnr-tags a:hover {
    border-color: transparent;
    background-color: transparent;
    color: #6f6f6f;
}

.xgnr-list {
    margin-top: 50px;
}

.xgnr-list li {
    border-top: 1px solid #eeeeee
}

.xgnr-list li p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 48px;
    color: #646464;
    font-size: 14px;
}

.warp2 .case-more {
    color: #b9b9b9;
    width: 300px;
    height: 50px;
    transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    border-radius: 0px;
    font-size: 18px;
    text-align: center;
    text-indent: 0px;
    line-height: 50px;
    font-size: 13px;
    border: none;
    position: relative;
}

.warp2 .case-more:after {
    content: "";
    display: block;
    width: 260px;
    height: 42px;
    border: 1px solid #D9D9D9;
    position: absolute;
    bottom: 2px;
    z-index: 2;
    margin-left: 20px;
    transition: all 0.2s ease 0s;
}

.warp2 .case-more:hover {
    color: #333
}

.warp2 .case-more:hover:after {
    transform: scale(1.1, 1.1);
    border: 1px solid #e0e0e0;
}

.warp2 .case-more i {
    font-family: 'simsun';
    font-size: 18px;
    text-indent: -10px;
    line-height: 50px;
    transition: all ease-out .3s;
    color: #fff;
    display: inline-block;
    opacity: 0
}

.warp2 .case-more:hover i {
    color: #333;
    text-indent: 10px;
    opacity: 1
}

.warp5 {
    position: relative;
}

.warp5 img {
    display: block;
}

.warp5-more {
    display: block;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    width: 15.3vw;
    height: 3.516vw;
    line-height: 3.516vw;
    border: 1px solid #fff;
    color: #fff;
    bottom: 20.7%;
    text-indent: 1.48vw;
    font-size: 0.7vw;
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.warp5-more i {
    background: url(data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAMCAQAAADb0hWEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkAhQQAi4WfKyhAAAAiklEQVQoz53SsQ3CQAxG4RcdoaKAAWAExBJE2QB2YwJGQGKCiBGgp4MWBfIooitAFDHn6ix9kuXfyOCauLLMv+EM9z6sTHG48KzWPY1AnNpkGoNYeFA3loUNY+T7tT+7AC+WlGxH3EOwY05CbtFRZx5trUzR5Zx89pHE4rjY5SQjcOfV9T8H8HFyb9XVNX2c2epVAAAAAElFTkSuQmCC) no-repeat right center;
    width: 1.5vw;
    height: 3.516vw;
    display: block;
    float: right;
    margin-right: 1.48vw;
    transition: all 0.3s ease;
}

.warp5-more:hover {
    background: #fff;
    color: #444;
}

.warp5-more:hover i {
    background: url(data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAMCAQAAADb0hWEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkAhQQCBVdmK0PAAAAh0lEQVQoz53SsQnCYBAG0BdirCx0AB1BXMLgBrqbEziC4ATBEbS301bU/BbGQMAi51138OC47yR928hC4VsBuHNXyuNw5iRZNTQAGata2h8myOwla0WmMvzMOvX4OYWXucJm4BaCtalcco0tysTBQymPHufo2UQSiuOsbpMMwK2L5T8P0Hm5N06W77SV0NhxAAAAAElFTkSuQmCC) no-repeat right center;
    margin-right: 1.3vw;
}

.warp5-text {
    position: absolute;
    left: 50%;
    top: 24%;
    transform: translateX(-50%);
    width: 27.7%;
    height: auto;
}

.warp5 {
    margin: 225px 0;
}

.warp6,
.warp7 {
    /* width: calc(100% - 380px); */
    width: 85.93%;
    margin: 0 auto;
    /* padding: 0 190px */
}

.warp6 .b-title {
    font-size: 36px;
    margin-bottom: 38px
}

.warp6 .b-title a {
    color: #303030;
}

.warp6-box {
    height: 380px;
}

.warp6 .warp6-left {
    width: calc(50% - 80px);
    background-repeat: no-repeat;
    height: 380px;
    /*max-width: 1000px;*/
    background-position: center;
    background-size: cover;
}

.warp6 .warp6-left img {
    display: block;
}

.warp6 .warp6-right {
    width: calc(50% - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 380px;
    /*max-width: 1000px*/
}

.news-list {
    padding-bottom: 35px;
    border-bottom: 1px solid #e6e6e6
}

.news-list .title {
    font-size: 18px;
    color: #000;
    line-height: 1em;
    margin-bottom: 14px
}

.news-list .summary {
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #323232
}

.news-list .news-item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 15px
}

.news-list .news-item a {
    float: left;
    width: 23%;
    display: block;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    padding-right: 1%;
    color: #959595;
    line-height: 29px
}

.news-list .news-item a:after {
    position: absolute;
    right: 0;
    height: 14px;
    background: #e6e6e6;
    width: 1px;
    top: 50%;
    transform: translateY(-50%);
    content: ''
}

.news-list .news-item a:nth-child(4n+4):after {
    display: none;
}

.warp7 {
    margin-top: 50px;
    margin-bottom: 180px
}

.warp7 .warp7-left,
.warp7 .warp7-right {
    width: calc(50% - 80px);
}

.warp7 .news-list {
    border: none
}

.warp5 .info {
    position: absolute;
    left: 50%;
    top: 24%;
    transform: translate(-50%, 0);
}

.warp5 .info p {
    font-size: 4.73vw !important;
    line-height: 1em;
    color: #fff
}

.warp5 .info img {
    margin: 1.56vw auto;
    display: block;
    width: 3.5vw !important;
    height: auto;
}

/* .news_path{box-sizing: border-box;width: 100%;padding: 0px 130px 20px;} */
.news_path {
    box-sizing: border-box;
    width: 100%;
    padding: 25px 190px 0px;
    font-size: 12px;
    color: #828282
}

.news_path a {
    color: #828282;
    font-size: 12px;
}

@media screen and (max-width: 1920px) {

    .warp6,
    .warp7 {
        /* padding: 0 140px; */
        /* width: calc(100% - 280px); */
    }

    /* .about3-img .logo-box{ width: calc(100% - 280px);} */

    .warp7 {
        margin-top: 40px;
    }

    .warp6 .warp6-right {
        width: calc(50% - 65px);
        height: 285px
    }

    .warp6 .warp6-left {
        width: calc(50% - 65px);
        height: 285px;
    }

    .warp7 .warp7-left,
    .warp7 .warp7-right {
        width: calc(50% - 65px)
    }

    .warp6 .b-title {
        font-size: 30px;
        margin-bottom: 13px
    }

    .warp6-box {
        height: 285px;
    }

    .news-list .title {
        font-size: 16px;
        margin-bottom: 7px
    }

    .news-list .news-item a {
        font-size: 12px;
        line-height: 23px;
    }

    .news-list .news-item {
        margin-top: 6px
    }

    .news-list {
        padding-bottom: 25px
    }

    /* .warp5-more{width: 294px;height: 68px;margin-left: -148px;    line-height: 70px;font-size: 14px;text-indent: 30px;}	.warp5-more i{margin-right: 25px;margin-top:30px;} */
    .snews-list {
        margin: 120px auto 160px;
        max-width: 1640px;
        width: 86%
    }

    .snews-type {
        margin-bottom: 60px;
    }

    .snews-type .snewtype-inner {
        width: 800px
    }

    .snews-type .stype-list {
        padding: 0 10px;
    }

    .snews-list ul li {
        margin-bottom: 44px;
    }

    .snews-list ul li .summary {
        line-height: 24px;
    }

    .snews-list .pager {
        padding: 0
    }

    .warp2 .case-more:after {
        width: 210px;
        margin-left: 10px;
    }

    .warp2 .case-more {
        width: 231px;
    }

    .snews-read {
        padding: 0px 130px 200px;
    }

    .snews-read .sread-right {
        width: 25%
    }

    .xgnr-list {
        margin-top: 40px;
    }

    .snews-read .sread-left .sread-content {
        padding-bottom: 35px;
    }

    /* 	.warp5 .info p{font-size: 90px;}.warp5 .info img{margin: 27px auto;display: block;width: 90px;} */
    .news_path {
        box-sizing: border-box;
        width: 100%;
        padding: 0px 130px 20px;
        font-size: 12px;
        color: #828282
    }

    /* .warp5-more{transform: scale(0.75);} */
}

@media screen and (max-width: 1681px) {
    /* .warp5-more{width: 300px;height: 72px;line-height: 72px;font-size: 16px;margin-left:-151px;text-indent: 20px;}    .warp5-more i{margin-right: 20px;margin-top: 30px;} */
    /* .warp5-more:hover i{margin-right: 15px;} */
    /*     .warp5 .info p{font-size: 78px;}	.warp5 .info img{margin: 24px auto;display: block;width: 78px;} */
    /* .warp5-more{transform: scale(0.656);}	} */
}

@media screen and (max-width:1441px) {
    .warp1 {
        width: 95%;
        margin: 0 auto;
        padding: 57px 0 80px;
    }

    .warp2 .warp-type p {
        width: 95%;
        margin-left: -50%;
    }

    .warp3 {
        padding-top: 20px;
    }

    .warp5 {
        margin-top: 150px;
        margin-bottom: 145px;
    }

    .warp7 {
        margin-bottom: 190px
    }

    .warp6,
    .warp7 {
        /* padding: 0 160px; */
        /* width: calc(100% - 320px); */
    }

    .snews-type .snewtype-inner {
        width: 700px
    }

    .snews-list ul li .summary {
        height: 48px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
    }

    .case-list .warp-type p {
        left: 0;
        margin-left: 0;
    }

    /* .warp5 .info p{font-size: 67px;}	.warp5 .info img{margin: 21px auto;display: block;width: 67px;} */
    /* .warp5-more{transform: scale(0.56);} */
}


@media screen and (max-width: 1367px) {
    /* .warp5-more{width: 200px;height: 48px;line-height: 48px;font-size: 12px;margin-left:-101px;text-indent: 0px;text-align: center;}    .warp5-more i{display:none;} */
    /* .warp5-more{transform: scale(0.534);} */
}

@media screen and (max-width: 1367px) {
    .warp5-text {
        top: 18%;
    }

    /* .warp5-more{bottom: 12%;} */
}

@media screen and (max-width: 1500px) {
    .warp5-more i {
        display: none;
    }

    .warp5-more {
        text-align: center;
        text-indent: 0px;
        min-width: 120px;
        overflow: hidden;
    }
}
</style>