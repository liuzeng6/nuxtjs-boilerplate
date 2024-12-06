<template>
    <div class="pc-footer">
        <div class="main">
            <div class="footnav">
                <a href="/case/">案例</a><br />
                <a href="/about/">关于</a><br />
                <a href="/contact/">联系</a>
            </div>
            <div class="mes1">
                <div class="p1 font28">
                    <a href="/case/">御全展览，您身边的展览执行专家！</a><br />
                    <a href="javascript:void(0)">御传典范，全示非凡</a><br />
                    <div class="font28">&nbsp;</div>
                </div>
                <p class="p2 font27">版权所有© 2017-2022</p>
            </div>
            <div class="mes2">
                <a class="tel font49" href="tel:0571-87203952"
                    >TeL：021-31029628</a
                >
                <p class="address font27">
                    上海市松江区九新公路2888号2号楼2301
                </p>
                <a
                    class="font27"
                    href="https://beian.miit.gov.cn/"
                    target="_blank"
                    >沪ICP备17057121号</a
                >
                <div class="tlink">
                    <!-- <a class="flink font27 dj-flink" href="javascript:;">友情链接</a><a class="flink font27"
                        href="http://www.hzvis.com/sitemap.html" target="_blank">Baidu Map</a> <a
                        class="flink font27 last" href="#" target="_blank">Googel Map</a> -->
                </div>
            </div>
            <div class="ewm">
                <img :src="qr_code" />
                <p class="font27">最新案例请关注小红书账号</p>
            </div>
        </div>
    </div>
    <div class="m-footer">
        <div class="t-footer-bottom clear">
            <div class="l">沪ICP备17057121号</div>
            <div class="r"></div>
            <div class="below">
                <div class="left">
                    <p>
                        <!-- 杭州巴顿品牌设计<br> -->
                        上海市松江区九新公路2888号2号楼2301<br />
                        TEL：021-31029628<br />
                    </p>
                </div>
                <div class="right">
                    <img :src="qr_code" class="lazy" />
                    <p class="font27">最新案例请关注小红书账号</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import qr_code from "@/assets/contact/xhs.png";
// import qr_code from "@/assets/contact/qc_code.jpg"
</script>
<style scoped lang="less">
a {
    color: #fff !important;
}

@media screen and (max-width: 750px) {
    .pc-footer {
        display: none !important;
    }

    .m-footer {
        display: block !important;
    }
}

.m-footer {
    display: none;
    box-sizing: border-box;
    padding: 0px 15px;

    .t-footer-bottom {
        .below {
            display: flex;

            .left {
                flex: 1;
            }

            .right {
                width: 100px;
                margin-top: -25px;

                height: 100px;

                img {
                    width: 100%;
                    height: 100%;
                }
                .font27 {
                    font-size: 0.5em;
                }
            }
        }
    }
}

.pc-footer {
    display: block;
    margin: 0;
    font-family: "PingFang SC", "HanHei SC", "Helvetica Neue", Microsoft Yahei,
        "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
    line-height: 2em;
    font-size: 14px;
    background: #000;
    color: #fff;
    padding: 44px 0 42px;

    .main {
        color: #fff;
        padding: 0;
        font-family: "PingFang SC", "HanHei SC", "Helvetica Neue",
            Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
        line-height: 2em;
        font-size: 14px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: calc(100% - 220px);

        .footnav {
            flex: 23;
            color: #fff;
            margin: 0;
            padding: 0;
            font-family: "PingFang SC", "HanHei SC", "Helvetica Neue",
                Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial",
                sans-serif;
            line-height: 2em;
            font-size: 14px;

            a {
                font-size: 33.6px;
                line-height: 36px;
            }
        }

        .mes1 {
            flex: 31;
        }

        .mes2 {
            flex: 37;
        }

        .ewm {
            flex: 9;

            img {
                color: #fff;
                font-family: "PingFang SC", "HanHei SC", "Helvetica Neue",
                    Microsoft Yahei, "Helvetica", "STHeitiSC-Light", "Arial",
                    sans-serif;
                line-height: 2em;
                font-size: 14px;
                border: 0;
                display: block;
                width: 68px;
                margin: 2px auto 20px;
            }
        }
    }
}
</style>
