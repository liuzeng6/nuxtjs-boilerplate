import { onMounted } from 'vue'

export default function (content) {

    onMounted(() => {
        document.addEventListener("scroll", () => {
            let offsetTop = content.value?.getBoundingClientRect()?.top;
            if (offsetTop < 0) {
                document.querySelector(".header").classList.add("header-small");
            } else {
                document.querySelector(".header").classList.remove("header-small");
            }
        });
    });

    return {
        
    }
}