

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f43d0323.js","_app/immutable/chunks/scheduler.953cfe2b.js","_app/immutable/chunks/index.1fa04a18.js","_app/immutable/chunks/stores.43e929ac.js","_app/immutable/chunks/singletons.436fc0cf.js"];
export const stylesheets = [];
export const fonts = [];
