var CorbisUI=CorbisUI||{};CorbisUI.PicPlanChooser=CorbisUI.PicPlanChooser||{};(function(a){if(typeof PicPlanPopupTitle!="undefined"){(function(b){b.OpenPicPlanChooser=function(){var d={content:{title:{text:b.picPlanPopupTitle}},style:{width:375,classes:{content:"pp-ctip-content",tooltip:"pp-ctip",title:"pp-ctip-title"}},show:{when:{event:"click"},solo:false,effect:{type:"none"}},hide:{when:{event:"unfocus"},effect:{type:"none"}},position:{targetIsWindow:true,corner:{tooltip:"topLeft"},adjust:{x:a("#activeSubscription").offset().left,y:a("#activeSubscription").offset().top+20},container:a("body"),updatePosition:false}};var e=a("#picplan").ctip(a("#picplancontent"),d).data("ctip");var c=a("#picplanChooser").val();a("#picplanCancel").show();a("#picplanCancel").click(function(){a("#picplanChooser").val(c);e.hide();});a("#picplanSelect").click(function(){a.post("/ChangePicPlan",{companyId:a("#picplanChooser").val(),rememberContext:!a("#picplanRemember").isChecked()},function(){window.location.reload();});});};b.OpenPicPlanChooserModal=function(){var c={content:{title:{text:b.picPlanPopupTitle,button:false}},style:{width:375,classes:{content:"ppm-ctip-content",tooltip:"ppm-ctip",title:"ppm-ctip-title"}},show:{when:{event:null},solo:true,effect:{type:"none"}},hide:{when:{event:null},effect:{type:"none"}},position:{targetIsWindow:true,corner:{tooltip:"center",target:"center"},container:a("body"),updatePosition:false},api:{onShow:function(){a("body").append('<div id="modalFadePage"></div>');},onHide:function(){a("#modalFadePage").remove();}}};var d=a(window).ctip(a("#picplanmodalcontent"),c).data("ctip");a("#picplanModalSelect").click(function(){a.post("/ChangePicPlan",{companyId:a("#picplanModalChooser").val(),rememberContext:!a("#picplanModalRemember").isChecked()},function(){window.location.reload();});});};b.init=function(c,d){b.picPlanPopupTitle=c;a("#picplan").click(b.OpenPicPlanChooser);if(d){b.OpenPicPlanChooserModal();}};b.init(PicPlanPopupTitle,ShowPicPlanModal);delete PicPlanPopupTitle;delete ShowPicPlanModal;})(CorbisUI.PicPlanChooser);}})(jQuery);