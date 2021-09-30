const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const main_slide = document.querySelector('.main-slide')

const sidebar = document.querySelector('.sidebar')

const countSideBar = main_slide.querySelectorAll('div').length


let activeBarindex = 0;

sidebar.style.top = '-300vh'

upBtn.addEventListener('click', () => {
    slideChange("up");
})

downBtn.addEventListener('click', ()=> {
    slideChange("down");
})

function slideChange(direction) {
    if (direction == "up"){
        activeBarindex++;
        if (activeBarindex === countSideBar) activeBarindex = 0
    }
    else{
        activeBarindex--;
        if (activeBarindex < 0) activeBarindex = countSideBar - 1
    }

    const height= main_slide.clientHeight
    console.log(height)
    main_slide.style.transform = `translateY(-${activeBarindex * height}px)`
    sidebar.style.transform = `translateY(${activeBarindex * height}px)`
}