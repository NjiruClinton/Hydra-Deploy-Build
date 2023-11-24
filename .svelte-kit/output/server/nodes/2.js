

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.311f7a30.js","_app/immutable/chunks/scheduler.953cfe2b.js","_app/immutable/chunks/index.1fa04a18.js","_app/immutable/chunks/forms.82fa1d22.js","_app/immutable/chunks/singletons.436fc0cf.js","_app/immutable/chunks/stores.43e929ac.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/pendingMessage.222e6aac.js","_app/immutable/chunks/marked.esm.76161808.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/pendingMessage.9da0802e.css"];
export const fonts = [];
