function main() {
    btn_main.style.display = 'none';
    btn_main2.style.display = '';
   }

function main_green() {
    btn_main2.style.display = 'none';
    btn_main.style.display = '';

}

function calculate_error() {

    var before = document.getElementById('sp_val').value;
    var after = document.getElementById('pow_val').value;

    var u1 = document.getElementById("ddl");
    var sr1 = u1.options[u1.selectedIndex].text;
    //document.getElementById('length').innerHTML=sr1;
    var after_f = -after;
    if(before<4.5 && before>4.2 && after_f==5 && sr1=='Ohm.cm'){
        alert("Experiment is successfully verified.Refresh the page to repeat the experiment.");

    }
    else if(before<4.5 && before>4.2 && after_f==5 && sr1=='Select unit here'){
        alert("Please select the unit value to proceed...");

    }
    else if(before=='' && after=='' && sr1=='Select unit here'){
        alert("Please enter value in all required fields..");
    }
    else{
        alert("Experiment is not verified.There are some errors,Perform the experiment again.");
    }

}
/*-----------------------------------------------------------------*/
function choose_resist(){
        //alert("Please power on first!");
        var r1 = document.getElementById("resist");
        var str1 = r1.options[r1.selectedIndex].text;
        document.getElementById('rest').innerHTML=str1 + '  ohm';


    document.getElementById('btn_bench').disabled=false;
    document.getElementById('btn_bench').style.cursor="pointer";
    document.getElementById('btn_bench').classList.remove("disabled");

        document.getElementById('btn1').disabled=false;
        document.getElementById('btn1').style.cursor="pointer";
        document.getElementById('btn1').classList.remove("disabled");

    }

    function values() {

        var e1 = document.getElementById("ddlViewBy1");
        var strUser1 = e1.options[e1.selectedIndex].text;
        document.getElementById('length').innerHTML=strUser1;

        var e2 = document.getElementById("ddlViewBy2");
        var strUser2 = e2.options[e2.selectedIndex].text;
        document.getElementById('radius').innerHTML=strUser2;

    }

    function specific() {

        document.getElementById('err_button_cal').disabled=false;
        document.getElementById('err_button_cal').style.cursor="pointer";
        document.getElementById('err_button_cal').classList.remove("disabled");

        var e1 = document.getElementById("ddlViewBy1");
        var strUser1 = e1.options[e1.selectedIndex].text;
        var e2 = document.getElementById("ddlViewBy2");
        var strUser2 = e2.options[e2.selectedIndex].text;

        var val=document.getElementById('userY').value;
        if(val==''){
            alert('Please enter the value of Y to proceed...');
        }
        else{
            var yvalue=(val*(22/7)*strUser2*strUser2)/strUser1;
            document.getElementById('specres').innerHTML=Number(yvalue).toFixed(2);
        }

    }
    function for_table2() {


        document.getElementById('cal_table_2').disabled=false;
        document.getElementById('cal_table_2').style.cursor="pointer";

        document.getElementById('main_btn').style.display='none';
        document.getElementById('main_btn_2').style.display='';

    }

    function calculate_table1() {

        var x_res1 = document.getElementById('xohm1').value;
        var x_res2 = document.getElementById('xohm2').value;
        var x_res3 = document.getElementById('xohm3').value;
        var x_res4 = document.getElementById('xohm4').value;
        var x_res5 = document.getElementById('xohm5').value;

        var xl_len1 = document.getElementById('xleft1').value;
        var xl_len2 = document.getElementById('xleft2').value;
        var xl_len3 = document.getElementById('xleft3').value;
        var xl_len4 = document.getElementById('xleft4').value;
        var xl_len5 = document.getElementById('xleft5').value;

        var xr_len1 = document.getElementById('xright1').value;
        var xr_len2 = document.getElementById('xright2').value;
        var xr_len3 = document.getElementById('xright3').value;
        var xr_len4 = document.getElementById('xright4').value;
        var xr_len5 = document.getElementById('xright5').value;

        if(x_res1=='' || x_res2=='' || x_res3=='' || x_res4=='' || x_res5=='' ||
           xl_len1=='' || xl_len2=='' || xl_len3=='' || xl_len4=='' || xl_len5=='' ||
            xr_len1=='' || xr_len2=='' || xr_len3=='' || xr_len4=='' || xr_len5==''){

            alert('Please enter all the required fields to proceed...');
        }
        else {

            document.getElementById('must_click').disabled=false;
            document.getElementById('must_click').style.cursor="pointer";
            document.getElementById('must_click').classList.remove("disabled");

            var x_dif1 = xr_len1 - xl_len1;
            var x_dif2 = xr_len2 - xl_len2;
            var x_dif3 = xr_len3 - xl_len3;
            var x_dif4 = xr_len4 - xl_len4;
            var x_dif5 = xr_len5 - xl_len5;

            document.getElementById('xll1').innerHTML = x_dif1;
            document.getElementById('xll2').innerHTML = x_dif2;
            document.getElementById('xll3').innerHTML = x_dif3;
            document.getElementById('xll4').innerHTML = x_dif4;
            document.getElementById('xll5').innerHTML = x_dif5;

            document.getElementById('row1').innerHTML = (x_res1 / x_dif1).toFixed(3);
            document.getElementById('row2').innerHTML = (x_res2 / x_dif2).toFixed(3);
            document.getElementById('row3').innerHTML = (x_res3 / x_dif3).toFixed(3);
            document.getElementById('row4').innerHTML = (x_res4 / x_dif4).toFixed(3);
            document.getElementById('row5').innerHTML = (x_res5 / x_dif5).toFixed(3);

            var row_final = ((x_res1 / x_dif1) + (x_res2 / x_dif2) + (x_res3 / x_dif3) + (x_res4 / x_dif4)
                + (x_res5 / x_dif5)) / 5;

            document.getElementById('x_display').innerHTML = (row_final).toFixed(3) + " ";
            return row_final;
        }
    }



    function calculate_table2() {




        //var row_final1=calculate_table1();

        var y_res1 = document.getElementById('yohm1').value;
        var y_res2 = document.getElementById('yohm2').value;
        var y_res3 = document.getElementById('yohm3').value;
        var y_res4 = document.getElementById('yohm4').value;
        var y_res5 = document.getElementById('yohm5').value;

        var yl_len1 = document.getElementById('yleft1').value;
        var yl_len2 = document.getElementById('yleft2').value;
        var yl_len3 = document.getElementById('yleft3').value;
        var yl_len4 = document.getElementById('yleft4').value;
        var yl_len5 = document.getElementById('yleft5').value;

        var yr_len1 = document.getElementById('yright1').value;
        var yr_len2 = document.getElementById('yright2').value;
        var yr_len3 = document.getElementById('yright3').value;
        var yr_len4 = document.getElementById('yright4').value;
        var yr_len5 = document.getElementById('yright5').value;

        if(y_res1=='' || y_res2=='' || y_res3=='' || y_res4=='' || y_res5=='' ||
            yl_len1=='' || yl_len2=='' || yl_len3=='' || yl_len4=='' || yl_len5=='' ||
            yr_len1=='' || yr_len2=='' || yr_len3=='' || yr_len4=='' || yr_len5==''){

            alert('Please enter all the required fields to proceed...');
        }

        else {

            var x_res1 = document.getElementById('xohm1').value;
            var x_res2 = document.getElementById('xohm2').value;
            var x_res3 = document.getElementById('xohm3').value;
            var x_res4 = document.getElementById('xohm4').value;
            var x_res5 = document.getElementById('xohm5').value;

            var xl_len1 = document.getElementById('xleft1').value;
            var xl_len2 = document.getElementById('xleft2').value;
            var xl_len3 = document.getElementById('xleft3').value;
            var xl_len4 = document.getElementById('xleft4').value;
            var xl_len5 = document.getElementById('xleft5').value;

            var xr_len1 = document.getElementById('xright1').value;
            var xr_len2 = document.getElementById('xright2').value;
            var xr_len3 = document.getElementById('xright3').value;
            var xr_len4 = document.getElementById('xright4').value;
            var xr_len5 = document.getElementById('xright5').value;

            var x_dif1 = xr_len1 - xl_len1;
            var x_dif2 = xr_len2 - xl_len2;
            var x_dif3 = xr_len3 - xl_len3;
            var x_dif4 = xr_len4 - xl_len4;
            var x_dif5 = xr_len5 - xl_len5;

            var row_final = ((x_res1 / x_dif1) + (x_res2 / x_dif2) + (x_res3 / x_dif3) + (x_res4 / x_dif4)
                + (x_res5 / x_dif5)) / 5;

            var y_dif1 = yr_len1 - yl_len1;
            var y_dif2 = yr_len2 - yl_len2;
            var y_dif3 = yr_len3 - yl_len3;
            var y_dif4 = yr_len4 - yl_len4;
            var y_dif5 = yr_len5 - yl_len5;

            document.getElementById('yll1').innerHTML = y_dif1;
            document.getElementById('yll2').innerHTML = y_dif2;
            document.getElementById('yll3').innerHTML = y_dif3;
            document.getElementById('yll4').innerHTML = y_dif4;
            document.getElementById('yll5').innerHTML = y_dif5;

            var y1 = y_res1 - (row_final * y_dif1);
            var y2 = y_res2 - (row_final * y_dif2);
            var y3 = y_res3 - (row_final * y_dif3);
            var y4 = y_res4 - (row_final * y_dif4);
            var y5 = y_res5 - (row_final * y_dif5);

            document.getElementById('wayi1').innerHTML = (y1).toFixed(3);
            document.getElementById('wayi2').innerHTML = (y2).toFixed(3);
            document.getElementById('wayi3').innerHTML = (y3).toFixed(3);
            document.getElementById('wayi4').innerHTML = (y4).toFixed(3);
            document.getElementById('wayi5').innerHTML = (y5).toFixed(3);

            document.getElementById('y_display').innerHTML = (y1 + y2 + y3 + y4 + y5).toFixed(3);
        }
    }






