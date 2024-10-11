
var typed = new Typed((".typing"),
{
    strings:["","SEO Executive",],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

//================= ==============aside==============================

const nav = document.querySelector(".nav"),

navList = nav.querySelectorAll("li"),

totaleNavList = navList.length
allSection = document.querySelectorAll(".section")
totalSection = allSection.length

for(let i=0; i<totaleNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
            
        }


        for (let j = 0; j < totaleNavList; j++)
        {
            if (navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }


        this.classList.add("active")
        showSection(this);
    })
}
    function showSection (element){
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active");
            
        }
        const target =(element.getAttribute("href").split("#")[1])
       document.querySelector("#" + target).classList.add("active")

    }

    const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", ()=>{
        asieSectionTogglerBtn();
    })
    function asieSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open")
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.toggle("open")
            
        }
    }
    
    // SCROLL BEHAVIOUR
    const sections = document.querySelectorAll('.scroll-section');
    let currentIndex = 0;

    // Function to scroll to the next section
    function scrollToNextSection(event) {
        // Prevent default scroll behavior
        event.preventDefault();

        // Check if scrolling down and not at the last section
        if (event.deltaY > 0 && currentIndex < sections.length - 1) {
            currentIndex++;
        } 
        // Check if scrolling up and not at the first section
        else if (event.deltaY < 0 && currentIndex > 0) {
            currentIndex--;
        }

        // Scroll to the next or previous section
        sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
    }

    // Attach event listener for mousewheel scroll event
    window.addEventListener('wheel', scrollToNextSection);