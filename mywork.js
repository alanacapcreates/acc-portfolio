            let allProj = document.getElementById("allProj")
            let caseStudyProj = document.getElementById("caseStudyProj")
            let wwdcProj = document.getElementById("wwdcProj")

            allProj.addEventListener("click", displayProj)
            caseStudyProj.addEventListener("click", displayProj)
            wwdcProj.addEventListener("click", displayProj)
            let cardSection = document.getElementById("projects");
           
            let project =[{
                name: "Ketcham Medicine Cabinets: Rebranding in 2021",
                date: "September 2020 - December 2020",
                projDesc: `KMC sought out to create a new brand identity that would increase sales, match their new modern aesthetic, and appeal to a wider + more luxury clientele. <a href="./design-inprogress.html">Read on</a> to explore my process in creating their new logo.`,
                projType: "Case Study",
                projImg: './img/projects/proj-cover-KMCLogo.png'
            },
            {
                name: "Ketcham Medicine Cabinets: Upgraded Curb Appeal",
                idN: 2,
                date: "September 2020 - December 2020" ,
                projDesc: `Now that Ketcham has a new brand identity, the next step is to match that aesthetic with an updated website. <a href="./design-inprogress.html">Read on</a> to see my process in giving ketchamcabinets.com a modern makeover.`,
                projType: "Case Study",
                projImg: './img/projects/proj-cover-KMCSite.png',
                liveSite: 'https://www.ketchamcabinets.com/'
            },
            {
                name: "Tip Calculator",
                date: "June 26, 2021",
                projDesc: "Create a tip calculator that shows the tip and total per person",
                projType: "Weekly Web Dev Challenge",
                projImg: './img/projects/proj-cover-WWDC-TipCalc.png',
                github: "https://github.com/alanacapcreates/WWDC-TipCalculator-0621",
                liveSite: "https://alanacapcreates-wwdc-tipcalc062621.netlify.app/"
            },
            {
                name: "Freestyle Challenge",
                date: "July 03, 2021" ,
                projDesc: "Create an app or site of your choice. The only stipulation is that it must include an array, a loop, and an event listener." ,
                projType: "Weekly Web Dev Challenge",
                projImg: './img/projects/proj-cover-WWDC-Freestyle.png',
                github: "https://github.com/alanacapcreates/WWDC-Freestyle-0721",
                liveSite: "https://alanacapcreates-wwdc-freestyle070521.netlify.app/"
            },
            {
                name: "Social Media for Dogs",
                date: "July 12, 2021",
                projDesc: "Create a social media landing page for dogs, cats, or any other theme.",
                projType: "Weekly Web Dev Challenge",
                projImg: './img/projects/proj-cover-WWDC-SocialDogs.png',
                github: "https://github.com/alanacapcreates/WWDC-SocialMediaForDogs-0721",
                liveSite: "https://alanacapcreates-wwdc-dogbasket071221.netlify.app/"
            },
            {
                name: "Fix The Accessibility Issues",
                date: "July 14, 2021" ,
                projDesc: "Fix this form to make it more accessible . There are at least seven issues.",
                projType: "Weekly Web Dev Challenge",
                projImg: './img/projects/proj-cover-WWDC-Accessibility.png',
                github: "https://github.com/alanacapcreates/WWDC-Accessibility-0721",
                liveSite: "https://alanacapcreates-wwdc-accessibility070721.netlify.app/"
            },
            {
                name: "Energy Meter",
                date: "July 19, 2021",
                projDesc: "Create an enerygy meter that adjusts depending on user input" ,
                projType: "Weekly Web Dev Challenge",
                projImg: './img/projects/proj-cover-WWDC-EnergyMeter.png',
                github: "https://github.com/alanacapcreates/WWDC-EnergyMeter-0721",
                liveSite: "https://alanacapcreates-wwdc-energymeter071921.netlify.app/"
            },
            {
                name: "Name Beautifier",
                date: "July 25, 2021",
                projDesc: `When the button is clicked, the following things should change:
                        <ul>
                        <li> font family (use array given)</li>
                        <li> font color (either use randomcolor or your own array of colors)</li>
                        <li> font weight</li>
                        <li> button color (match the font color)</li></ul>`
                        ,
                projType: "Weekly Web Dev Challenge",
                projImg: './img/projects/proj-cover-WWDC-NameBeautifier.png',
                github: "https://github.com/alanacapcreates/WWDC-NameBeautifier-072521",
                liveSite: "https://alanacapcreates-wwdc-namebeautifier072521.netlify.app/"
            },
            {
                name: "Theme Changer",
                date: "November 22, 2021",
                projDesc: `Manipulate the toggle switch to change the following:
                        <ul>
                        <li> Header</li>
                        <li> H1</li>
                        <li> Card Background + Text Color</li>
                        <li> Button Background + Text Color</li>
                        <li> Toggle Colors</li></ul>`
                        ,
                projType: "Weekly Web Dev Challenge",
                projImg: './img/projects/proj-cover-WWDC-ThemeChanger.png',
                github: "https://github.com/alanacapcreates/WWDC-ThemeChanger-111521",
                liveSite: "https://alanacapcreates-wwdc-themechanger.netlify.app/"
            },
            {
                name: "FlexFly",
                date: "July 2021 - October 2021",
                projDesc: `To mitigate the stress of air travel, FlexFly is a tool that breaks down communication barriers and informs the user of delays, important security protocols, and more.<a href="./flexfly.html">Read on</a>`,
                projType: "Case Study",
                projImg: './img/flexfly/FlexFly-CoverImage2.jpg'
            }
            ]
            //default state on load
            renderCards(project)
            allProj.classList.remove("proj-all-btn")
            allProj.classList.add("proj-all-btn-active")

            function renderCards(filterA){
                for(let i=0;i<filterA.length;i++){
                    
                    let card = document.createElement('div')
                    let projInfo = document.createElement('a')
                    let projGH = document.createElement('a')
                    let projDeploy = document.createElement('a')
                    let projType = document.createElement('p')
                    let projImg = document.createElement('img')
                    let bottomCard = document.createElement('div')
                    let bottomCardIcons = document.createElement('div')
                    // projInfo.innerHTML=`<a><i class="fas fa-info-circle"></i></a>`
                    projInfo.innerHTML=`<span class="material-icons-outlined">
                    info</span>`
                    projGH.innerHTML=`<i class="fab fa-github"></i>`
                    projDeploy.innerHTML=`<span class="material-icons-outlined">
                    language</span>`

                    projGH.addEventListener("click",() => {projGH.setAttribute("href",filterA[i].github)})
                    projDeploy.addEventListener("click",() => {projDeploy.setAttribute("href",filterA[i].liveSite)})

                    projGH.setAttribute("target","blank")
                    projDeploy.setAttribute("target","blank")
                    

                    projInfo.addEventListener("click",infoclick)
                    bottomCard.classList.add('bottom-card')
                    bottomCardIcons.classList.add('bottom-card-icons')
                    function infoclick(event){
                        let overlay = document.createElement('div')
                        let overlayText = document.createElement('div')
                            let projName = document.createElement('p')
                            projName.classList.add('projName')
                            projName.innerHTML=`${filterA[i].name}`

                            let projDate = document.createElement('p')
                            projDate.classList.add('projDate')
                            projDate.innerHTML=`${filterA[i].date}`

                            let projDesc = document.createElement('p')
                            projDesc.classList.add('projDesc')
                            projDesc.innerHTML=`${filterA[i].projDesc}`

                        let closeBtn = document.createElement('div')

                        closeBtn.classList.add('close-btn')
                        closeBtn.innerHTML = `<i class="fas fa-times fa-lg"></i>`

                        closeBtn.addEventListener("click", ()=>{overlay.style.display="none"})       
                        overlayText.append(projName,projDate,projDesc)

                        overlay.append(overlayText)
                        overlay.append(closeBtn)
                        overlay.classList.add('overlayDiv')
                        
                        card.append(overlay)
                    }

                        if(filterA[i].projType === "Case Study"){
                            projType.classList.remove()
                            projType.classList.add("proj-typeCS")
                            bottomCard.append(projType)
                            bottomCardIcons.append(projInfo)
                            if(filterA[i].idN === 2){
                                bottomCard.append(projType)
                                bottomCardIcons.append(projInfo,projDeploy)
                            }
                        }
                        else if(filterA[i].projType === "Weekly Web Dev Challenge"){
                            projType.classList.remove()
                            projType.classList.add("proj-typeWWDC")
                            bottomCard.append(projType)
                            bottomCardIcons.append(projInfo,projGH,projDeploy)
                            
                        }
                        bottomCard.append(bottomCardIcons)
                    projType.innerHTML=`${filterA[i].projType}`
                    projImg.src = filterA[i].projImg
                    card.append(projImg)
                    card.append(bottomCard)
                    card.setAttribute("id",i+1)
                    card.classList.add("project-card")
                    cardSection.append(card)
                }//END INFOCLICK FunCTION
            }
            function displayProj(e){
                cardSection.innerHTML = ""
                if(e.target.id ==="allProj"){
                    allProj.classList.remove("proj-all-btn")
                    allProj.classList.add("proj-all-btn-active")

                    caseStudyProj.classList.remove("proj-cs-btn-active")
                    caseStudyProj.classList.add("proj-cs-btn")

                    wwdcProj.classList.remove("proj-wwdc-btn-active")
                    wwdcProj.classList.add("proj-wwdc-btn")

                    renderCards(project)
                }
                else if(e.target.id ==="caseStudyProj"){
                    allProj.classList.remove("proj-all-btn-active")
                    allProj.classList.add("proj-all-btn")

                    caseStudyProj.classList.remove("proj-cs-btn")
                    caseStudyProj.classList.add("proj-cs-btn-active")

                    wwdcProj.classList.remove("proj-wwdc-btn-active")
                    wwdcProj.classList.add("proj-wwdc-btn")

                    let caseStudyFilter = project.filter(activity => (activity.projType.includes("Case Study")))
                    renderCards(caseStudyFilter)
                }
                else if(e.target.id ==="wwdcProj"){
                    allProj.classList.remove("proj-all-btn-active")
                    allProj.classList.add("proj-all-btn")

                    caseStudyProj.classList.remove("proj-cs-btn-active")
                    caseStudyProj.classList.add("proj-cs-btn")

                    wwdcProj.classList.remove("proj-wwdc-btn")
                    wwdcProj.classList.add("proj-wwdc-btn-active")

                    let wwdcFilter = project.filter(activity => (activity.projType.includes("Weekly Web Dev Challenge")))
                    renderCards(wwdcFilter)
                }
            }         