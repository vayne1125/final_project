function img_resize() {   
    let wid=window.innerWidth;  hei=window.outerHeight;
   let sky= document.getElementById("sky");           
   let wood= document.getElementById("wood");


   $(document).ready(function(){
     $("*").attr("draggable",false);
         $(".sp").attr("draggable",true);
    
     $("#xp").css("width",""+wid+"px").css("top",""+wid/2.19+"px").css("height",""+wid+"px");
     //$("#orinbar").fadeOut(60000);
     $(".bar").css("width",""+wid/3+"px");
     $("#orinbar").css("background-color","#ff7f50").animate({width:"0px"},60000);
     $(".guest").css("width",""+wid/6+"px");        //訪客
     $(".blank").css("width",""+wid/6+"px").css("height","1px");
     $(".g").on("dragover",function(event){ event.preventDefault();});
     $(".sky").on("dragover",function(event){ event.preventDefault();}); ///
     $("#bgm").css("width",""+wid+"px").on("dragover",function(event){ event.preventDefault();});
     $(".bar").on("dragover",function(event){ event.preventDefault();});
     $("#miss").css("left",""+wid/8+"px").css("top",""+wid/20+"px").css("width",""+wid/4.8+"px").hide();
     $(".head_img").css("width",""+wid/7+"px");
    $(".guest_0").css("top",""+wid/11+"px").css("left",""+wid/6+"px");

    $(".special").css("top",""+wid/2.48+"px");//

    $(".box").css("width",""+wid/6+"px");
        $("#spp").css("left",""+wid/6+"px");
        $("#egg_box").css("top",""+wid/3+"px").css("left",""+wid/8+"px");
        $("#tomato").css("top",""+wid/3.3+"px").css("left",""+wid/5.5+"px");
            $(".tom_blanket").css("margin-top","-"+wid/23+"px").css("margin-left","-"+wid/25+"px").css("width",""+wid/12+"px").css("width",""+wid/7+"px");
            $("#tom_blanket").css("margin-top",""+wid/10000+"px");
        $("#noodle").css("top",""+wid/3.1+"px").css("right",""+wid/20+"px");
        $("#fri").css("top",""+wid/3.5+"px").css("right",""+wid/5+"px");
        $("#chi").css("top",""+wid/2.9+"px").css("right",""+wid/3.3+"px");
        
    $(".sp").css("width",""+wid/12+"px").css("margin-right","-"+wid/26+"px").css("top","-"+wid/37+"px");
    for(let i=0;i<5;i++)$("#egg"+i).css("margin-right","-"+wid/27+"px").css("width",""+wid/36+"px");
    for(let i=0;i<5;i++)$("#tom"+i).css("margin-right","-"+wid/30+"px").css("width",""+wid/26+"px");
    for(let i=0;i<5;i++)$("#noodle"+i).css("margin-right","-"+wid/30+"px").css("width",""+wid/20+"px");
    for(let i=0;i<5;i++)$("#fri"+i).css("margin-right","-"+wid/30+"px").css("width",""+wid/20+"px");
    for(let i=0;i<5;i++)$("#chi"+i).css("margin-right","-"+wid/30+"px").css("width",""+wid/20+"px");
    //    $("#tomb").css("width",""+wid/32+"px");
    //
    

    for(let i=0;i<6;i++){
        $("#sp"+i).mouseover(function(){$(this).css("width",""+wid/10+"px");});   //
        $("#sp"+i).mouseout(function(){$(this).css("width",""+wid/12+"px");});}    //
        for(let i=0;i<5;i++){
            $("#egg"+i).mouseover(function(){$(this).css("width",""+wid/33+"px");});   //
            $("#egg"+i).mouseout(function(){$(this).css("width",""+wid/36+"px");});}
        for(let i=0;i<5;i++){
            $("#tom"+i).mouseover(function(){$(this).css("width",""+wid/24+"px");});   //
            $("#tom"+i).mouseout(function(){$(this).css("width",""+wid/26+"px");});}
            for(let i=0;i<5;i++){
                $("#noodle"+i).mouseover(function(){$(this).css("width",""+wid/18+"px");});   //
                $("#noodle"+i).mouseout(function(){$(this).css("width",""+wid/20+"px");});}
            for(let i=0;i<5;i++){
                 $("#fri"+i).mouseover(function(){$(this).css("width",""+wid/18+"px");});   //
                $("#fri"+i).mouseout(function(){$(this).css("width",""+wid/20+"px");});}
                for(let i=0;i<5;i++){
                    $("#chi"+i).mouseover(function(){$(this).css("width",""+wid/18+"px");});   //
                   $("#chi"+i).mouseout(function(){$(this).css("width",""+wid/20+"px");});}
     
 });
    sky.style.width=""+wid+"px";
    wood.style.width=""+wid+"px";
    wood.style.top=""+wid/3.8+"px";


    


    }
