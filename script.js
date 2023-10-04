
    var typed = new Typed('#element', {
        strings: ['Web Designer', 'Data Analyst', 'Web Developer!'],
      typeSpeed: 55,
    });


    let menu = document.querySelectorAll('header ul li a');
    let section = document.querySelectorAll('section');
    function activeMenu(){
        let len = section.length;
        while(--len && window.scrollY +97 <section[len].offsetTop){}
        menu.forEach(sec => sec.classList.remove("active"));
        menu[len].classList.add("active");
    }
    activeMenu();
    window.addEventListener("scroll",activeMenu);
   

    var icon = document.getElementById("theme-icon");
    icon.onclick = function(){
        document.body.classList.toggle("light-theme");
        if(document.body.classList.contains("light-theme")){ 
            icon.src = 'Images/moon.png';
        }
        else{
            icon.src = 'Images/sun.png';
        }
    }


    let learnMoreA = document.querySelector(".learn_a");
    let backA = document.querySelector(".serve-1");
    let x = document.querySelector(".close-x");
    let isLearnMoreA = true;
    function learn_a(){
        if(isLearnMoreA){
            learnMoreA.style.display = 'block';
            backA.style.backgroundColor = 'var(--moreSwiper-color)';
            isLearnMoreA = false;
        }
    }
    function closeLearn_a(){
        if(isLearnMoreA === false){
            learnMoreA.style.display = 'none';
            backA.style.backgroundColor = 'var(--background-color)';
            isLearnMoreA = true;
        }
    }

    let learnMoreB = document.querySelector(".learn_b");
    let backB = document.querySelector(".serve-2");
    let isLearnMoreB = true;
    function learn_b(){
        if(isLearnMoreB){
            learnMoreB.style.display = 'block';
            backB.style.backgroundColor = 'var(--moreSwiper-color)';
            isLearnMoreB = false;
        }
    }
    function closeLearn_b(){
        if(isLearnMoreB === false){
            learnMoreB.style.display = 'none';
            backB.style.backgroundColor = 'var(--background-color)';
            isLearnMoreB = true;
        }
    }

    let learnMoreC = document.querySelector(".learn_c");
    let backC = document.querySelector(".serve-3");
    let isLearnMoreC = true;
    function learn_c(){
        if(isLearnMoreC){
            learnMoreC.style.display = 'block';
            backC.style.backgroundColor = 'var(--moreSwiper-color)';
            isLearnMoreC = false;
        }
    }
    function closeLearn_c(){
        if(isLearnMoreC === false){
            learnMoreC.style.display = 'none';
            backC.style.backgroundColor = 'var(--background-color)';
            isLearnMoreC = true;
        }
    }

    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzzk1vGzlTALk7erfQMwfBG5NZQvRsh7kqkDaF_zU5b4VmtQo05Qz6Pq05bdfjqEYoqQw/exec'
    const form = document.forms['submit-to-google-sheet']
    const confirmMsg = document.getElementById('confirm-msg')
      
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            confirmMsg.innerHTML = "Message sent Successfully!"
            setTimeout(function(){
                confirmMsg.innerHTML = ''
            }, 7000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })