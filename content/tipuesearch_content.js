var tipuesearch = {"pages": [{'title': 'About', 'text': '學號:40923134 \n 個人網站: https://40923134.github.io/cd2022/content/index.html \n 個人倉儲: https://github.com/40923134/cd2022 \n 小組網站: https://40923123.github.io/cd2022ag5/content/index.html \n 小組倉儲: https://github.com/40923134/cd2022ag5 \n', 'tags': '', 'url': 'About.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'w2', 'text': '\n \n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w6', 'text': '根據老師教學影片將共同、遠端、近端的名稱與網址連結更改為自己的 \n \n 利用blog進行紀錄自己的作業並 \n 上傳的進度與作品 \n \n 編輯結束先Ctrl+s進行save \n 在local-blog 按 右鍵\xa0 再點選 Goto Script \n 將跳出的指令:\xa0 pelican markdown -o blog -s local_publishconf.py  複製下來 \n \n 在cmd輸入以下指令: \n cd tmp \n cd cd2022\xa0 \n pelican markdown -o blog -s local_publishconf.py \xa0 ( 剛剛複製下來的指令 \n 執行後若與下圖訊息相同表示無異 \n \n 進行acp推送至倉儲 \n \n 退送後檢查是否有異狀 與下圖相同表示無異 \n \n \xa0 \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '設法以隨身程式系統編譯此程式碼: \n \n git clone \xa0 https://github.com/mdecourse/scarysim.git \n 修改 scarysim.pro, 蓋掉第 11 行, 成為 # LIBS\xa0\xa0\xa0\xa0 += -lglut -lGLU \n cd scarysim \n qmake -o Makefile scarysim.pro \n mingw32-make -f Makefile.Release 可以在 release 目錄取得 scarysim.exe \n 因為 scarysim.exe 執行需要 base.obj, arm1.obj, arm2.obj, arm3.obj 等零件外型檔案, 以及對應的 .mtl 材質檔案, 因此可將 scarysim.exe 移至倉儲根目錄執行. \n 由於此套程式碼在 Target 模式下, 零組件間會造成干涉, 表示其 Inverse Kinematic 運算並不正確, 請設法修正此錯誤後, 修改其零件尺寸與操作控制方法, 設法模擬 MTB 的 \xa0 Pick and Place demo \xa0 範例. \n 請各組指定組員分別利用 Solvespace、NX12、NX1980、NX2008 與 Onshape 繪製 \xa0 Pick and Place demo \xa0 範例所需的零組件, 並完成 Coppeliasim 4.1.0、4.2.0 與 4.3.0 版的 MTB 機械手臂 Pick and Place 模擬, 完成後請說明在使用不同 MCAD 系統與版次的情況下, 該如何執行協同產品設計專案. \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '組員分別以 Solvespace、NX、Onshape完成零件繪製 \n \n onshape\xa0 簡化零件連結 \n 繪圖分配工作我們組有人先將工程圖做出並簡化零件、標記尺寸 \n \n 後續零件交給分配組配的同學 \n 將uarm組合件轉為 STL 格式後轉入  CoppeliaSim \n 在CoppeliaSim內 進行組裝 \n 並安排以 CoppeliaSim模擬 三軸作動 \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w10', 'text': '', 'tags': '', 'url': 'w10.html'}, {'title': 'w10_block_ui', 'text': '\n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10_block_ui.html'}, {'title': 'w10_nx_integ', 'text': '\n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10_nx_integ.html'}, {'title': 'w10_ssh', 'text': '\n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10_ssh.html'}, {'title': 'w11', 'text': '將w8至w11之網站內容推至小組網站 \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '', 'tags': '', 'url': 'w12.html'}, {'title': 'w12_graduate_school', 'text': '\n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w12_graduate_school.html'}, {'title': 'w12_cadlab_startup', 'text': '\n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w12_cadlab_startup.html'}, {'title': 'w12_task', 'text': '\n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w12_task.html'}, {'title': 'w14', 'text': 'uarm零件檔案\xa0 下載連結 \n uarm模擬影片 \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '模擬檔案、NX檔案  下載連結 \n F、G\xa0 上下擺動 \n H、J\xa0\xa0 前後擺動 \n K、L\xa0\xa0 左右旋轉 \n 抓取方塊步驟 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'w16', 'text': '', 'tags': '', 'url': 'w16.html'}, {'title': 'Online Exam', 'text': '初始狀態座標 \n \n 水平面順時轉動5度後 \n \n 吸取方塊時之座標 \n \n \n', 'tags': '', 'url': 'Online Exam.html'}, {'title': 'rotating_cuboid', 'text': '首先要把紅色框起來的地方改成自己 coppeliasim 的位置 \n \n 從灰球選Tools 再選Go \n \n 按開始模擬就會跑出兩個攝影機\xa0 (如果卡住跑不出來可以按暫停再重新開始). \n \n', 'tags': '', 'url': 'rotating_cuboid.html'}, {'title': 'uarm_nx_tkinter_gui_control', 'text': '\n 開啟coppeliasim的模擬 \n \n 從灰球選Tools 再選Go\xa0 再點to connect \n \n 移動UI介面會跟軟體內的同步 \n \n \n', 'tags': '', 'url': 'uarm_nx_tkinter_gui_control.html'}, {'title': 'Note', 'text': '', 'tags': '', 'url': 'Note.html'}, {'title': 'Tokens', 'text': 'Tokens建立步驟 \n 點擊帳號下的 settings \n \n 點擊Developer settings \n \n 點擊Personal access tokens \n \n 點擊Generate new token \n 輸入Github 密碼 \n \n 輸入倉儲名字 \n \n 選取期限時間 \n \n public_repo 是允許 push 的權限 \n \n 將亂碼複製下來 \n \n 進入倉儲下的.git中更改config \n \n \n \n \n \n 亂碼部分換成複製下來的亂碼 再加上@即可 \n \n 最後acp檢查 \n \n \n', 'tags': '', 'url': 'Tokens.html'}, {'title': 'wink', 'text': '先到老師的 wink影片 \n 右鍵開啟原始碼 \n 複製原始碼 \n <script> var winkVideoData = {  dataVersion: 1,  frameRate: 20,  buttonFrameLength: 10,  buttonFrameOffset: 5,  frameStops: {  }, }; </script> <div class="winkVideoContainerClass"><video class="winkVideoClass" data-dirname="./../cmsimde/static" data-varname="winkVideoData" height=" 600 " video="" width=" 1000 "> <source src="./../downloads/ 檔名 .mp4" type="video/mp4"/></video> <div class="winkVideoOverlayClass"></div> <div class="winkVideoControlBarClass"><button class="winkVideoControlBarPlayButtonClass"></button> <button class="winkVideoControlBarPauseButtonClass"></button> <div class="winkVideoControlBarProgressLeftClass"></div> <div class="winkVideoControlBarProgressEmptyMiddleClass"></div> <div class="winkVideoControlBarProgressRightClass"></div> <div class="winkVideoControlBarProgressFilledMiddleClass"></div> <div class="winkVideoControlBarProgressThumbClass"></div> </div> <div class="winkVideoPlayOverlayClass"></div> </div> \n 將複製下來的原始碼貼在Source code \n \n 更改wink影片尺寸( 1000 更改wink寬、 600 更改wink高) \n width=" 1000 "\xa0height=" 600 " \n \n 將檔名更改為製作好之win k 檔名 \n <source src="./../downloads/ 檔名 .mp4" type="video/mp4"/></video> \n \n 將影片放進downloads \n \n \n \n \n 將製作好之wink影片放進downloads裡面 \n \n \n', 'tags': '', 'url': 'wink.html'}, {'title': 'Leo', 'text': '在小黑窗輸入 \n Leo \n 開啟cd2022的config裡面的pelican \n \n \n 改成自己的學號和標題 \n \n 網址改成自己倉儲 \n \n 網址都改成自己倉儲的網址 \n \n 修改要記錄的標題資訊 \n \n 修改好後對 local-blog 按下 右鍵 ，再按下 Goto Script \n \n 將指令複製起來 \n \n 從 小黑窗進入自己的倉儲 \n 輸入下列指令 \n cd tmp \n cd cd2022\xa0 \n pelican markdown -o blog -s local_publishconf.py \xa0(剛剛複製的指令) \n 最後acp檢查 \n', 'tags': '', 'url': 'Leo.html'}, {'title': '分組名單', 'text': 'cd2022ag1 \xa0  40923101 web  |  40923101 repo  |  \xa0  40923103 web  |  40923103 repo  |  \xa0  40923108 web  |  40923108 repo  |  \xa0  40923119 web  |  40923119 repo  |  \xa0  40923137 web  |  40923137 repo  |  \xa0  40923154 web  |  40923154 repo  |  \xa0  40923156 web  |  40923156 repo  |  \xa0  40971134 web  |  40971134 repo  | \n cd2022ag2 \xa0  40923102 web  |  40923102 repo  |  \xa0  40923104 web  |  40923104 repo  |  \xa0  40923105 web  |  40923105 repo  |  \xa0  40923106 web  |  40923106 repo  |  \xa0  40923107 web  |  40923107 repo  |  \xa0  40923110 web  |  40923110 repo  |  \xa0  40923121 web  |  40923121 repo  |  \xa0  40923153 web  |  40923153 repo  | \n cd2022ag3 \xa0  40923109 web  |  40923109 repo  |  \xa0  40923111 web  |  40923111 repo  |  \xa0  40923114 web  |  40923114 repo  |  \xa0  40923115 web  |  40923115 repo  |  \xa0  40923122 web  |  40923122 repo  |  \xa0  40923129 web  |  40923129 repo  |  \xa0  40923146 web  |  40923146 repo  |  \xa0  40923148 web  |  40923148 repo  | \n cd2022ag4 \xa0  40923116 web  |  40923116 repo  |  \xa0  40923124 web  |  40923124 repo  |  \xa0  40923125 web  |  40923125 repo  |  \xa0  40923126 web  |  40923126 repo  |  \xa0  40923127 web  |  40923127 repo  |  \xa0  40923128 web  |  40923128 repo  |  \xa0  40923138 web  |  40923138 repo  |  \xa0  40923143 web  |  40923143 repo  | \n cd2022ag5 \xa0  40923123 web  |  40923123 repo  |  \xa0  40923131 web  |  40923131 repo  |  \xa0  40923133 web  |  40923133 repo  |  \xa0  40923134 web  |  40923134 repo  |  \xa0  40923135 web  |  40923135 repo  |  \xa0  40923139 web  |  40923139 repo  |  \xa0  40923142 web  |  40923142 repo  |  \xa0  40923151 web  |  40923151 repo  | \n cd2022ag6 \xa0  40923113 web  |  40923113 repo  |  \xa0  40923130 web  |  40923130 repo  |  \xa0  40923140 web  |  40923140 repo  |  \xa0  40923144 web  |  40923144 repo  |  \xa0  40923145 web  |  40923145 repo  |  \xa0  40923149 web  |  40923149 repo  |  \xa0  40923150 web  |  40923150 repo  |  \xa0  40923152 web  |  40923152 repo  | \n cd2022ag7 \xa0  40823132 web  |  40823132 repo  |  \xa0  40823143 web  |  40823143 repo  |  \xa0  40923117 web  |  40923117 repo  |  \xa0  40923118 web  |  40923118 repo  |  \xa0  40923120 web  |  40923120 repo  |  \xa0  40923136 web  |  40923136 repo  |  \xa0  40923147 web  |  40923147 repo  |  \xa0  40923157 web  |  40923157 repo  | \n', 'tags': '', 'url': '分組名單.html'}, {'title': 'NX_video', 'text': '7 _Expressions (Continued) \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n _ \n 27_Design Fundamentals \n \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'NX_video.html'}, {'title': 'midterm', 'text': '零件連結: Onshape檔案 \n 流程與心得簡報 \n 我們組分組工作 ，我是負責工程圖與組裝，要先將多個零件簡單化，再將零件更改尺寸以便配合，零件畫好後組裝起來，若發現有無法配合的部分，再去照錯誤的地方進行修改，完成後就將圖檔交給負責後續的同學。 \n', 'tags': '', 'url': 'midterm.html'}, {'title': '期末考週', 'text': '繪圖wink \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n NX 套件版本：1980 \n 心得：在任務一組立完成後NX掛掉，我檔案也沒存，導致任務一組立執行了兩次加上零件的繪製花費了8小時，這次的期末考過程使我認知存檔的重要性，雖然組裝時顯示的錯誤依舊無法得知原因與解決，但也因為組立了兩次所以也對NX的組裝更加熟悉。 \n \n 模擬wink \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n python程式 \n function closeEventHandler(h)  sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')  simUI.hide(h) end   function joint1_rotate(ui,id,newVal)  simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)  sim.setJointTargetPosition(joint1, newVal*deg) end   function joint2_rotate(ui,id,newVal)  simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)  sim.setJointTargetPosition(joint2, newVal*deg) end  function joint3_rotate(ui,id,newVal)  simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)  sim.setJointTargetPosition(joint3, newVal*deg) end   function sysCall_init()  -- do some initialization here  joint1 = sim.getObjectHandle(\'motor1\')  joint2 = sim.getObjectHandle(\'motor2\')  joint3 = sim.getObjectHandle(\'motor6\')      deg = math.pi/180  print(i)  xml = [[  <ui closeable="true" on-close="closeEventHandler" resizable="true">  <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />  <tabs>  <tab title="Numeric">a  <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />  <label text="" id="3000" wordwrap="true" />  <label text="theta1" /> <hslider tick-position="above" tick-interval="1"  minimum="-360" maximum="360" on-change="joint1_rotate" />  <label text="theta2" /> <hslider tick-position="above" tick-interval="1"  minimum="-90" maximum="30" on-change="joint2_rotate" />  <label text="theta3" /> <hslider tick-position="above" tick-interval="1"  minimum="-90" maximum="60" on-change="joint3_rotate" />  </tab>  </tabs>  </ui>  ]]  ui=simUI.create(xml)   end \n \n', 'tags': '', 'url': '期末考週.html'}]};