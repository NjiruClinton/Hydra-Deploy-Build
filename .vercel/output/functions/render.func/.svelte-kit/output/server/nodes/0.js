import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.e3fb6ef6.js","_app/immutable/chunks/scheduler.953cfe2b.js","_app/immutable/chunks/index.1fa04a18.js","_app/immutable/chunks/forms.82fa1d22.js","_app/immutable/chunks/singletons.436fc0cf.js","_app/immutable/chunks/stores.43e929ac.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/titleUpdate.65574de5.js"];
export const stylesheets = ["_app/immutable/assets/0.42a1e4fb.css"];
export const fonts = [];
