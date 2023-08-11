anime({
    targets:'#svg-scroll',
    duration:1000,
    translateY:'20px',
    direction:'alternate',
    loop:true,
    scale:[0.3,0.3]
})
var t=[];
t[0]=anime.timeline({
    direction:'reverse'
});
t[0].add({
    targets:'#profileimage',
    opacity:0,
    duration:1000,
    easing:'easeOutCirc'
},0).add({
    targets:'#introdiv',
    translateX:-1000,
    duration:1000,
    easing:'easeInExpo'
},0).add({
    targets:'#rotated',
    translateY:-1000,
    easing: 'easeInBack',
    duration:1000
},'-=500');
anime({
    targets:'#name',
    "textShadow":[{
        value:'0rem 1rem 0rem #222',
        easing:'linear',
        duration:500
    },{
        value:'0rem 0.5rem 0rem #222',
        easing:'easeOutQuad',
        duration:500
    },{
        value:'0rem 0.25rem 0rem #222',
        easing:'easeOutQuad',
        duration:500
    },{
        value:'0rem 0rem 0rem #222',
        easing:'easeOutQuad',
        duration:500
    },{
        value:'0rem -0.25rem 0rem #222',
        easing:'easeInQuad',
        duration:500
    },{
        value:'0rem -0.5rem 0rem #222',
        easing:'linear',
        duration:500
    },{
        value:'0rem -0.25rem 0rem #222',
        easing:'linear',
        duration:500
    },{
        value:'0rem 0rem 0rem #222',
        easing:'easeOutQuad',
        duration:500
    },{
        value:'0rem 0.25rem 0rem #222',
        easing:'easeInQuad',
        duration:500
    },{
        value:'0rem 0.5rem 0rem #222',
        easing:'easeOutQuad',
        duration:5000
    },{
        value:'0rem 1rem 0rem #222',
        easing:'linear',
        duration:5000
    }],
    loop:true,
})
t[1]=anime.timeline();
t[1].add({
    targets:'#skilltitlediv',
    translateY:['-100%',0],
    duration:1000
}).add({
    targets:'.skillsettitle',
    opacity:[0,1],
    scale:[0,1],
    duration:1000,
    easing:'easeOutBack',
    delay:anime.stagger(300)
}).add({
    targets:'.skillsetlogo1',
    translateX:anime.stagger(['200%','750%']),
    opacity:[0,1],
    scale:[0,1],
    duration:200,
    easing:'easeOutBack',
    delay:anime.stagger(100)
}).add({
    targets:'.skillsetlogo2',
    translateX:anime.stagger(['200%','750%']),
    opacity:[0,1],
    cale:[0,1],
    duration:200,
    easing:'easeOutBack',
    delay:anime.stagger(100)
},'-=300').add({
    targets:'.skillsetlogo3',
    translateX:anime.stagger(['200%','750%']),
    opacity:[0,1],
    cale:[0,1],
    duration:200,
    easing:'easeOutBack',
    delay:anime.stagger(100)
},'-=300');
t[2]=anime.timeline();
t[2].add({
    targets:'#contacttitlediv',
    translateY:['-100%',0],
    duration:1000
}).add({
    targets:'.contactind',
    opacity:[0,1],
    scale:[0,1],
    duration:1000,
    easing:'easeOutBack',
    delay:anime.stagger(300)
})





function scrolldown(){
    document.querySelector('#svg-scroll').style.display='flex';
}
var scrollinterval=setInterval(scrolldown,40000);
function scroller(){
    document.body.style.overflow="visible";
}

var controller=new ScrollMagic.Controller();
var scene1=new ScrollMagic.Scene({
    triggerElement:"#skills",
    triggerHook:0.85,
}).addTo(controller);
scene1.on("enter",function(event){
    divscroll(1);
    t[1].restart();
    document.body.style.overflow="hidden";
    document.querySelector('#namesvg').style.display='none';
    document.querySelector('#svg-scroll').style.display='none';
    setTimeout(scroller,1000);
})
var scene2=new ScrollMagic.Scene({
    triggerElement:"#skills",
    triggerHook:0.1,
}).addTo(controller);
scene2.on("leave",function(event){
    divscroll(0);
    t[0].restart();
    document.body.style.overflow="hidden";
    document.querySelector('#namesvg').style.display='block';
    document.querySelector('#svg-scroll').style.display='none';
    setTimeout(scroller,1000);
})
var scene3=new ScrollMagic.Scene({
    triggerElement:"#contacts",
    triggerHook:0.8,
}).addTo(controller);
scene3.on("enter",function(event){
    divscroll(2);
    t[2].restart();
    document.body.style.overflow="hidden";
    document.querySelector('#svg-scroll').style.display='none';
    setTimeout(scroller,1000);
    clearInterval(scrollinterval);
})
var scene4=new ScrollMagic.Scene({
    triggerElement:"#contacts",
    triggerHook:0.1,
}).addTo(controller);
scene4.on("leave",function(event){
    divscroll(1);
    t[1].restart();
    document.body.style.overflow="hidden";
    document.querySelector('#svg-scroll').style.display='none';
    setTimeout(scroller,1000);
    scrollinterval=setInterval(scrolldown,40000);
})
function divscroll(x){
    window.scrollTo({
        top:x*(window.innerHeight),
        left:0,
    });
}