import('./bootstrap')
	.catch(err => console.error(err));

//  we can improve this solution a bit. Ideally, 
// we load the Micro Frontend's remoteEntry.js before Angular bootstraps. 
// This file contains meta data about the Micro Frontend, esp. about its shared dependencies.
// Knowing about them upfront helps Module Federation to avoid version conflicts.
// 	import { loadManifest } from '@angular-architects/module-federation';

// loadManifest("/assets/mf.manifest.json")
// 	.catch(err => console.error(err))
// 	.then(_ => import('./bootstrap'))
// 	.catch(err => console.error(err));