///////////////////////////////////////// Mode ////////////////////////////////////////////////////////////// 
const body = document.body;

        function setLightMode() {
            body.className = '';
        }

        function setDarkMode() {
            body.className = 'dark-mode';
        }

        function setAutoMode() {
            body.className = 'auto-mode';
        }

        const switcherDropdown = document.querySelector('#theme-switcher');

        switcherDropdown.addEventListener('change', function() {
            switch(switcherDropdown.value) {
                case 'light':
                    setLightMode();
                    break;
                case 'dark':
                    setDarkMode();
                    break;
                case 'auto':
                    setAutoMode();
                    break;
            }
        });
        window.addEventListener('load', (event) => {
            applyThemeBasedOnSystemSettings();
        });
        
        function applyThemeBasedOnSystemSettings() {
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
            const body = document.body;
        
            if (prefersDarkScheme.matches) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
            }
        }
        
        // Don't forget to call applyThemeBasedOnSystemSettings() in your theme switcher logic as well.
///////////////////////////////////////// Zone1 //////////////////////////////////////////////////////////////        
        tippy('#myButton1', {
            content: `
                     <a href='# id="link1" target='_blank'>นนทรี</a><br>
                     <a href='#' id="link2" target='_blank'>ขนุนป่า</a>
                     <br>                    
        `,
            allowHTML: true,
            interactive: true,
            onShown(instance) {
                tippy('#link1', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link2', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
              }
          });
 ///////////////////////////////////////// Zone2 //////////////////////////////////////////////////////////////         
          tippy('#myButton2', {
            content: `
                     <a href='#' id="link1" target='_blank'>ชาฮกเกี้ยน</a><br>     
                     <a href='#' id="link2" target='_blank'>ลีลาวดี</a><br>               
        `,
            allowHTML: true,
            interactive: true,
            onShown(instance) {
                tippy('#link1', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link2', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
              }
          });
 ///////////////////////////////////////// Zone3 //////////////////////////////////////////////////////////////        
          tippy('#myButton3', {
            content: `
                     <a href='#' id="link1" target='_blank'>รวงผึ้ง</a><br>                    
        `,
            allowHTML: true,
            interactive: true,
            onShown(instance) {
                tippy('#link1', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
              }
          });
 ///////////////////////////////////////// Zone4 ////////////////////////////////////////////////////////////// 
          tippy('#myButton4', {
            content: `
                     <a href='#' id="link1" target='_blank'>ยางนา</a><br>
                     <a href='#' id="link2" target='_blank'>กระโดมบก</a><br>
                     <a href='#' id="link3" target='_blank'>หลิว</a><br> 
                     <a href='#' id="link4" target='_blank'>หูกระจง</a><br> 
                     <a href='#' id="link5" target='_blank'>ทองกวาว</a><br> 
                     <a href='#' id="link6" target='_blank'>หว้า</a><br> 
                     <a href='#' id="link7" target='_blank'>กระท้อน</a><br> 
                     <a href='#' id="link8" target='_blank'>ลีลาวดี</a><br> 
                     <a href='#' id="link9" target='_blank'>ราชพฤกษ์</a><br>                    
        `,
            allowHTML: true,
            interactive: true,
            onShown(instance) {
                tippy('#link1', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link2', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link3', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link4', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link5', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link6', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link7', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link8', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link9', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
              }
          });
 ///////////////////////////////////////// Zone5 ////////////////////////////////////////////////////////////// 
          tippy('#myButton5', {
            content: `
                     <a href='#' id="link1" target='_blank'>ทองอุไร</a><br>
                     <a href='#' id="link2" target='_blank'>มะขามป้อม</a><br>
                     <a href='#' id="link2" target='_blank'>มะม่วง</a><br> 
                     <a href='#' id="link3" target='_blank'>ประดู่</a><br> 
                     <a href='#' id="link4" target='_blank'>ไทร</a><br> 
                     <a href='#' id="link5" target='_blank'>สะเดาช้าง</a><br>                     
        `,
            allowHTML: true,
            interactive: true,
            onShown(instance) {
                tippy('#link1', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link2', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link3', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link4', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link5', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
              }
          });
 ///////////////////////////////////////// Zone6 ////////////////////////////////////////////////////////////// 
          tippy('#myButton6', {
            content: `
                     <a href='#' id="link1" target='_blank'>นนทรี</a><br>
                     <a href='#' id="link2" target='_blank'>ควินิน</a><br>  
                     <a href='#' id="link3" target='_blank'>มะฮอกกานี</a><br>                     
        `,
            allowHTML: true,
            interactive: true,
            onShown(instance) {
                tippy('#link1', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link2', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link3', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
              }
          });
///////////////////////////////////////// Zone7 ////////////////////////////////////////////////////////////// 
          tippy('#myButton7', {
            content: `
                     <a href='#' id="link1" target='_blank'>ไทรย้อย</a><br>                  
        `,
            allowHTML: true,
            interactive: true,
            onShown(instance) {
                tippy('#link1', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
              }
          });
 ///////////////////////////////////////// Zone8 ////////////////////////////////////////////////////////////// 
          tippy('#myButton8', {
            content: `
                     <a href='#' id="link1" target='_blank'>ปาล์ม</a><br>                  
        `,
            allowHTML: true,
            interactive: true,
            onShown(instance) {
                tippy('#link1', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
              }
          });
 ///////////////////////////////////////// Zone9 ////////////////////////////////////////////////////////////// 
          tippy('#myButton9', {
            content: `
                     <a href='#' id="link1" target='_blank'>ราชพฤกษ์</a><br>                 
        `,
            allowHTML: true,
            interactive: true,
            onShown(instance) {
                tippy('#link1', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
              }
          });
 ///////////////////////////////////////// Zone10 ////////////////////////////////////////////////////////////// 
          tippy('#myButton10', {
            content: `
                     <a href='#' id="link1" target='_blank'>มะฮอกกานี</a><br>
                     <a href='#' id="link2" target='_blank'>ข่อย</a><br>                    
        `,
            allowHTML: true,
            interactive: true,
            onShown(instance) {
                tippy('#link1', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link2', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
              }
          });
 ///////////////////////////////////////// Zone11 ////////////////////////////////////////////////////////////// 
          tippy('#myButton11', {
            content: `
                     <a href='#' id="link1" target='_blank'>ตะแบก</a><br>
                     <a href='#' id="link2" target='_blank'>เสลา</a><br>
                     <a href='#' id="link3" target='_blank'>อินทนิล</a><br>                      
        `,
            allowHTML: true,
            interactive: true,
            onShown(instance) {
                tippy('#link1', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link2', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link3', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
              }
          });
 ///////////////////////////////////////// Zone12 ////////////////////////////////////////////////////////////// 
          tippy('#myButton12', {
            content: `
                     <a href='#' id="link1" target='_blank'>สะเดา</a><br>                  
        `,
            allowHTML: true,
            interactive: true,
            onShown(instance) {
                tippy('#link1', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
              }
          });
 ///////////////////////////////////////// Zone13 ////////////////////////////////////////////////////////////// 
          tippy('#myButton13', {
            content: `
                     <a href='#' id="link1" target='_blank'>ตะขบฝรั่ง</a><br>
                     <a href='#' id="link2" target='_blank'>มะตาด</a><br>                    
        `,
            allowHTML: true,
            interactive: true,
            onShown(instance) {
                tippy('#link1', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link2', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
              }
          });
 ///////////////////////////////////////// Zone14 ////////////////////////////////////////////////////////////// 
          tippy('#myButton14', {
            content: `
                     <a href='#' id="link1" target='_blank'>หูกระจง</a><br>
                     <a href='#' id="link2" target='_blank'>ไผ่</a><br>   
                     <a href='#' id="link3" target='_blank'>กระท้อน</a><br>                   
        `,
            allowHTML: true,
            interactive: true,
            onShown(instance) {
                tippy('#link1', {
                  content: `<img src='../head/image/นนทรี.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link2', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
                tippy('#link2', {
                  content: `<img src='../head/image/ขนุนป่า.jpg' width='300' height='300'>`,
                  allowHTML: true,
 //                 interactive: true
                });
              }
          });
 ///////////////////////////////////////// img 360 ////////////////////////////////////////////////////////////// 
          document.getElementById('myButton').addEventListener('mouseover', function() {
            var sky = document.getElementById('sky');
            sky.setAttribute('src', '../head/image/pexels-sergio-souza-15500940.jpg');
            document.getElementById('image360').style.display = 'block';
          });
        
          document.getElementById('myButton').addEventListener('mouseout', function() {
            document.getElementById('image360').style.display = 'none';
          });
          
          