/*!CK:3811527064!*//*1375901613,173217857*/

if (self.CavalryLogger) { CavalryLogger.start_js(["L7v5b"]); }

__d("WebStorage",[],function(a,b,c,d,e,f){var g={},h={getLocalStorage:function(){return i('localStorage');},getSessionStorage:function(){return i('sessionStorage');}};function i(k){if(!g.hasOwnProperty(k))g[k]=j(k);return g[k];}function j(k){try{var m=window[k];if(m){var n='__test__'+Date.now();m.setItem(n,'');m.removeItem(n);}return m;}catch(l){}}e.exports=h;});