function img_resize() {   
    let wid=window.innerWidth;  hei=window.outerHeight;
   let sky= document.getElementById("sky");           
   let wood= document.getElementById("wood");


   $(document).ready(function(){
     $("*").attr("draggable",false);
         $(".sp").attr("draggable",true);

     $("#xp").css("width",""+wid+"px").css("top",""+wid/2.19+"px").css("height",""+wid+"px");
     $(".guest").css("width",""+wid/6+"px");        //訪客
     $(".blank").css("width",""+wid/6+"px").css("height","1px");
     $(".g").on("dragover",function(event){ event.preventDefault();});
     $("#sky").on("dragover",function(event){ event.preventDefault();}); ///
     $(".head_img").css("width",""+wid/7+"px");
    $("#guest").css("top",""+wid/11+"px").css("left",""+wid/6+"px");

    $(".special").css("top",""+wid/2.48+"px");//

    $(".box").css("width",""+wid/6+"px");
        $("#spp").css("left",""+wid/6+"px");
        $("#egg_box").css("top",""+wid/3+"px").css("left",""+wid/8+"px");
        $("#tomato_box").css("top",""+wid/3.3+"px").css("left",""+wid/5.5+"px");
            $(".tom_blanket").css("margin-top","-"+wid/23+"px").css("margin-left","-"+wid/25+"px").css("width",""+wid/12+"px").css("width",""+wid/7+"px");
            $("#tom_blanket").css("margin-top",""+wid/10000+"px");
    
        
    $(".sp").css("width",""+wid/12+"px").css("margin-right","-"+wid/26+"px").css("top","-"+wid/37+"px");
    for(let i=0;i<5;i++)$("#egg"+i).css("margin-right","-"+wid/27+"px").css("width",""+wid/36+"px");
    for(let i=0;i<5;i++)$("#tom"+i).css("margin-right","-"+wid/30+"px").css("width",""+wid/26+"px");
    //    $("#tomb").css("width",""+wid/32+"px");
    //
    

    for(let i=0;i<6;i++){
        $("#sp"+i).mouseover(function(){$(this).css("width",""+wid/11+"px");});   //
        $("#sp"+i).mouseout(function(){$(this).css("width",""+wid/12+"px");});}    //
        for(let i=0;i<5;i++){
            $("#egg"+i).mouseover(function(){$(this).css("width",""+wid/34+"px");});   //
            $("#egg"+i).mouseout(function(){$(this).css("width",""+wid/36+"px");});}
        for(let i=0;i<5;i++){
            $("#tom"+i).mouseover(function(){$(this).css("width",""+wid/24+"px");});   //
            $("#tom"+i).mouseout(function(){$(this).css("width",""+wid/26+"px");});}
     
 });
    sky.style.width=""+wid+"px";
    wood.style.width=""+wid+"px";
    wood.style.top=""+wid/3.8+"px";


    


    }
