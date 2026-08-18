import{A as fe,P as Ke,a as Xe,W as vt,S as O,M as V,b as B,B as yt,U,c as wt,V as E,d as xt,F as Mt,e as bt,D as Tt,H as St,f as Et,g as pe,C as N,R as k,h as ht,i as Ct,j as G,k as I,l as je,E as Ze,L as Pt,O as Rt,m as At,n as Ye,o as Dt,p as $e,I as Je,q as Ge,Q as et,r as Se,s as kt,t as Lt,u as tt,v as $,w as J,N as q,x as ct,y as ge,z as _t,G as It,J as Nt,K as st,T as Ft,X as it,Z as at,Y as Bt,_ as Ot,$ as Ut,a0 as Ht,a1 as zt,a2 as Wt,a3 as jt,a4 as Gt,a5 as qt,a6 as Vt,a7 as Qt,a8 as Kt,a9 as Xt,aa as Zt,ab as Yt,ac as $t}from"./three-DvkPjmmT.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();class Jt{constructor(){this.isMobile=!1,this.isIOS=!1,this.isAndroid=!1,this.gpuTier=1,this.deviceMemory=4,this.hardwareConcurrency=4}detect(){return this.detectDevice(),this.detectGPU(),this.detectHardware(),this.buildQualitySettings()}detectDevice(){const e=navigator.userAgent||"";this.isIOS=/iPad|iPhone|iPod/.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,this.isAndroid=/Android/i.test(e),this.isMobile=this.isIOS||this.isAndroid||/Mobi|Tablet|Silk/i.test(e)||"ontouchstart"in window&&window.innerWidth<1024}detectGPU(){try{const e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");if(!t){this.gpuTier=0;return}const s=t.getExtension("WEBGL_debug_renderer_info");if(s){const a=t.getParameter(s.UNMASKED_RENDERER_WEBGL)||"";/RTX [2-4]0|RTX 50|Quadro RTX|Radeon RX 7|Radeon Pro W|Apple M[1-3]/i.test(a)?this.gpuTier=2:/GTX 1[0-9]|RTX [2-3]0|Radeon RX [56]|Intel.*Iris|Apple GPU/i.test(a)?this.gpuTier=1:this.gpuTier=0}const i=t.getExtension("WEBGL_lose_context");i&&i.loseContext()}catch{this.gpuTier=1}}detectHardware(){this.deviceMemory=navigator.deviceMemory||4,this.hardwareConcurrency=navigator.hardwareConcurrency||4,(this.deviceMemory<=2||this.hardwareConcurrency<=2)&&(this.gpuTier=Math.min(this.gpuTier,0))}buildQualitySettings(){return this.isMobile?this.buildMobileSettings():this.gpuTier>=2?this.buildHighSettings():this.gpuTier>=1?this.buildMediumSettings():this.buildLowSettings()}buildHighSettings(){return{level:"high",isMobile:!1,isIOS:!1,isAndroid:!1,label:"高端PC",antialias:!0,pixelRatio:Math.min(window.devicePixelRatio,2),powerPreference:"high-performance",shadowMapEnabled:!0,shadowMapType:Ke,shadowMapSize:4096,shadowCameraSize:80,shadowCameraFar:300,shadowBias:-5e-4,toneMapping:fe,toneMappingExposure:1,fogDensity:.006,fogColor:12109016,farPlane:1500,ssao:!0,bloom:!0,fxaa:!1,bloomStrength:.35,bloomThreshold:.85,bloomRadius:.4,lodNear:60,lodMid:150,lodFar:300,chunkSize:50,loadDistance:350,unloadDistance:500,instanceDistance:400,moveSpeed:8,runSpeed:16,jumpHeight:2.2,eyeHeight:1.7,playerRadius:.4,stepHeight:.5,gravity:25}}buildMediumSettings(){return{level:"medium",isMobile:!1,isIOS:!1,isAndroid:!1,label:"普通PC",antialias:!0,pixelRatio:Math.min(window.devicePixelRatio,1.5),powerPreference:"high-performance",shadowMapEnabled:!0,shadowMapType:Ke,shadowMapSize:2048,shadowCameraSize:60,shadowCameraFar:200,shadowBias:-5e-4,toneMapping:fe,toneMappingExposure:.95,fogDensity:.008,fogColor:12109016,farPlane:1e3,ssao:!1,bloom:!0,fxaa:!1,bloomStrength:.3,bloomThreshold:.85,bloomRadius:.35,lodNear:50,lodMid:120,lodFar:250,chunkSize:50,loadDistance:280,unloadDistance:400,instanceDistance:300,moveSpeed:8,runSpeed:16,jumpHeight:2.2,eyeHeight:1.7,playerRadius:.4,stepHeight:.5,gravity:25}}buildLowSettings(){return{level:"low",isMobile:!1,isIOS:!1,isAndroid:!1,label:"低端PC",antialias:!1,pixelRatio:Math.min(window.devicePixelRatio,1),powerPreference:"high-performance",shadowMapEnabled:!0,shadowMapType:Xe,shadowMapSize:1024,shadowCameraSize:50,shadowCameraFar:150,shadowBias:-.001,toneMapping:fe,toneMappingExposure:.9,fogDensity:.012,fogColor:12109016,farPlane:700,ssao:!1,bloom:!1,fxaa:!0,bloomStrength:.2,bloomThreshold:.85,bloomRadius:.3,lodNear:40,lodMid:90,lodFar:180,chunkSize:50,loadDistance:220,unloadDistance:320,instanceDistance:250,moveSpeed:8,runSpeed:16,jumpHeight:2.2,eyeHeight:1.7,playerRadius:.4,stepHeight:.5,gravity:25}}buildMobileSettings(){const e=this.deviceMemory<=3||this.hardwareConcurrency<=4;return{level:"mobile",isMobile:!0,isIOS:this.isIOS,isAndroid:this.isAndroid,label:this.isIOS?"iOS":"Android",antialias:!1,pixelRatio:Math.min(window.devicePixelRatio,e?1:1.5),powerPreference:"high-performance",shadowMapEnabled:!0,shadowMapType:Xe,shadowMapSize:e?512:1024,shadowCameraSize:45,shadowCameraFar:120,shadowBias:-.001,toneMapping:fe,toneMappingExposure:1,fogDensity:.015,fogColor:12109016,farPlane:500,ssao:!1,bloom:!1,fxaa:!0,bloomStrength:0,bloomThreshold:.85,bloomRadius:0,lodNear:30,lodMid:70,lodFar:140,chunkSize:50,loadDistance:180,unloadDistance:260,instanceDistance:200,moveSpeed:8,runSpeed:16,jumpHeight:2.2,eyeHeight:1.7,playerRadius:.4,stepHeight:.5,gravity:25}}}class es{constructor(e){this.quality=e,this.renderer=null,this.container=null}init(e){this.container=e;const t=document.createElement("canvas");t.style.display="block",t.style.width="100%",t.style.height="100%",t.style.touchAction="none",e.innerHTML="",e.appendChild(t),this.canvas=t;let s=null;const i={antialias:this.quality.antialias,powerPreference:this.quality.powerPreference,stencil:!1,depth:!0,alpha:!1,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1};try{s=t.getContext("webgl2",i)}catch(a){console.warn("[Renderer] WebGL2 上下文获取失败:",a.message)}if(!s)try{s=t.getContext("webgl",i)||t.getContext("experimental-webgl",i)}catch(a){console.warn("[Renderer] WebGL1 上下文获取失败:",a.message)}if(!s)throw new Error("当前浏览器不支持 WebGL，请升级浏览器或开启硬件加速");return this.renderer=new vt({canvas:t,context:s,antialias:this.quality.antialias,powerPreference:this.quality.powerPreference,stencil:!1,depth:!0}),this.renderer.setPixelRatio(this.quality.pixelRatio),this.renderer.outputColorSpace=O,this.renderer.toneMapping=this.quality.toneMapping,this.renderer.toneMappingExposure=this.quality.toneMappingExposure,this.quality.shadowMapEnabled?(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.quality.shadowMapType):this.renderer.shadowMap.enabled=!1,this.resize(window.innerWidth,window.innerHeight),this._onContextLost=this.onContextLost.bind(this),this._onContextRestored=this.onContextRestored.bind(this),t.addEventListener("webglcontextlost",this._onContextLost,!1),t.addEventListener("webglcontextrestored",this._onContextRestored,!1),this.renderer}onContextLost(e){e.preventDefault(),console.warn("[Renderer] WebGL 上下文丢失，等待恢复..."),this.contextLost=!0}onContextRestored(){console.log("[Renderer] WebGL 上下文已恢复"),this.contextLost=!1,this.renderer.setPixelRatio(this.quality.pixelRatio),this.renderer.outputColorSpace=O,this.renderer.toneMapping=this.quality.toneMapping,this.renderer.toneMappingExposure=this.quality.toneMappingExposure,this.quality.shadowMapEnabled&&(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.quality.shadowMapType)}resize(e,t){this.renderer&&this.renderer.setSize(e,t,!1)}dispose(){var e,t;if(this.canvas&&(this._onContextLost&&this.canvas.removeEventListener("webglcontextlost",this._onContextLost),this._onContextRestored&&this.canvas.removeEventListener("webglcontextrestored",this._onContextRestored)),this.renderer){this.renderer.dispose();try{(t=(e=this.renderer).forceContextLoss)==null||t.call(e)}catch{}}}}class Ee extends V{constructor(){const e=Ee.SkyShader,t=new B({name:e.name,uniforms:U.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:yt,depthWrite:!1});super(new wt(1,1,1),t),this.isSky=!0}}Ee.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new E},up:{value:new E(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class ts{constructor(e){this.quality=e,this.scene=null,this.camera=null,this.sky=null,this.sun=null,this.hemiLight=null,this.pmremGenerator=null,this.envMapRT=null,this.sunElevation=18,this.sunAzimuth=180,this.sunDirection=new E}init(e){this.renderer=e,this.scene=new xt,this.scene.fog=new Mt(this.quality.fogColor,this.quality.fogDensity),this.camera=new bt(72,window.innerWidth/window.innerHeight,.1,this.quality.farPlane),this.camera.position.set(0,this.quality.eyeHeight,0),this.sky=new Ee,this.sky.scale.setScalar(this.quality.farPlane*.9),this.scene.add(this.sky);const t=this.sky.material.uniforms;return t.turbidity.value=8,t.rayleigh.value=2,t.mieCoefficient.value=.005,t.mieDirectionalG.value=.8,this.sun=new Tt(16774374,3),this.sun.castShadow=this.quality.shadowMapEnabled,this.sun.shadow.mapSize.set(this.quality.shadowMapSize,this.quality.shadowMapSize),this.sun.shadow.camera.near=.5,this.sun.shadow.camera.far=this.quality.shadowCameraFar,this.sun.shadow.camera.left=-this.quality.shadowCameraSize,this.sun.shadow.camera.right=this.quality.shadowCameraSize,this.sun.shadow.camera.top=this.quality.shadowCameraSize,this.sun.shadow.camera.bottom=-this.quality.shadowCameraSize,this.sun.shadow.bias=this.quality.shadowBias,this.sun.shadow.normalBias=.02,this.scene.add(this.sun),this.scene.add(this.sun.target),this.hemiLight=new St(8893913,4866096,.5),this.scene.add(this.hemiLight),this.pmremGenerator=new Et(e),this.pmremGenerator.compileEquirectangularShader(),this.updateSun(),this.scene}updateSun(){const e=pe.degToRad(90-this.sunElevation),t=pe.degToRad(this.sunAzimuth);this.sunDirection.setFromSphericalCoords(1,e,t),this.sky.material.uniforms.sunPosition.value.copy(this.sunDirection),this.sun.position.copy(this.sunDirection).multiplyScalar(200),this.envMapRT&&this.envMapRT.dispose(),this.envMapRT=this.pmremGenerator.fromScene(this.sky),this.scene.environment=this.envMapRT.texture}update(e){this.sun&&this.sun.castShadow&&(this.sun.target.position.copy(e),this.sun.position.copy(e).add(this.sunDirection.clone().multiplyScalar(150)),this.sun.target.updateMatrixWorld())}resize(e,t){this.camera&&(this.camera.aspect=e/t,this.camera.updateProjectionMatrix())}dispose(){this.envMapRT&&(this.envMapRT.dispose(),this.envMapRT=null),this.pmremGenerator&&(this.pmremGenerator.dispose(),this.pmremGenerator=null),this.scene&&this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())})}}class ss{constructor(){this.textures={}}async generateTextures(e){e&&e.setStatus("正在生成建筑纹理..."),await this.delay(30),this.textures.glassBuilding=this.createBuildingTextures({wallColor:"#2a3340",windowColor:"#4a7aaa",windowLitColor:"#ffd896",windowAlpha:.7,cols:6,rows:8,frameColor:"#1a1a22"}),e&&e.setProgress(25),this.textures.concreteBuilding=this.createBuildingTextures({wallColor:"#5a5a62",windowColor:"#3a4a5a",windowLitColor:"#ffe8c0",windowAlpha:.5,cols:5,rows:6,frameColor:"#3a3a42"}),e&&e.setProgress(28),this.textures.brickBuilding=this.createBuildingTextures({wallColor:"#6a4030",windowColor:"#3a4a4a",windowLitColor:"#ffd0a0",windowAlpha:.4,cols:4,rows:5,frameColor:"#4a2a1a",brick:!0}),e&&e.setProgress(30),e&&e.setStatus("正在生成地面纹理..."),await this.delay(30),this.textures.asphalt=this.createAsphaltTexture(),e&&e.setProgress(32),this.textures.sidewalk=this.createSidewalkTexture(),e&&e.setProgress(34),this.textures.grass=this.createGrassTexture(),e&&e.setProgress(36),e&&e.setStatus("正在生成植被纹理..."),await this.delay(30),this.textures.bark=this.createBarkTexture(),e&&e.setProgress(38),this.textures.leaves=this.createLeavesTexture(),e&&e.setProgress(39),this.textures.metal=this.createMetalTexture(),e&&e.setProgress(40)}async loadEnvironment(e){console.log("[AssetLoader] 使用 Sky 着色器环境贴图")}createBuildingTextures(e){const{wallColor:i,windowColor:a,windowLitColor:o,windowAlpha:r,cols:n,rows:h,frameColor:l,brick:c}=e,d=document.createElement("canvas");d.width=512,d.height=512;const u=d.getContext("2d");if(u.fillStyle=i,u.fillRect(0,0,512,512),this.addNoise(u,512,512,15),c){u.strokeStyle="rgba(0,0,0,0.25)",u.lineWidth=1.5;const p=512/(h*2),g=512/n;for(let y=0;y<h*2;y++){const w=y%2===0?0:g/2;for(let T=0;T<=n;T++){const L=T*g+w;u.strokeRect(L,y*p,g,p)}}}const m=512/n,v=512/h,x=m*.12,A=new Set;for(let p=0;p<h;p++)for(let g=0;g<n;g++){const y=g*m+x,w=p*v+x,T=m-x*2,L=v-x*2,F=Math.random()>.65;F&&A.add(p*n+g),u.fillStyle=F?o:a,u.globalAlpha=F?.8:r,u.fillRect(y,w,T,L),u.globalAlpha=1,u.strokeStyle=l,u.lineWidth=2,u.strokeRect(y,w,T,L),u.beginPath(),u.moveTo(y+T/2,w),u.lineTo(y+T/2,w+L),u.stroke()}const S=new N(d);S.wrapS=S.wrapT=k,S.colorSpace=O;const M=document.createElement("canvas");M.width=512,M.height=512;const b=M.getContext("2d");b.fillStyle="#8080ff",b.fillRect(0,0,512,512);for(let p=0;p<h;p++)for(let g=0;g<n;g++){const y=g*m+x,w=p*v+x,T=m-x*2,L=v-x*2;b.fillStyle="#7070e8",b.fillRect(y,w,T,L),b.strokeStyle="#9090ff",b.lineWidth=2,b.strokeRect(y,w,T,L)}const R=new N(M);R.wrapS=R.wrapT=k;const C=document.createElement("canvas");C.width=512,C.height=512;const P=C.getContext("2d");P.fillStyle="#000",P.fillRect(0,0,512,512);for(const p of A){const g=Math.floor(p/n),w=p%n*m+x,T=g*v+x,L=m-x*2,F=v-x*2;P.fillStyle=o,P.fillRect(w,T,L,F)}const D=new N(C);return D.wrapS=D.wrapT=k,D.colorSpace=O,{map:S,normalMap:R,emissiveMap:D}}createAsphaltTexture(){const s=document.createElement("canvas");s.width=512,s.height=512;const i=s.getContext("2d");i.fillStyle="#1c1c20",i.fillRect(0,0,512,512),this.addNoise(i,512,512,25),i.strokeStyle="rgba(10,10,10,0.5)",i.lineWidth=1;for(let h=0;h<12;h++){i.beginPath(),i.moveTo(Math.random()*512,Math.random()*512);for(let l=0;l<4;l++)i.lineTo(Math.random()*512,Math.random()*512);i.stroke()}const a=new N(s);a.wrapS=a.wrapT=k,a.colorSpace=O,a.repeat.set(10,10);const o=document.createElement("canvas");o.width=512,o.height=512;const r=o.getContext("2d");r.fillStyle="#8080ff",r.fillRect(0,0,512,512),this.addNoise(r,512,512,10);const n=new N(o);return n.wrapS=n.wrapT=k,{map:a,normalMap:n}}createSidewalkTexture(){const s=document.createElement("canvas");s.width=512,s.height=512;const i=s.getContext("2d");i.fillStyle="#6a6a6e",i.fillRect(0,0,512,512),this.addNoise(i,512,512,20),i.strokeStyle="rgba(40,40,40,0.4)",i.lineWidth=2;const a=128;for(let n=0;n<=512;n+=a)i.beginPath(),i.moveTo(n,0),i.lineTo(n,512),i.stroke();for(let n=0;n<=512;n+=a)i.beginPath(),i.moveTo(0,n),i.lineTo(512,n),i.stroke();const o=new N(s);o.wrapS=o.wrapT=k,o.colorSpace=O;const r=new N(s);return r.wrapS=r.wrapT=k,{map:o,normalMap:r}}createGrassTexture(){const s=document.createElement("canvas");s.width=256,s.height=256;const i=s.getContext("2d");i.fillStyle="#3a5a2a",i.fillRect(0,0,256,256);for(let h=0;h<800;h++){const l=Math.random()*256,c=Math.random()*256,d=3+Math.random()*5,u=60+Math.random()*60;i.strokeStyle=`rgb(${u*.4}, ${u}, ${u*.3})`,i.lineWidth=1,i.beginPath(),i.moveTo(l,c),i.lineTo(l+(Math.random()-.5)*2,c-d),i.stroke()}const a=new N(s);a.wrapS=a.wrapT=k,a.colorSpace=O,a.repeat.set(5,5);const o=document.createElement("canvas");o.width=256,o.height=256;const r=o.getContext("2d");r.fillStyle="#8080ff",r.fillRect(0,0,256,256),this.addNoise(r,256,256,15);const n=new N(o);return n.wrapS=n.wrapT=k,{map:a,normalMap:n}}createBarkTexture(){const s=document.createElement("canvas");s.width=256,s.height=256;const i=s.getContext("2d");i.fillStyle="#4a3020",i.fillRect(0,0,256,256);for(let h=0;h<30;h++){const l=Math.random()*256,c=2+Math.random()*6,d=30+Math.random()*40;i.fillStyle=`rgb(${d*.8}, ${d*.5}, ${d*.3})`,i.fillRect(l,0,c,256)}this.addNoise(i,256,256,20);const a=new N(s);a.wrapS=a.wrapT=k,a.colorSpace=O;const o=document.createElement("canvas");o.width=256,o.height=256;const r=o.getContext("2d");r.fillStyle="#8080ff",r.fillRect(0,0,256,256);for(let h=0;h<20;h++){const l=Math.random()*256;r.fillStyle="#7070e8",r.fillRect(l,0,3+Math.random()*4,256)}const n=new N(o);return n.wrapS=n.wrapT=k,{map:a,normalMap:n}}createLeavesTexture(){const s=document.createElement("canvas");s.width=256,s.height=256;const i=s.getContext("2d");i.fillStyle="#2a4a18",i.fillRect(0,0,256,256);for(let r=0;r<200;r++){const n=Math.random()*256,h=Math.random()*256,l=3+Math.random()*6,c=50+Math.random()*60;i.fillStyle=`rgba(${c*.3}, ${c}, ${c*.2}, 0.6)`,i.beginPath(),i.ellipse(n,h,l,l*.7,Math.random()*Math.PI,0,Math.PI*2),i.fill()}const a=new N(s);a.wrapS=a.wrapT=k,a.colorSpace=O;const o=new N(s);return o.wrapS=o.wrapT=k,{map:a,normalMap:o}}createMetalTexture(){const s=document.createElement("canvas");s.width=256,s.height=256;const i=s.getContext("2d");i.fillStyle="#4a4a52",i.fillRect(0,0,256,256);for(let r=0;r<256;r+=1){const n=60+Math.random()*30;i.fillStyle=`rgb(${n}, ${n}, ${n+4})`,i.fillRect(0,r,256,1)}const a=new N(s);a.wrapS=a.wrapT=k,a.colorSpace=O;const o=new N(s);return o.wrapS=o.wrapT=k,{map:a,normalMap:o}}addNoise(e,t,s,i){const a=e.getImageData(0,0,t,s),o=a.data;for(let r=0;r<o.length;r+=4){const n=(Math.random()-.5)*i;o[r]=Math.max(0,Math.min(255,o[r]+n)),o[r+1]=Math.max(0,Math.min(255,o[r+1]+n)),o[r+2]=Math.max(0,Math.min(255,o[r+2]+n))}e.putImageData(a,0,0)}delay(e){return new Promise(t=>setTimeout(t,e))}}function is(f,e=!1){const t=f[0].index!==null,s=new Set(Object.keys(f[0].attributes)),i=new Set(Object.keys(f[0].morphAttributes)),a={},o={},r=f[0].morphTargetsRelative,n=new ht;let h=0;for(let l=0;l<f.length;++l){const c=f[l];let d=0;if(t!==(c.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in c.attributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;a[u]===void 0&&(a[u]=[]),a[u].push(c.attributes[u]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(r!==c.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in c.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(c.morphAttributes[u])}if(e){let u;if(t)u=c.index.count;else if(c.attributes.position!==void 0)u=c.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;n.addGroup(h,u,l),h+=u}}if(t){let l=0;const c=[];for(let d=0;d<f.length;++d){const u=f[d].index;for(let m=0;m<u.count;++m)c.push(u.getX(m)+l);l+=f[d].attributes.position.count}n.setIndex(c)}for(const l in a){const c=ot(a[l]);if(!c)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;n.setAttribute(l,c)}for(const l in o){const c=o[l][0].length;if(c===0)break;n.morphAttributes=n.morphAttributes||{},n.morphAttributes[l]=[];for(let d=0;d<c;++d){const u=[];for(let v=0;v<o[l].length;++v)u.push(o[l][v][d]);const m=ot(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;n.morphAttributes[l].push(m)}}return n}function ot(f){let e,t,s,i=-1,a=0;for(let h=0;h<f.length;++h){const l=f[h];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=l.normalized),s!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=l.gpuType),i!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=l.array.length}const o=new e(a);let r=0;for(let h=0;h<f.length;++h)o.set(f[h].array,r),r+=f[h].array.length;const n=new Ct(o,t,s);return i!==void 0&&(n.gpuType=i),n}const qe={glass:{texKey:"glassBuilding",roughness:.28,metalness:.15,minHeight:15,maxHeight:42,minSize:8,maxSize:18,emissiveIntensity:.35,color:8952234},concrete:{texKey:"concreteBuilding",roughness:.75,metalness:.1,minHeight:10,maxHeight:28,minSize:10,maxSize:20,emissiveIntensity:.22,color:8947848},brick:{texKey:"brickBuilding",roughness:.88,metalness:.05,minHeight:7,maxHeight:16,minSize:8,maxSize:16,emissiveIntensity:.28,color:6963248}},rt=Object.keys(qe);class as{constructor(e,t,s){this.scene=e,this.assetLoader=t,this.quality=s,this.colliders=[],this.chunks=new Map,this.lodObjects=[],this.allObjects=[],this.materials=this.createMaterials()}createMaterials(){const e=this.assetLoader.textures,t={};for(const[s,i]of Object.entries(qe)){const a=e[i.texKey];t[s]=new G({map:a.map,normalMap:a.normalMap,emissiveMap:a.emissiveMap,emissive:16777215,emissiveIntensity:i.emissiveIntensity,roughness:i.roughness,metalness:i.metalness,normalScale:new I(.6,.6)})}return e.asphalt.map.repeat.set(25,25),e.asphalt.normalMap.repeat.set(25,25),t.ground=new G({map:e.asphalt.map,normalMap:e.asphalt.normalMap,roughness:.92,metalness:0}),e.sidewalk.map.repeat.set(4,4),e.sidewalk.normalMap.repeat.set(4,4),t.sidewalk=new G({map:e.sidewalk.map,normalMap:e.sidewalk.normalMap,roughness:.85,metalness:.05}),e.grass.map.repeat.set(6,6),e.grass.normalMap.repeat.set(6,6),t.grass=new G({map:e.grass.map,normalMap:e.grass.normalMap,roughness:.9,metalness:0}),t.bark=new G({map:e.bark.map,normalMap:e.bark.normalMap,roughness:.9,metalness:0}),t.leaves=new G({map:e.leaves.map,normalMap:e.leaves.normalMap,roughness:.8,metalness:0,color:6982218}),t.metal=new G({map:e.metal.map,normalMap:e.metal.normalMap,roughness:.4,metalness:.8}),t}async build(e){this.createGround();const t=6,s=28,a=s+14,o=(t-1)*a/2,r=new Map,n=new Map;for(let h=0;h<t;h++)for(let l=0;l<t;l++){const c=h*a-o,d=l*a-o,u=Math.random();u<.72?this.createBuildingBlock(c,d,s,r,n):u<.87?this.createPark(c,d,s,r,n):this.createPlaza(c,d,s,r,n);const m=this.createSidewalk(c,d,s);this.scene.add(m),this.allObjects.push(m);const v=(h*t+l+1)/(t*t);e&&(h*t+l)%2===0&&(e.setProgress(55+v*20),e.setStatus(`正在构建城市街区... ${Math.round(v*100)}%`)),(h*t+l)%3===0&&await new Promise(x=>setTimeout(x,10))}for(const[h,l]of r){if(l.length===0)continue;const c=this.createTreeInstances(l);for(const d of c)this.addToChunk(d,h)}for(const[h,l]of n){if(l.length===0)continue;const c=this.createLampInstances(l);c&&this.addToChunk(c,h)}console.log(`[CityBuilder] 城市构建完成: ${this.colliders.length} 个碰撞体, ${this.lodObjects.length} 个LOD对象, ${this.chunks.size} 个Chunk`)}createGround(){const t=new je(320,320,32,32);t.rotateX(-Math.PI/2);const s=t.attributes.position;for(let a=0;a<s.count;a++)s.setY(a,(Math.random()-.5)*.04);s.needsUpdate=!0,t.computeVertexNormals();const i=new V(t,this.materials.ground);i.receiveShadow=!0,this.scene.add(i),this.allObjects.push(i)}createBuildingBlock(e,t,s,i,a){const o=1+Math.floor(Math.random()*3),r=2;if(o===1){const n=s-r*2-Math.random()*4,h=s-r*2-Math.random()*4;this.createBuilding(e,t,n,h)}else{const n=Math.random()>.5?"x":"z";for(let h=0;h<o;h++){const l=n==="x"?e-s/2+h*s/o+r:e+(Math.random()-.5)*(s-12),c=n==="z"?t-s/2+h*s/o+r:t+(Math.random()-.5)*(s-12),d=n==="x"?s/o-r*1.5:8+Math.random()*8,u=n==="z"?s/o-r*1.5:8+Math.random()*8;this.createBuilding(l+d/2-s/2+e,c+u/2-s/2+t,d,u)}}this.addSidewalkTrees(e,t,s,i),this.addCornerLamps(e,t,s,a)}createBuilding(e,t,s,i){const a=rt[Math.floor(Math.random()*rt.length)],o=qe[a],r=o.minHeight+Math.random()*(o.maxHeight-o.minHeight),n=this.createBuildingShape(s,i),h=new Ze(n,{depth:r,bevelEnabled:!0,bevelThickness:.4,bevelSize:.3,bevelSegments:1,steps:1});h.rotateX(-Math.PI/2),h.translate(e,0,t);const l=h.attributes.uv,c=(s+i)/6,d=r/3.5;for(let M=0;M<l.count;M++)l.setXY(M,l.getX(M)*c,l.getY(M)*d);l.needsUpdate=!0;const u=this.materials[a],m=new G({color:o.color,roughness:o.roughness+.1,metalness:o.metalness*.5}),v=new Pt,x=new V(h,u);x.castShadow=!0,x.receiveShadow=!0,v.addLevel(x,0);const A=new V(h,m);A.castShadow=!0,A.receiveShadow=!0,v.addLevel(A,this.quality.lodNear),v.addLevel(new Rt,this.quality.lodFar);const S=new At(new E(e-s/2,0,t-i/2),new E(e+s/2,r,t+i/2));this.colliders.push(S),this.addToChunk(v,e,t),this.lodObjects.push(v),this.allObjects.push(v)}createBuildingShape(e,t){const s=e/2,i=t/2,a=new Ye;switch(Math.floor(Math.random()*4)){case 0:a.moveTo(-s,-i),a.lineTo(s,-i),a.lineTo(s,i),a.lineTo(-s,i),a.lineTo(-s,-i);break;case 1:a.moveTo(-s,-i),a.lineTo(s,-i),a.lineTo(s,i*.2),a.lineTo(s*.2,i*.2),a.lineTo(s*.2,i),a.lineTo(-s,i),a.lineTo(-s,-i);break;case 2:a.moveTo(-s,-i),a.lineTo(s,-i),a.lineTo(s,0),a.lineTo(s*.3,0),a.lineTo(s*.3,i),a.lineTo(-s*.3,i),a.lineTo(-s*.3,0),a.lineTo(-s,0),a.lineTo(-s,-i);break;case 3:a.moveTo(-s,-i),a.lineTo(s,-i),a.lineTo(s,i),a.lineTo(s*.4,i),a.lineTo(s*.4,i*.4),a.lineTo(-s*.4,i*.4),a.lineTo(-s*.4,i),a.lineTo(-s,i),a.lineTo(-s,-i);break}return a}createPark(e,t,s,i,a){const o=new je(s,s,8,8);o.rotateX(-Math.PI/2);const r=new V(o,this.materials.grass);r.position.set(e,.02,t),r.receiveShadow=!0,this.scene.add(r),this.allObjects.push(r);const n=5+Math.floor(Math.random()*4);for(let h=0;h<n;h++){const l=e+(Math.random()-.5)*s*.7,c=t+(Math.random()-.5)*s*.7;this.collectTree(i,l,c,.9+Math.random()*.6)}this.addCornerLamps(e,t,s,a)}createPlaza(e,t,s,i,a){const o=new je(s,s,4,4);o.rotateX(-Math.PI/2);const r=new V(o,this.materials.sidewalk);r.position.set(e,.02,t),r.receiveShadow=!0,this.scene.add(r),this.allObjects.push(r);for(let n=0;n<3;n++){const h=e+(Math.random()-.5)*s*.5,l=t+(Math.random()-.5)*s*.5;this.collectTree(i,h,l,.8+Math.random()*.4)}this.addCornerLamps(e,t,s,a)}createSidewalk(e,t,s){const a=s/2+2.5,o=s/2,r=new Ye;r.moveTo(-a,-a),r.lineTo(a,-a),r.lineTo(a,a),r.lineTo(-a,a),r.lineTo(-a,-a);const n=new Dt;n.moveTo(-o,-o),n.lineTo(o,-o),n.lineTo(o,o),n.lineTo(-o,o),n.lineTo(-o,-o),r.holes.push(n);const h=new Ze(r,{depth:.15,bevelEnabled:!1});h.rotateX(-Math.PI/2),h.translate(e,0,t);const l=new V(h,this.materials.sidewalk);return l.receiveShadow=!0,l}addSidewalkTrees(e,t,s,i){const a=s/2,o=1.5,r=6;for(let n=-a+3;n<=a-3;n+=r)Math.random()>.4&&this.collectTree(i,e+n,t+a+o),Math.random()>.4&&this.collectTree(i,e+n,t-a-o),Math.random()>.4&&this.collectTree(i,e+a+o,t+n),Math.random()>.4&&this.collectTree(i,e-a-o,t+n)}addCornerLamps(e,t,s,i){const a=s/2+2,o=[{x:e-a,z:t-a},{x:e+a,z:t-a},{x:e-a,z:t+a},{x:e+a,z:t+a}];for(const r of o){const n=this.getChunkKey(r.x,r.z);i.has(n)||i.set(n,[]),i.get(n).push(r)}}collectTree(e,t,s,i=1){const a=this.getChunkKey(t,s);e.has(a)||e.set(a,[]),e.get(a).push({x:t,z:s,scale:i,rotation:Math.random()*Math.PI*2})}createTreeInstances(e){const t=new $e(.15,.25,2.5,8);t.translate(0,1.25,0);const s=new Je(1.5,1);s.translate(0,3.8,0);const i=new Ge(t,this.materials.bark,e.length),a=new Ge(s,this.materials.leaves,e.length),o=new Se,r=new E,n=new et,h=new E,l=new E(0,1,0);for(let c=0;c<e.length;c++){const d=e[c];r.set(d.x,0,d.z),n.setFromAxisAngle(l,d.rotation),h.setScalar(d.scale),o.compose(r,n,h),i.setMatrixAt(c,o),a.setMatrixAt(c,o)}return i.castShadow=!0,i.receiveShadow=!0,a.castShadow=!0,a.receiveShadow=!0,i.instanceMatrix.needsUpdate=!0,a.instanceMatrix.needsUpdate=!0,[i,a]}createLampInstances(e){const t=this.createLampGeometry(),s=new Ge(t,this.materials.metal,e.length),i=new Se;for(let a=0;a<e.length;a++){const o=e[a];i.compose(new E(o.x,0,o.z),new et,new E(1,1,1)),s.setMatrixAt(a,i)}return s.castShadow=!0,s.instanceMatrix.needsUpdate=!0,s}createLampGeometry(){const e=[];for(let a=0;a<=5;a+=.25){const o=Math.max(.02,.09-a/5*.04);e.push(new I(o,a))}const t=new kt(e,8),s=new $e(.035,.035,.8,6);s.rotateZ(Math.PI/2),s.translate(.4,5,0);const i=new Je(.22,0);i.translate(.8,4.88,0);try{return is([t,s,i])}catch(a){return console.warn("[CityBuilder] mergeGeometries 失败，仅使用灯杆",a),t}}getChunkKey(e,t){const s=this.quality.chunkSize;return`${Math.floor(e/s)},${Math.floor(t/s)}`}addToChunk(e,t,s){const i=typeof t=="string"?t:this.getChunkKey(t,s);this.chunks.has(i)||this.chunks.set(i,{objects:[],loaded:!1}),this.chunks.get(i).objects.push(e)}getColliders(){return this.colliders}dispose(){for(const e of this.allObjects)e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose());this.allObjects=[],this.colliders=[],this.chunks.clear(),this.lodObjects=[]}}class os{constructor(){this.lodObjects=[]}register(e){this.lodObjects.push(e)}update(e){for(let t=0;t<this.lodObjects.length;t++)this.lodObjects[t].update(e)}dispose(){this.lodObjects=[]}}class rs{constructor(e,t){this.cityBuilder=e,this.quality=t,this.scene=e.scene,this.activeChunks=new Set,this.lodManager=new os}init(e){for(const t of this.cityBuilder.lodObjects)this.lodManager.register(t);this.update(new E(0,0,0),e)}update(e,t){const s=this.quality.chunkSize,i=Math.ceil(this.quality.loadDistance/s),a=Math.floor(e.x/s),o=Math.floor(e.z/s),r=new Set;for(let n=-i;n<=i;n++)for(let h=-i;h<=i;h++){if(n*n+h*h>i*i)continue;const l=`${a+n},${o+h}`;this.cityBuilder.chunks.has(l)&&(r.add(l),this.activeChunks.has(l)||this.loadChunk(l))}for(const n of this.activeChunks)r.has(n)||this.unloadChunk(n);t&&this.lodManager.update(t)}loadChunk(e){const t=this.cityBuilder.chunks.get(e);if(!(!t||t.loaded)){for(const s of t.objects)this.scene.add(s);t.loaded=!0,this.activeChunks.add(e)}}unloadChunk(e){const t=this.cityBuilder.chunks.get(e);if(!(!t||!t.loaded)){for(const s of t.objects)this.scene.remove(s);t.loaded=!1,this.activeChunks.delete(e)}}dispose(){for(const e of this.activeChunks)this.unloadChunk(e);this.lodManager.dispose()}}class ns{constructor(e,t){this.camera=e,this.quality=t,this.position=new E(0,0,0),this.velocity=new E(0,0,0),this.yaw=0,this.pitch=0,this.moveForward=0,this.moveRight=0,this.run=!1,this.grounded=!0,this.colliders=[],this._forward=new E,this._right=new E,this._targetVel=new E}init(){this.camera.rotation.order="YXZ"}setColliders(e){this.colliders=e}setMoveInput(e,t,s){this.moveForward=e,this.moveRight=t,this.run=s}addLook(e,t){this.yaw-=e*.0022,this.pitch-=t*.0022;const i=Math.PI/2-.02;this.pitch=Math.max(-i,Math.min(i,this.pitch))}jump(){this.grounded&&(this.velocity.y=Math.sqrt(2*this.quality.gravity*this.quality.jumpHeight),this.grounded=!1)}update(e){this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw));const t=this.run?this.quality.runSpeed:this.quality.moveSpeed;this._targetVel.set((this._forward.x*this.moveForward+this._right.x*this.moveRight)*t,0,(this._forward.z*this.moveForward+this._right.z*this.moveRight)*t);const s=this.grounded?14:4;this.velocity.x=pe.damp(this.velocity.x,this._targetVel.x,s,e),this.velocity.z=pe.damp(this.velocity.z,this._targetVel.z,s,e),this.velocity.y-=this.quality.gravity*e;const i=this.position.clone();i.x+=this.velocity.x*e,i.y+=this.velocity.y*e,i.z+=this.velocity.z*e;const a=this.resolveCollision(i);this.position.copy(a.position),this.grounded=a.grounded,this.grounded&&this.velocity.y<0&&(this.velocity.y=0),this.camera.position.set(this.position.x,this.position.y+this.quality.eyeHeight,this.position.z)}resolveCollision(e){const t=e.clone(),s=this.quality.playerRadius,i=this.quality.stepHeight;let a=!1;t.y<=0&&(t.y=0,a=!0);for(let o=0;o<this.colliders.length;o++){const r=this.colliders[o],n=(r.min.x+r.max.x)/2,h=(r.min.z+r.max.z)/2;if(!(Math.abs(t.x-n)>50||Math.abs(t.z-h)>50)&&t.x>r.min.x-s&&t.x<r.max.x+s&&t.z>r.min.z-s&&t.z<r.max.z+s){const l=r.max.y;if(t.y>=l-.05)t.y<l+.15&&(t.y=l,a=!0);else if(t.y>l-i)t.y=l,a=!0;else{const c=t.x-n,d=t.z-h,u=(r.max.x-r.min.x)/2+s,m=(r.max.z-r.min.z)/2+s;Math.abs(c)/u>Math.abs(d)/m?t.x=c>0?r.max.x+s:r.min.x-s:t.z=d>0?r.max.z+s:r.min.z-s}}}return{position:t,grounded:a}}dispose(){this.colliders=[]}}class ls{constructor(e){this.player=e,this.locked=!1,this.moveForward=0,this.moveRight=0,this.run=!1,this._onMouseMove=this.onMouseMove.bind(this),this._onKeyDown=this.onKeyDown.bind(this),this._onKeyUp=this.onKeyUp.bind(this),this._onPointerLockChange=this.onPointerLockChange.bind(this)}init(){this.canvas=document.querySelector("#canvas-container canvas"),document.addEventListener("mousemove",this._onMouseMove),document.addEventListener("keydown",this._onKeyDown),document.addEventListener("keyup",this._onKeyUp),document.addEventListener("pointerlockchange",this._onPointerLockChange)}lock(){this.canvas&&!this.locked&&this.canvas.requestPointerLock()}unlock(){document.pointerLockElement&&document.exitPointerLock()}onPointerLockChange(){this.locked=document.pointerLockElement===this.canvas,this.locked||(this.moveForward=0,this.moveRight=0,this.run=!1,this.player.setMoveInput(0,0,!1),this.onUnlock&&this.onUnlock())}onMouseMove(e){this.locked&&this.player.addLook(e.movementX,e.movementY)}onKeyDown(e){if(this.locked)switch(e.code){case"KeyW":case"ArrowUp":this.moveForward=1;break;case"KeyS":case"ArrowDown":this.moveForward=-1;break;case"KeyA":case"ArrowLeft":this.moveRight=-1;break;case"KeyD":case"ArrowRight":this.moveRight=1;break;case"ShiftLeft":case"ShiftRight":this.run=!0;break;case"Space":e.preventDefault(),this.player.jump();break}}onKeyUp(e){switch(e.code){case"KeyW":case"ArrowUp":this.moveForward>0&&(this.moveForward=0);break;case"KeyS":case"ArrowDown":this.moveForward<0&&(this.moveForward=0);break;case"KeyA":case"ArrowLeft":this.moveRight<0&&(this.moveRight=0);break;case"KeyD":case"ArrowRight":this.moveRight>0&&(this.moveRight=0);break;case"ShiftLeft":case"ShiftRight":this.run=!1;break}}update(){this.locked&&this.player.setMoveInput(this.moveForward,this.moveRight,this.run)}dispose(){document.removeEventListener("mousemove",this._onMouseMove),document.removeEventListener("keydown",this._onKeyDown),document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("pointerlockchange",this._onPointerLockChange)}}class hs{constructor(e){this.player=e,this.joystickActive=!1,this.joystickId=null,this.joystickStart={x:0,y:0},this.joystickRadius=60,this.lookId=null,this.lookLast={x:0,y:0},this.runPressed=!1,this._onTouchStart=this.onTouchStart.bind(this),this._onTouchMove=this.onTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onOrientationChange=this.onOrientationChange.bind(this)}init(){const e=document.getElementById("mobile-controls");e&&(e.style.display="block"),this.joystickZone=document.getElementById("joystick-zone"),this.joystickBase=document.getElementById("joystick-base"),this.joystickThumb=document.getElementById("joystick-thumb"),this.lookZone=document.getElementById("look-zone"),this.btnRun=document.getElementById("btn-run"),this.btnJump=document.getElementById("btn-jump"),document.addEventListener("touchstart",this._onTouchStart,{passive:!1}),document.addEventListener("touchmove",this._onTouchMove,{passive:!1}),document.addEventListener("touchend",this._onTouchEnd,{passive:!1}),document.addEventListener("touchcancel",this._onTouchEnd,{passive:!1}),this.btnRun.addEventListener("touchstart",t=>{t.preventDefault(),t.stopPropagation(),this.runPressed=!0,this.btnRun.classList.add("active")},{passive:!1}),this.btnRun.addEventListener("touchend",t=>{t.preventDefault(),t.stopPropagation(),this.runPressed=!1,this.btnRun.classList.remove("active")},{passive:!1}),this.btnJump.addEventListener("touchstart",t=>{t.preventDefault(),t.stopPropagation(),this.player.jump(),this.btnJump.classList.add("active")},{passive:!1}),this.btnJump.addEventListener("touchend",t=>{t.preventDefault(),t.stopPropagation(),this.btnJump.classList.remove("active")},{passive:!1}),window.addEventListener("orientationchange",this._onOrientationChange),this.onOrientationChange()}isInJoystickZone(e,t){return this.joystickZone.getBoundingClientRect(),e<window.innerWidth*.45&&t>window.innerHeight*.4}isInLookZone(e,t){return e>window.innerWidth*.4&&!(e>window.innerWidth-180&&t>window.innerHeight-120)}onTouchStart(e){e.preventDefault();for(const t of e.changedTouches){const s=t.clientX,i=t.clientY,a=document.elementFromPoint(s,i);a&&(a.id==="btn-run"||a.id==="btn-jump")||(this.isInJoystickZone(s,i)&&this.joystickId===null?(this.joystickId=t.identifier,this.joystickStart={x:s,y:i},this.joystickActive=!0,this.joystickBase.style.left=s-70+"px",this.joystickBase.style.top=i-70+"px",this.joystickBase.style.bottom="auto",this.joystickThumb.style.transform="translate(-50%, -50%)"):this.isInLookZone(s,i)&&this.lookId===null&&(this.lookId=t.identifier,this.lookLast={x:s,y:i}))}}onTouchMove(e){e.preventDefault();for(const t of e.changedTouches){if(t.identifier===this.joystickId){const s=t.clientX-this.joystickStart.x,i=t.clientY-this.joystickStart.y,a=Math.sqrt(s*s+i*i),o=Math.min(a,this.joystickRadius),r=Math.atan2(i,s),n=Math.cos(r)*o,h=Math.sin(r)*o;this.joystickThumb.style.transform=`translate(calc(-50% + ${n}px), calc(-50% + ${h}px))`;const l=o>0?s/a*(o/this.joystickRadius):0,c=o>0?i/a*(o/this.joystickRadius):0;this.player.setMoveInput(-c,l,this.runPressed)}if(t.identifier===this.lookId){const s=t.clientX-this.lookLast.x,i=t.clientY-this.lookLast.y;this.lookLast={x:t.clientX,y:t.clientY},this.player.addLook(s*1.5,i*1.5)}}}onTouchEnd(e){e.preventDefault();for(const t of e.changedTouches)t.identifier===this.joystickId&&(this.joystickId=null,this.joystickActive=!1,this.player.setMoveInput(0,0,!1),this.joystickBase.style.left="",this.joystickBase.style.top="",this.joystickBase.style.bottom="0",this.joystickThumb.style.transform="translate(-50%, -50%)"),t.identifier===this.lookId&&(this.lookId=null)}onOrientationChange(){const e=document.getElementById("rotate-hint");if(!e)return;const t=window.innerHeight>window.innerWidth;e.style.display=t?"flex":"none"}update(){this.joystickActive&&this.player.setMoveInput(this.player.moveForward,this.player.moveRight,this.runPressed)}dispose(){document.removeEventListener("touchstart",this._onTouchStart),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("touchcancel",this._onTouchEnd),window.removeEventListener("orientationchange",this._onOrientationChange)}}const me={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Y{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cs=new Lt(-1,1,1,-1,0,1);class us extends ht{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}}const ds=new us;class Ce{constructor(e){this._mesh=new V(ds,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cs)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ut extends Y{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof B?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=U.clone(e.uniforms),this.material=new B({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ce(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class nt extends Y{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){const i=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,r;this.inverse?(o=0,r=1):(o=1,r=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),a.buffers.stencil.setClear(r),a.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,4294967295),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}}class fs extends Y{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ms{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const s=e.getSize(new I);this._width=s.width,this._height=s.height,t=new $(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:J}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ut(me),this.copyPass.material.blending=q,this.clock=new ct}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let i=0,a=this.passes.length;i<a;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),o.needsSwap){if(s){const r=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}nt!==void 0&&(o instanceof nt?s=!0:o instanceof fs&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new I);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(s,i),this.renderTarget2.setSize(s,i);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(s,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class lt extends Y{constructor(e,t,s=null,i=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=i,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,t,s){const i=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}class ps{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,s){return e[0]*t+e[1]*s}dot3(e,t,s,i){return e[0]*t+e[1]*s+e[2]*i}dot4(e,t,s,i,a){return e[0]*t+e[1]*s+e[2]*i+e[3]*a}noise(e,t){let s,i,a;const o=.5*(Math.sqrt(3)-1),r=(e+t)*o,n=Math.floor(e+r),h=Math.floor(t+r),l=(3-Math.sqrt(3))/6,c=(n+h)*l,d=n-c,u=h-c,m=e-d,v=t-u;let x,A;m>v?(x=1,A=0):(x=0,A=1);const S=m-x+l,M=v-A+l,b=m-1+2*l,R=v-1+2*l,C=n&255,P=h&255,D=this.perm[C+this.perm[P]]%12,p=this.perm[C+x+this.perm[P+A]]%12,g=this.perm[C+1+this.perm[P+1]]%12;let y=.5-m*m-v*v;y<0?s=0:(y*=y,s=y*y*this.dot(this.grad3[D],m,v));let w=.5-S*S-M*M;w<0?i=0:(w*=w,i=w*w*this.dot(this.grad3[p],S,M));let T=.5-b*b-R*R;return T<0?a=0:(T*=T,a=T*T*this.dot(this.grad3[g],b,R)),70*(s+i+a)}noise3d(e,t,s){let i,a,o,r;const h=(e+t+s)*.3333333333333333,l=Math.floor(e+h),c=Math.floor(t+h),d=Math.floor(s+h),u=1/6,m=(l+c+d)*u,v=l-m,x=c-m,A=d-m,S=e-v,M=t-x,b=s-A;let R,C,P,D,p,g;S>=M?M>=b?(R=1,C=0,P=0,D=1,p=1,g=0):S>=b?(R=1,C=0,P=0,D=1,p=0,g=1):(R=0,C=0,P=1,D=1,p=0,g=1):M<b?(R=0,C=0,P=1,D=0,p=1,g=1):S<b?(R=0,C=1,P=0,D=0,p=1,g=1):(R=0,C=1,P=0,D=1,p=1,g=0);const y=S-R+u,w=M-C+u,T=b-P+u,L=S-D+2*u,F=M-p+2*u,te=b-g+2*u,se=S-1+3*u,ie=M-1+3*u,_=b-1+3*u,K=l&255,X=c&255,Z=d&255,ve=this.perm[K+this.perm[X+this.perm[Z]]]%12,ye=this.perm[K+R+this.perm[X+C+this.perm[Z+P]]]%12,we=this.perm[K+D+this.perm[X+p+this.perm[Z+g]]]%12,xe=this.perm[K+1+this.perm[X+1+this.perm[Z+1]]]%12;let H=.6-S*S-M*M-b*b;H<0?i=0:(H*=H,i=H*H*this.dot3(this.grad3[ve],S,M,b));let z=.6-y*y-w*w-T*T;z<0?a=0:(z*=z,a=z*z*this.dot3(this.grad3[ye],y,w,T));let W=.6-L*L-F*F-te*te;W<0?o=0:(W*=W,o=W*W*this.dot3(this.grad3[we],L,F,te));let j=.6-se*se-ie*ie-_*_;return j<0?r=0:(j*=j,r=j*j*this.dot3(this.grad3[xe],se,ie,_)),32*(i+a+o+r)}noise4d(e,t,s,i){const a=this.grad4,o=this.simplex,r=this.perm,n=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20;let l,c,d,u,m;const v=(e+t+s+i)*n,x=Math.floor(e+v),A=Math.floor(t+v),S=Math.floor(s+v),M=Math.floor(i+v),b=(x+A+S+M)*h,R=x-b,C=A-b,P=S-b,D=M-b,p=e-R,g=t-C,y=s-P,w=i-D,T=p>g?32:0,L=p>y?16:0,F=g>y?8:0,te=p>w?4:0,se=g>w?2:0,ie=y>w?1:0,_=T+L+F+te+se+ie,K=o[_][0]>=3?1:0,X=o[_][1]>=3?1:0,Z=o[_][2]>=3?1:0,ve=o[_][3]>=3?1:0,ye=o[_][0]>=2?1:0,we=o[_][1]>=2?1:0,xe=o[_][2]>=2?1:0,H=o[_][3]>=2?1:0,z=o[_][0]>=1?1:0,W=o[_][1]>=1?1:0,j=o[_][2]>=1?1:0,Qe=o[_][3]>=1?1:0,Pe=p-K+h,Re=g-X+h,Ae=y-Z+h,De=w-ve+h,ke=p-ye+2*h,Le=g-we+2*h,_e=y-xe+2*h,Ie=w-H+2*h,Ne=p-z+3*h,Fe=g-W+3*h,Be=y-j+3*h,Oe=w-Qe+3*h,Ue=p-1+4*h,He=g-1+4*h,ze=y-1+4*h,We=w-1+4*h,ae=x&255,oe=A&255,re=S&255,ne=M&255,dt=r[ae+r[oe+r[re+r[ne]]]]%32,ft=r[ae+K+r[oe+X+r[re+Z+r[ne+ve]]]]%32,mt=r[ae+ye+r[oe+we+r[re+xe+r[ne+H]]]]%32,pt=r[ae+z+r[oe+W+r[re+j+r[ne+Qe]]]]%32,gt=r[ae+1+r[oe+1+r[re+1+r[ne+1]]]]%32;let le=.6-p*p-g*g-y*y-w*w;le<0?l=0:(le*=le,l=le*le*this.dot4(a[dt],p,g,y,w));let he=.6-Pe*Pe-Re*Re-Ae*Ae-De*De;he<0?c=0:(he*=he,c=he*he*this.dot4(a[ft],Pe,Re,Ae,De));let ce=.6-ke*ke-Le*Le-_e*_e-Ie*Ie;ce<0?d=0:(ce*=ce,d=ce*ce*this.dot4(a[mt],ke,Le,_e,Ie));let ue=.6-Ne*Ne-Fe*Fe-Be*Be-Oe*Oe;ue<0?u=0:(ue*=ue,u=ue*ue*this.dot4(a[pt],Ne,Fe,Be,Oe));let de=.6-Ue*Ue-He*He-ze*ze-We*We;return de<0?m=0:(de*=de,m=de*de*this.dot4(a[gt],Ue,He,ze,We)),27*(l+c+d+u+m)}}const Me={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new I},cameraProjectionMatrix:{value:new Se},cameraInverseProjectionMatrix:{value:new Se},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background
				
			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},be={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Te={uniforms:{tDiffuse:{value:null},resolution:{value:new I}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class Q extends Y{constructor(e,t,s,i,a=32){super(),this.width=s!==void 0?s:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(a),this.generateRandomKernelRotations();const o=new _t;o.format=It,o.type=Nt,this.normalRenderTarget=new $(this.width,this.height,{minFilter:st,magFilter:st,type:J,depthTexture:o}),this.ssaoRenderTarget=new $(this.width,this.height,{type:J}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new B({defines:Object.assign({},Me.defines),uniforms:U.clone(Me.uniforms),vertexShader:Me.vertexShader,fragmentShader:Me.fragmentShader,blending:q}),this.ssaoMaterial.defines.KERNEL_SIZE=a,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Ft,this.normalMaterial.blending=q,this.blurMaterial=new B({defines:Object.assign({},Te.defines),uniforms:U.clone(Te.uniforms),vertexShader:Te.vertexShader,fragmentShader:Te.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new B({defines:Object.assign({},be.defines),uniforms:U.clone(be.uniforms),vertexShader:be.vertexShader,fragmentShader:be.fragmentShader,blending:q}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new B({uniforms:U.clone(me.uniforms),vertexShader:me.vertexShader,fragmentShader:me.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ot,blendDst:at,blendEquation:it,blendSrcAlpha:Bt,blendDstAlpha:at,blendEquationAlpha:it}),this.fsQuad=new Ce(null),this.originalClearColor=new ge}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t,s){switch(e.capabilities.isWebGL2===!1&&(this.noiseTexture.format=Ut),this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case Q.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=q,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Q.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=q,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Q.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Q.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=q,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Q.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=s.texture,this.copyMaterial.blending=q,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ht,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,s,i,a){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),r=e.autoClear;e.setRenderTarget(s),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(a||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=r,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,s,i,a){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),r=e.autoClear;e.setRenderTarget(s),e.autoClear=!1,i=t.clearColor||i,a=t.clearAlpha||a,i!=null&&(e.setClearColor(i),e.setClearAlpha(a||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=r,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(e){const t=this.kernel;for(let s=0;s<e;s++){const i=new E;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let a=s/e;a=pe.lerp(.1,1,a*a),i.multiplyScalar(a),t.push(i)}}generateRandomKernelRotations(){const s=new ps,i=4*4,a=new Float32Array(i);for(let o=0;o<i;o++){const r=Math.random()*2-1,n=Math.random()*2-1,h=0;a[o]=s.noise3d(r,n,h)}this.noiseTexture=new zt(a,4,4,Wt,jt),this.noiseTexture.wrapS=k,this.noiseTexture.wrapT=k,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(s){t.set(s,s.visible),(s.isPoints||s.isLine)&&(s.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(s){const i=t.get(s);s.visible=i}),t.clear()}}Q.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const gs={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ee extends Y{constructor(e,t,s,i){super(),this.strength=t!==void 0?t:1,this.radius=s,this.threshold=i,this.resolution=e!==void 0?new I(e.x,e.y):new I(256,256),this.clearColor=new ge(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $(a,o,{type:J}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const d=new $(a,o,{type:J});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new $(a,o,{type:J});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),a=Math.round(a/2),o=Math.round(o/2)}const r=gs;this.highPassUniforms=U.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new B({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const n=[3,5,7,9,11];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(n[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new I(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const l=me;this.copyUniforms=U.clone(l.uniforms),this.blendMaterial=new B({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:Gt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ge,this.oldClearAlpha=1,this.basic=new qt,this.fsQuad=new Ce(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let s=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(s,i);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(s,i),this.renderTargetsVertical[a].setSize(s,i),this.separableBlurMaterials[a].uniforms.invSize.value=new I(1/s,1/i),s=Math.round(s/2),i=Math.round(i/2)}render(e,t,s,i,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=s.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let r=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this.fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[n].uniforms.direction.value=ee.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[n]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=ee.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[n]),e.clear(),this.fsQuad.render(e),r=this.renderTargetsVertical[n];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(e*e))/e);return new B({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new I(.5,.5)},direction:{value:new I(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new B({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ee.BlurDirectionX=new I(1,0);ee.BlurDirectionY=new I(0,1);const vs={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new I(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},ys={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ws extends Y{constructor(){super();const e=ys;this.uniforms=U.clone(e.uniforms),this.material=new Vt({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ce(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===Kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xt?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zt?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fe?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$t&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class xs{constructor(e,t,s,i){this.renderer=e,this.scene=t,this.camera=s,this.quality=i,this.composer=null,this.ssaoPass=null,this.bloomPass=null,this.fxaaPass=null,this.outputPass=null}init(){const e=window.innerWidth,t=window.innerHeight;if(this.composer=new ms(this.renderer),this.quality.ssao)try{this.ssaoPass=new Q(this.scene,this.camera,e,t),this.ssaoPass.kernelRadius=8,this.ssaoPass.minDistance=.002,this.ssaoPass.maxDistance=.08,this.composer.addPass(this.ssaoPass)}catch(s){console.warn("[PostFX] SSAO 初始化失败，降级为 RenderPass",s);const i=new lt(this.scene,this.camera);this.composer.addPass(i)}else{const s=new lt(this.scene,this.camera);this.composer.addPass(s)}if(this.quality.bloom&&(this.bloomPass=new ee(new I(e,t),this.quality.bloomStrength,this.quality.bloomRadius,this.quality.bloomThreshold),this.composer.addPass(this.bloomPass)),this.quality.fxaa){this.fxaaPass=new ut(vs);const s=this.renderer.getPixelRatio();this.fxaaPass.material.uniforms.resolution.value.set(1/(e*s),1/(t*s)),this.composer.addPass(this.fxaaPass)}this.outputPass=new ws,this.composer.addPass(this.outputPass),this.composer.setSize(e,t),this.composer.setPixelRatio(this.renderer.getPixelRatio())}render(){this.composer&&this.composer.render()}resize(e,t){if(this.composer&&(this.composer.setSize(e,t),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.ssaoPass&&this.ssaoPass.setSize(e,t),this.bloomPass&&this.bloomPass.setSize(e,t),this.fxaaPass)){const s=this.renderer.getPixelRatio();this.fxaaPass.material.uniforms.resolution.value.set(1/(e*s),1/(t*s))}}dispose(){this.composer&&(this.composer.dispose(),this.composer=null)}}class Ms{init(){this.screenEl=document.getElementById("loading-screen"),this.barEl=document.getElementById("loading-bar"),this.percentEl=document.getElementById("loading-percent"),this.statusEl=document.getElementById("loading-status")}setProgress(e){this.barEl&&(this.barEl.style.width=e+"%"),this.percentEl&&(this.percentEl.textContent=Math.round(e)+"%")}setStatus(e){this.statusEl&&(this.statusEl.textContent=e)}hide(){this.screenEl&&(this.screenEl.style.opacity="0",setTimeout(()=>{this.screenEl.style.display="none"},800))}}class bs{constructor(e){this.quality=e}init(){this.containerEl=document.getElementById("hud"),this.hintEl=document.getElementById("hud-hint"),this.fpsEl=document.getElementById("hud-fps")}show(){this.containerEl&&(this.containerEl.style.display="block")}hide(){this.containerEl&&(this.containerEl.style.display="none")}setHint(e){this.hintEl&&(this.hintEl.textContent=e),clearTimeout(this._hintTimer),this.hintEl.style.opacity="1",this._hintTimer=setTimeout(()=>{this.hintEl&&(this.hintEl.style.opacity="0")},4e3)}setFPS(e){this.fpsEl&&(this.fpsEl.textContent=e+" FPS",e<30?this.fpsEl.style.color="rgba(255, 150, 100, 0.7)":e<50?this.fpsEl.style.color="rgba(255, 220, 100, 0.7)":this.fpsEl.style.color="rgba(150, 255, 150, 0.5)")}}class Ts{constructor(e,t,s){this.renderer=e,this.sceneManager=t,this.postProcessing=s,this._onLost=this.onContextLost.bind(this),this._onRestored=this.onContextRestored.bind(this)}init(){const e=this.renderer.renderer.domElement;e.addEventListener("webglcontextlost",this._onLost,!1),e.addEventListener("webglcontextrestored",this._onRestored,!1)}onContextLost(e){e.preventDefault(),console.warn("[ContextLoss] WebGL 上下文丢失"),this.contextLost=!0}onContextRestored(){if(console.log("[ContextLoss] WebGL 上下文已恢复，重建资源..."),this.sceneManager)try{this.sceneManager.updateSun()}catch(e){console.warn("[ContextLoss] PMREM 重建失败",e)}if(this.postProcessing)try{const e=window.innerWidth,t=window.innerHeight;this.postProcessing.resize(e,t)}catch(e){console.warn("[ContextLoss] 后期处理重建失败",e)}this.contextLost=!1,console.log("[ContextLoss] 资源重建完成")}dispose(){const e=this.renderer.renderer.domElement;e.removeEventListener("webglcontextlost",this._onLost),e.removeEventListener("webglcontextrestored",this._onRestored)}}class Ss{constructor(){this.qualityDetector=new Jt,this.quality=this.qualityDetector.detect(),console.log("[Game] 画质档位:",this.quality.label,this.quality),this.clock=new ct,this.started=!1,this.paused=!1,this.rafId=null,this._fpsFrames=0,this._fpsTime=0}async init(){this.loadingScreen=new Ms,this.loadingScreen.init(),this.loadingScreen.setStatus("正在初始化渲染引擎...");const e=document.getElementById("canvas-container");this.renderer=new es(this.quality),this.renderer.init(e),this.loadingScreen.setProgress(10),this.loadingScreen.setStatus("正在构建场景与天空..."),this.sceneManager=new ts(this.quality),this.sceneManager.init(this.renderer.renderer),this.loadingScreen.setProgress(20),this.loadingScreen.setStatus("正在生成纹理资源..."),this.assetLoader=new ss,await this.assetLoader.generateTextures(this.loadingScreen),this.loadingScreen.setProgress(40),this.loadingScreen.setStatus("正在生成环境反射贴图..."),await this.assetLoader.loadEnvironment(this.sceneManager),this.loadingScreen.setProgress(55),this.loadingScreen.setStatus("正在构建城市街区..."),this.cityBuilder=new as(this.sceneManager.scene,this.assetLoader,this.quality),await this.cityBuilder.build(this.loadingScreen),this.loadingScreen.setProgress(80),this.worldLoader=new rs(this.cityBuilder,this.quality),this.worldLoader.init(this.sceneManager.camera),this.player=new ns(this.sceneManager.camera,this.quality),this.player.setColliders(this.cityBuilder.getColliders()),this.player.init(),this.quality.isMobile?this.controls=new hs(this.player):(this.controls=new ls(this.player),this.controls.onUnlock=()=>{this.started=!1,this.showStartOverlay()}),this.controls.init(),this.loadingScreen.setProgress(90),this.postProcessing=new xs(this.renderer.renderer,this.sceneManager.scene,this.sceneManager.camera,this.quality),this.postProcessing.init(),this.hud=new bs(this.quality),this.hud.init(),this.contextLossHandler=new Ts(this.renderer,this.sceneManager,this.postProcessing),this.contextLossHandler.init(),this.loadingScreen.setProgress(100),this.loadingScreen.setStatus("加载完成"),await this.delay(400),this.loadingScreen.hide(),this.showStartOverlay(),this.clock.start(),this.animate()}showStartOverlay(){const e=document.getElementById("start-overlay");if(!e)return;e.style.display="flex",e.style.opacity="1";const t=s=>{s.preventDefault(),s.stopPropagation(),e.style.opacity="0",setTimeout(()=>{e.style.display="none"},400),this.started=!0,this.hud.show(),this.hud.setHint(this.quality.isMobile?"左下角摇杆移动 · 右侧滑动视角 · 按钮奔跑/跳跃":"WASD 移动 · 鼠标视角 · Shift 奔跑 · 空格跳跃 · Esc 暂停"),!this.quality.isMobile&&this.controls.lock&&this.controls.lock(),e.removeEventListener("click",t),e.removeEventListener("touchend",t)};e.addEventListener("click",t),e.addEventListener("touchend",t)}animate(){this.rafId=requestAnimationFrame(()=>this.animate());const e=Math.min(this.clock.getDelta(),.1);if(!this.paused&&!this.renderer.contextLost){this.started&&(this.controls.update(e),this.player.update(e),this.worldLoader.update(this.player.position,this.sceneManager.camera));const t=this.player?this.player.position:this.sceneManager.camera.position;this.sceneManager.update(t),this.postProcessing?this.postProcessing.render():this.renderer.renderer.render(this.sceneManager.scene,this.sceneManager.camera)}this.updateFPS(e)}updateFPS(e){if(this._fpsFrames++,this._fpsTime+=e,this._fpsTime>=.5){const t=Math.round(this._fpsFrames/this._fpsTime);this.hud&&this.hud.setFPS(t),this._fpsFrames=0,this._fpsTime=0}}handleResize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.resize(e,t),this.sceneManager.resize(e,t),this.postProcessing&&this.postProcessing.resize(e,t),this.controls&&this.controls.onOrientationChange&&this.controls.onOrientationChange()}handleVisibilityChange(e){this.paused=e,e||this.clock.getDelta()}delay(e){return new Promise(t=>setTimeout(t,e))}dispose(){var e,t,s,i,a,o,r;this.rafId&&cancelAnimationFrame(this.rafId),(e=this.controls)==null||e.dispose(),(t=this.player)==null||t.dispose(),(s=this.worldLoader)==null||s.dispose(),(i=this.cityBuilder)==null||i.dispose(),(a=this.postProcessing)==null||a.dispose(),(o=this.sceneManager)==null||o.dispose(),(r=this.renderer)==null||r.dispose()}}const Ve=new Ss;Ve.init().catch(f=>{console.error("游戏初始化失败:",f);const e=document.getElementById("loading-status");e&&(e.textContent="初始化失败: "+f.message,e.style.color="#ff6b6b")});window.addEventListener("resize",()=>Ve.handleResize());document.addEventListener("visibilitychange",()=>{Ve.handleVisibilityChange(document.hidden)});
