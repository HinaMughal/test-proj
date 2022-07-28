import FirstComp from './components/FirstComp.vue'

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("first-comp", FirstComp);
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

export {
    FirstComp
};