/*----------------------------------------------------*/


var canvas=document.getElementById("mycanvas");
var context=canvas.getContext("2d");
var i;


function main_bench() {

    var img_thr = document.getElementById("img_bridge");
    context.drawImage(img_thr, 30,-722,740,1240);



    context.font = "23px Arial";
    context.fillText("A", 240, 325);

    context.font = "23px Arial";
    context.fillText("C", 545, 325);

    context.font = "23px Arial";
    context.fillText("E", 75, 430);

    context.font = "23px Arial";
    context.fillText("F", 715, 430);


    for (var i = 50, j = 8; i <= 650; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }

}

// var img_thr = document.getElementById("img_bridge");
// context.drawImage(img_thr, 30,-722,740,1240);
//
//
//
// context.font = "23px Arial";
// context.fillText("A", 240, 325);
//
// context.font = "23px Arial";
// context.fillText("C", 545, 325);
//
// context.font = "23px Arial";
// context.fillText("E", 75, 430);
//
// context.font = "23px Arial";
// context.fillText("F", 715, 430);
//
//
//     for (var i = 50, j = 8; i <= 650; i += 10) {
//         if (i % 50 === 0) {
//             if (!(i > 300 && i < 350)) {
//                 context.beginPath();
//                 context.moveTo(50 + i, 385);
//                 context.lineTo(50 + i, 390 + j + j);
//                 context.strokeStyle = "black";
//                 context.lineWidth = 2;
//                 context.stroke();
//             }
//         } else {
//             if (i >= 300 && i <= 350) {
//                 context.beginPath();
//                 context.moveTo(50 + i, 385);
//                 context.lineTo(50 + i, 390 + j);
//                 context.strokeStyle = "black";
//                 context.lineWidth = 1;
//                 context.stroke();
//             } else {
//                 context.beginPath();
//                 context.moveTo(50 + i, 385);
//                 context.lineTo(50 + i, 390 + j);
//                 context.strokeStyle = "black";
//                 context.lineWidth = 1;
//                 context.stroke();
//             }
//
//         }
//     }



var pointx=403;
var count=50;

//var r1 = document.getElementById("resist");
//var str1 = r1.options[r1.selectedIndex].text;
//document.getElementById('rest').innerHTML=str1;

