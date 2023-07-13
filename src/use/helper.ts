import { computed } from "vue";

export const userDeviceMobile = computed(()=>{
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
	? true : false
})