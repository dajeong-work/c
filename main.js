        // 1. 사진을 3개 구해온다. 
        // 가능 : jpg, jpeg, png, gif 
        // 불가능 : jfif, webp 
        // 구글에 검색해서 -> 썸네일 클릭하고 -> 옆에 뜨는 큰 사진에 대고
        // -> 이미지 주소복사 
        // 3개의 주소를 각각 url1, url2, url3 이라는 변수 등록 

        // 2. input태그 안에 사용자가 입력한 값을 inputName이라는 변수 안에
        
        // 3. 입력한 값에 따라서 다른 사진이 나오도록 만들어보자 

        let url1 = "https://pbs.twimg.com/media/F00pNIsaEAElzkc.jpg"
        let url2 = "https://pbs.twimg.com/media/F00pNIzaYAA0dWI.jpg"
        let url3 = "https://pbs.twimg.com/media/F3AHlPfacAABP7V.jpg"
       
        let name = document.getElementById('name')
        let btn = document.getElementById('btn')
        let img = document.getElementsByTagName('img')[0] // 인덱스번호
        
        // 기본 값 세팅 
        img.src = url1 
        
        btn.addEventListener('click',()=>{
            let inputName = name.value
            console.log(img)
            
            if(inputName == '1'){
                img.src = url1
            }else if(inputName == '2'){
                img.src = url2
            }else if(inputName == '3'){
                img.src = url3
            }
            
        })
       
        