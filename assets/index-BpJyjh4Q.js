import{A as Re,P as wt,a as Mt,W as rs,S as F,M as z,b as G,B as ls,U as W,c as cs,V as R,d as hs,F as us,e as Wt,D as Vt,H as ds,f as fs,g as de,C as O,R as I,h as Tt,i as Fe,T as ps,j as dt,k as Kt,l as j,m as D,n as rt,L as bt,O as Ue,o as Ge,E as At,p as St,q as ms,r as Et,I as Rt,s as Be,Q as je,t as se,G as He,u as gs,v as qt,w as Ct,x as ce,y as he,N as J,z as Xt,J as H,K as vs,X as Ts,Y as ys,Z as ft,_ as xs,$ as _t,a0 as Lt,a1 as ws,a2 as Ms,a3 as bs,a4 as As,a5 as Ss,a6 as Es,a7 as Rs,a8 as Cs,a9 as le,aa as _s,ab as pt,ac as Ls,ad as Ps,ae as Is,af as Ds,ag as Ns,ah as ks,ai as Ce,aj as Qt,ak as K,al as V,am as Os,an as Fs,ao as Bs,ap as Hs,aq as Us,ar as Gs,as as Yt,at as js,au as zs,av as Ws,aw as Zt,ax as Vs,ay as Ks,az as qs,aA as lt,aB as Xs,aC as Qs,aD as Ys,aE as Zs,aF as $s,aG as Js,aH as ei,aI as ti,aJ as si,aK as ii,aL as ni,aM as oi,aN as $t,aO as ai,aP as Pt,aQ as It,aR as Dt,aS as Nt,aT as ri,aU as li,aV as ci}from"./three-Dkh824VZ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();class hi{constructor(){this.isMobile=!1,this.isIOS=!1,this.isAndroid=!1,this.gpuTier=1,this.deviceMemory=4,this.hardwareConcurrency=4}detect(){return this.detectDevice(),this.detectGPU(),this.detectHardware(),this.buildQualitySettings()}detectDevice(){const e=navigator.userAgent||"";this.isIOS=/iPad|iPhone|iPod/.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,this.isAndroid=/Android/i.test(e),this.isMobile=this.isIOS||this.isAndroid||/Mobi|Tablet|Silk/i.test(e)||"ontouchstart"in window&&window.innerWidth<1024}detectGPU(){try{const e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");if(!t){this.gpuTier=0;return}const i=t.getExtension("WEBGL_debug_renderer_info");if(i){const n=t.getParameter(i.UNMASKED_RENDERER_WEBGL)||"";/RTX [2-4]0|RTX 50|Quadro RTX|Radeon RX 7|Radeon Pro W|Apple M[1-3]/i.test(n)?this.gpuTier=2:/GTX 1[0-9]|RTX [2-3]0|Radeon RX [56]|Intel.*Iris|Apple GPU/i.test(n)?this.gpuTier=1:this.gpuTier=0}const s=t.getExtension("WEBGL_lose_context");s&&s.loseContext()}catch{this.gpuTier=1}}detectHardware(){this.deviceMemory=navigator.deviceMemory||4,this.hardwareConcurrency=navigator.hardwareConcurrency||4,(this.deviceMemory<=2||this.hardwareConcurrency<=2)&&(this.gpuTier=Math.min(this.gpuTier,0))}buildQualitySettings(){return this.isMobile?this.buildMobileSettings():this.gpuTier>=2?this.buildHighSettings():this.gpuTier>=1?this.buildMediumSettings():this.buildLowSettings()}buildHighSettings(){return{level:"high",isMobile:!1,isIOS:!1,isAndroid:!1,label:"高端PC",antialias:!0,pixelRatio:Math.min(window.devicePixelRatio,2),powerPreference:"high-performance",shadowMapEnabled:!0,shadowMapType:wt,shadowMapSize:4096,shadowCameraSize:80,shadowCameraFar:300,shadowBias:-5e-4,shadowUpdateInterval:2,toneMapping:Re,toneMappingExposure:1,fogDensity:.006,fogColor:12109016,farPlane:1500,ssao:!0,bloom:!0,fxaa:!1,bloomStrength:.35,bloomThreshold:.85,bloomRadius:.4,lodNear:60,lodMid:150,lodFar:300,chunkSize:50,loadDistance:350,unloadDistance:500,instanceDistance:400,moveSpeed:8,runSpeed:16,jumpHeight:2.2,eyeHeight:1.7,playerRadius:.4,stepHeight:.5,gravity:25}}buildMediumSettings(){return{level:"medium",isMobile:!1,isIOS:!1,isAndroid:!1,label:"普通PC",antialias:!0,pixelRatio:Math.min(window.devicePixelRatio,1.5),powerPreference:"high-performance",shadowMapEnabled:!0,shadowMapType:wt,shadowMapSize:2048,shadowCameraSize:60,shadowCameraFar:200,shadowBias:-5e-4,shadowUpdateInterval:3,toneMapping:Re,toneMappingExposure:.95,fogDensity:.008,fogColor:12109016,farPlane:1e3,ssao:!1,bloom:!0,fxaa:!1,bloomStrength:.3,bloomThreshold:.85,bloomRadius:.35,lodNear:50,lodMid:120,lodFar:250,chunkSize:50,loadDistance:280,unloadDistance:400,instanceDistance:300,moveSpeed:8,runSpeed:16,jumpHeight:2.2,eyeHeight:1.7,playerRadius:.4,stepHeight:.5,gravity:25}}buildLowSettings(){return{level:"low",isMobile:!1,isIOS:!1,isAndroid:!1,label:"低端PC",antialias:!1,pixelRatio:Math.min(window.devicePixelRatio,1),powerPreference:"high-performance",shadowMapEnabled:!0,shadowMapType:Mt,shadowMapSize:1024,shadowCameraSize:50,shadowCameraFar:150,shadowBias:-.001,shadowUpdateInterval:4,toneMapping:Re,toneMappingExposure:.9,fogDensity:.012,fogColor:12109016,farPlane:700,ssao:!1,bloom:!1,fxaa:!0,bloomStrength:.2,bloomThreshold:.85,bloomRadius:.3,lodNear:40,lodMid:90,lodFar:180,chunkSize:50,loadDistance:220,unloadDistance:320,instanceDistance:250,moveSpeed:8,runSpeed:16,jumpHeight:2.2,eyeHeight:1.7,playerRadius:.4,stepHeight:.5,gravity:25}}buildMobileSettings(){const e=this.deviceMemory<=3||this.hardwareConcurrency<=4;return{level:"mobile",isMobile:!0,isIOS:this.isIOS,isAndroid:this.isAndroid,label:this.isIOS?"iOS":"Android",antialias:!1,pixelRatio:Math.min(window.devicePixelRatio,e?1:1.5),powerPreference:"high-performance",shadowMapEnabled:!0,shadowMapType:Mt,shadowMapSize:e?512:1024,shadowCameraSize:45,shadowCameraFar:120,shadowBias:-.001,shadowUpdateInterval:5,toneMapping:Re,toneMappingExposure:1,fogDensity:.015,fogColor:12109016,farPlane:500,ssao:!1,bloom:!1,fxaa:!0,bloomStrength:0,bloomThreshold:.85,bloomRadius:0,lodNear:30,lodMid:70,lodFar:140,chunkSize:50,loadDistance:180,unloadDistance:260,instanceDistance:200,moveSpeed:8,runSpeed:16,jumpHeight:2.2,eyeHeight:1.7,playerRadius:.4,stepHeight:.5,gravity:25}}}class ui{constructor(e){this.quality=e,this.renderer=null,this.container=null}init(e){this.container=e;const t=document.createElement("canvas");t.style.display="block",t.style.width="100%",t.style.height="100%",t.style.touchAction="none",e.innerHTML="",e.appendChild(t),this.canvas=t;let i=null;const s={antialias:this.quality.antialias,powerPreference:this.quality.powerPreference,stencil:!1,depth:!0,alpha:!1,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1};try{i=t.getContext("webgl2",s)}catch(n){console.warn("[Renderer] WebGL2 上下文获取失败:",n.message)}if(!i)try{i=t.getContext("webgl",s)||t.getContext("experimental-webgl",s)}catch(n){console.warn("[Renderer] WebGL1 上下文获取失败:",n.message)}if(!i)throw new Error("当前浏览器不支持 WebGL，请升级浏览器或开启硬件加速");return this.renderer=new rs({canvas:t,context:i,antialias:this.quality.antialias,powerPreference:this.quality.powerPreference,stencil:!1,depth:!0}),this.renderer.setPixelRatio(this.quality.pixelRatio),this.renderer.outputColorSpace=F,this.renderer.toneMapping=this.quality.toneMapping,this.renderer.toneMappingExposure=this.quality.toneMappingExposure,this.quality.shadowMapEnabled?(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.quality.shadowMapType):this.renderer.shadowMap.enabled=!1,this.resize(window.innerWidth,window.innerHeight),this._onContextLost=this.onContextLost.bind(this),this._onContextRestored=this.onContextRestored.bind(this),t.addEventListener("webglcontextlost",this._onContextLost,!1),t.addEventListener("webglcontextrestored",this._onContextRestored,!1),this.renderer}onContextLost(e){e.preventDefault(),console.warn("[Renderer] WebGL 上下文丢失，等待恢复..."),this.contextLost=!0}onContextRestored(){console.log("[Renderer] WebGL 上下文已恢复"),this.contextLost=!1,this.renderer.setPixelRatio(this.quality.pixelRatio),this.renderer.outputColorSpace=F,this.renderer.toneMapping=this.quality.toneMapping,this.renderer.toneMappingExposure=this.quality.toneMappingExposure,this.quality.shadowMapEnabled&&(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.quality.shadowMapType)}resize(e,t){this.renderer&&this.renderer.setSize(e,t,!1)}dispose(){var e,t;if(this.canvas&&(this._onContextLost&&this.canvas.removeEventListener("webglcontextlost",this._onContextLost),this._onContextRestored&&this.canvas.removeEventListener("webglcontextrestored",this._onContextRestored)),this.renderer){this.renderer.dispose();try{(t=(e=this.renderer).forceContextLoss)==null||t.call(e)}catch{}}}}class ze extends z{constructor(){const e=ze.SkyShader,t=new G({name:e.name,uniforms:W.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:ls,depthWrite:!1});super(new cs(1,1,1),t),this.isSky=!0}}ze.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
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

		}`};class di{constructor(e){this.quality=e,this.scene=null,this.camera=null,this.sky=null,this.sun=null,this.hemiLight=null,this.pmremGenerator=null,this.envMapRT=null,this.sunElevation=18,this.sunAzimuth=180,this.sunDirection=new R}init(e){this.renderer=e,this.scene=new hs,this.scene.fog=new us(this.quality.fogColor,this.quality.fogDensity),this.camera=new Wt(72,window.innerWidth/window.innerHeight,.1,this.quality.farPlane),this.camera.position.set(0,this.quality.eyeHeight,0),this.sky=new ze,this.sky.scale.setScalar(this.quality.farPlane*.9),this.scene.add(this.sky);const t=this.sky.material.uniforms;return t.turbidity.value=8,t.rayleigh.value=2,t.mieCoefficient.value=.005,t.mieDirectionalG.value=.8,this.sun=new Vt(16774374,3),this.sun.castShadow=this.quality.shadowMapEnabled,this.sun.shadow.mapSize.set(this.quality.shadowMapSize,this.quality.shadowMapSize),this.sun.shadow.camera.near=.5,this.sun.shadow.camera.far=this.quality.shadowCameraFar,this.sun.shadow.camera.left=-this.quality.shadowCameraSize,this.sun.shadow.camera.right=this.quality.shadowCameraSize,this.sun.shadow.camera.top=this.quality.shadowCameraSize,this.sun.shadow.camera.bottom=-this.quality.shadowCameraSize,this.sun.shadow.bias=this.quality.shadowBias,this.sun.shadow.normalBias=.02,this.scene.add(this.sun),this.scene.add(this.sun.target),this.hemiLight=new ds(8893913,4866096,.5),this.scene.add(this.hemiLight),this.pmremGenerator=new fs(e),this.pmremGenerator.compileEquirectangularShader(),this.updateSun(),this.quality.shadowMapEnabled&&(this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0),this.scene}updateSun(){const e=de.degToRad(90-this.sunElevation),t=de.degToRad(this.sunAzimuth);this.sunDirection.setFromSphericalCoords(1,e,t),this.sky.material.uniforms.sunPosition.value.copy(this.sunDirection),this.sun.position.copy(this.sunDirection).multiplyScalar(200),this.envMapRT&&this.envMapRT.dispose(),this.envMapRT=this.pmremGenerator.fromScene(this.sky),this.scene.environment=this.envMapRT.texture}update(e){this.sun&&this.sun.castShadow&&(this.sun.target.position.copy(e),this.sun.position.copy(e).add(this.sunDirection.clone().multiplyScalar(150)),this.sun.target.updateMatrixWorld(),this._shadowFrame=(this._shadowFrame||0)+1,this._shadowFrame>=this.quality.shadowUpdateInterval&&(this._shadowFrame=0,this.renderer.shadowMap.needsUpdate=!0))}resize(e,t){this.camera&&(this.camera.aspect=e/t,this.camera.updateProjectionMatrix())}dispose(){this.envMapRT&&(this.envMapRT.dispose(),this.envMapRT=null),this.pmremGenerator&&(this.pmremGenerator.dispose(),this.pmremGenerator=null),this.scene&&this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())})}}class fi{constructor(){this.textures={}}async generateTextures(e){e&&e.setStatus("正在生成建筑纹理..."),await this.delay(30),this.textures.glassBuilding=this.createBuildingTextures({wallColor:"#2a3340",windowColor:"#4a7aaa",windowLitColor:"#ffd896",windowAlpha:.7,cols:6,rows:8,frameColor:"#1a1a22"}),e&&e.setProgress(25),this.textures.concreteBuilding=this.createBuildingTextures({wallColor:"#5a5a62",windowColor:"#3a4a5a",windowLitColor:"#ffe8c0",windowAlpha:.5,cols:5,rows:6,frameColor:"#3a3a42"}),e&&e.setProgress(28),this.textures.brickBuilding=this.createBuildingTextures({wallColor:"#6a4030",windowColor:"#3a4a4a",windowLitColor:"#ffd0a0",windowAlpha:.4,cols:4,rows:5,frameColor:"#4a2a1a",brick:!0}),e&&e.setProgress(30),e&&e.setStatus("正在生成地面纹理..."),await this.delay(30),this.textures.asphalt=this.createAsphaltTexture(),e&&e.setProgress(32),this.textures.sidewalk=this.createSidewalkTexture(),e&&e.setProgress(34),this.textures.grass=this.createGrassTexture(),e&&e.setProgress(36),e&&e.setStatus("正在生成植被纹理..."),await this.delay(30),this.textures.bark=this.createBarkTexture(),e&&e.setProgress(38),this.textures.leaves=this.createLeavesTexture(),e&&e.setProgress(39),this.textures.metal=this.createMetalTexture(),e&&e.setProgress(40)}async loadEnvironment(e){console.log("[AssetLoader] 使用 Sky 着色器环境贴图")}createBuildingTextures(e){const{wallColor:s,windowColor:n,windowLitColor:o,windowAlpha:a,cols:r,rows:l,frameColor:c,brick:h}=e,u=document.createElement("canvas");u.width=512,u.height=512;const d=u.getContext("2d");if(d.fillStyle=s,d.fillRect(0,0,512,512),this.addNoise(d,512,512,15),h){d.strokeStyle="rgba(0,0,0,0.25)",d.lineWidth=1.5;const w=512/(l*2),M=512/r;for(let A=0;A<l*2;A++){const S=A%2===0?0:M/2;for(let L=0;L<=r;L++){const N=L*M+S;d.strokeRect(N,A*w,M,w)}}}const p=512/r,g=512/l,m=p*.12,T=new Set;for(let w=0;w<l;w++)for(let M=0;M<r;M++){const A=M*p+m,S=w*g+m,L=p-m*2,N=g-m*2,U=Math.random()>.65;U&&T.add(w*r+M),d.fillStyle=U?o:n,d.globalAlpha=U?.8:a,d.fillRect(A,S,L,N),d.globalAlpha=1,d.strokeStyle=c,d.lineWidth=2,d.strokeRect(A,S,L,N),d.beginPath(),d.moveTo(A+L/2,S),d.lineTo(A+L/2,S+N),d.stroke()}const y=new O(u);y.wrapS=y.wrapT=I,y.colorSpace=F;const x=document.createElement("canvas");x.width=512,x.height=512;const v=x.getContext("2d");v.fillStyle="#8080ff",v.fillRect(0,0,512,512);for(let w=0;w<l;w++)for(let M=0;M<r;M++){const A=M*p+m,S=w*g+m,L=p-m*2,N=g-m*2;v.fillStyle="#7070e8",v.fillRect(A,S,L,N),v.strokeStyle="#9090ff",v.lineWidth=2,v.strokeRect(A,S,L,N)}const C=new O(x);C.wrapS=C.wrapT=I;const _=document.createElement("canvas");_.width=512,_.height=512;const E=_.getContext("2d");E.fillStyle="#000",E.fillRect(0,0,512,512);for(const w of T){const M=Math.floor(w/r),S=w%r*p+m,L=M*g+m,N=p-m*2,U=g-m*2;E.fillStyle=o,E.fillRect(S,L,N,U)}const P=new O(_);return P.wrapS=P.wrapT=I,P.colorSpace=F,{map:y,normalMap:C,emissiveMap:P}}createAsphaltTexture(){const i=document.createElement("canvas");i.width=512,i.height=512;const s=i.getContext("2d");s.fillStyle="#1c1c20",s.fillRect(0,0,512,512),this.addNoise(s,512,512,25),s.strokeStyle="rgba(10,10,10,0.5)",s.lineWidth=1;for(let l=0;l<12;l++){s.beginPath(),s.moveTo(Math.random()*512,Math.random()*512);for(let c=0;c<4;c++)s.lineTo(Math.random()*512,Math.random()*512);s.stroke()}const n=new O(i);n.wrapS=n.wrapT=I,n.colorSpace=F,n.repeat.set(10,10);const o=document.createElement("canvas");o.width=512,o.height=512;const a=o.getContext("2d");a.fillStyle="#8080ff",a.fillRect(0,0,512,512),this.addNoise(a,512,512,10);const r=new O(o);return r.wrapS=r.wrapT=I,{map:n,normalMap:r}}createSidewalkTexture(){const i=document.createElement("canvas");i.width=512,i.height=512;const s=i.getContext("2d");s.fillStyle="#6a6a6e",s.fillRect(0,0,512,512),this.addNoise(s,512,512,20),s.strokeStyle="rgba(40,40,40,0.4)",s.lineWidth=2;const n=128;for(let r=0;r<=512;r+=n)s.beginPath(),s.moveTo(r,0),s.lineTo(r,512),s.stroke();for(let r=0;r<=512;r+=n)s.beginPath(),s.moveTo(0,r),s.lineTo(512,r),s.stroke();const o=new O(i);o.wrapS=o.wrapT=I,o.colorSpace=F;const a=new O(i);return a.wrapS=a.wrapT=I,{map:o,normalMap:a}}createGrassTexture(){const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");s.fillStyle="#3a5a2a",s.fillRect(0,0,256,256);for(let l=0;l<800;l++){const c=Math.random()*256,h=Math.random()*256,u=3+Math.random()*5,d=60+Math.random()*60;s.strokeStyle=`rgb(${d*.4}, ${d}, ${d*.3})`,s.lineWidth=1,s.beginPath(),s.moveTo(c,h),s.lineTo(c+(Math.random()-.5)*2,h-u),s.stroke()}const n=new O(i);n.wrapS=n.wrapT=I,n.colorSpace=F,n.repeat.set(5,5);const o=document.createElement("canvas");o.width=256,o.height=256;const a=o.getContext("2d");a.fillStyle="#8080ff",a.fillRect(0,0,256,256),this.addNoise(a,256,256,15);const r=new O(o);return r.wrapS=r.wrapT=I,{map:n,normalMap:r}}createBarkTexture(){const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");s.fillStyle="#4a3020",s.fillRect(0,0,256,256);for(let l=0;l<30;l++){const c=Math.random()*256,h=2+Math.random()*6,u=30+Math.random()*40;s.fillStyle=`rgb(${u*.8}, ${u*.5}, ${u*.3})`,s.fillRect(c,0,h,256)}this.addNoise(s,256,256,20);const n=new O(i);n.wrapS=n.wrapT=I,n.colorSpace=F;const o=document.createElement("canvas");o.width=256,o.height=256;const a=o.getContext("2d");a.fillStyle="#8080ff",a.fillRect(0,0,256,256);for(let l=0;l<20;l++){const c=Math.random()*256;a.fillStyle="#7070e8",a.fillRect(c,0,3+Math.random()*4,256)}const r=new O(o);return r.wrapS=r.wrapT=I,{map:n,normalMap:r}}createLeavesTexture(){const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");s.fillStyle="#2a4a18",s.fillRect(0,0,256,256);for(let a=0;a<200;a++){const r=Math.random()*256,l=Math.random()*256,c=3+Math.random()*6,h=50+Math.random()*60;s.fillStyle=`rgba(${h*.3}, ${h}, ${h*.2}, 0.6)`,s.beginPath(),s.ellipse(r,l,c,c*.7,Math.random()*Math.PI,0,Math.PI*2),s.fill()}const n=new O(i);n.wrapS=n.wrapT=I,n.colorSpace=F;const o=new O(i);return o.wrapS=o.wrapT=I,{map:n,normalMap:o}}createMetalTexture(){const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");s.fillStyle="#4a4a52",s.fillRect(0,0,256,256);for(let a=0;a<256;a+=1){const r=60+Math.random()*30;s.fillStyle=`rgb(${r}, ${r}, ${r+4})`,s.fillRect(0,a,256,1)}const n=new O(i);n.wrapS=n.wrapT=I,n.colorSpace=F;const o=new O(i);return o.wrapS=o.wrapT=I,{map:n,normalMap:o}}addNoise(e,t,i,s){const n=e.getImageData(0,0,t,i),o=n.data;for(let a=0;a<o.length;a+=4){const r=(Math.random()-.5)*s;o[a]=Math.max(0,Math.min(255,o[a]+r)),o[a+1]=Math.max(0,Math.min(255,o[a+1]+r)),o[a+2]=Math.max(0,Math.min(255,o[a+2]+r))}e.putImageData(n,0,0)}delay(e){return new Promise(t=>setTimeout(t,e))}}function pi(f,e=!1){const t=f[0].index!==null,i=new Set(Object.keys(f[0].attributes)),s=new Set(Object.keys(f[0].morphAttributes)),n={},o={},a=f[0].morphTargetsRelative,r=new Tt;let l=0;for(let c=0;c<f.length;++c){const h=f[c];let u=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;n[d]===void 0&&(n[d]=[]),n[d].push(h.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;r.addGroup(l,d,c),l+=d}}if(t){let c=0;const h=[];for(let u=0;u<f.length;++u){const d=f[u].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+c);c+=f[u].attributes.position.count}r.setIndex(h)}for(const c in n){const h=kt(n[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;r.setAttribute(c,h)}for(const c in o){const h=o[c][0].length;if(h===0)break;r.morphAttributes=r.morphAttributes||{},r.morphAttributes[c]=[];for(let u=0;u<h;++u){const d=[];for(let g=0;g<o[c].length;++g)d.push(o[c][g][u]);const p=kt(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;r.morphAttributes[c].push(p)}}return r}function kt(f){let e,t,i,s=-1,n=0;for(let l=0;l<f.length;++l){const c=f[l];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=c.array.length}const o=new e(n);let a=0;for(let l=0;l<f.length;++l)o.set(f[l].array,a),a+=f[l].array.length;const r=new Fe(o,t,i);return s!==void 0&&(r.gpuType=s),r}function Ot(f,e){if(e===ps)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),f;if(e===dt||e===Kt){let t=f.getIndex();if(t===null){const o=[],a=f.getAttribute("position");if(a!==void 0){for(let r=0;r<a.count;r++)o.push(r);f.setIndex(o),t=f.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),f}const i=t.count-2,s=[];if(e===dt)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const n=f.clone();return n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),f}const mt={glass:{texKey:"glassBuilding",roughness:.28,metalness:.15,minHeight:15,maxHeight:42,minSize:8,maxSize:18,emissiveIntensity:.35,color:8952234},concrete:{texKey:"concreteBuilding",roughness:.75,metalness:.1,minHeight:10,maxHeight:28,minSize:10,maxSize:20,emissiveIntensity:.22,color:8947848},brick:{texKey:"brickBuilding",roughness:.88,metalness:.05,minHeight:7,maxHeight:16,minSize:8,maxSize:16,emissiveIntensity:.28,color:6963248}},Ft=Object.keys(mt);class mi{constructor(e,t,i,s){this.scene=e,this.assetLoader=t,this.quality=i,this.modelLoader=s,this.colliders=[],this.chunks=new Map,this.lodObjects=[],this.allObjects=[],this.materials=this.createMaterials(),this.medMaterials={}}createMaterials(){const e=this.assetLoader.textures,t={};for(const[i,s]of Object.entries(mt)){const n=e[s.texKey];t[i]=new j({map:n.map,normalMap:n.normalMap,emissiveMap:n.emissiveMap,emissive:16777215,emissiveIntensity:s.emissiveIntensity,roughness:s.roughness,metalness:s.metalness,normalScale:new D(.6,.6)})}return e.asphalt.map.repeat.set(25,25),e.asphalt.normalMap.repeat.set(25,25),t.ground=new j({map:e.asphalt.map,normalMap:e.asphalt.normalMap,roughness:.92,metalness:0}),e.sidewalk.map.repeat.set(4,4),e.sidewalk.normalMap.repeat.set(4,4),t.sidewalk=new j({map:e.sidewalk.map,normalMap:e.sidewalk.normalMap,roughness:.85,metalness:.05}),e.grass.map.repeat.set(6,6),e.grass.normalMap.repeat.set(6,6),t.grass=new j({map:e.grass.map,normalMap:e.grass.normalMap,roughness:.9,metalness:0}),t.bark=new j({map:e.bark.map,normalMap:e.bark.normalMap,roughness:.9,metalness:0}),t.leaves=new j({map:e.leaves.map,normalMap:e.leaves.normalMap,roughness:.8,metalness:0,color:6982218}),t.metal=new j({map:e.metal.map,normalMap:e.metal.normalMap,roughness:.4,metalness:.8}),t}async build(e){this.createGround();const t=6,i=28,n=i+14,o=(t-1)*n/2,a=new Map,r=new Map;for(let l=0;l<t;l++)for(let c=0;c<t;c++){const h=l*n-o,u=c*n-o,d=Math.random();d<.72?this.createBuildingBlock(h,u,i,a,r):d<.87?this.createPark(h,u,i,a,r):this.createPlaza(h,u,i,a,r);const p=this.createSidewalk(h,u,i);this.scene.add(p),this.allObjects.push(p);const g=(l*t+c+1)/(t*t);e&&(l*t+c)%2===0&&(e.setProgress(55+g*20),e.setStatus(`正在构建城市街区... ${Math.round(g*100)}%`)),(l*t+c)%3===0&&await new Promise(m=>setTimeout(m,10))}for(const[l,c]of a){if(c.length===0)continue;const h=this.createTreeInstances(c);for(const u of h)this.addToChunk(u,l)}for(const[l,c]of r){if(c.length===0)continue;const h=this.createLampInstances(c);h&&this.addToChunk(h,l)}console.log(`[CityBuilder] 城市构建完成: ${this.colliders.length} 个碰撞体, ${this.lodObjects.length} 个LOD对象, ${this.chunks.size} 个Chunk`)}createGround(){const t=new rt(320,320,32,32);t.rotateX(-Math.PI/2);const i=t.attributes.position;for(let n=0;n<i.count;n++)i.setY(n,(Math.random()-.5)*.04);i.needsUpdate=!0,t.computeVertexNormals();const s=new z(t,this.materials.ground);s.receiveShadow=!0,this.scene.add(s),this.allObjects.push(s)}createBuildingBlock(e,t,i,s,n){const o=1+Math.floor(Math.random()*3),a=2;if(o===1){const r=i-a*2-Math.random()*4,l=i-a*2-Math.random()*4;this.createBuilding(e,t,r,l)}else{const r=Math.random()>.5?"x":"z";for(let l=0;l<o;l++){const c=r==="x"?e-i/2+l*i/o+a:e+(Math.random()-.5)*(i-12),h=r==="z"?t-i/2+l*i/o+a:t+(Math.random()-.5)*(i-12),u=r==="x"?i/o-a*1.5:8+Math.random()*8,d=r==="z"?i/o-a*1.5:8+Math.random()*8;this.createBuilding(c+u/2-i/2+e,h+d/2-i/2+t,u,d)}}this.addSidewalkTrees(e,t,i,s),this.addCornerLamps(e,t,i,n),this.addStreetProps(e,t,i)}addStreetProps(e,t,i){if(!this.modelLoader||!this.modelLoader.loaded)return;const s=i/2,n=3,o=this.modelLoader.getCars(),a=this.modelLoader.getProps();if(o.length>0){const r=1+Math.floor(Math.random()*2);for(let l=0;l<r;l++){const c=o[Math.floor(Math.random()*o.length)],h=this.modelLoader.clone(c);if(!h)continue;const u=Math.random()>.5?1:-1,d=(Math.random()-.5)*(i-8);Math.random()>.5?(h.position.set(e+d,0,t+u*(s+n)),h.rotation.y=u>0?Math.PI/2:-Math.PI/2):(h.position.set(e+u*(s+n),0,t+d),h.rotation.y=u>0?0:Math.PI),this.addToChunk(h,h.position.x,h.position.z),this.allObjects.push(h)}}if(a.length>0&&Math.random()>.3){const r=1+Math.floor(Math.random()*2);for(let l=0;l<r;l++){const c=a[Math.floor(Math.random()*a.length)];if(c.startsWith("streetlight")||c.startsWith("trafficlight"))continue;const h=this.modelLoader.clone(c);if(!h)continue;const u=e+(Math.random()-.5)*(i-4),d=t+s+1.5;h.position.set(u,0,d),h.rotation.y=Math.random()*Math.PI*2,this.addToChunk(h,u,d),this.allObjects.push(h)}}}createBuilding(e,t,i,s){if(this.modelLoader&&this.modelLoader.loaded){const n=this.modelLoader.getBuildings();if(n.length>0){const o=n[Math.floor(Math.random()*n.length)],a=this.modelLoader.clone(o);if(a){const r=this.modelLoader.getModelSize(o),l=i/Math.max(r.width,.1),c=s/Math.max(r.depth,.1),h=.8+Math.random()*.6;a.scale.set(l,h,c),a.position.set(e,0,t),a.rotation.y=Math.random()*Math.PI*2;const u=new bt;u.addLevel(a,0);const d=this.modelLoader.clone(o);d&&(d.scale.copy(a.scale),d.position.copy(a.position),d.rotation.copy(a.rotation),d.traverse(m=>{m.isMesh&&(m.castShadow=!1)}),u.addLevel(d,this.quality.lodNear)),u.addLevel(new Ue,this.quality.lodFar);const p=r.height*h,g=new Ge(new R(e-i/2,0,t-s/2),new R(e+i/2,p,t+s/2));this.colliders.push(g),this.addToChunk(u,e,t),this.lodObjects.push(u),this.allObjects.push(u);return}}}this.createProceduralBuilding(e,t,i,s)}createProceduralBuilding(e,t,i,s){const n=Ft[Math.floor(Math.random()*Ft.length)],o=mt[n],a=o.minHeight+Math.random()*(o.maxHeight-o.minHeight),r=this.createBuildingShape(i,s),l=new At(r,{depth:a,bevelEnabled:!0,bevelThickness:.4,bevelSize:.3,bevelSegments:1,steps:1});l.rotateX(-Math.PI/2),l.translate(e,0,t);const c=l.attributes.uv,h=(i+s)/6,u=a/3.5;for(let x=0;x<c.count;x++)c.setXY(x,c.getX(x)*h,c.getY(x)*u);c.needsUpdate=!0;const d=this.materials[n];this.medMaterials[n]||(this.medMaterials[n]=new j({color:o.color,roughness:o.roughness+.1,metalness:o.metalness*.5}));const p=this.medMaterials[n],g=new bt,m=new z(l,d);m.castShadow=!0,m.receiveShadow=!0,g.addLevel(m,0);const T=new z(l,p);T.castShadow=!1,T.receiveShadow=!0,g.addLevel(T,this.quality.lodNear),g.addLevel(new Ue,this.quality.lodFar);const y=new Ge(new R(e-i/2,0,t-s/2),new R(e+i/2,a,t+s/2));this.colliders.push(y),this.addToChunk(g,e,t),this.lodObjects.push(g),this.allObjects.push(g)}createBuildingShape(e,t){const i=e/2,s=t/2,n=new St;switch(Math.floor(Math.random()*4)){case 0:n.moveTo(-i,-s),n.lineTo(i,-s),n.lineTo(i,s),n.lineTo(-i,s),n.lineTo(-i,-s);break;case 1:n.moveTo(-i,-s),n.lineTo(i,-s),n.lineTo(i,s*.2),n.lineTo(i*.2,s*.2),n.lineTo(i*.2,s),n.lineTo(-i,s),n.lineTo(-i,-s);break;case 2:n.moveTo(-i,-s),n.lineTo(i,-s),n.lineTo(i,0),n.lineTo(i*.3,0),n.lineTo(i*.3,s),n.lineTo(-i*.3,s),n.lineTo(-i*.3,0),n.lineTo(-i,0),n.lineTo(-i,-s);break;case 3:n.moveTo(-i,-s),n.lineTo(i,-s),n.lineTo(i,s),n.lineTo(i*.4,s),n.lineTo(i*.4,s*.4),n.lineTo(-i*.4,s*.4),n.lineTo(-i*.4,s),n.lineTo(-i,s),n.lineTo(-i,-s);break}return n}createPark(e,t,i,s,n){const o=new rt(i,i,8,8);o.rotateX(-Math.PI/2);const a=new z(o,this.materials.grass);a.position.set(e,.02,t),a.receiveShadow=!0,this.scene.add(a),this.allObjects.push(a);const r=5+Math.floor(Math.random()*4);for(let l=0;l<r;l++){const c=e+(Math.random()-.5)*i*.7,h=t+(Math.random()-.5)*i*.7;this.collectTree(s,c,h,.9+Math.random()*.6)}this.addCornerLamps(e,t,i,n)}createPlaza(e,t,i,s,n){const o=new rt(i,i,4,4);o.rotateX(-Math.PI/2);const a=new z(o,this.materials.sidewalk);a.position.set(e,.02,t),a.receiveShadow=!0,this.scene.add(a),this.allObjects.push(a);for(let r=0;r<3;r++){const l=e+(Math.random()-.5)*i*.5,c=t+(Math.random()-.5)*i*.5;this.collectTree(s,l,c,.8+Math.random()*.4)}this.addCornerLamps(e,t,i,n)}createSidewalk(e,t,i){const n=i/2+2.5,o=i/2,a=new St;a.moveTo(-n,-n),a.lineTo(n,-n),a.lineTo(n,n),a.lineTo(-n,n),a.lineTo(-n,-n);const r=new ms;r.moveTo(-o,-o),r.lineTo(o,-o),r.lineTo(o,o),r.lineTo(-o,o),r.lineTo(-o,-o),a.holes.push(r);const l=new At(a,{depth:.15,bevelEnabled:!1});l.rotateX(-Math.PI/2),l.translate(e,0,t);const c=new z(l,this.materials.sidewalk);return c.receiveShadow=!0,c}addSidewalkTrees(e,t,i,s){const n=i/2,o=1.5,a=6;for(let r=-n+3;r<=n-3;r+=a)Math.random()>.4&&this.collectTree(s,e+r,t+n+o),Math.random()>.4&&this.collectTree(s,e+r,t-n-o),Math.random()>.4&&this.collectTree(s,e+n+o,t+r),Math.random()>.4&&this.collectTree(s,e-n-o,t+r)}addCornerLamps(e,t,i,s){const n=i/2+2,o=[{x:e-n,z:t-n},{x:e+n,z:t-n},{x:e-n,z:t+n},{x:e+n,z:t+n}];for(const a of o){const r=this.getChunkKey(a.x,a.z);s.has(r)||s.set(r,[]),s.get(r).push(a)}}collectTree(e,t,i,s=1){const n=this.getChunkKey(t,i);e.has(n)||e.set(n,[]),e.get(n).push({x:t,z:i,scale:s,rotation:Math.random()*Math.PI*2})}createTreeInstances(e){const t=new Et(.15,.25,2.5,8);t.translate(0,1.25,0);const i=new Rt(1.5,1);i.translate(0,3.8,0);const s=new Be(t,this.materials.bark,e.length),n=new Be(i,this.materials.leaves,e.length),o=new se,a=new R,r=new je,l=new R,c=new R(0,1,0);for(let h=0;h<e.length;h++){const u=e[h];a.set(u.x,0,u.z),r.setFromAxisAngle(c,u.rotation),l.setScalar(u.scale),o.compose(a,r,l),s.setMatrixAt(h,o),n.setMatrixAt(h,o)}return s.castShadow=!0,s.receiveShadow=!0,n.castShadow=!1,n.receiveShadow=!0,s.instanceMatrix.needsUpdate=!0,n.instanceMatrix.needsUpdate=!0,[s,n]}createLampInstances(e){if(this.modelLoader&&this.modelLoader.loaded&&this.modelLoader.models.streetlight){const n=new He;for(const o of e){const a=this.modelLoader.clone("streetlight");a&&(a.position.set(o.x,0,o.z),a.rotation.y=Math.random()*Math.PI*2,n.add(a))}return n}const t=this.createLampGeometry(),i=new Be(t,this.materials.metal,e.length),s=new se;for(let n=0;n<e.length;n++){const o=e[n];s.compose(new R(o.x,0,o.z),new je,new R(1,1,1)),i.setMatrixAt(n,s)}return i.castShadow=!0,i.instanceMatrix.needsUpdate=!0,i}createLampGeometry(){const e=[];for(let n=0;n<=5;n+=.25){const o=Math.max(.02,.09-n/5*.04);e.push(new D(o,n))}const t=new gs(e,8),i=new Et(.035,.035,.8,6);i.rotateZ(Math.PI/2),i.translate(.4,5,0);const s=new Rt(.22,0);s.translate(.8,4.88,0);try{return pi([t,i,s])}catch(n){return console.warn("[CityBuilder] mergeGeometries 失败，仅使用灯杆",n),t}}getChunkKey(e,t){const i=this.quality.chunkSize;return`${Math.floor(e/i)},${Math.floor(t/i)}`}addToChunk(e,t,i){const s=typeof t=="string"?t:this.getChunkKey(t,i);this.chunks.has(s)||this.chunks.set(s,{objects:[],loaded:!1}),this.chunks.get(s).objects.push(e)}getColliders(){return this.colliders}dispose(){for(const e of this.allObjects)e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose());for(const e in this.medMaterials)this.medMaterials[e].dispose();this.medMaterials={},this.allObjects=[],this.colliders=[],this.chunks.clear(),this.lodObjects=[]}}class gi{constructor(){this.lodObjects=[],this.frameCount=0,this.updateInterval=3}register(e){this.lodObjects.push(e)}update(e){if(this.frameCount++,!(this.frameCount<this.updateInterval)){this.frameCount=0;for(let t=0;t<this.lodObjects.length;t++)this.lodObjects[t].update(e)}}setInterval(e){this.updateInterval=Math.max(1,e)}dispose(){this.lodObjects=[]}}class vi{constructor(e,t){this.cityBuilder=e,this.quality=t,this.scene=e.scene,this.activeChunks=new Set,this.lodManager=new gi}init(e){for(const t of this.cityBuilder.lodObjects)this.lodManager.register(t);this.update(new R(0,0,0),e)}update(e,t){const i=this.quality.chunkSize,s=Math.ceil(this.quality.loadDistance/i),n=Math.floor(e.x/i),o=Math.floor(e.z/i),a=new Set;for(let r=-s;r<=s;r++)for(let l=-s;l<=s;l++){if(r*r+l*l>s*s)continue;const c=`${n+r},${o+l}`;this.cityBuilder.chunks.has(c)&&(a.add(c),this.activeChunks.has(c)||this.loadChunk(c))}for(const r of this.activeChunks)a.has(r)||this.unloadChunk(r);t&&this.lodManager.update(t)}loadChunk(e){const t=this.cityBuilder.chunks.get(e);if(!(!t||t.loaded)){for(const i of t.objects)this.scene.add(i);t.loaded=!0,this.activeChunks.add(e)}}unloadChunk(e){const t=this.cityBuilder.chunks.get(e);if(!(!t||!t.loaded)){for(const i of t.objects)this.scene.remove(i);t.loaded=!1,this.activeChunks.delete(e)}}dispose(){for(const e of this.activeChunks)this.unloadChunk(e);this.lodManager.dispose()}}class Ti{constructor(e,t){this.camera=e,this.quality=t,this.position=new R(0,0,0),this.velocity=new R(0,0,0),this.yaw=0,this.pitch=0,this.moveForward=0,this.moveRight=0,this.run=!1,this.grounded=!0,this.colliders=[],this._forward=new R,this._right=new R,this._targetVel=new R}init(){this.camera.rotation.order="YXZ"}setColliders(e){this.colliders=e}setMoveInput(e,t,i){this.moveForward=e,this.moveRight=t,this.run=i}addLook(e,t){this.yaw-=e*.0022,this.pitch-=t*.0022;const s=Math.PI/2-.02;this.pitch=Math.max(-s,Math.min(s,this.pitch))}jump(){this.grounded&&(this.velocity.y=Math.sqrt(2*this.quality.gravity*this.quality.jumpHeight),this.grounded=!1)}update(e){this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw));const t=this.run?this.quality.runSpeed:this.quality.moveSpeed;this._targetVel.set((this._forward.x*this.moveForward+this._right.x*this.moveRight)*t,0,(this._forward.z*this.moveForward+this._right.z*this.moveRight)*t);const i=this.grounded?14:4;this.velocity.x=de.damp(this.velocity.x,this._targetVel.x,i,e),this.velocity.z=de.damp(this.velocity.z,this._targetVel.z,i,e),this.velocity.y-=this.quality.gravity*e;const s=this.position.clone();s.x+=this.velocity.x*e,s.y+=this.velocity.y*e,s.z+=this.velocity.z*e;const n=this.resolveCollision(s);this.position.copy(n.position),this.grounded=n.grounded,this.grounded&&this.velocity.y<0&&(this.velocity.y=0),this.camera.position.set(this.position.x,this.position.y+this.quality.eyeHeight,this.position.z)}resolveCollision(e){const t=e.clone(),i=this.quality.playerRadius,s=this.quality.stepHeight;let n=!1;t.y<=0&&(t.y=0,n=!0);for(let o=0;o<this.colliders.length;o++){const a=this.colliders[o],r=(a.min.x+a.max.x)/2,l=(a.min.z+a.max.z)/2;if(!(Math.abs(t.x-r)>50||Math.abs(t.z-l)>50)&&t.x>a.min.x-i&&t.x<a.max.x+i&&t.z>a.min.z-i&&t.z<a.max.z+i){const c=a.max.y;if(t.y>=c-.05)t.y<c+.15&&(t.y=c,n=!0);else if(t.y>c-s)t.y=c,n=!0;else{const h=t.x-r,u=t.z-l,d=(a.max.x-a.min.x)/2+i,p=(a.max.z-a.min.z)/2+i;Math.abs(h)/d>Math.abs(u)/p?t.x=h>0?a.max.x+i:a.min.x-i:t.z=u>0?a.max.z+i:a.min.z-i}}}return{position:t,grounded:n}}dispose(){this.colliders=[]}}class yi{constructor(e){this.player=e,this.locked=!1,this.moveForward=0,this.moveRight=0,this.run=!1,this._onMouseMove=this.onMouseMove.bind(this),this._onKeyDown=this.onKeyDown.bind(this),this._onKeyUp=this.onKeyUp.bind(this),this._onPointerLockChange=this.onPointerLockChange.bind(this)}init(){this.canvas=document.querySelector("#canvas-container canvas"),document.addEventListener("mousemove",this._onMouseMove),document.addEventListener("keydown",this._onKeyDown),document.addEventListener("keyup",this._onKeyUp),document.addEventListener("pointerlockchange",this._onPointerLockChange)}lock(){this.canvas&&!this.locked&&this.canvas.requestPointerLock()}unlock(){document.pointerLockElement&&document.exitPointerLock()}onPointerLockChange(){this.locked=document.pointerLockElement===this.canvas,this.locked||(this.moveForward=0,this.moveRight=0,this.run=!1,this.player.setMoveInput(0,0,!1),this.onUnlock&&this.onUnlock())}onMouseMove(e){this.locked&&this.player.addLook(e.movementX,e.movementY)}onKeyDown(e){if(this.locked)switch(e.code){case"KeyW":case"ArrowUp":this.moveForward=1;break;case"KeyS":case"ArrowDown":this.moveForward=-1;break;case"KeyA":case"ArrowLeft":this.moveRight=-1;break;case"KeyD":case"ArrowRight":this.moveRight=1;break;case"ShiftLeft":case"ShiftRight":this.run=!0;break;case"Space":e.preventDefault(),this.player.jump();break}}onKeyUp(e){switch(e.code){case"KeyW":case"ArrowUp":this.moveForward>0&&(this.moveForward=0);break;case"KeyS":case"ArrowDown":this.moveForward<0&&(this.moveForward=0);break;case"KeyA":case"ArrowLeft":this.moveRight<0&&(this.moveRight=0);break;case"KeyD":case"ArrowRight":this.moveRight>0&&(this.moveRight=0);break;case"ShiftLeft":case"ShiftRight":this.run=!1;break}}update(){this.locked&&this.player.setMoveInput(this.moveForward,this.moveRight,this.run)}dispose(){document.removeEventListener("mousemove",this._onMouseMove),document.removeEventListener("keydown",this._onKeyDown),document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("pointerlockchange",this._onPointerLockChange)}}class xi{constructor(e){this.player=e,this.joystickActive=!1,this.joystickId=null,this.joystickStart={x:0,y:0},this.joystickRadius=60,this.lookId=null,this.lookLast={x:0,y:0},this.runPressed=!1,this._onTouchStart=this.onTouchStart.bind(this),this._onTouchMove=this.onTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onOrientationChange=this.onOrientationChange.bind(this)}init(){const e=document.getElementById("mobile-controls");e&&(e.style.display="block"),this.joystickZone=document.getElementById("joystick-zone"),this.joystickBase=document.getElementById("joystick-base"),this.joystickThumb=document.getElementById("joystick-thumb"),this.lookZone=document.getElementById("look-zone"),this.btnRun=document.getElementById("btn-run"),this.btnJump=document.getElementById("btn-jump"),document.addEventListener("touchstart",this._onTouchStart,{passive:!1}),document.addEventListener("touchmove",this._onTouchMove,{passive:!1}),document.addEventListener("touchend",this._onTouchEnd,{passive:!1}),document.addEventListener("touchcancel",this._onTouchEnd,{passive:!1}),this.btnRun.addEventListener("touchstart",t=>{t.preventDefault(),t.stopPropagation(),this.runPressed=!0,this.btnRun.classList.add("active")},{passive:!1}),this.btnRun.addEventListener("touchend",t=>{t.preventDefault(),t.stopPropagation(),this.runPressed=!1,this.btnRun.classList.remove("active")},{passive:!1}),this.btnJump.addEventListener("touchstart",t=>{t.preventDefault(),t.stopPropagation(),this.player.jump(),this.btnJump.classList.add("active")},{passive:!1}),this.btnJump.addEventListener("touchend",t=>{t.preventDefault(),t.stopPropagation(),this.btnJump.classList.remove("active")},{passive:!1}),window.addEventListener("orientationchange",this._onOrientationChange),this.onOrientationChange()}isInJoystickZone(e,t){return this.joystickZone.getBoundingClientRect(),e<window.innerWidth*.45&&t>window.innerHeight*.4}isInLookZone(e,t){return e>window.innerWidth*.4&&!(e>window.innerWidth-180&&t>window.innerHeight-120)}onTouchStart(e){e.preventDefault();for(const t of e.changedTouches){const i=t.clientX,s=t.clientY,n=document.elementFromPoint(i,s);n&&(n.id==="btn-run"||n.id==="btn-jump")||(this.isInJoystickZone(i,s)&&this.joystickId===null?(this.joystickId=t.identifier,this.joystickStart={x:i,y:s},this.joystickActive=!0,this.joystickBase.style.left=i-70+"px",this.joystickBase.style.top=s-70+"px",this.joystickBase.style.bottom="auto",this.joystickThumb.style.transform="translate(-50%, -50%)"):this.isInLookZone(i,s)&&this.lookId===null&&(this.lookId=t.identifier,this.lookLast={x:i,y:s}))}}onTouchMove(e){e.preventDefault();for(const t of e.changedTouches){if(t.identifier===this.joystickId){const i=t.clientX-this.joystickStart.x,s=t.clientY-this.joystickStart.y,n=Math.sqrt(i*i+s*s),o=Math.min(n,this.joystickRadius),a=Math.atan2(s,i),r=Math.cos(a)*o,l=Math.sin(a)*o;this.joystickThumb.style.transform=`translate(calc(-50% + ${r}px), calc(-50% + ${l}px))`;const c=o>0?i/n*(o/this.joystickRadius):0,h=o>0?s/n*(o/this.joystickRadius):0;this.player.setMoveInput(-h,c,this.runPressed)}if(t.identifier===this.lookId){const i=t.clientX-this.lookLast.x,s=t.clientY-this.lookLast.y;this.lookLast={x:t.clientX,y:t.clientY},this.player.addLook(i*1.5,s*1.5)}}}onTouchEnd(e){e.preventDefault();for(const t of e.changedTouches)t.identifier===this.joystickId&&(this.joystickId=null,this.joystickActive=!1,this.player.setMoveInput(0,0,!1),this.joystickBase.style.left="",this.joystickBase.style.top="",this.joystickBase.style.bottom="0",this.joystickThumb.style.transform="translate(-50%, -50%)"),t.identifier===this.lookId&&(this.lookId=null)}onOrientationChange(){const e=document.getElementById("rotate-hint");if(!e)return;const t=window.innerHeight>window.innerWidth;e.style.display=t?"flex":"none"}update(){this.joystickActive&&this.player.setMoveInput(this.player.moveForward,this.player.moveRight,this.runPressed)}dispose(){document.removeEventListener("touchstart",this._onTouchStart),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("touchcancel",this._onTouchEnd),window.removeEventListener("orientationchange",this._onOrientationChange)}}const _e={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class re{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const wi=new qt(-1,1,1,-1,0,1);class Mi extends Tt{constructor(){super(),this.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ct([0,2,0,0,2,0],2))}}const bi=new Mi;class We{constructor(e){this._mesh=new z(bi,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wi)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Jt extends re{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof G?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=W.clone(e.uniforms),this.material=new G({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new We(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Bt extends re{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),n.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),n.buffers.stencil.setClear(a),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(s.EQUAL,1,4294967295),n.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),n.buffers.stencil.setLocked(!0)}}class Ai extends re{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Si{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new D);this._width=i.width,this._height=i.height,t=new ce(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:he}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jt(_e),this.copyPass.material.blending=J,this.clock=new Xt}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,n=this.passes.length;s<n;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bt!==void 0&&(o instanceof Bt?i=!0:o instanceof Ai&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new D);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ht extends re{constructor(e,t,i=null,s=null,n=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new H}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let n,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}class Ei{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,n){return e[0]*t+e[1]*i+e[2]*s+e[3]*n}noise(e,t){let i,s,n;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,r=Math.floor(e+a),l=Math.floor(t+a),c=(3-Math.sqrt(3))/6,h=(r+l)*c,u=r-h,d=l-h,p=e-u,g=t-d;let m,T;p>g?(m=1,T=0):(m=0,T=1);const y=p-m+c,x=g-T+c,v=p-1+2*c,C=g-1+2*c,_=r&255,E=l&255,P=this.perm[_+this.perm[E]]%12,w=this.perm[_+m+this.perm[E+T]]%12,M=this.perm[_+1+this.perm[E+1]]%12;let A=.5-p*p-g*g;A<0?i=0:(A*=A,i=A*A*this.dot(this.grad3[P],p,g));let S=.5-y*y-x*x;S<0?s=0:(S*=S,s=S*S*this.dot(this.grad3[w],y,x));let L=.5-v*v-C*C;return L<0?n=0:(L*=L,n=L*L*this.dot(this.grad3[M],v,C)),70*(i+s+n)}noise3d(e,t,i){let s,n,o,a;const l=(e+t+i)*.3333333333333333,c=Math.floor(e+l),h=Math.floor(t+l),u=Math.floor(i+l),d=1/6,p=(c+h+u)*d,g=c-p,m=h-p,T=u-p,y=e-g,x=t-m,v=i-T;let C,_,E,P,w,M;y>=x?x>=v?(C=1,_=0,E=0,P=1,w=1,M=0):y>=v?(C=1,_=0,E=0,P=1,w=0,M=1):(C=0,_=0,E=1,P=1,w=0,M=1):x<v?(C=0,_=0,E=1,P=0,w=1,M=1):y<v?(C=0,_=1,E=0,P=0,w=1,M=1):(C=0,_=1,E=0,P=1,w=1,M=0);const A=y-C+d,S=x-_+d,L=v-E+d,N=y-P+2*d,U=x-w+2*d,pe=v-M+2*d,me=y-1+3*d,ge=x-1+3*d,k=v-1+3*d,ie=c&255,ne=h&255,oe=u&255,Le=this.perm[ie+this.perm[ne+this.perm[oe]]]%12,Pe=this.perm[ie+C+this.perm[ne+_+this.perm[oe+E]]]%12,Ie=this.perm[ie+P+this.perm[ne+w+this.perm[oe+M]]]%12,De=this.perm[ie+1+this.perm[ne+1+this.perm[oe+1]]]%12;let q=.6-y*y-x*x-v*v;q<0?s=0:(q*=q,s=q*q*this.dot3(this.grad3[Le],y,x,v));let X=.6-A*A-S*S-L*L;X<0?n=0:(X*=X,n=X*X*this.dot3(this.grad3[Pe],A,S,L));let Q=.6-N*N-U*U-pe*pe;Q<0?o=0:(Q*=Q,o=Q*Q*this.dot3(this.grad3[Ie],N,U,pe));let Y=.6-me*me-ge*ge-k*k;return Y<0?a=0:(Y*=Y,a=Y*Y*this.dot3(this.grad3[De],me,ge,k)),32*(s+n+o+a)}noise4d(e,t,i,s){const n=this.grad4,o=this.simplex,a=this.perm,r=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let c,h,u,d,p;const g=(e+t+i+s)*r,m=Math.floor(e+g),T=Math.floor(t+g),y=Math.floor(i+g),x=Math.floor(s+g),v=(m+T+y+x)*l,C=m-v,_=T-v,E=y-v,P=x-v,w=e-C,M=t-_,A=i-E,S=s-P,L=w>M?32:0,N=w>A?16:0,U=M>A?8:0,pe=w>S?4:0,me=M>S?2:0,ge=A>S?1:0,k=L+N+U+pe+me+ge,ie=o[k][0]>=3?1:0,ne=o[k][1]>=3?1:0,oe=o[k][2]>=3?1:0,Le=o[k][3]>=3?1:0,Pe=o[k][0]>=2?1:0,Ie=o[k][1]>=2?1:0,De=o[k][2]>=2?1:0,q=o[k][3]>=2?1:0,X=o[k][0]>=1?1:0,Q=o[k][1]>=1?1:0,Y=o[k][2]>=1?1:0,xt=o[k][3]>=1?1:0,Ve=w-ie+l,Ke=M-ne+l,qe=A-oe+l,Xe=S-Le+l,Qe=w-Pe+2*l,Ye=M-Ie+2*l,Ze=A-De+2*l,$e=S-q+2*l,Je=w-X+3*l,et=M-Q+3*l,tt=A-Y+3*l,st=S-xt+3*l,it=w-1+4*l,nt=M-1+4*l,ot=A-1+4*l,at=S-1+4*l,ve=m&255,Te=T&255,ye=y&255,xe=x&255,ss=a[ve+a[Te+a[ye+a[xe]]]]%32,is=a[ve+ie+a[Te+ne+a[ye+oe+a[xe+Le]]]]%32,ns=a[ve+Pe+a[Te+Ie+a[ye+De+a[xe+q]]]]%32,os=a[ve+X+a[Te+Q+a[ye+Y+a[xe+xt]]]]%32,as=a[ve+1+a[Te+1+a[ye+1+a[xe+1]]]]%32;let we=.6-w*w-M*M-A*A-S*S;we<0?c=0:(we*=we,c=we*we*this.dot4(n[ss],w,M,A,S));let Me=.6-Ve*Ve-Ke*Ke-qe*qe-Xe*Xe;Me<0?h=0:(Me*=Me,h=Me*Me*this.dot4(n[is],Ve,Ke,qe,Xe));let be=.6-Qe*Qe-Ye*Ye-Ze*Ze-$e*$e;be<0?u=0:(be*=be,u=be*be*this.dot4(n[ns],Qe,Ye,Ze,$e));let Ae=.6-Je*Je-et*et-tt*tt-st*st;Ae<0?d=0:(Ae*=Ae,d=Ae*Ae*this.dot4(n[os],Je,et,tt,st));let Se=.6-it*it-nt*nt-ot*ot-at*at;return Se<0?p=0:(Se*=Se,p=Se*Se*this.dot4(n[as],it,nt,ot,at)),27*(c+h+u+d+p)}}const Ne={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new D},cameraProjectionMatrix:{value:new se},cameraInverseProjectionMatrix:{value:new se},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},ke={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},Oe={uniforms:{tDiffuse:{value:null},resolution:{value:new D}},vertexShader:`varying vec2 vUv;

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

		}`};class te extends re{constructor(e,t,i,s,n=32){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(n),this.generateRandomKernelRotations();const o=new vs;o.format=Ts,o.type=ys,this.normalRenderTarget=new ce(this.width,this.height,{minFilter:ft,magFilter:ft,type:he,depthTexture:o}),this.ssaoRenderTarget=new ce(this.width,this.height,{type:he}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new G({defines:Object.assign({},Ne.defines),uniforms:W.clone(Ne.uniforms),vertexShader:Ne.vertexShader,fragmentShader:Ne.fragmentShader,blending:J}),this.ssaoMaterial.defines.KERNEL_SIZE=n,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new xs,this.normalMaterial.blending=J,this.blurMaterial=new G({defines:Object.assign({},Oe.defines),uniforms:W.clone(Oe.uniforms),vertexShader:Oe.vertexShader,fragmentShader:Oe.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new G({defines:Object.assign({},ke.defines),uniforms:W.clone(ke.uniforms),vertexShader:ke.vertexShader,fragmentShader:ke.fragmentShader,blending:J}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new G({uniforms:W.clone(_e.uniforms),vertexShader:_e.vertexShader,fragmentShader:_e.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ms,blendDst:Lt,blendEquation:_t,blendSrcAlpha:ws,blendDstAlpha:Lt,blendEquationAlpha:_t}),this.fsQuad=new We(null),this.originalClearColor=new H}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t,i){switch(e.capabilities.isWebGL2===!1&&(this.noiseTexture.format=bs),this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case te.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=J,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case te.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=J,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case te.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case te.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=J,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case te.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=J,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=As,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,i,s,n){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(n||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,n){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,n=t.clearAlpha||n,s!=null&&(e.setClearColor(s),e.setClearAlpha(n||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(e){const t=this.kernel;for(let i=0;i<e;i++){const s=new R;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let n=i/e;n=de.lerp(.1,1,n*n),s.multiplyScalar(n),t.push(s)}}generateRandomKernelRotations(){const i=new Ei,s=4*4,n=new Float32Array(s);for(let o=0;o<s;o++){const a=Math.random()*2-1,r=Math.random()*2-1,l=0;n[o]=i.noise3d(a,r,l)}this.noiseTexture=new Ss(n,4,4,Es,Rs),this.noiseTexture.wrapS=I,this.noiseTexture.wrapT=I,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){const s=t.get(i);i.visible=s}),t.clear()}}te.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Ri={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new H(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class fe extends re{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new D(e.x,e.y):new D(256,256),this.clearColor=new H(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ce(n,o,{type:he}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new ce(n,o,{type:he});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new ce(n,o,{type:he});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),n=Math.round(n/2),o=Math.round(o/2)}const a=Ri;this.highPassUniforms=W.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new G({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const r=[3,5,7,9,11];n=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(r[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new D(1/n,1/o),n=Math.round(n/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=_e;this.copyUniforms=W.clone(c.uniforms),this.blendMaterial=new G({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Cs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new H,this.oldClearAlpha=1,this.basic=new le,this.fsQuad=new We(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(i,s),this.renderTargetsVertical[n].setSize(i,s),this.separableBlurMaterials[n].uniforms.invSize.value=new D(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,n){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),n&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let r=0;r<this.nMips;r++)this.fsQuad.material=this.separableBlurMaterials[r],this.separableBlurMaterials[r].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[r].uniforms.direction.value=fe.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[r]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[r].uniforms.colorTexture.value=this.renderTargetsHorizontal[r].texture,this.separableBlurMaterials[r].uniforms.direction.value=fe.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[r]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[r];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new G({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new D(.5,.5)},direction:{value:new D(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new G({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}fe.BlurDirectionX=new D(1,0);fe.BlurDirectionY=new D(0,1);const Ci={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new D(1/1024,1/512)}},vertexShader:`

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
	`},_i={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Li extends re{constructor(){super();const e=_i;this.uniforms=W.clone(e.uniforms),this.material=new _s({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new We(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===Ls&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ps?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Is?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ds?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Re?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ns&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Pi{constructor(e,t,i,s){this.renderer=e,this.scene=t,this.camera=i,this.quality=s,this.composer=null,this.ssaoPass=null,this.bloomPass=null,this.fxaaPass=null,this.outputPass=null}init(){const e=window.innerWidth,t=window.innerHeight;if(this.composer=new Si(this.renderer),this.quality.ssao)try{this.ssaoPass=new te(this.scene,this.camera,e,t),this.ssaoPass.kernelRadius=8,this.ssaoPass.minDistance=.002,this.ssaoPass.maxDistance=.08,this.composer.addPass(this.ssaoPass)}catch(i){console.warn("[PostFX] SSAO 初始化失败，降级为 RenderPass",i);const s=new Ht(this.scene,this.camera);this.composer.addPass(s)}else{const i=new Ht(this.scene,this.camera);this.composer.addPass(i)}if(this.quality.bloom&&(this.bloomPass=new fe(new D(e,t),this.quality.bloomStrength,this.quality.bloomRadius,this.quality.bloomThreshold),this.composer.addPass(this.bloomPass)),this.quality.fxaa){this.fxaaPass=new Jt(Ci);const i=this.renderer.getPixelRatio();this.fxaaPass.material.uniforms.resolution.value.set(1/(e*i),1/(t*i)),this.composer.addPass(this.fxaaPass)}this.outputPass=new Li,this.composer.addPass(this.outputPass),this.composer.setSize(e,t),this.composer.setPixelRatio(this.renderer.getPixelRatio())}render(){this.composer&&this.composer.render()}resize(e,t){if(this.composer&&(this.composer.setSize(e,t),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.ssaoPass&&this.ssaoPass.setSize(e,t),this.bloomPass&&this.bloomPass.setSize(e,t),this.fxaaPass)){const i=this.renderer.getPixelRatio();this.fxaaPass.material.uniforms.resolution.value.set(1/(e*i),1/(t*i))}}dispose(){this.composer&&(this.composer.dispose(),this.composer=null)}}class Ii{init(){this.screenEl=document.getElementById("loading-screen"),this.barEl=document.getElementById("loading-bar"),this.percentEl=document.getElementById("loading-percent"),this.statusEl=document.getElementById("loading-status")}setProgress(e){this.barEl&&(this.barEl.style.width=e+"%"),this.percentEl&&(this.percentEl.textContent=Math.round(e)+"%")}setStatus(e){this.statusEl&&(this.statusEl.textContent=e)}hide(){this.screenEl&&(this.screenEl.style.opacity="0",setTimeout(()=>{this.screenEl.style.display="none"},800))}}class Di{constructor(e){this.quality=e}init(){this.containerEl=document.getElementById("hud"),this.hintEl=document.getElementById("hud-hint"),this.fpsEl=document.getElementById("hud-fps")}show(){this.containerEl&&(this.containerEl.style.display="block")}hide(){this.containerEl&&(this.containerEl.style.display="none")}setHint(e){this.hintEl&&(this.hintEl.textContent=e),clearTimeout(this._hintTimer),this.hintEl.style.opacity="1",this._hintTimer=setTimeout(()=>{this.hintEl&&(this.hintEl.style.opacity="0")},4e3)}setFPS(e){this.fpsEl&&(this.fpsEl.textContent=e+" FPS",e<30?this.fpsEl.style.color="rgba(255, 150, 100, 0.7)":e<50?this.fpsEl.style.color="rgba(255, 220, 100, 0.7)":this.fpsEl.style.color="rgba(150, 255, 150, 0.5)")}}class Ni{constructor(e,t,i){this.renderer=e,this.sceneManager=t,this.postProcessing=i,this._onLost=this.onContextLost.bind(this),this._onRestored=this.onContextRestored.bind(this)}init(){const e=this.renderer.renderer.domElement;e.addEventListener("webglcontextlost",this._onLost,!1),e.addEventListener("webglcontextrestored",this._onRestored,!1)}onContextLost(e){e.preventDefault(),console.warn("[ContextLoss] WebGL 上下文丢失"),this.contextLost=!0}onContextRestored(){console.log("[ContextLoss] WebGL 上下文已恢复，重建资源...");try{const e=this.sceneManager.quality;e&&e.shadowMapEnabled&&(this.sceneManager.renderer.shadowMap.enabled=!0,this.sceneManager.renderer.shadowMap.type=e.shadowMapType,this.sceneManager.renderer.shadowMap.autoUpdate=!1,this.sceneManager.renderer.shadowMap.needsUpdate=!0)}catch(e){console.warn("[ContextLoss] 阴影配置恢复失败",e)}if(this.sceneManager)try{this.sceneManager.updateSun()}catch(e){console.warn("[ContextLoss] PMREM 重建失败",e)}if(this.postProcessing)try{const e=window.innerWidth,t=window.innerHeight;this.postProcessing.resize(e,t)}catch(e){console.warn("[ContextLoss] 后期处理重建失败",e)}this.contextLost=!1,console.log("[ContextLoss] 资源重建完成")}dispose(){const e=this.renderer.renderer.domElement;e.removeEventListener("webglcontextlost",this._onLost),e.removeEventListener("webglcontextrestored",this._onRestored)}}class ki extends ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ui(t)}),this.register(function(t){return new Qi(t)}),this.register(function(t){return new Yi(t)}),this.register(function(t){return new Zi(t)}),this.register(function(t){return new ji(t)}),this.register(function(t){return new zi(t)}),this.register(function(t){return new Wi(t)}),this.register(function(t){return new Vi(t)}),this.register(function(t){return new Hi(t)}),this.register(function(t){return new Ki(t)}),this.register(function(t){return new Gi(t)}),this.register(function(t){return new Xi(t)}),this.register(function(t){return new qi(t)}),this.register(function(t){return new Fi(t)}),this.register(function(t){return new $i(t)}),this.register(function(t){return new Ji(t)})}load(e,t,i,s){const n=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Ce.extractUrlBase(e);o=Ce.resolveURL(l,this.path)}else o=Ce.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),n.manager.itemError(e),n.manager.itemEnd(e)},r=new Qt(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(l){try{n.parse(l,o,function(c){t(c),n.manager.itemEnd(e)},a)}catch(c){a(c)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let n;const o={},a={},r=new TextDecoder;if(typeof e=="string")n=JSON.parse(e);else if(e instanceof ArrayBuffer)if(r.decode(new Uint8Array(e,0,4))===es){try{o[b.KHR_BINARY_GLTF]=new en(e)}catch(h){s&&s(h);return}n=JSON.parse(o[b.KHR_BINARY_GLTF].content)}else n=JSON.parse(r.decode(e));else n=e;if(n.asset===void 0||n.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new pn(n,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const h=this.pluginCallbacks[c](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(n.extensionsUsed)for(let c=0;c<n.extensionsUsed.length;++c){const h=n.extensionsUsed[c],u=n.extensionsRequired||[];switch(h){case b.KHR_MATERIALS_UNLIT:o[h]=new Bi;break;case b.KHR_DRACO_MESH_COMPRESSION:o[h]=new tn(n,this.dracoLoader);break;case b.KHR_TEXTURE_TRANSFORM:o[h]=new sn;break;case b.KHR_MESH_QUANTIZATION:o[h]=new nn;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,n){i.parse(e,t,s,n)})}}function Oi(){let f={};return{get:function(e){return f[e]},add:function(e,t){f[e]=t},remove:function(e){delete f[e]},removeAll:function(){f={}}}}const b={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Fi{constructor(e){this.parser=e,this.name=b.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const n=t[i];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const n=t.json,r=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e];let l;const c=new H(16777215);r.color!==void 0&&c.setRGB(r.color[0],r.color[1],r.color[2],V);const h=r.range!==void 0?r.range:0;switch(r.type){case"directional":l=new Vt(c),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Fs(c),l.distance=h;break;case"spot":l=new Os(c),l.distance=h,r.spot=r.spot||{},r.spot.innerConeAngle=r.spot.innerConeAngle!==void 0?r.spot.innerConeAngle:0,r.spot.outerConeAngle=r.spot.outerConeAngle!==void 0?r.spot.outerConeAngle:Math.PI/4,l.angle=r.spot.outerConeAngle,l.penumbra=1-r.spot.innerConeAngle/r.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+r.type)}return l.position.set(0,0,0),l.decay=2,ee(l,r),r.intensity!==void 0&&(l.intensity=r.intensity),l.name=t.createUniqueName(r.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,n=i.json.nodes[e],a=(n.extensions&&n.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(r){return i._getNodeRef(t.cache,a,r)})}}class Bi{constructor(){this.name=b.KHR_MATERIALS_UNLIT}getMaterialType(){return le}extendParams(e,t,i){const s=[];e.color=new H(1,1,1),e.opacity=1;const n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){const o=n.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],V),e.opacity=o[3]}n.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",n.baseColorTexture,F))}return Promise.all(s)}}class Hi{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=s.extensions[this.name].emissiveStrength;return n!==void 0&&(t.emissiveIntensity=n),Promise.resolve()}}class Ui{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:K}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(n.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new D(a,a)}return Promise.all(n)}}class Gi{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:K}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&n.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&n.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(n)}}class ji{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:K}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[];t.sheenColor=new H(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],V)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&n.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,F)),o.sheenRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(n)}}class zi{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:K}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&n.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(n)}}class Wi{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:K}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&n.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new H().setRGB(a[0],a[1],a[2],V),Promise.all(n)}}class Vi{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:K}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=s.extensions[this.name];return t.ior=n.ior!==void 0?n.ior:1.5,Promise.resolve()}}class Ki{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:K}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&n.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new H().setRGB(a[0],a[1],a[2],V),o.specularColorTexture!==void 0&&n.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,F)),Promise.all(n)}}class qi{constructor(e){this.parser=e,this.name=b.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:K}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&n.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(n)}}class Xi{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:K}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&n.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(n)}}class Qi{constructor(e){this.parser=e,this.name=b.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const n=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,n.source,o)}}class Yi{constructor(e){this.parser=e,this.name=b.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,n=s.textures[e];if(!n.extensions||!n.extensions[t])return null;const o=n.extensions[t],a=s.images[o.source];let r=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(r=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,r);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Zi{constructor(e){this.parser=e,this.name=b.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,n=s.textures[e];if(!n.extensions||!n.extensions[t])return null;const o=n.extensions[t],a=s.images[o.source];let r=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(r=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,r);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class $i{constructor(e){this.name=b.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],n=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(a){const r=s.byteOffset||0,l=s.byteLength||0,c=s.count,h=s.byteStride,u=new Uint8Array(a,r,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(c,h,u,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(c*h);return o.decodeGltfBuffer(new Uint8Array(d),c,h,u,s.mode,s.filter),d})})}else return null}}class Ji{constructor(e){this.name=b.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==B.TRIANGLES&&l.mode!==B.TRIANGLE_STRIP&&l.mode!==B.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],r={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(c=>(r[l]=c,r[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,d=[];for(const p of h){const g=new se,m=new R,T=new je,y=new R(1,1,1),x=new Be(p.geometry,p.material,u);for(let v=0;v<u;v++)r.TRANSLATION&&m.fromBufferAttribute(r.TRANSLATION,v),r.ROTATION&&T.fromBufferAttribute(r.ROTATION,v),r.SCALE&&y.fromBufferAttribute(r.SCALE,v),x.setMatrixAt(v,g.compose(m,T,y));for(const v in r)if(v==="_COLOR_0"){const C=r[v];x.instanceColor=new Bs(C.array,C.itemSize,C.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,r[v]);Ue.prototype.copy.call(x,p),this.parser.assignFinalMaterial(x),d.push(x)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const es="glTF",Ee=12,Ut={JSON:1313821514,BIN:5130562};class en{constructor(e){this.name=b.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ee),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==es)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ee,n=new DataView(e,Ee);let o=0;for(;o<s;){const a=n.getUint32(o,!0);o+=4;const r=n.getUint32(o,!0);if(o+=4,r===Ut.JSON){const l=new Uint8Array(e,Ee+o,a);this.content=i.decode(l)}else if(r===Ut.BIN){const l=Ee+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tn{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=b.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,n=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},r={},l={};for(const c in o){const h=gt[c]||c.toLowerCase();a[h]=o[c]}for(const c in e.attributes){const h=gt[c]||c.toLowerCase();if(o[c]!==void 0){const u=i.accessors[e.attributes[c]],d=ue[u.componentType];l[h]=d.name,r[h]=u.normalized===!0}}return t.getDependency("bufferView",n).then(function(c){return new Promise(function(h,u){s.decodeDracoFile(c,function(d){for(const p in d.attributes){const g=d.attributes[p],m=r[p];m!==void 0&&(g.normalized=m)}h(d)},a,l,V,u)})})}}class sn{constructor(){this.name=b.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class nn{constructor(){this.name=b.KHR_MESH_QUANTIZATION}}class ts extends li{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,n=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[n+o];return t}interpolate_(e,t,i,s){const n=this.resultBuffer,o=this.sampleValues,a=this.valueSize,r=a*2,l=a*3,c=s-t,h=(i-t)/c,u=h*h,d=u*h,p=e*l,g=p-l,m=-2*d+3*u,T=d-u,y=1-m,x=T-u+h;for(let v=0;v!==a;v++){const C=o[g+v+a],_=o[g+v+r]*c,E=o[p+v+a],P=o[p+v]*c;n[v]=y*C+x*_+m*E+T*P}return n}}const on=new je;class an extends ts{interpolate_(e,t,i,s){const n=super.interpolate_(e,t,i,s);return on.fromArray(n).normalize().toArray(n),n}}const B={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ue={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gt={9728:ft,9729:Zt,9984:Ws,9985:zs,9986:js,9987:Yt},jt={33071:Ks,33648:Vs,10497:I},ct={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gt={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Z={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rn={CUBICSPLINE:void 0,LINEAR:$t,STEP:oi},ht={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ln(f){return f.DefaultMaterial===void 0&&(f.DefaultMaterial=new j({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),f.DefaultMaterial}function ae(f,e,t){for(const i in t.extensions)f[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ee(f,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(f.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cn(f,e,t){let i=!1,s=!1,n=!1;for(let l=0,c=e.length;l<c;l++){const h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(n=!0),i&&s&&n)break}if(!i&&!s&&!n)return Promise.resolve(f);const o=[],a=[],r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];if(i){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):f.attributes.position;o.push(u)}if(s){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):f.attributes.normal;a.push(u)}if(n){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):f.attributes.color;r.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(r)]).then(function(l){const c=l[0],h=l[1],u=l[2];return i&&(f.morphAttributes.position=c),s&&(f.morphAttributes.normal=h),n&&(f.morphAttributes.color=u),f.morphTargetsRelative=!0,f})}function hn(f,e){if(f.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)f.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(f.morphTargetInfluences.length===t.length){f.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)f.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function un(f){let e;const t=f.extensions&&f.extensions[b.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ut(t.attributes):e=f.indices+":"+ut(f.attributes)+":"+f.mode,f.targets!==void 0)for(let i=0,s=f.targets.length;i<s;i++)e+=":"+ut(f.targets[i]);return e}function ut(f){let e="";const t=Object.keys(f).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+f[t[i]]+";";return e}function vt(f){switch(f){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dn(f){return f.search(/\.jpe?g($|\?)/i)>0||f.search(/^data\:image\/jpeg/)===0?"image/jpeg":f.search(/\.webp($|\?)/i)>0||f.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const fn=new se;class pn{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Oi,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,n=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,n=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&n<98?this.textureLoader=new Hs(this.options.manager):this.textureLoader=new Us(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qt(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,n=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return ae(n,a,s),ee(a,s),Promise.all(i._invokeAll(function(r){return r.afterRoot&&r.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,n=t.length;s<n;s++){const o=t[s].joints;for(let a=0,r=o.length;a<r;a++)e[o[a]].isBone=!0}for(let s=0,n=e.length;s<n;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),n=(o,a)=>{const r=this.associations.get(o);r!=null&&this.associations.set(a,r);for(const[l,c]of o.children.entries())n(c,a.children[l])};return n(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const n=e(t[s]);n&&i.push(n)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(n){return n.loadNode&&n.loadNode(t)});break;case"mesh":s=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(n){return n.loadAnimation&&n.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(n,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[b.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(n,o){i.load(Ce.resolveURL(t.uri,s.path),n,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,n=t.byteOffset||0;return i.slice(n,n+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=ct[s.type],a=ue[s.componentType],r=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Fe(l,o,r))}const n=[];return s.bufferView!==void 0?n.push(this.getDependency("bufferView",s.bufferView)):n.push(null),s.sparse!==void 0&&(n.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(n).then(function(o){const a=o[0],r=ct[s.type],l=ue[s.componentType],c=l.BYTES_PER_ELEMENT,h=c*r,u=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let g,m;if(d&&d!==h){const T=Math.floor(u/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+T+":"+s.count;let x=t.cache.get(y);x||(g=new l(a,T*d,s.count*d/c),x=new Gs(g,d/c),t.cache.add(y,x)),m=new ai(x,r,u%d/c,p)}else a===null?g=new l(s.count*r):g=new l(a,u,s.count*r),m=new Fe(g,r,p);if(s.sparse!==void 0){const T=ct.SCALAR,y=ue[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,C=new y(o[1],x,s.sparse.count*T),_=new l(o[2],v,s.sparse.count*r);a!==null&&(m=new Fe(m.array.slice(),m.itemSize,m.normalized));for(let E=0,P=C.length;E<P;E++){const w=C[E];if(m.setX(w,_[E*r]),r>=2&&m.setY(w,_[E*r+1]),r>=3&&m.setZ(w,_[E*r+2]),r>=4&&m.setW(w,_[E*r+3]),r>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,n=t.textures[e].source,o=t.images[n];let a=this.textureLoader;if(o.uri){const r=i.manager.getHandler(o.uri);r!==null&&(a=r)}return this.loadTextureImage(e,n,a)}loadTextureImage(e,t,i){const s=this,n=this.json,o=n.textures[e],a=n.images[t],r=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[r])return this.textureCache[r];const l=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=o.name||a.name||"",c.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(c.name=a.uri);const u=(n.samplers||{})[o.sampler]||{};return c.magFilter=Gt[u.magFilter]||Zt,c.minFilter=Gt[u.minFilter]||Yt,c.wrapS=jt[u.wrapS]||I,c.wrapT=jt[u.wrapT]||I,s.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[r]=l,l}loadImageSource(e,t){const i=this,s=this.json,n=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let r=o.uri||"",l=!1;if(o.bufferView!==void 0)r=i.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:o.mimeType});return r=a.createObjectURL(u),r});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(r).then(function(h){return new Promise(function(u,d){let p=u;t.isImageBitmapLoader===!0&&(p=function(g){const m=new Pt(g);m.needsUpdate=!0,u(m)}),t.load(Ce.resolveURL(h,n.path),p,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(r),h.userData.mimeType=o.mimeType||dn(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",r),h});return this.sourceCache[e]=c,c}assignTexture(e,t,i,s){const n=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),n.extensions[b.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[b.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const r=n.associations.get(o);o=n.extensions[b.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),n.associations.set(o,r)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,n=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let r=this.cache.get(a);r||(r=new qs,lt.prototype.copy.call(r,i),r.color.copy(i.color),r.map=i.map,r.sizeAttenuation=!1,this.cache.add(a,r)),i=r}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let r=this.cache.get(a);r||(r=new Xs,lt.prototype.copy.call(r,i),r.color.copy(i.color),r.map=i.map,this.cache.add(a,r)),i=r}if(s||n||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),n&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let r=this.cache.get(a);r||(r=i.clone(),n&&(r.vertexColors=!0),o&&(r.flatShading=!0),s&&(r.normalScale&&(r.normalScale.y*=-1),r.clearcoatNormalScale&&(r.clearcoatNormalScale.y*=-1)),this.cache.add(a,r),this.associations.set(r,this.associations.get(i))),i=r}e.material=i}getMaterialType(){return j}loadMaterial(e){const t=this,i=this.json,s=this.extensions,n=i.materials[e];let o;const a={},r=n.extensions||{},l=[];if(r[b.KHR_MATERIALS_UNLIT]){const h=s[b.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,n,t))}else{const h=n.pbrMetallicRoughness||{};if(a.color=new H(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],V),a.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,F)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}n.doubleSided===!0&&(a.side=Qs);const c=n.alphaMode||ht.OPAQUE;if(c===ht.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,c===ht.MASK&&(a.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&o!==le&&(l.push(t.assignTexture(a,"normalMap",n.normalTexture)),a.normalScale=new D(1,1),n.normalTexture.scale!==void 0)){const h=n.normalTexture.scale;a.normalScale.set(h,h)}if(n.occlusionTexture!==void 0&&o!==le&&(l.push(t.assignTexture(a,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&o!==le){const h=n.emissiveFactor;a.emissive=new H().setRGB(h[0],h[1],h[2],V)}return n.emissiveTexture!==void 0&&o!==le&&l.push(t.assignTexture(a,"emissiveMap",n.emissiveTexture,F)),Promise.all(l).then(function(){const h=new o(a);return n.name&&(h.name=n.name),ee(h,n),t.associations.set(h,{materials:e}),n.extensions&&ae(s,h,n),h})}createUniqueName(e){const t=Ys.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function n(a){return i[b.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(r){return zt(r,a,t)})}const o=[];for(let a=0,r=e.length;a<r;a++){const l=e[a],c=un(l),h=s[c];if(h)o.push(h.promise);else{let u;l.extensions&&l.extensions[b.KHR_DRACO_MESH_COMPRESSION]?u=n(l):u=zt(new Tt,l,t),s[c]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,n=i.meshes[e],o=n.primitives,a=[];for(let r=0,l=o.length;r<l;r++){const c=o[r].material===void 0?ln(this.cache):this.getDependency("material",o[r].material);a.push(c)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(r){const l=r.slice(0,r.length-1),c=r[r.length-1],h=[];for(let d=0,p=c.length;d<p;d++){const g=c[d],m=o[d];let T;const y=l[d];if(m.mode===B.TRIANGLES||m.mode===B.TRIANGLE_STRIP||m.mode===B.TRIANGLE_FAN||m.mode===void 0)T=n.isSkinnedMesh===!0?new Zs(g,y):new z(g,y),T.isSkinnedMesh===!0&&T.normalizeSkinWeights(),m.mode===B.TRIANGLE_STRIP?T.geometry=Ot(T.geometry,Kt):m.mode===B.TRIANGLE_FAN&&(T.geometry=Ot(T.geometry,dt));else if(m.mode===B.LINES)T=new $s(g,y);else if(m.mode===B.LINE_STRIP)T=new Js(g,y);else if(m.mode===B.LINE_LOOP)T=new ei(g,y);else if(m.mode===B.POINTS)T=new ti(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(T.geometry.morphAttributes).length>0&&hn(T,n),T.name=t.createUniqueName(n.name||"mesh_"+e),ee(T,n),m.extensions&&ae(s,T,m),t.assignFinalMaterial(T),h.push(T)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return n.extensions&&ae(s,h[0],n),h[0];const u=new He;n.extensions&&ae(s,u,n),t.associations.set(u,{meshes:e});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);return u})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Wt(de.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new qt(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ee(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,n=t.joints.length;s<n;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const n=s.pop(),o=s,a=[],r=[];for(let l=0,c=o.length;l<c;l++){const h=o[l];if(h){a.push(h);const u=new se;n!==null&&u.fromArray(n.array,l*16),r.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new si(a,r)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],n=s.name?s.name:"animation_"+e,o=[],a=[],r=[],l=[],c=[];for(let h=0,u=s.channels.length;h<u;h++){const d=s.channels[h],p=s.samplers[d.sampler],g=d.target,m=g.node,T=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",T)),r.push(this.getDependency("accessor",y)),l.push(p),c.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(r),Promise.all(l),Promise.all(c)]).then(function(h){const u=h[0],d=h[1],p=h[2],g=h[3],m=h[4],T=[];for(let y=0,x=u.length;y<x;y++){const v=u[y],C=d[y],_=p[y],E=g[y],P=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const w=i._createAnimationTracks(v,C,_,E,P);if(w)for(let M=0;M<w.length;M++)T.push(w[M])}return new ii(n,void 0,T)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(n){const o=i._getNodeRef(i.meshCache,s.mesh,n);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let r=0,l=s.weights.length;r<l;r++)a.morphTargetInfluences[r]=s.weights[r]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],n=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));const r=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([n,Promise.all(o),r]).then(function(l){const c=l[0],h=l[1],u=l[2];u!==null&&c.traverse(function(d){d.isSkinnedMesh&&d.bind(u,fn)});for(let d=0,p=h.length;d<p;d++)c.add(h[d]);return c})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const n=t.nodes[e],o=n.name?s.createUniqueName(n.name):"",a=[],r=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return r&&a.push(r),n.camera!==void 0&&a.push(s.getDependency("camera",n.camera).then(function(l){return s._getNodeRef(s.cameraCache,n.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let c;if(n.isBone===!0?c=new ni:l.length>1?c=new He:l.length===1?c=l[0]:c=new Ue,c!==l[0])for(let h=0,u=l.length;h<u;h++)c.add(l[h]);if(n.name&&(c.userData.name=n.name,c.name=o),ee(c,n),n.extensions&&ae(i,c,n),n.matrix!==void 0){const h=new se;h.fromArray(n.matrix),c.applyMatrix4(h)}else n.translation!==void 0&&c.position.fromArray(n.translation),n.rotation!==void 0&&c.quaternion.fromArray(n.rotation),n.scale!==void 0&&c.scale.fromArray(n.scale);return s.associations.has(c)||s.associations.set(c,{}),s.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,n=new He;i.name&&(n.name=s.createUniqueName(i.name)),ee(n,i),i.extensions&&ae(t,n,i);const o=i.nodes||[],a=[];for(let r=0,l=o.length;r<l;r++)a.push(s.getDependency("node",o[r]));return Promise.all(a).then(function(r){for(let c=0,h=r.length;c<h;c++)n.add(r[c]);const l=c=>{const h=new Map;for(const[u,d]of s.associations)(u instanceof lt||u instanceof Pt)&&h.set(u,d);return c.traverse(u=>{const d=s.associations.get(u);d!=null&&h.set(u,d)}),h};return s.associations=l(n),n})}_createAnimationTracks(e,t,i,s,n){const o=[],a=e.name?e.name:e.uuid,r=[];Z[n.path]===Z.weights?e.traverse(function(u){u.morphTargetInfluences&&r.push(u.name?u.name:u.uuid)}):r.push(a);let l;switch(Z[n.path]){case Z.weights:l=Dt;break;case Z.rotation:l=Nt;break;case Z.position:case Z.scale:l=It;break;default:switch(i.itemSize){case 1:l=Dt;break;case 2:case 3:default:l=It;break}break}const c=s.interpolation!==void 0?rn[s.interpolation]:$t,h=this._getArrayFromAccessor(i);for(let u=0,d=r.length;u<d;u++){const p=new l(r[u]+"."+Z[n.path],t.array,h,c);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=vt(t.constructor),s=new Float32Array(t.length);for(let n=0,o=t.length;n<o;n++)s[n]=t[n]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Nt?an:ts;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function mn(f,e,t){const i=e.attributes,s=new Ge;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],r=a.min,l=a.max;if(r!==void 0&&l!==void 0){if(s.set(new R(r[0],r[1],r[2]),new R(l[0],l[1],l[2])),a.normalized){const c=vt(ue[a.componentType]);s.min.multiplyScalar(c),s.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const n=e.targets;if(n!==void 0){const a=new R,r=new R;for(let l=0,c=n.length;l<c;l++){const h=n[l];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],d=u.min,p=u.max;if(d!==void 0&&p!==void 0){if(r.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),r.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),r.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),u.normalized){const g=vt(ue[u.componentType]);r.multiplyScalar(g)}a.max(r)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}f.boundingBox=s;const o=new ci;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,f.boundingSphere=o}function zt(f,e,t){const i=e.attributes,s=[];function n(o,a){return t.getDependency("accessor",o).then(function(r){f.setAttribute(a,r)})}for(const o in i){const a=gt[o]||o.toLowerCase();a in f.attributes||s.push(n(i[o],a))}if(e.indices!==void 0&&!f.index){const o=t.getDependency("accessor",e.indices).then(function(a){f.setIndex(a)});s.push(o)}return pt.workingColorSpace!==V&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),ee(f,e),mn(f,e,t),Promise.all(s).then(function(){return e.targets!==void 0?cn(f,e.targets,t):f})}const gn="./models/kaykit/",$={buildings:["building_A","building_B","building_C","building_D","building_E","building_F","building_G","building_H"],roads:["road_straight","road_corner","road_junction","road_tsplit","road_straight_crossing","road_corner_curved"],cars:["car_hatchback","car_sedan","car_police","car_taxi","car_stationwagon"],props:["streetlight","trafficlight_A","trafficlight_B","trafficlight_C","bench","bush","dumpster","firehydrant","trash_A","trash_B","box_A","box_B","watertower"]};class vn{constructor(){this.models={},this.loader=new ki,this.loaded=!1}async loadAll(e){const t=[...$.buildings,...$.roads,...$.cars,...$.props];let i=0;const s=t.length,n=t.map(async o=>{try{const a=await this.loader.loadAsync(gn+o+".gltf");a.scene.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),this.models[o]=a.scene}catch(a){console.warn(`[ModelLoader] 加载失败: ${o}`,a.message)}i++,e&&(e.setProgress(40+i/s*15),e.setStatus(`正在加载城市模型 ${i}/${s}`))});await Promise.all(n),this.loaded=!0,console.log(`[ModelLoader] 加载完成: ${Object.keys(this.models).length}/${s} 个模型`)}clone(e){const t=this.models[e];if(!t)return null;const i=t.clone(!0);return i.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)}),i}getBuildings(){return $.buildings.filter(e=>this.models[e])}getCars(){return $.cars.filter(e=>this.models[e])}getProps(){return $.props.filter(e=>this.models[e])}getRoads(){return $.roads.filter(e=>this.models[e])}getModelSize(e){const t=this.models[e];if(!t)return{width:4,depth:4,height:8};if(!t._cachedSize){const i=new Ge().setFromObject(t),s=new R;i.getSize(s),t._cachedSize={width:s.x,depth:s.z,height:s.y}}return t._cachedSize}dispose(){this.models={},this.loaded=!1}}class Tn{constructor(){this.qualityDetector=new hi,this.quality=this.qualityDetector.detect(),console.log("[Game] 画质档位:",this.quality.label,this.quality),this.clock=new Xt,this.started=!1,this.paused=!1,this.rafId=null,this._fpsFrames=0,this._fpsTime=0}async init(){this.loadingScreen=new Ii,this.loadingScreen.init(),this.loadingScreen.setStatus("正在初始化渲染引擎...");const e=document.getElementById("canvas-container");this.renderer=new ui(this.quality),this.renderer.init(e),this.loadingScreen.setProgress(10),this.loadingScreen.setStatus("正在构建场景与天空..."),this.sceneManager=new di(this.quality),this.sceneManager.init(this.renderer.renderer),this.loadingScreen.setProgress(20),this.loadingScreen.setStatus("正在生成纹理资源..."),this.assetLoader=new fi,await this.assetLoader.generateTextures(this.loadingScreen),this.loadingScreen.setProgress(40),this.loadingScreen.setStatus("正在生成环境反射贴图..."),await this.assetLoader.loadEnvironment(this.sceneManager),this.loadingScreen.setProgress(55),this.loadingScreen.setStatus("正在加载高质量城市模型..."),this.modelLoader=new vn,await this.modelLoader.loadAll(this.loadingScreen),this.loadingScreen.setStatus("正在构建城市街区..."),this.cityBuilder=new mi(this.sceneManager.scene,this.assetLoader,this.quality,this.modelLoader),await this.cityBuilder.build(this.loadingScreen),this.loadingScreen.setProgress(80),this.worldLoader=new vi(this.cityBuilder,this.quality),this.worldLoader.init(this.sceneManager.camera),this.player=new Ti(this.sceneManager.camera,this.quality),this.player.setColliders(this.cityBuilder.getColliders()),this.player.init(),this.quality.isMobile?this.controls=new xi(this.player):(this.controls=new yi(this.player),this.controls.onUnlock=()=>{this.started=!1,this.showStartOverlay()}),this.controls.init(),this.loadingScreen.setProgress(90),this.postProcessing=new Pi(this.renderer.renderer,this.sceneManager.scene,this.sceneManager.camera,this.quality),this.postProcessing.init(),this.hud=new Di(this.quality),this.hud.init(),this.contextLossHandler=new Ni(this.renderer,this.sceneManager,this.postProcessing),this.contextLossHandler.init(),this.loadingScreen.setProgress(100),this.loadingScreen.setStatus("加载完成"),await this.delay(400),this.loadingScreen.hide(),this.showStartOverlay(),this.clock.start(),this.animate()}showStartOverlay(){const e=document.getElementById("start-overlay");if(!e)return;e.style.display="flex",e.style.opacity="1";const t=i=>{i.preventDefault(),i.stopPropagation(),e.style.opacity="0",setTimeout(()=>{e.style.display="none"},400),this.started=!0,this.hud.show(),this.hud.setHint(this.quality.isMobile?"左下角摇杆移动 · 右侧滑动视角 · 按钮奔跑/跳跃":"WASD 移动 · 鼠标视角 · Shift 奔跑 · 空格跳跃 · Esc 暂停"),!this.quality.isMobile&&this.controls.lock&&this.controls.lock(),e.removeEventListener("click",t),e.removeEventListener("touchend",t)};e.addEventListener("click",t),e.addEventListener("touchend",t)}animate(){this.rafId=requestAnimationFrame(()=>this.animate());const e=Math.min(this.clock.getDelta(),.1);if(!this.paused&&!this.renderer.contextLost){this.started&&(this.controls.update(e),this.player.update(e),this.worldLoader.update(this.player.position,this.sceneManager.camera));const t=this.player?this.player.position:this.sceneManager.camera.position;this.sceneManager.update(t),this.postProcessing?this.postProcessing.render():this.renderer.renderer.render(this.sceneManager.scene,this.sceneManager.camera)}this.updateFPS(e)}updateFPS(e){if(this._fpsFrames++,this._fpsTime+=e,this._fpsTime>=.5){const t=Math.round(this._fpsFrames/this._fpsTime);this.hud&&this.hud.setFPS(t),this._fpsFrames=0,this._fpsTime=0}}handleResize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.resize(e,t),this.sceneManager.resize(e,t),this.postProcessing&&this.postProcessing.resize(e,t),this.controls&&this.controls.onOrientationChange&&this.controls.onOrientationChange()}handleVisibilityChange(e){this.paused=e,e||this.clock.getDelta()}delay(e){return new Promise(t=>setTimeout(t,e))}dispose(){var e,t,i,s,n,o,a;this.rafId&&cancelAnimationFrame(this.rafId),(e=this.controls)==null||e.dispose(),(t=this.player)==null||t.dispose(),(i=this.worldLoader)==null||i.dispose(),(s=this.cityBuilder)==null||s.dispose(),(n=this.postProcessing)==null||n.dispose(),(o=this.sceneManager)==null||o.dispose(),(a=this.renderer)==null||a.dispose()}}const yt=new Tn;yt.init().then(()=>{if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)){const e=document.getElementById("download-banner");e&&e.classList.add("visible")}}).catch(f=>{console.error("游戏初始化失败:",f);const e=document.getElementById("loading-status");e&&(e.textContent="初始化失败: "+f.message,e.style.color="#ff6b6b");const t=document.getElementById("download-banner");t&&t.classList.add("visible")});window.addEventListener("resize",()=>yt.handleResize());document.addEventListener("visibilitychange",()=>{yt.handleVisibilityChange(document.hidden)});
