window.onload = function () {
    var oBtn = document.getElementById("txtclick");
    var oImag = document.getElementById('imgclick');
    var oDiv = document.getElementById("main-Panel");
    var oBtnClear = document.getElementById("clearAll");
    var oBtnSave = document.getElementById("save");
    var oBtnPreview = document.getElementById('preview');
    var iChange = document.querySelector("#imgChange");
    var oChangeImg = document.getElementById("editorImg");
    var oDel = document.getElementById('del');

    var picArr = ['static/img/test1.jpg','static/img/test2.gif','static/img/test3.jpg','static/img/test4.jpg'];

    if(oImag){
        oImag.onclick = function () {
            oDiv.innerHTML += '<li><div class="boxImg"><img src="static/img/test1.jpg" style="width: 300px;height: 400px;margin-left: 100px"></div></li><br/>';
        }
    }
    if(oBtn){
        document.getElementById("txtclick").onclick = function(){
            oDiv.innerHTML+= '<li><div class="box">' + '请输入文本：'+'</div></li>';
        };
    }

    var oLi = document.getElementsByClassName("items");
    if(oLi){
        for(var i=0; i<oLi.length; i++){
            oLi[i].onclick = function () {
                oDiv.innerHTML+= '<li><div class="box">'+'aaaa'+'</div></li>';
            }
        }
    }
    if(oBtnClear){
        oBtnClear.onclick = function () {
            oDiv.innerHTML='';
        }
    }

    if(oBtnSave){
        oBtnSave.onclick = function () {
            if(oDiv.innerHTML){
                localStorage.setItem("object", oDiv.innerHTML);
                alert("保存成功");
            }else {
                alert("保存失败，没有获取到内容")
            }
        }
    }
    if(oBtnPreview){
        oBtnPreview.onclick = function () {
            var aLi = document.getElementById('main-Panel1').parentNode;
            bootbox.dialog({
                title: "预览作品",
                message: '<ul>' + aLi.innerHTML + '</ul>'
            });
        }

        oChangeImg.addEventListener('click',function () {
            iChange.onclick = function () {
                    oChangeImg.src = picArr[2];

            }
            oDel.onclick = function () {
                oChangeImg.src = '';
            }
        })

        oDiv.addEventListener('click',function () {
            if(oDiv.children.tagName === 'LI'){

            }
        });




    }



















































}