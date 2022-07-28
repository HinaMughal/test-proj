import FirstComp from './components/FirstComp.vue'
import SecondComp from './components/SecondComp.vue'

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("first-comp", FirstComp);
	Vue.component("second-comp", SecondComp);
	
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

FirstComp.install = install;
SecondComp.install = install;

export {
    FirstComp, SecondComp
};