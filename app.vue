<template>
  <div style="background-color: #fff;">
    <Header></Header>
    <NuxtPage />
    <Footer></Footer>
  </div>
</template>
<script setup>
import Header from "./components/header.vue";
import Footer from "./components/footer";
</script>

<style lang="less">
* {
  padding: 0px;
  margin: 0px;
}

.dinshicontact3 {
  /*display: flex;flex-flow: column-reverse;*/
}

ul {
  list-style: none !important;
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

a {
  text-decoration: none;
  color: #000;
}
</style>