function main3l() {


    document.getElementById('btnr').disabled=false;
    context.clearRect(0,0,canvas.width,canvas.height);

    var img_thr = document.getElementById("img_bridge");
    context.drawImage(img_thr, 30,-722,740,1240);

    context.font = "23px Arial";
    context.fillText("G", 430, 340);

    context.font = "23px Arial";
    context.fillText("A", 240, 325);

    context.font = "23px Arial";
    context.fillText("C", 545, 325);

    context.font = "23px Arial";
    context.fillText("E", 75, 430);

    context.font = "23px Arial";
    context.fillText("F", 715, 430);



    for (var i = 50, j = 8; i <= 650; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }



    var image;

	if(pointx>85){
        pointx = pointx - 6.4;
        count=count - 1 ;


    }
    else{
	    alert("value can not go below");
    }
    //document.getElementById('showl').innerHTML=Number(pointx).toFixed(2) ;

    document.getElementById('showl').innerHTML= count;
    var cntr= 100 - count;

    document.getElementById('showr').innerHTML= cntr;


    for(i=1;i<=10;i++)
	{
		 if (i == 1) {
        image = document.getElementById("img1");
        context.drawImage(image, 120,168);

             context.font = "23px Arial";
             context.fillText("X", 170, 155);

        context.beginPath();
        context.moveTo(234,250);
        context.lineTo(234,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(122,250);
        context.lineTo(122,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }
    if (i == 7) {
        image = document.getElementById("img1");
        context.drawImage(image, 269,168);

        context.font = "23px Arial";
        context.fillText("P", 320, 155);

        context.beginPath();
        context.moveTo(270,250);
        context.lineTo(270,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(383,250);
        context.lineTo(383,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 8) {
        image = document.getElementById("img1");
        context.drawImage(image, 420,168);

        context.font = "23px Arial";
        context.fillText("Q", 470, 155);

        context.beginPath();
        context.moveTo(422,250);
        context.lineTo(422,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(534,250);
        context.lineTo(534,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 9) {
        image = document.getElementById("img1");
        context.drawImage(image, 570,168);

        context.font = "23px Arial";
        context.fillText("Y", 620, 155);

        context.beginPath();
        context.moveTo(571,250);
        context.lineTo(571,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(684,250);
        context.lineTo(684,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 10) {
        image = document.getElementById("img_gal_tilt");
        context.drawImage(image, 355,312,90,110);

        var r1 = document.getElementById("resist");
        var str1 = r1.options[r1.selectedIndex].text;



        if(str1==0.1 && count==47){
             image = document.getElementById("img_gal_simple");
             context.drawImage(image, 355,312,90,110);
         }
         else if(str1==0.2 && count==46){
            image = document.getElementById("img_gal_simple");
            context.drawImage(image, 355,312,90,110);
         }
        else if(str1==0.3 && count==45){
            image = document.getElementById("img_gal_simple");
            context.drawImage(image, 355,312,90,110);
        }
        else if(str1==0.4 && count==44){
            image = document.getElementById("img_gal_simple");
            context.drawImage(image, 355,312,90,110);
        }
        else if(str1==0.5 && count==43){
            image = document.getElementById("img_gal_simple");
            context.drawImage(image, 355,312,90,110);
        }
        else{
            image = document.getElementById("img_gal_tilt");
            context.drawImage(image, 355,312,90,110);
        }

        context.beginPath();
        context.moveTo(403,280);
        context.lineTo(403,312);
        context.strokeStyle = "blue";
        context.lineWidth = 4;
        context.stroke();

        context.beginPath();
        context.moveTo(85,380);
        context.lineTo(715,380);
        context.strokeStyle = "blue";
        context.lineWidth = 5;
        context.stroke();

        context.beginPath();
        context.moveTo(403,350);
        //context.lineTo(403,380);
        context.lineTo(pointx,380);
        context.strokeStyle = "blue";
        context.lineWidth = 4;
        context.stroke();


    }



    else if (i == 2) {
        image = document.getElementById("img2");
        context.drawImage(image, 300,35);
    }

    else if (i == 3) {
        image = document.getElementById("img11");
        context.drawImage(image, 475,35);
    }
    /*else if (i == 4) {
        image = document.getElementById("img4");
        context.drawImage(image, 150, 185);
    }*/

    else if(i==5){

        context.beginPath();
        context.moveTo(253, 10);
        context.lineTo(253, 280);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(251, 10);
        context.lineTo(323, 10);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(323, 8);
        context.lineTo(323, 35);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(398, 8);
        context.lineTo(398, 35);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(396, 8);
        context.lineTo(440, 8);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(439, 7);
        context.lineTo(439, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(437, 75);
        context.lineTo(478, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(522, 75);
        context.lineTo(553, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(553, 73);
        context.lineTo(553, 280);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();



    }

		
	}
  

}
//1pt=6px

function main3l_2() {


    document.getElementById('btnr').disabled=false;
    context.clearRect(0,0,canvas.width,canvas.height);

    var img_thr = document.getElementById("img_bridge");
    context.drawImage(img_thr, 30,-722,740,1240);

    context.font = "23px Arial";
    context.fillText("G", 430, 340);


    context.font = "23px Arial";
    context.fillText("A", 240, 325);

    context.font = "23px Arial";
    context.fillText("C", 545, 325);

    context.font = "23px Arial";
    context.fillText("E", 75, 430);

    context.font = "23px Arial";
    context.fillText("F", 715, 430);



    for (var i = 50, j = 8; i <= 650; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }



    var image;

    if(pointx>85){
        pointx = pointx - 6.4;
        count=count - 1 ;


    }
    else{
        alert("value can not go below");
    }
    //document.getElementById('showl').innerHTML=Number(pointx).toFixed(2) ;

    document.getElementById('showl').innerHTML= count;
    var cntr= 100 - count;

    document.getElementById('showr').innerHTML= cntr;


    for(i=1;i<=10;i++)
    {
        if (i == 1) {
            image = document.getElementById("img1");
            context.drawImage(image, 120,168);

            context.font = "23px Arial";
            context.fillText("X", 170, 155);

            context.beginPath();
            context.moveTo(234,250);
            context.lineTo(234,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(122,250);
            context.lineTo(122,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }
        if (i == 7) {
            image = document.getElementById("img1");
            context.drawImage(image, 269,168);

            context.font = "23px Arial";
            context.fillText("P", 320, 155);

            context.beginPath();
            context.moveTo(270,250);
            context.lineTo(270,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(383,250);
            context.lineTo(383,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 8) {
            image = document.getElementById("img1");
            context.drawImage(image, 420,168);

            context.font = "23px Arial";
            context.fillText("Q", 470, 155);

            context.beginPath();
            context.moveTo(422,250);
            context.lineTo(422,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(534,250);
            context.lineTo(534,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 9) {
            image = document.getElementById("img1");
            context.drawImage(image, 570,168);

            context.font = "23px Arial";
            context.fillText("Y", 620, 155);

            context.beginPath();
            context.moveTo(571,250);
            context.lineTo(571,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(684,250);
            context.lineTo(684,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 10) {
            image = document.getElementById("img_gal_tilt");
            context.drawImage(image, 355,312,90,110);

            var r1 = document.getElementById("resist");
            var str1 = r1.options[r1.selectedIndex].text;



            if(str1==0.1 && count==49){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.2 && count==48){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.3 && count==47){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.4 && count==46){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.5 && count==45){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else{
                image = document.getElementById("img_gal_tilt");
                context.drawImage(image, 355,312,90,110);
            }

            context.beginPath();
            context.moveTo(403,280);
            context.lineTo(403,312);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();

            context.beginPath();
            context.moveTo(85,380);
            context.lineTo(715,380);
            context.strokeStyle = "blue";
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(403,350);
            //context.lineTo(403,380);
            context.lineTo(pointx,380);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();


        }



        else if (i == 2) {
            image = document.getElementById("img2");
            context.drawImage(image, 300,35);
        }

        else if (i == 3) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }
        /*else if (i == 4) {
            image = document.getElementById("img4");
            context.drawImage(image, 150, 185);
        }*/

        else if(i==5){

            context.beginPath();
            context.moveTo(253, 10);
            context.lineTo(253, 280);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(251, 10);
            context.lineTo(323, 10);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(323, 8);
            context.lineTo(323, 35);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(398, 8);
            context.lineTo(398, 35);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(396, 8);
            context.lineTo(440, 8);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(439, 7);
            context.lineTo(439, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(437, 75);
            context.lineTo(478, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(522, 75);
            context.lineTo(553, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(553, 73);
            context.lineTo(553, 280);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();



        }


    }


}
function main3le() {

    document.getElementById('btnr').disabled=false;
    context.clearRect(0,0,canvas.width,canvas.height);

    var img_thr = document.getElementById("img_bridge");
    context.drawImage(img_thr, 30,-722,740,1240);

    context.font = "23px Arial";
    context.fillText("G", 430, 340);

    context.font = "23px Arial";
    context.fillText("A", 240, 325);

    context.font = "23px Arial";
    context.fillText("C", 545, 325);

    context.font = "23px Arial";
    context.fillText("E", 75, 430);

    context.font = "23px Arial";
    context.fillText("F", 715, 430);



    for (var i = 50, j = 8; i <= 650; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }


    var image;

    if(pointx>85){
        pointx = pointx - 6.4;
        count=count - 1 ;


    }
    else{
        alert("value can not go below");
    }
    //document.getElementById('showl').innerHTML=Number(pointx).toFixed(2) ;
    document.getElementById('showl').innerHTML= count;
    var cntr=  count;

    document.getElementById('showr').innerHTML= cntr;


    for(i=1;i<=10;i++)
    {
        if (i == 1) {
            image = document.getElementById("img1");
            context.drawImage(image, 120,168);

            context.font = "23px Arial";
            context.fillText("Y", 170, 155);

            context.beginPath();
            context.moveTo(234,250);
            context.lineTo(234,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(122,250);
            context.lineTo(122,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }
        if (i == 7) {
            image = document.getElementById("img1");
            context.drawImage(image, 269,168);

            context.font = "23px Arial";
            context.fillText("P", 320, 155);

            context.beginPath();
            context.moveTo(270,250);
            context.lineTo(270,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(383,250);
            context.lineTo(383,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 8) {
            image = document.getElementById("img1");
            context.drawImage(image, 420,168);

            context.font = "23px Arial";
            context.fillText("Q", 470, 155);

            context.beginPath();
            context.moveTo(422,250);
            context.lineTo(422,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(534,250);
            context.lineTo(534,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 9) {
            image = document.getElementById("img1");
            context.drawImage(image, 570,168);

            context.font = "23px Arial";
            context.fillText("X", 620, 155);

            context.beginPath();
            context.moveTo(571,250);
            context.lineTo(571,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(684,250);
            context.lineTo(684,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 10) {
            image = document.getElementById("img_gal_tilt");
            context.drawImage(image, 355,312,90,110);

            var r1 = document.getElementById("resist");
            var str1 = r1.options[r1.selectedIndex].text;



            if(str1==0.1 && count==51){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.2 && count==52){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.3 && count==53){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.4 && count==54){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.5 && count==55){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else{
                image = document.getElementById("img_gal_tilt");
                context.drawImage(image, 355,312,90,110);
            }

            context.beginPath();
            context.moveTo(403,280);
            context.lineTo(403,312);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();

            context.beginPath();
            context.moveTo(85,380);
            context.lineTo(715,380);
            context.strokeStyle = "blue";
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(403,350);
            //context.lineTo(403,380);
            context.lineTo(pointx,380);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();

        }



        else if (i == 2) {
            image = document.getElementById("img2");
            context.drawImage(image, 300,35);
        }

        else if (i == 3) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }
        /*else if (i == 4) {
            image = document.getElementById("img4");
            context.drawImage(image, 150, 185);
        }*/

        else if(i==5){

            context.beginPath();
            context.moveTo(253, 10);
            context.lineTo(253, 280);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(251, 10);
            context.lineTo(323, 10);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(323, 8);
            context.lineTo(323, 35);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(398, 8);
            context.lineTo(398, 35);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(396, 8);
            context.lineTo(440, 8);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(439, 7);
            context.lineTo(439, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(437, 75);
            context.lineTo(478, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(522, 75);
            context.lineTo(553, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(553, 73);
            context.lineTo(553, 280);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();


        }


    }


}

function main3le_2() {

    document.getElementById('btnr').disabled=false;
    context.clearRect(0,0,canvas.width,canvas.height);

    var img_thr = document.getElementById("img_bridge");
    context.drawImage(img_thr, 30,-722,740,1240);

    context.font = "23px Arial";
    context.fillText("G", 430, 340);

    context.font = "23px Arial";
    context.fillText("A", 240, 325);

    context.font = "23px Arial";
    context.fillText("C", 545, 325);

    context.font = "23px Arial";
    context.fillText("E", 75, 430);

    context.font = "23px Arial";
    context.fillText("F", 715, 430);



    for (var i = 50, j = 8; i <= 650; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }


    var image;

    if(pointx>85){
        pointx = pointx - 6.4;
        count=count - 1 ;


    }
    else{
        alert("value can not go below");
    }
    //document.getElementById('showl').innerHTML=Number(pointx).toFixed(2) ;
    document.getElementById('showl').innerHTML= count;
    var cntr=  count;

    document.getElementById('showr').innerHTML= cntr;


    for(i=1;i<=10;i++)
    {
        if (i == 1) {
            image = document.getElementById("img1");
            context.drawImage(image, 120,168);

            context.font = "23px Arial";
            context.fillText("Y", 170, 155);

            context.beginPath();
            context.moveTo(234,250);
            context.lineTo(234,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(122,250);
            context.lineTo(122,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }
        if (i == 7) {
            image = document.getElementById("img1");
            context.drawImage(image, 269,168);

            context.font = "23px Arial";
            context.fillText("P", 320, 155);

            context.beginPath();
            context.moveTo(270,250);
            context.lineTo(270,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(383,250);
            context.lineTo(383,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 8) {
            image = document.getElementById("img1");
            context.drawImage(image, 420,168);

            context.font = "23px Arial";
            context.fillText("Q", 470, 155);

            context.beginPath();
            context.moveTo(422,250);
            context.lineTo(422,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(534,250);
            context.lineTo(534,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 9) {
            image = document.getElementById("img1");
            context.drawImage(image, 570,168);

            context.font = "23px Arial";
            context.fillText("X", 620, 155);

            context.beginPath();
            context.moveTo(571,250);
            context.lineTo(571,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(684,250);
            context.lineTo(684,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 10) {
            image = document.getElementById("img_gal_tilt");
            context.drawImage(image, 355,312,90,110);

            var r1 = document.getElementById("resist");
            var str1 = r1.options[r1.selectedIndex].text;



            if(str1==0.1 && count==50){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.2 && count==51){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.3 && count==52){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.4 && count==53){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.5 && count==54){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else{
                image = document.getElementById("img_gal_tilt");
                context.drawImage(image, 355,312,90,110);
            }

            context.beginPath();
            context.moveTo(403,280);
            context.lineTo(403,312);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();

            context.beginPath();
            context.moveTo(85,380);
            context.lineTo(715,380);
            context.strokeStyle = "blue";
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(403,350);
            //context.lineTo(403,380);
            context.lineTo(pointx,380);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();


        }



        else if (i == 2) {
            image = document.getElementById("img2");
            context.drawImage(image, 300,35);
        }

        else if (i == 3) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }
        /*else if (i == 4) {
            image = document.getElementById("img4");
            context.drawImage(image, 150, 185);
        }*/

        else if(i==5){

            context.beginPath();
            context.moveTo(253, 10);
            context.lineTo(253, 280);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(251, 10);
            context.lineTo(323, 10);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(323, 8);
            context.lineTo(323, 35);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(398, 8);
            context.lineTo(398, 35);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(396, 8);
            context.lineTo(440, 8);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(439, 7);
            context.lineTo(439, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(437, 75);
            context.lineTo(478, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(522, 75);
            context.lineTo(553, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(553, 73);
            context.lineTo(553, 280);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();


        }


    }


}




function main3r() {
context.clearRect(0,0,canvas.width,canvas.height);

    var img_thr = document.getElementById("img_bridge");
    context.drawImage(img_thr, 30,-722,740,1240);

    context.font = "23px Arial";
    context.fillText("G", 430, 340);

    context.font = "23px Arial";
    context.fillText("A", 240, 325);

    context.font = "23px Arial";
    context.fillText("C", 545, 325);

    context.font = "23px Arial";
    context.fillText("E", 75, 430);

    context.font = "23px Arial";
    context.fillText("F", 715, 430);

    for (var i = 50, j = 8; i <= 650; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }

    if(pointx<717) {
    pointx = pointx + 6.4;
    count = count + 1;
}
else{
    alert("value exceeds");
}

//document.getElementById('showr').innerHTML=Number(pointx).toFixed(2);
    //document.getElementById('showr').innerHTML= 100 - parseInt(count);
    document.getElementById('showl').innerHTML= count;
    var cntr= 100 - count;

    document.getElementById('showr').innerHTML= cntr;



	 var image;
	 	for(i=1;i<=10;i++)
	{
		 if (i == 1) {
        image = document.getElementById("img1");
        context.drawImage(image, 120,168);

             context.font = "23px Arial";
             context.fillText("X", 170, 155);

        context.beginPath();
        context.moveTo(234,250);
        context.lineTo(234,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(122,250);
        context.lineTo(122,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }
    if (i == 7) {
        image = document.getElementById("img1");
        context.drawImage(image, 269,168);

        context.font = "23px Arial";
        context.fillText("P", 320, 155);

        context.beginPath();
        context.moveTo(270,250);
        context.lineTo(270,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(383,250);
        context.lineTo(383,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 8) {
        image = document.getElementById("img1");
        context.drawImage(image, 420,168);

        context.font = "23px Arial";
        context.fillText("Q", 470, 155);

        context.beginPath();
        context.moveTo(422,250);
        context.lineTo(422,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(534,250);
        context.lineTo(534,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 9) {
        image = document.getElementById("img1");
        context.drawImage(image, 570,168);

        context.font = "23px Arial";
        context.fillText("Y", 620, 155);

        context.beginPath();
        context.moveTo(571,250);
        context.lineTo(571,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(684,250);
        context.lineTo(684,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 10) {
        image = document.getElementById("img_gal_tilt");
        context.drawImage(image, 355,312,90,110);

        var r1 = document.getElementById("resist");
        var str1 = r1.options[r1.selectedIndex].text;

        if(str1==0.1 && count==47){
            image = document.getElementById("img_gal_simple");
            context.drawImage(image, 355,312,90,110);
        }
        else if(str1==0.2 && count==46){
            image = document.getElementById("img_gal_simple");
            context.drawImage(image, 355,312,90,110);
        }
        else if(str1==0.3 && count==45){
            image = document.getElementById("img_gal_simple");
            context.drawImage(image, 355,312,90,110);
        }
        else if(str1==0.4 && count==44){
            image = document.getElementById("img_gal_simple");
            context.drawImage(image, 355,312,90,110);
        }
        else if(str1==0.5 && count==43){
            image = document.getElementById("img_gal_simple");
            context.drawImage(image, 355,312,90,110);
        }
        else{
            image = document.getElementById("img_gal_tilt");
            context.drawImage(image, 355,312,90,110);
        }

        context.beginPath();
        context.moveTo(403,280);
        context.lineTo(403,312);
        context.strokeStyle = "blue";
        context.lineWidth = 4;
        context.stroke();

        context.beginPath();
        context.moveTo(85,380);
        context.lineTo(715,380);
        context.strokeStyle = "blue";
        context.lineWidth = 5;
        context.stroke();

        context.beginPath();
        context.moveTo(403,350);
        //context.lineTo(403,380);
        context.lineTo(pointx,380);
        context.strokeStyle = "blue";
        context.lineWidth = 4;
        context.stroke();
    }

    else if (i == 11) {
        image = document.getElementById("img11");
        context.drawImage(image, 475,35);
    }

    else if (i == 2) {
        image = document.getElementById("img2");
        context.drawImage(image, 300,35);
    }
    else if (i == 3) {
        image = document.getElementById("img11");
        context.drawImage(image, 475,35);
    }
    /*else if (i == 4) {
        image = document.getElementById("img4");
        context.drawImage(image, 150, 185);
    }*/

    else if(i==5){

        context.beginPath();
        context.moveTo(253, 10);
        context.lineTo(253, 280);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(251, 10);
        context.lineTo(323, 10);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(323, 8);
        context.lineTo(323, 35);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(398, 8);
        context.lineTo(398, 35);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(396, 8);
        context.lineTo(440, 8);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(439, 7);
        context.lineTo(439, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(437, 75);
        context.lineTo(478, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(522, 75);
        context.lineTo(553, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(553, 73);
        context.lineTo(553, 280);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();



    }

		
	}

}

function main3r_2() {
    context.clearRect(0,0,canvas.width,canvas.height);

    var img_thr = document.getElementById("img_bridge");
    context.drawImage(img_thr, 30,-722,740,1240);

    context.font = "23px Arial";
    context.fillText("G", 430, 340);

    context.font = "23px Arial";
    context.fillText("A", 240, 325);

    context.font = "23px Arial";
    context.fillText("C", 545, 325);

    context.font = "23px Arial";
    context.fillText("E", 75, 430);

    context.font = "23px Arial";
    context.fillText("F", 715, 430);

    for (var i = 50, j = 8; i <= 650; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }

    if(pointx<717) {
        pointx = pointx + 6.4;
        count = count + 1;
    }
    else{
        alert("value exceeds");
    }

//document.getElementById('showr').innerHTML=Number(pointx).toFixed(2);
    //document.getElementById('showr').innerHTML= 100 - parseInt(count);
    document.getElementById('showl').innerHTML= count;
    var cntr= 100 - count;

    document.getElementById('showr').innerHTML= cntr;


    var image;
    for(i=1;i<=10;i++)
    {
        if (i == 1) {
            image = document.getElementById("img1");
            context.drawImage(image, 120,168);

            context.font = "23px Arial";
            context.fillText("X", 170, 155);

            context.beginPath();
            context.moveTo(234,250);
            context.lineTo(234,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(122,250);
            context.lineTo(122,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }
        if (i == 7) {
            image = document.getElementById("img1");
            context.drawImage(image, 269,168);

            context.font = "23px Arial";
            context.fillText("P", 320, 155);

            context.beginPath();
            context.moveTo(270,250);
            context.lineTo(270,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(383,250);
            context.lineTo(383,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 8) {
            image = document.getElementById("img1");
            context.drawImage(image, 420,168);

            context.font = "23px Arial";
            context.fillText("Q", 470, 155);

            context.beginPath();
            context.moveTo(422,250);
            context.lineTo(422,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(534,250);
            context.lineTo(534,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 9) {
            image = document.getElementById("img1");
            context.drawImage(image, 570,168);

            context.font = "23px Arial";
            context.fillText("Y", 620, 155);

            context.beginPath();
            context.moveTo(571,250);
            context.lineTo(571,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(684,250);
            context.lineTo(684,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 10) {
            image = document.getElementById("img_gal_tilt");
            context.drawImage(image, 355,312,90,110);

            var r1 = document.getElementById("resist");
            var str1 = r1.options[r1.selectedIndex].text;

            if(str1==0.1 && count==49){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.2 && count==48){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.3 && count==47){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.4 && count==46){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.5 && count==45){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else{
            image = document.getElementById("img_gal_tilt");
            context.drawImage(image, 355,312,90,110);
            }

            context.beginPath();
            context.moveTo(403,280);
            context.lineTo(403,312);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();

            context.beginPath();
            context.moveTo(85,380);
            context.lineTo(715,380);
            context.strokeStyle = "blue";
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(403,350);
            //context.lineTo(403,380);
            context.lineTo(pointx,380);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();
        }

        else if (i == 11) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }

        else if (i == 2) {
            image = document.getElementById("img2");
            context.drawImage(image, 300,35);
        }
        else if (i == 3) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }
        /*else if (i == 4) {
            image = document.getElementById("img4");
            context.drawImage(image, 150, 185);
        }*/

        else if(i==5){

            context.beginPath();
            context.moveTo(253, 10);
            context.lineTo(253, 280);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(251, 10);
            context.lineTo(323, 10);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(323, 8);
            context.lineTo(323, 35);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(398, 8);
            context.lineTo(398, 35);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(396, 8);
            context.lineTo(440, 8);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(439, 7);
            context.lineTo(439, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(437, 75);
            context.lineTo(478, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(522, 75);
            context.lineTo(553, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(553, 73);
            context.lineTo(553, 280);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();



        }


    }

}


function main3re() {
    context.clearRect(0,0,canvas.width,canvas.height);

    var img_thr = document.getElementById("img_bridge");
    context.drawImage(img_thr, 30,-722,740,1240);

    context.font = "23px Arial";
    context.fillText("G", 430, 340);

    context.font = "23px Arial";
    context.fillText("A", 240, 325);

    context.font = "23px Arial";
    context.fillText("C", 545, 325);

    context.font = "23px Arial";
    context.fillText("E", 75, 430);

    context.font = "23px Arial";
    context.fillText("F", 715, 430);

    for (var i = 50, j = 8; i <= 650; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }

    if(pointx<717) {
        pointx = pointx + 6.4;
        count = count + 1;
    }
    else{
        alert("value exceeds");
    }

//document.getElementById('showr').innerHTML=Number(pointx).toFixed(2);
    document.getElementById('showl').innerHTML= count;
    var cntr=  count;

    document.getElementById('showr').innerHTML= cntr;



    var image;
    for(i=1;i<=10;i++)
    {
        if (i == 1) {
            image = document.getElementById("img1");
            context.drawImage(image, 120,168);

            context.font = "23px Arial";
            context.fillText("Y", 170, 155);

            context.beginPath();
            context.moveTo(234,250);
            context.lineTo(234,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(122,250);
            context.lineTo(122,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }
        if (i == 7) {
            image = document.getElementById("img1");
            context.drawImage(image, 269,168);

            context.font = "23px Arial";
            context.fillText("P", 320, 155);

            context.beginPath();
            context.moveTo(270,250);
            context.lineTo(270,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(383,250);
            context.lineTo(383,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 8) {
            image = document.getElementById("img1");
            context.drawImage(image, 420,168);

            context.font = "23px Arial";
            context.fillText("Q", 470, 155);

            context.beginPath();
            context.moveTo(422,250);
            context.lineTo(422,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(534,250);
            context.lineTo(534,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 9) {
            image = document.getElementById("img1");
            context.drawImage(image, 570,168);

            context.font = "23px Arial";
            context.fillText("X", 620, 155);

            context.beginPath();
            context.moveTo(571,250);
            context.lineTo(571,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(684,250);
            context.lineTo(684,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 10) {
            image = document.getElementById("img_gal_tilt");
            context.drawImage(image, 355,312,90,110);

            var r1 = document.getElementById("resist");
            var str1 = r1.options[r1.selectedIndex].text;



            if(str1==0.1 && count==51){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.2 && count==52){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.3 && count==53){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.4 && count==54){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.5 && count==55){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else{
                image = document.getElementById("img_gal_tilt");
                context.drawImage(image, 355,312,90,110);
            }

            context.beginPath();
            context.moveTo(403,280);
            context.lineTo(403,312);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();

            context.beginPath();
            context.moveTo(85,380);
            context.lineTo(715,380);
            context.strokeStyle = "blue";
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(403,350);
            //context.lineTo(403,380);
            context.lineTo(pointx,380);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();
        }

        else if (i == 11) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }

        else if (i == 2) {
            image = document.getElementById("img2");
            context.drawImage(image, 300,35);
        }
        else if (i == 3) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }
        /*else if (i == 4) {
            image = document.getElementById("img4");
            context.drawImage(image, 150, 185);
        }*/

        else if(i==5){

            context.beginPath();
            context.moveTo(253, 10);
            context.lineTo(253, 280);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(251, 10);
            context.lineTo(323, 10);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(323, 8);
            context.lineTo(323, 35);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(398, 8);
            context.lineTo(398, 35);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(396, 8);
            context.lineTo(440, 8);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(439, 7);
            context.lineTo(439, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(437, 75);
            context.lineTo(478, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(522, 75);
            context.lineTo(553, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(553, 73);
            context.lineTo(553, 280);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();



        }


    }


}


function main3re_2() {
    context.clearRect(0,0,canvas.width,canvas.height);

    var img_thr = document.getElementById("img_bridge");
    context.drawImage(img_thr, 30,-722,740,1240);

    context.font = "23px Arial";
    context.fillText("G", 430, 340);

    context.font = "23px Arial";
    context.fillText("A", 240, 325);

    context.font = "23px Arial";
    context.fillText("C", 545, 325);

    context.font = "23px Arial";
    context.fillText("E", 75, 430);

    context.font = "23px Arial";
    context.fillText("F", 715, 430);

    for (var i = 50, j = 8; i <= 650; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }

    if(pointx<717) {
        pointx = pointx + 6.4;
        count = count + 1;
    }
    else{
        alert("value exceeds");
    }

//document.getElementById('showr').innerHTML=Number(pointx).toFixed(2);
    document.getElementById('showl').innerHTML= count;
    var cntr=  count;

    document.getElementById('showr').innerHTML= cntr;



    var image;
    for(i=1;i<=10;i++)
    {
        if (i == 1) {
            image = document.getElementById("img1");
            context.drawImage(image, 120,168);

            context.font = "23px Arial";
            context.fillText("Y", 170, 155);

            context.beginPath();
            context.moveTo(234,250);
            context.lineTo(234,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(122,250);
            context.lineTo(122,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }
        if (i == 7) {
            image = document.getElementById("img1");
            context.drawImage(image, 269,168);

            context.font = "23px Arial";
            context.fillText("P", 320, 155);

            context.beginPath();
            context.moveTo(270,250);
            context.lineTo(270,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(383,250);
            context.lineTo(383,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 8) {
            image = document.getElementById("img1");
            context.drawImage(image, 420,168);

            context.font = "23px Arial";
            context.fillText("Q", 470, 155);

            context.beginPath();
            context.moveTo(422,250);
            context.lineTo(422,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(534,250);
            context.lineTo(534,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 9) {
            image = document.getElementById("img1");
            context.drawImage(image, 570,168);

            context.font = "23px Arial";
            context.fillText("X", 620, 155);

            context.beginPath();
            context.moveTo(571,250);
            context.lineTo(571,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(684,250);
            context.lineTo(684,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 10) {
            image = document.getElementById("img_gal_tilt");
            context.drawImage(image, 355,312,90,110);

            var r1 = document.getElementById("resist");
            var str1 = r1.options[r1.selectedIndex].text;



            if(str1==0.1 && count==50){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.2 && count==51){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.3 && count==52){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.4 && count==53){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else if(str1==0.5 && count==54){
                image = document.getElementById("img_gal_simple");
                context.drawImage(image, 355,312,90,110);
            }
            else{
                image = document.getElementById("img_gal_tilt");
                context.drawImage(image, 355,312,90,110);
            }

            context.beginPath();
            context.moveTo(403,280);
            context.lineTo(403,312);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();

            context.beginPath();
            context.moveTo(85,380);
            context.lineTo(715,380);
            context.strokeStyle = "blue";
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(403,350);
            //context.lineTo(403,380);
            context.lineTo(pointx,380);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();
        }

        else if (i == 11) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }

        else if (i == 2) {
            image = document.getElementById("img2");
            context.drawImage(image, 300,35);
        }
        else if (i == 3) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }
        /*else if (i == 4) {
            image = document.getElementById("img4");
            context.drawImage(image, 150, 185);
        }*/

        else if(i==5){

            context.beginPath();
            context.moveTo(253, 10);
            context.lineTo(253, 280);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(251, 10);
            context.lineTo(323, 10);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(323, 8);
            context.lineTo(323, 35);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(398, 8);
            context.lineTo(398, 35);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(396, 8);
            context.lineTo(440, 8);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(439, 7);
            context.lineTo(439, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(437, 75);
            context.lineTo(478, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(522, 75);
            context.lineTo(553, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(553, 73);
            context.lineTo(553, 280);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();



        }


    }


}



function mouseevt(x,y) {
    var image;
    if (i == 1) {
        image = document.getElementById("img1");
        context.drawImage(image, 120,168);

        context.font = "23px Arial";
        context.fillText("X", 170, 155);

        context.beginPath();
        context.moveTo(234,250);
        context.lineTo(234,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(122,250);
        context.lineTo(122,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }
    if (i == 7) {
        image = document.getElementById("img1");
        context.drawImage(image, 269,168);

        context.font = "23px Arial";
        context.fillText("P", 320, 155);

        context.beginPath();
        context.moveTo(270,250);
        context.lineTo(270,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(383,250);
        context.lineTo(383,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 8) {
        image = document.getElementById("img1");
        context.drawImage(image, 420,168);

        context.font = "23px Arial";
        context.fillText("Q", 470, 155);

        context.beginPath();
        context.moveTo(422,250);
        context.lineTo(422,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(534,250);
        context.lineTo(534,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 9) {
        image = document.getElementById("img1");
        context.drawImage(image, 570,168);

        context.font = "23px Arial";
        context.fillText("Y", 620, 155);

        context.beginPath();
        context.moveTo(571,250);
        context.lineTo(571,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(684,250);
        context.lineTo(684,280);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 10) {
        // image = document.getElementById("img6");
        // context.drawImage(image, 383,310);

        context.font = "23px Arial";
        context.fillText("G", 430, 340);

        image = document.getElementById("img_gal_tilt");
        context.drawImage(image, 355,312,90,110);

        context.beginPath();
        context.moveTo(403,280);
        context.lineTo(403,312);
        context.strokeStyle = "blue";
        context.lineWidth = 4;
        context.stroke();

        context.beginPath();
        context.moveTo(85,380);
        context.lineTo(715,380);
        context.strokeStyle = "blue";
        context.lineWidth = 5;
        context.stroke();

        context.beginPath();
        context.moveTo(403,350);
        //context.lineTo(403,380);
        context.lineTo(403,380);
        context.strokeStyle = "blue";
        context.lineWidth = 4;
        context.stroke();

        /////////////////

    }

    else if (i == 2) {
        image = document.getElementById("img2");
        context.drawImage(image, 300,35);
    }
    else if (i == 3) {
        image = document.getElementById("img3");
        context.drawImage(image, 475,35);
    }
    else if (i == 11) {
        image = document.getElementById("img11");
        context.drawImage(image, 475,35);
        alert("Now The Circuit is fully connected");
    }
    else if (i == 4) {
        image = document.getElementById("img4");
        context.drawImage(image, 150, 185);
    }

    else if(i==5){

        context.beginPath();
        context.moveTo(253, 10);
        context.lineTo(253, 280);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(251, 10);
        context.lineTo(323, 10);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(323, 8);
        context.lineTo(323, 35);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(398, 8);
        context.lineTo(398, 35);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(396, 8);
        context.lineTo(440, 8);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(439, 7);
        context.lineTo(439, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(437, 75);
        context.lineTo(478, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(522, 75);
        context.lineTo(553, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(553, 73);
        context.lineTo(553, 280);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();


    }
    else if(i==6){
        context.beginPath();
        context.moveTo(203,90);
        context.lineTo(330,90);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(330,90);
        context.lineTo(330,120);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(330,184);
        context.lineTo(330,215);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(330,215);
        context.lineTo(195,215);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(157,215);
        context.lineTo(30,215);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(30,215);
        context.lineTo(30,92);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(30,92);
        context.lineTo(70,92);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();
    }
}

function main3e() {

    context.clearRect(0,0,canvas.width,canvas.height);

    context.font = "23px Arial";
    context.fillText("G", 430, 340);

    btnl.style.display='none';

    btnr.style.display='none';
    btnle.style.display='';
    btnre.style.display='';
    btnx.style.display='';
    btne.style.display='none';

    l2.style.display='';
    l1.style.display='none';

    var img_thr = document.getElementById("img_bridge");
    context.drawImage(img_thr, 30,-722,740,1240);

    context.font = "23px Arial";
    context.fillText("X", 620, 155);

    context.font = "23px Arial";
    context.fillText("Y", 170, 155);

    context.font = "23px Arial";
    context.fillText("A", 240, 325);

    context.font = "23px Arial";
    context.fillText("C", 545, 325);

    context.font = "23px Arial";
    context.fillText("E", 75, 430);

    context.font = "23px Arial";
    context.fillText("F", 715, 430);

    for (var i = 50, j = 8; i <= 650; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }




    var image;
    for(i=1;i<=10;i++)
    {
        if (i == 1) {
            image = document.getElementById("img1");
            context.drawImage(image, 120,168);

            context.font = "23px Arial";
            context.fillText("Y", 170, 155);

            context.beginPath();
            context.moveTo(234,250);
            context.lineTo(234,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(122,250);
            context.lineTo(122,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }
        if (i == 7) {
            image = document.getElementById("img1");
            context.drawImage(image, 269,168);

            context.font = "23px Arial";
            context.fillText("P", 320, 155);

            context.beginPath();
            context.moveTo(270,250);
            context.lineTo(270,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(383,250);
            context.lineTo(383,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 8) {
            image = document.getElementById("img1");
            context.drawImage(image, 420,168);

            context.font = "23px Arial";
            context.fillText("Q", 470, 155);

            context.beginPath();
            context.moveTo(422,250);
            context.lineTo(422,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(534,250);
            context.lineTo(534,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 9) {
            image = document.getElementById("img1");
            context.drawImage(image, 570,168);

            context.font = "23px Arial";
            context.fillText("X", 620, 155);

            context.beginPath();
            context.moveTo(571,250);
            context.lineTo(571,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(684,250);
            context.lineTo(684,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 10) {
            image = document.getElementById("img_gal_tilt");
            context.drawImage(image, 355,312,90,110);

            context.beginPath();
            context.moveTo(403,280);
            context.lineTo(403,312);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();

            context.beginPath();
            context.moveTo(85,380);
            context.lineTo(715,380);
            context.strokeStyle = "blue";
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(403,350);
            //context.lineTo(403,380);
            context.lineTo(pointx,380);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();
        }

        else if (i == 11) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }

        else if (i == 2) {
            image = document.getElementById("img2");
            context.drawImage(image, 300,35);
        }
        else if (i == 3) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }
        /*else if (i == 4) {
            image = document.getElementById("img4");
            context.drawImage(image, 150, 185);
        }*/

        else if(i==5){

            context.beginPath();
            context.moveTo(253, 10);
            context.lineTo(253, 280);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(251, 10);
            context.lineTo(323, 10);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(323, 8);
            context.lineTo(323, 35);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(398, 8);
            context.lineTo(398, 35);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(396, 8);
            context.lineTo(440, 8);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(439, 7);
            context.lineTo(439, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(437, 75);
            context.lineTo(478, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(522, 75);
            context.lineTo(553, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(553, 73);
            context.lineTo(553, 280);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();



        }

    }

}

function main3e_2() {

    context.clearRect(0,0,canvas.width,canvas.height);
    btnl_2.style.display='none';

    context.font = "23px Arial";
    context.fillText("G", 430, 340);

    btnr_2.style.display='none';
    btnle_2.style.display='';
    btnre_2.style.display='';
    btnx_2.style.display='';
    btne_2.style.display='none';

    l2.style.display='';
    l1.style.display='none';

    var img_thr = document.getElementById("img_bridge");
    context.drawImage(img_thr, 30,-722,740,1240);

    context.font = "23px Arial";
    context.fillText("X", 620, 155);

    context.font = "23px Arial";
    context.fillText("Y", 170, 155);

    context.font = "23px Arial";
    context.fillText("A", 240, 325);

    context.font = "23px Arial";
    context.fillText("C", 545, 325);

    context.font = "23px Arial";
    context.fillText("E", 75, 430);

    context.font = "23px Arial";
    context.fillText("F", 715, 430);

    for (var i = 50, j = 8; i <= 650; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }




    var image;
    for(i=1;i<=10;i++)
    {
        if (i == 1) {
            image = document.getElementById("img1");
            context.drawImage(image, 120,168);

            context.font = "23px Arial";
            context.fillText("Y", 170, 155);

            context.beginPath();
            context.moveTo(234,250);
            context.lineTo(234,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(122,250);
            context.lineTo(122,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }
        if (i == 7) {
            image = document.getElementById("img1");
            context.drawImage(image, 269,168);

            context.font = "23px Arial";
            context.fillText("P", 320, 155);

            context.beginPath();
            context.moveTo(270,250);
            context.lineTo(270,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(383,250);
            context.lineTo(383,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 8) {
            image = document.getElementById("img1");
            context.drawImage(image, 420,168);

            context.font = "23px Arial";
            context.fillText("Q", 470, 155);

            context.beginPath();
            context.moveTo(422,250);
            context.lineTo(422,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(534,250);
            context.lineTo(534,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 9) {
            image = document.getElementById("img1");
            context.drawImage(image, 570,168);

            context.font = "23px Arial";
            context.fillText("X", 620, 155);

            context.beginPath();
            context.moveTo(571,250);
            context.lineTo(571,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(684,250);
            context.lineTo(684,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 10) {
            image = document.getElementById("img_gal_tilt");
            context.drawImage(image, 355,312,90,110);

            context.beginPath();
            context.moveTo(403,280);
            context.lineTo(403,312);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();

            context.beginPath();
            context.moveTo(85,380);
            context.lineTo(715,380);
            context.strokeStyle = "blue";
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(403,350);
            //context.lineTo(403,380);
            context.lineTo(pointx,380);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();
        }

        else if (i == 11) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }

        else if (i == 2) {
            image = document.getElementById("img2");
            context.drawImage(image, 300,35);
        }
        else if (i == 3) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }
        /*else if (i == 4) {
            image = document.getElementById("img4");
            context.drawImage(image, 150, 185);
        }*/

        else if(i==5){

            context.beginPath();
            context.moveTo(253, 10);
            context.lineTo(253, 280);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(251, 10);
            context.lineTo(323, 10);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(323, 8);
            context.lineTo(323, 35);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(398, 8);
            context.lineTo(398, 35);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(396, 8);
            context.lineTo(440, 8);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(439, 7);
            context.lineTo(439, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(437, 75);
            context.lineTo(478, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(522, 75);
            context.lineTo(553, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(553, 73);
            context.lineTo(553, 280);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();



        }

    }

}

function main3x() {

    context.clearRect(0,0,canvas.width,canvas.height);

    context.font = "23px Arial";
    context.fillText("G", 430, 340);

    btnl.style.display='';
    btnr.style.display='';
    btnx.style.display='none';
    btne.style.display='';
    btnle.style.display='none';
    btnre.style.display='none';
    l2.style.display='none';
    l1.style.display='';

    var img_thr = document.getElementById("img_bridge");
    context.drawImage(img_thr, 30,-722,740,1240);

     context.font = "23px Arial";
    // context.fillText("X", 620, 155);
    //
    // context.font = "23px Arial";
    // context.fillText("Y", 170, 155);

    context.font = "23px Arial";
    context.fillText("A", 240, 325);

    context.font = "23px Arial";
    context.fillText("C", 545, 325);

    context.font = "23px Arial";
    context.fillText("E", 75, 430);

    context.font = "23px Arial";
    context.fillText("F", 715, 430);

    for (var i = 50, j = 8; i <= 650; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }





    var image;
    for(i=1;i<=10;i++)
    {
        if (i == 1) {
            image = document.getElementById("img1");
            context.drawImage(image, 120,168);

            context.font = "23px Arial";
            context.fillText("X", 170, 155);

            context.beginPath();
            context.moveTo(234,250);
            context.lineTo(234,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(122,250);
            context.lineTo(122,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }
        if (i == 7) {
            image = document.getElementById("img1");
            context.drawImage(image, 269,168);

            context.font = "23px Arial";
            context.fillText("P", 320, 155);

            context.beginPath();
            context.moveTo(270,250);
            context.lineTo(270,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(383,250);
            context.lineTo(383,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 8) {
            image = document.getElementById("img1");
            context.drawImage(image, 420,168);

            context.font = "23px Arial";
            context.fillText("Q", 470, 155);

            context.beginPath();
            context.moveTo(422,250);
            context.lineTo(422,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(534,250);
            context.lineTo(534,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 9) {
            image = document.getElementById("img1");
            context.drawImage(image, 570,168);

            context.font = "23px Arial";
            context.fillText("Y", 620, 155);

            context.beginPath();
            context.moveTo(571,250);
            context.lineTo(571,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(684,250);
            context.lineTo(684,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 10) {
            image = document.getElementById("img_gal_tilt");
            context.drawImage(image, 355,312,90,110);

            context.beginPath();
            context.moveTo(403,280);
            context.lineTo(403,312);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();

            context.beginPath();
            context.moveTo(85,380);
            context.lineTo(715,380);
            context.strokeStyle = "blue";
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(403,350);
            //context.lineTo(403,380);
            context.lineTo(pointx,380);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();
        }

        else if (i == 11) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }

        else if (i == 2) {
            image = document.getElementById("img2");
            context.drawImage(image, 300,35);
        }
        else if (i == 3) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }
        /*else if (i == 4) {
            image = document.getElementById("img4");
            context.drawImage(image, 150, 185);
        }*/

        else if(i==5){

            context.beginPath();
            context.moveTo(253, 10);
            context.lineTo(253, 280);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(251, 10);
            context.lineTo(323, 10);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(323, 8);
            context.lineTo(323, 35);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(398, 8);
            context.lineTo(398, 35);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(396, 8);
            context.lineTo(440, 8);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(439, 7);
            context.lineTo(439, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(437, 75);
            context.lineTo(478, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(522, 75);
            context.lineTo(553, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(553, 73);
            context.lineTo(553, 280);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();



        }

    }

}

function main3x_2() {

    context.clearRect(0,0,canvas.width,canvas.height);

    var img_thr = document.getElementById("img_bridge");
    context.drawImage(img_thr, 30,-722,740,1240);

    context.font = "23px Arial";
    context.fillText("G", 430, 340);

    btnl_2.style.display='';
    btnr_2.style.display='';
    btnx_2.style.display='none';
    btne_2.style.display='';
    btnle_2.style.display='none';
    btnre_2.style.display='none';
    l2.style.display='none';
    l1.style.display='';

    context.font = "23px Arial";
    // context.fillText("X", 620, 155);
    //
    // context.font = "23px Arial";
    // context.fillText("Y", 170, 155);

    context.font = "23px Arial";
    context.fillText("A", 240, 325);

    context.font = "23px Arial";
    context.fillText("C", 545, 325);

    context.font = "23px Arial";
    context.fillText("E", 75, 430);

    context.font = "23px Arial";
    context.fillText("F", 715, 430);

    for (var i = 50, j = 8; i <= 650; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 385);
                context.lineTo(50 + i, 390 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }




    var image;
    for(i=1;i<=10;i++)
    {
        if (i == 1) {
            image = document.getElementById("img1");
            context.drawImage(image, 120,168);

            context.font = "23px Arial";
            context.fillText("X", 170, 155);

            context.beginPath();
            context.moveTo(234,250);
            context.lineTo(234,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(122,250);
            context.lineTo(122,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }
        if (i == 7) {
            image = document.getElementById("img1");
            context.drawImage(image, 269,168);

            context.font = "23px Arial";
            context.fillText("P", 320, 155);

            context.beginPath();
            context.moveTo(270,250);
            context.lineTo(270,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(383,250);
            context.lineTo(383,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 8) {
            image = document.getElementById("img1");
            context.drawImage(image, 420,168);

            context.font = "23px Arial";
            context.fillText("Q", 470, 155);

            context.beginPath();
            context.moveTo(422,250);
            context.lineTo(422,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(534,250);
            context.lineTo(534,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 9) {
            image = document.getElementById("img1");
            context.drawImage(image, 570,168);

            context.font = "23px Arial";
            context.fillText("Y", 620, 155);

            context.beginPath();
            context.moveTo(571,250);
            context.lineTo(571,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(684,250);
            context.lineTo(684,280);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 10) {
            image = document.getElementById("img_gal_tilt");
            context.drawImage(image, 383,310,100,100);

            context.beginPath();
            context.moveTo(403,280);
            context.lineTo(403,312);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();

            context.beginPath();
            context.moveTo(85,380);
            context.lineTo(715,380);
            context.strokeStyle = "blue";
            context.lineWidth = 5;
            context.stroke();

            context.beginPath();
            context.moveTo(403,350);
            //context.lineTo(403,380);
            context.lineTo(pointx,380);
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.stroke();
        }

        else if (i == 11) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }

        else if (i == 2) {
            image = document.getElementById("img2");
            context.drawImage(image, 300,35);
        }
        else if (i == 3) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }
        /*else if (i == 4) {
            image = document.getElementById("img4");
            context.drawImage(image, 150, 185);
        }*/

        else if(i==5){

            context.beginPath();
            context.moveTo(253, 10);
            context.lineTo(253, 280);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(251, 10);
            context.lineTo(323, 10);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(323, 8);
            context.lineTo(323, 35);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(398, 8);
            context.lineTo(398, 35);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(396, 8);
            context.lineTo(440, 8);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(439, 7);
            context.lineTo(439, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(437, 75);
            context.lineTo(478, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(522, 75);
            context.lineTo(553, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(553, 73);
            context.lineTo(553, 280);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();



        }

    }

}


function main1() {
    i = 1;

    document.getElementById('btn7').disabled=false;
    document.getElementById('btn7').style.cursor="pointer";
    document.getElementById('btn7').classList.remove("disabled");
}
function main7() {
    i = 7;

    document.getElementById('btn8').disabled=false;
    document.getElementById('btn8').style.cursor="pointer";
    document.getElementById('btn8').classList.remove("disabled");
}

function main8() {
    i = 8;

    document.getElementById('btn9').disabled=false;
    document.getElementById('btn9').style.cursor="pointer";
    document.getElementById('btn9').classList.remove("disabled");}

function main9() {
    i = 9;

    document.getElementById('btn10').disabled=false;
    document.getElementById('btn10').style.cursor="pointer";
    document.getElementById('btn10').classList.remove("disabled");
}

function main10() {
    i = 10;

    document.getElementById('btn2').disabled=false;
    document.getElementById('btn2').style.cursor="pointer";
    document.getElementById('btn2').classList.remove("disabled");}
function main11() {
    i = 11;

    document.getElementById('btnl').disabled=false;
    document.getElementById('btnl').style.cursor="pointer";
    document.getElementById('btnl').classList.remove("disabled");

    document.getElementById('btnr').disabled=false;
    document.getElementById('btnr').style.cursor="pointer";
    document.getElementById('btnr').classList.remove("disabled");

    document.getElementById('btne').disabled=false;
    document.getElementById('btne').style.cursor="pointer";
    document.getElementById('btne').classList.remove("disabled");
}

function main2() {
    i = 2;

    document.getElementById('btn3').disabled=false;
    document.getElementById('btn3').style.cursor="pointer";
    document.getElementById('btn3').classList.remove("disabled");}

function main3() {
    i = 3;

    document.getElementById('btn5').disabled=false;
    document.getElementById('btn5').style.cursor="pointer";
    document.getElementById('btn5').classList.remove("disabled");}

function main5() {

    i=5;

    document.getElementById('btn11').disabled=false;
    document.getElementById('btn11').style.cursor="pointer";
    document.getElementById('btn11').classList.remove("disabled");}




//-----------------







