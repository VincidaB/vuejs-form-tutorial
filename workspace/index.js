const {createApp, ref} = Vue

createApp({
    setup(){
        const title = ref("#MaConf2020")

        return {title}
    }
}).mount('#app');