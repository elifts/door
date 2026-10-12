let outersss = document.getElementsByClassName("outersss")[0];
let offset = 0;
fetch("achievements.json")
    .then(response => response.json())
    .then(data => {

        let groups = [...new Set(data.map(achievement => achievement.group))];
        let groupSize = groups.length;

        // generating tabs
        for(let i = 0; i < groupSize; i++){
            let Tabs_tab = document.createElement("li");
            Tabs_tab.className = "Tabs_tab";
            Tabs_tab.setAttribute("aria-selected", i === 0);
            Tabs_tab.dataset.tab = i;
            
            document.getElementsByClassName("Tabs")[0].appendChild(Tabs_tab);

            let Tabs_tab_label = document.createElement("div");
            Tabs_tab_label.className = "Tabs_tab_labels";
            Tabs_tab.appendChild(Tabs_tab_label);

            let Tabs_tab_labels = document.createElement("a");
            Tabs_tab_labels.href = "#"+groups[i].charAt(0) + groups[i].slice(1).toLowerCase();
            Tabs_tab_labels.className = "Tabs_tab_label";
            Tabs_tab_labels.textContent = groups[i].charAt(0) + groups[i].slice(1).toLowerCase();
            Tabs_tab_label.appendChild(Tabs_tab_labels);

            Tabs_tab_label.addEventListener("click", (event) => {

            event.preventDefault();

            document.querySelectorAll(".Tabs_tab").forEach(tab => {
                tab.setAttribute("aria-selected", "false");
            });

            document.querySelectorAll(".tab_content").forEach(content => {
                content.style.display = "none";
            });

            Tabs_tab.setAttribute("aria-selected", "true");

            document.querySelector(
                `.tab_content[data-tab="${Tabs_tab.dataset.tab}"]`
            ).style.display = "block";

        });
        }

        //generating achivements
        for(let i = 0; i< groupSize; i++){
            let groupCount = data.filter(achievement => achievement.group === groups[i]).length;

            let tab_content = document.createElement("div");

            tab_content.className = "tab_content";
            tab_content.dataset.tab = i;

            if (i !== 0) {
                tab_content.style.display = "none";
            }
            document.getElementsByClassName("table")[0].appendChild(tab_content);

            let tab_content_wrapper = document.createElement("div");
            tab_content_wrapper.style = "width:100%; position: relative;";
            tab_content.appendChild(tab_content_wrapper);
            
            let tab_content_TitleBox = document.createElement("div");
            tab_content_TitleBox.className = "tab_content_TitleBox";
            tab_content_wrapper.appendChild(tab_content_TitleBox);
            
            let tab_content_Title = document.createElement("p");
            tab_content_Title.textContent = groups[i] + " (" + groupCount + ")"
            tab_content_Title.className = "tab_content_Title";
            tab_content_TitleBox.appendChild(tab_content_Title);



            let ImgCount = [...(data.map(achievement => achievement.Imagelink))];
            let Titlecount  = [...(data.map(achievement => achievement.title))];
            let badgeCount  = [...(data.map(achievement => achievement.badge))];
            let descriptionCount  = [...(data.map(achievement => achievement.description))];
            let howCount  = [...(data.map(achievement => achievement.how))];
            let secretCount  = [...(data.map(achievement => achievement.secret))];
            let ColourCount  = [...(data.map(achievement => achievement.color))];
            let TutorialCount  = [...(data.map(achievement => achievement.tutorial))];
            let RefrenceCount  = [...(data.map(achievement => achievement.references))];
            let KnobsCount  = [...(data.map(achievement => achievement.knobs))];
            let revivesCount  = [...(data.map(achievement => achievement.revives))];
            let stardustCount  = [...(data.map(achievement => achievement.stardust))];
            let skinCount  = [...(data.map(achievement => achievement.skin))];

            let Achevelist = document.createElement("div");
            Achevelist.className = "Achevelist";
            tab_content_wrapper.appendChild(Achevelist);
            let clickedBadges = JSON.parse(localStorage.getItem("clickedBadges") || "[]");
            for(x = 0; x < groupCount;  x++){
                let badge = document.createElement("div");
                badge.className = "badge";
                badge.dataset.badgeId = badgeCount[offset];
                Achevelist.appendChild(badge);

                let badgeicon = document.createElement("div");
                badgeicon.className = "badgeicon";
                badge.appendChild(badgeicon);

                let badgeborder = document.createElement("div");
                if (!secretCount[offset]){
                    badgeborder.className = "badgeborder1";
                }else{
                    badgeborder.className = "badgeborder2";
                }
                badgeborder.style.background = `linear-gradient(to bottom, ${ColourCount[offset]})`;
                badgeicon.appendChild(badgeborder);

                let badgeImage = document.createElement("div");
                badgeImage.className = "badgeImage";
                badgeicon.appendChild(badgeImage);

                let haligncenter = document.createElement("figure");
                haligncenter.typeof = "mw:File";
                haligncenter.className = "haligncenter";
                badgeImage.appendChild(haligncenter);

                let filedescriptionimage = document.createElement("a");
                filedescriptionimage.className = "filedescriptionimage";
                filedescriptionimage.href = "";///xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                haligncenter.appendChild(filedescriptionimage);

                let fileelement = document.createElement("img");
                fileelement.className = "fileelement";
                fileelement.src = ImgCount[offset];///xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                filedescriptionimage.appendChild(fileelement);

                let BadgeContent = document.createElement("div");
                BadgeContent.className = "BadgeContent";
                badge.appendChild(BadgeContent);

                let SpanBadgeName = document.createElement("span");
                SpanBadgeName.className = "SpanBadgeName";
                SpanBadgeName.style.background = `linear-gradient(to bottom, ${ColourCount[offset]})`;
                SpanBadgeName.style.setProperty("-webkit-background-clip", "text");
                SpanBadgeName.style.setProperty("-webkit-text-fill-color", "transparent");
                BadgeContent.appendChild(SpanBadgeName);

                let BadgeName = document.createElement("a");
                BadgeName.className = "BadgeName";
                BadgeName.textContent = Titlecount[offset];
                BadgeName.href = "https://www.roblox.com/badges/" + badgeCount[offset];
                SpanBadgeName.appendChild(BadgeName);

                let Badgeend = document.createElement("br");
                Badgeend.className = "Badgeend";
                BadgeContent.appendChild(Badgeend);

                let BadgeDescHow = document.createElement("span");
                BadgeDescHow.className = "BadgeDescHow";
                BadgeContent.appendChild(BadgeDescHow);

                let Descrition = document.createElement("span");
                Descrition.className = "Descrition";
                Descrition.textContent = descriptionCount[offset];
                BadgeDescHow.appendChild(Descrition);

                let Linesss = document.createElement("br");
                Linesss.className = "Linesss";
                BadgeDescHow.appendChild(Linesss);

                let How = document.createElement("span");
                How.className = "How";
                How.textContent = howCount[offset];
                BadgeDescHow.appendChild(How);

                if(KnobsCount[offset]||revivesCount[offset]||stardustCount[offset]||skinCount[offset]){
                    let rewards = document.createElement("div");
                    rewards.className = "rewards";
                    badge.appendChild(rewards);

                    if(KnobsCount[offset]){
                        let Knobs = document.createElement("span");
                        Knobs.className = "Knobs";

                        let Knobsimgcontainer = document.createElement("span");
                        Knobsimgcontainer.className = "Knobsimgcontainer";
                        Knobs.appendChild(Knobsimgcontainer);

                        let Knobsimg = document.createElement("img");
                        Knobsimg.className = "Knobsimg";
                        Knobsimg.src = "https://static.wikia.nocookie.net/doors-game/images/b/b1/Knobs.png/revision/latest/scale-to-width-down/50?cb=20251122090005";
                        Knobsimgcontainer.appendChild(Knobsimg);

                        let KnobsText = document.createElement("span");
                        KnobsText.textContent = " "+KnobsCount[offset];
                        Knobs.appendChild(KnobsText);

                        rewards.appendChild(Knobs);
                    }
                    if(revivesCount[offset]){
                        let revives = document.createElement("span");
                        revives.className = "revives";

                        let revivesimgcontainer = document.createElement("span");
                        revivesimgcontainer.className = "revivesimgcontainer";
                        revives.appendChild(revivesimgcontainer);

                        let revivesimg = document.createElement("img");
                        revivesimg.className = "revivesimg";
                        revivesimg.src = "https://static.wikia.nocookie.net/doors-game/images/c/ce/Reviveicon.png/revision/latest/scale-to-width-down/58?cb=20220730002648";
                        revivesimgcontainer.appendChild(revivesimg);

                        let revivesText = document.createElement("span");
                        revivesText.textContent = " "+revivesCount[offset];
                        revives.appendChild(revivesText);

                        rewards.appendChild(revives);
                    }
                    if(stardustCount[offset]){
                        let stardust = document.createElement("span");
                        stardust.className = "stardust";

                        let stardustimgcontainer = document.createElement("span");
                        stardustimgcontainer.className = "stardustimgcontainer";
                        stardust.appendChild(stardustimgcontainer);

                        let stardustimg = document.createElement("img");
                        stardustimg.className = "stardustimg";
                        stardustimg.src = "https://static.wikia.nocookie.net/doors-game/images/c/c5/Stardusticonfiles.png/revision/latest/scale-to-width-down/50?cb=20251227063658";
                        stardustimgcontainer.appendChild(stardustimg);

                        let stardustText = document.createElement("span");
                        stardustText.textContent = " "+stardustCount[offset];
                        stardust.appendChild(stardustText);

                        rewards.appendChild(stardust);
                    }
                    if(skinCount[offset]){
                        let skin = document.createElement("span");
                        skin.className = "skin";

                        let skinimgcontainer = document.createElement("div");
                        skinimgcontainer.className = "skinimgcontainer";
                        skin.appendChild(skinimgcontainer);

                        let spanskinText = document.createElement("span");
                        spanskinText.className = "spanskinText";
                        skinimgcontainer.appendChild(spanskinText);

                        let skinimg = document.createElement("img");
                        skinimg.className = "skinimg";
                        skinimg.src = skinCount[offset];
                        spanskinText.appendChild(skinimg);

                        let skinText = document.createElement("span");
                        skinText.className = "skintext"
                        skinText.textContent = "skin";
                        skin.appendChild(skinText);

                        
                        

                        rewards.appendChild(skin);
                    }
                }

                if(TutorialCount[offset] || RefrenceCount[offset]){
                    let badgeButtons = document.createElement("div");
                    badgeButtons.className = "badgeButtons";
                    Achevelist.appendChild(badgeButtons);
                    if(TutorialCount[offset]){
                        let badgetutorialbutton = document.createElement("div");
                        badgetutorialbutton.className = "badgetutorialbutton";
                        badgeButtons.appendChild(badgetutorialbutton);

                        let badgetutorialspan = document.createElement("span");
                        badgetutorialbutton.appendChild(badgetutorialspan);

                        let badgetutorialspan2 = document.createElement("span");
                        badgetutorialspan.appendChild(badgetutorialspan2);

                        let badgetutorialimg = document.createElement("img");
                        badgetutorialimg.className = "badgetutorialimg";
                        badgetutorialimg.src = "https://static.wikia.nocookie.net/doors-game/images/f/f9/References-button.png/revision/latest/scale-to-width-down/29?cb=20260124153937";
                        badgetutorialspan2.appendChild(badgetutorialimg);

                        let badgetutorialcontainer = document.createElement("div");
                        badgetutorialcontainer.className = "badgetutorialcontainer";
                        badgeButtons.appendChild(badgetutorialcontainer);

                        let badgetutorialbox = document.createElement("div");
                        badgetutorialbox.className = "badgetutorialbox";
                        badgetutorialcontainer.appendChild(badgetutorialbox);

                        let badgetutorialcenter = document.createElement("center");
                        badgetutorialcenter.className = "badgetutorialcenter";
                        badgetutorialbox.appendChild(badgetutorialcenter);

                        let badgetutorialTitle = document.createElement("span");
                        badgetutorialTitle.className = "badgetutorialTitle";
                        badgetutorialTitle.textContent = "TUTORIAL";
                        badgetutorialcenter.appendChild(badgetutorialTitle);

                        let badgeTutorialText = document.createElement("p");
                        badgeTutorialText.className = "badgeTutorialText";
                        badgeTutorialText.textContent = TutorialCount[offset];
                        badgetutorialbox.appendChild(badgeTutorialText);
                    }
                    if(RefrenceCount[offset]){
                        let badgereferencebutton = document.createElement("div");
                        badgereferencebutton.className = "badgereferencebutton";
                        badgereferencebutton.style.right = "15px";
                        if(TutorialCount[offset]){badgereferencebutton.style.right = "55px";}
                        badgeButtons.appendChild(badgereferencebutton);

                        let badgereferencespan = document.createElement("span");
                        badgereferencebutton.appendChild(badgereferencespan);

                        let badgereferencespan2 = document.createElement("span");
                        badgereferencespan.appendChild(badgereferencespan2);

                        let badgereferenceimg = document.createElement("img");
                        badgereferenceimg.className = "badgereferenceimg";
                        badgereferenceimg.src = "https://static.wikia.nocookie.net/doors-game/images/2/29/Tutorial-button.png/revision/latest/scale-to-width-down/40?cb=20251118174546";
                        badgereferencespan2.appendChild(badgereferenceimg);

                        let badgereferencecontainer = document.createElement("div");
                        badgereferencecontainer.className = "badgereferencecontainer";
                        badgeButtons.appendChild(badgereferencecontainer);

                        let badgereferencebox = document.createElement("div");
                        badgereferencebox.className = "badgereferencebox";
                        badgereferencecontainer.appendChild(badgereferencebox);

                        let badgereferencecenter = document.createElement("center");
                        badgereferencecenter.className = "badgereferencecenter";
                        badgereferencebox.appendChild(badgereferencecenter);

                        let badgereferenceTitle = document.createElement("span");
                        badgereferenceTitle.className = "badgereferenceTitle";
                        badgereferenceTitle.textContent = "REFERENCES";
                        badgereferencecenter.appendChild(badgereferenceTitle);

                        let badgereferenceText = document.createElement("p");
                        badgereferenceText.className = "badgereferenceText";
                        badgereferenceText.textContent = RefrenceCount[offset];
                        badgereferencebox.appendChild(badgereferenceText);
                    }
                    
                }
                badge.setAttribute("aria-obtained", "false");
                let badgeseperator = document.createElement("div");
                badgeseperator.className = "badgeseperator";
                Achevelist.appendChild(badgeseperator);
                offset++;
                if (clickedBadges.includes(badge.dataset.badgeId)) {
                badge.classList.add("clicked");

                Achevelist.appendChild(badge);
                Achevelist.appendChild(badgeseperator);
                }
                let originalNext = badge.nextSibling;

                badge.addEventListener("click", () => {
                let id = badge.dataset.badgeId;

                if (!badge.classList.contains("clicked")) {
                    badge.classList.add("clicked");

                    if (!clickedBadges.includes(id)) {
                        clickedBadges.push(id);
                    }

                    localStorage.setItem("clickedBadges", JSON.stringify(clickedBadges));

                    setTimeout(() => {
                        Achevelist.appendChild(badge);
                        Achevelist.appendChild(badgeseperator);
                    }, 350);

                } else {
                    badge.classList.remove("clicked");

                    clickedBadges = clickedBadges.filter(badgeId => badgeId !== id);
                    localStorage.setItem("clickedBadges", JSON.stringify(clickedBadges));

                    setTimeout(() => {
                        if (originalNext) {
                            Achevelist.insertBefore(badge, originalNext);
                            Achevelist.insertBefore(badgeseperator, originalNext);
                        } else {
                            Achevelist.appendChild(badge);
                            Achevelist.appendChild(badgeseperator);
                        }
                    }, 350);
                }
                });
                
                
            }
        }
        let clickedBadges = JSON.parse(localStorage.getItem("clickedBadges") || "[]");

        document.querySelectorAll(".badge").forEach(badge => {
            if (clickedBadges.includes(badge.dataset.badgeId)) {
                badge.classList.add("clicked");
            }
        });

        document.querySelectorAll(".Achevelist").forEach(Achevelist => {
            let badges = [...Achevelist.querySelectorAll(".badge")];

            badges
                .filter(badge => badge.classList.contains("clicked"))
                .forEach(badge => {
                    Achevelist.appendChild(badge);
                });
        });
    });
    

    function reset(){
        f = confirm("reset all achivements");
        if (!f) {
            return null;
        }
        document.querySelectorAll(".fire").forEach(fire => {
        fire.style.height = "150vh";
        fire.style.width = "150vw";
        fire.classList.add("active");
        });
        setTimeout(reset2,3000)
    }
    function reset2(){
        localStorage.removeItem("clickedBadges");
        location.reload();
    }
    let wallpaperoption;
    function wallpaper(x){
        wallpaperoption = x;
        if(x == 1){
            document.getElementsByClassName("body")[0].style = "background-image: url(Site-background-dark.webp)"
            
        }else if(x == 2){
            document.getElementsByClassName("body")[0].style = "background-image: url(NewHotel.webp)"
        }else if(x == 3){
            document.getElementsByClassName("body")[0].style = "background-image: url(https://static.wikia.nocookie.net/doors-game/images/2/25/The_Archives.png/revision/latest?cb=20260829193653)"
        }else if(x == 4){
            document.getElementsByClassName("body")[0].style = "background-image: url(Garden_Mill.webp)"
        }else if(x == 5){
            Ransom();
            return;
        }else if(x == 6){
            document.getElementsByClassName("body")[0].style = "background-image: url(https://static.wikia.nocookie.net/doors-game/images/1/16/StairwellThumbnail2.png/revision/latest?cb=20260830203911)"
        }else if(x == 7){
            document.getElementsByClassName("body")[0].style = "background-image: url(https://static.wikia.nocookie.net/doors-game/images/0/01/DailyTeaser36.jpg/revision/latest/scale-to-width-down/1000?cb=20250702223510)"
        }
        localStorage.setItem("wallpaperoption", wallpaperoption);
        
    }


    function Ransom(){
    let Ransoms = document.getElementsByClassName("ransom")[0];
    let Rans1 = "https://static.wikia.nocookie.net/doors-game/images/b/bc/Ransom_UI_-_Error_%2880099403859001%29.ogg/revision/latest?cb=20260929185608";
    setTimeout(() => {
        alert("an error has occurred.");
        location.reload();
    },10000);

    Ransoms.style.display = "block";

    let ransomimages = [
        "https://static.wikia.nocookie.net/doors-game/images/f/f6/RansomJumpscarePopup.png/revision/latest?cb=20260830203817",
        "https://static.wikia.nocookie.net/doors-game/images/a/ad/RansomFlowerPopup.png/revision/latest?cb=20260830203759",
        "https://static.wikia.nocookie.net/doors-game/images/2/21/Images_errorscreen3.png/revision/latest?cb=20261004165057",
        "https://static.wikia.nocookie.net/doors-game/images/b/b2/RansomPopup2.png/revision/latest?cb=20260929182118",
        "https://static.wikia.nocookie.net/doors-game/images/d/df/RansomPopup5.png/revision/latest?cb=20260929182145",
        "https://static.wikia.nocookie.net/doors-game/images/1/14/RansomPopup6.png/revision/latest?cb=20260929182154",
        "https://static.wikia.nocookie.net/doors-game/images/9/97/RansomPopup4.png/revision/latest?cb=20260929182131"
    ];

    let rayx = 0;
    let rays = 0;

    function playRansomSound() {
        let Rans1s = new Audio(Rans1);
        Rans1s.play().catch(console.error);
    }
    spawnRansom();

    
    function spawnRansom() {
        playRansomSound();
        let popuprancontainser = document.createElement("div");
        popuprancontainser.className = "popuprancontainser";
        Ransoms.appendChild(popuprancontainser);

        let circlebuttionx1 = document.createElement("div");
        circlebuttionx1.className = "circlebuttionx1";
        popuprancontainser.appendChild(circlebuttionx1);

        let circlebuttionx2 = document.createElement("div");
        circlebuttionx2.className = "circlebuttionx2";
        popuprancontainser.appendChild(circlebuttionx2);

        let circlebuttionx3 = document.createElement("div");
        circlebuttionx3.className = "circlebuttionx3";
        popuprancontainser.appendChild(circlebuttionx3);

        let rayx = Math.floor(Math.random() * ransomimages.length);

        let popupran = document.createElement("div");
        popupran.className = "popupran";
        popupran.style.backgroundImage = `url("${ransomimages[rayx]}")`;

        popuprancontainser.style.zIndex = rays;
        rays += 2;

        popuprancontainser.appendChild(popupran);

        popuprancontainser.style.left = Math.random() * 100 + "vw";
        popuprancontainser.style.top = Math.random() * 100 + "vh";

        

        setTimeout(spawnRansom, 2 ** (rays / 1000));
    }




}
setInterval(omoris,1)
function omoris(){
    
    if(Math.round(Math.random()*10000) == 1){
        let omori = document.createElement("div");

        omori.className = "omori";
        omori.style.left = Math.random() * 105 + "vw";
        omori.style.top = Math.random() * 105 + "vh";

        document.getElementsByClassName("body")[0].appendChild(omori);

        setTimeout(() => {
            omori.style.opacity = 1;
        }, 1000);

        setTimeout(() => {
            omori.style.opacity = 0;
        }, 2000);

        setTimeout(() => {
            omori.remove();
        }, 3000);


        omori.onclick = function(){
            alma();
            omori.remove();
            document.getElementsByClassName("dark")[0].style.opacity = "1";
        };

        document.getElementsByClassName("body")[0].appendChild(omori);
    }
    

    
let alma2audio;
let lighthumm;

function alma(){
    let alma = new Audio("https://static.wikia.nocookie.net/doors-game/images/3/3d/Alma_crying_softer.ogg/revision/latest?cb=20260908081937");
    lighthumm = new Audio("light.mp3");
    lighthumm.play();
    lighthumm.volume = 0;
    alma.loop = true;
    alma.volume = 0;
    alma.play();

    let dark = document.getElementsByClassName("dark")[0];
    dark.style.pointerEvents = "all";

    let volume = 0;

    let volumeLoader = setInterval(() => {
        volume += 0.01;
        lighthumm.volume = Math.min(volume, 1);
        alma.volume = Math.min(volume, 1);

        if(volume >= 1){
            clearInterval(volumeLoader);
            alma2(alma);
        }
    }, 300);
}

function alma2(alma){
    alma2audio = new Audio("https://static.wikia.nocookie.net/doors-game/images/5/53/Alma_curious_idle.ogg/revision/latest?cb=20260908081943");
    alma2audio.loop = true;
    alma2audio.volume = 0;
    alma2audio.play();

    let volume = 0;

    let volumeLoader = setInterval(() => {
        volume += 0.01;
        alma2audio.volume = Math.min(volume, 1);
        alma.volume = Math.max(1 - volume, 0);

        if(volume >= 1){
            clearInterval(volumeLoader);
            alma3();
        }
    }, 100);
}

function alma3(){
    let frame = 0;

    let interval = setInterval(() => {
        document.getElementsByClassName("almas")[0].style.backgroundPosition =
            `-${frame * 333}px 0px`;

        frame++;

        if(frame >= 3){
            clearInterval(interval);
            setTimeout(alma4, 1000);
        }
    }, 100);
}

function alma4(){
    let volume = 0;

    let volumeLoader = setInterval(() => {
        volume += 0.1;

        document.getElementsByClassName("almas")[0].style.opacity = 1 - volume;
        alma2audio.volume = Math.max(1 - volume, 0);
        lighthumm.volume = Math.max(1 - volume, 0);
        if(volume >= 1){
            clearInterval(volumeLoader);
            alma2audio.pause();
            let y = Math.random()*5*1000+5000;
            
            setTimeout(playScareAudio, y)
            setTimeout(alma5,y+100)
        }
    }, 10);
}


}
let almasjumpimage = [
    "https://static.wikia.nocookie.net/doors-game/images/2/26/AlmaCloseup1.png/revision/latest/scale-to-width-down/1000?cb=20260924070432",
    "https://static.wikia.nocookie.net/doors-game/images/1/11/AlmaCloseup2.png/revision/latest/scale-to-width-down/1000?cb=20260924070437",
    "https://static.wikia.nocookie.net/doors-game/images/8/8b/AlmaCloseup_Jumpscare.png/revision/latest/scale-to-width-down/1000?cb=20260924070444",
    "https://static.wikia.nocookie.net/doors-game/images/1/1b/AlmaCloseup_Jumpscare2.png/revision/latest/scale-to-width-down/1000?cb=20260924070449"
];
let hand1image = [
    "https://static.wikia.nocookie.net/doors-game/images/e/eb/AlmaCloseupHandR_Jumpscare.png/revision/latest/scale-to-width-down/1000?cb=20260924070717",
    "https://static.wikia.nocookie.net/doors-game/images/4/44/AlmaCloseupHandR_Jumpscare_2.png/revision/latest/scale-to-width-down/1000?cb=20260924070732"
];
let hand2image = [
    "https://static.wikia.nocookie.net/doors-game/images/8/89/AlmaCloseupHandL_Jumpscare.png/revision/latest/scale-to-width-down/1000?cb=20260924070721",
    "https://static.wikia.nocookie.net/doors-game/images/d/da/AlmaCloseupHandL_Jumpscare_2.png/revision/latest/scale-to-width-down/1000?cb=20260924070736"
];
let scareaudio = [
    "https://static.wikia.nocookie.net/doors-game/images/2/23/Alma_appear.ogg/revision/latest?cb=20260908081923",
    "https://static.wikia.nocookie.net/doors-game/images/6/65/Alma_spotted.ogg/revision/latest?cb=20260908081947",
    "https://static.wikia.nocookie.net/doors-game/images/8/8f/Alma_windup.ogg/revision/latest?cb=20260908081959",
    "https://static.wikia.nocookie.net/doors-game/images/4/4c/Alma_attack1.ogg/revision/latest?cb=20260908081929",
    "https://static.wikia.nocookie.net/doors-game/images/c/c9/Alma_attack2.ogg/revision/latest?cb=20260908081930",
    "https://static.wikia.nocookie.net/doors-game/images/6/60/Alma_attack3.ogg/revision/latest?cb=20260908081930",
    "https://static.wikia.nocookie.net/doors-game/images/e/ea/Alma_vanish.ogg/revision/latest?cb=20260908081953",
    "light.mp3"
];
let scarsounds = scareaudio.map(src => {
    let audio = new Audio(src);
    audio.preload = "auto";
    return audio;
});

function playScareAudio() {
    scarsounds.forEach(audio => {
        audio.currentTime = 0;
        audio.play().catch(console.error);
    });
}

function alma5() {
    let imagesel = 0;
    let imagesel2 = 0;
    let size = 40;
    let jumpalma = document.getElementsByClassName("jumpalmas")[0];
    let jumphands = document.getElementsByClassName("jumphands1")[0];
    let jumphands2 = document.getElementsByClassName("jumphands2")[0];
    jumpalma.style.opacity = 1;
    jumphands.style.opacity = 1;
    jumphands2.style.opacity = 1;
    let lastTime = 0;
    
    
    function grow(time) {
        if (!lastTime) lastTime = time;
        let delta = time - lastTime;
        lastTime = time;

        size += delta * 0.08;

        

        jumpalma.style.backgroundSize = `${size}% auto`;
        jumphands.style.backgroundSize = `${size*.7}% auto`;
        jumphands2.style.backgroundSize = `${size*.7}% auto`;

        requestAnimationFrame(grow);
    }

    function nextImage() {
        jumpalma.style.backgroundImage = `url("${almasjumpimage[imagesel]}")`;

        let delay = imagesel === 2 ? 200 : 150;
        delay = imagesel === 3 ? 300 : 150;
        imagesel++;

        if (imagesel >= almasjumpimage.length) return;

        setTimeout(nextImage, delay);
    }
    function nextImage1() {
        jumphands.style.backgroundImage = `url("${hand1image[imagesel2]}")`;
        jumphands2.style.backgroundImage = `url("${hand2image[imagesel2]}")`;

        let delay = imagesel2 === 0 ? 300 : 200;
        
        imagesel2++;

        if (imagesel2 >= hand1image.length) return;

        setTimeout(nextImage1, delay);
    }
    let i = false;

    function strobe() {
        if (i) {
            document.getElementsByClassName("dark")[0].style.background = "rgb(255,255,255)";
        } else {
            document.getElementsByClassName("dark")[0].style.background = "rgb(0,0,0)";
        }

        i = !i;
    }

    let strobeInterval = setInterval(strobe, 1);

    setTimeout(() => {
        clearInterval(strobeInterval);

        let dark = document.getElementsByClassName("dark")[0];
        dark.style.background = "rgb(0,0,0)";

        jumpalma.style.opacity = 0;
        jumphands.style.opacity = 0;
        jumphands2.style.opacity = 0;
        document.getElementsByClassName("dedalma")[0].style.opacity = 1;
        setTimeout(()=>{
            location.reload();
        }, 10000)
    }, 1000);

    document.getElementsByClassName("dark")[0].style.opacity = 1;
    
    jumpalma.style.backgroundPosition = "center bottom";
    jumpalma.style.backgroundSize = `${size}% auto`;

    nextImage1();
    nextImage();
    requestAnimationFrame(grow);

}

wallpaper(localStorage.getItem("wallpaperoption"));


let trclicks = 0;
let rotsss = 0;
function trophycup(e) {
    menta = new Audio("metal.mp3");
    menta.play();
    
    rotsss= rotsss + 5;
    document.getElementsByClassName("Titleimg")[0].style.transform = `rotate(${rotsss}deg)`;
    trclicks++;
    for (let i = 0; i < 20; i++) {
        let spark = document.createElement("span");
        spark.className = "spark";

        spark.style.left = e.clientX + "px";
        spark.style.top = e.clientY + "px";
        document.body.appendChild(spark);

        let angle = Math.random() * Math.PI * 2;
        let speed = 2 + Math.random() * 5;
        let vx = Math.cos(angle) * speed;
        let vy = Math.sin(angle) * speed;
        let x = 0;
        let y = 0;
        let gravity = 0.12 + Math.random() * 0.08;
        let life = 0;
        let maxLife = 10 + Math.random() * 50;

        function animate() {
            life++;
            x += vx;
            y += vy;
            vy += gravity;
            vx *= 0.99;

            spark.style.transform = `translate(${x}px, ${y}px) scale(${1 - life / maxLife})`;
            spark.style.opacity = 1 - life / maxLife;

            if (life < maxLife) {
                requestAnimationFrame(animate);
            } else {
                spark.remove();
            }
        }

        requestAnimationFrame(animate);
    }
    if (trclicks === 5) {
        document.getElementsByClassName("gummy")[0].style.transform = "rotate(0)";
        document.querySelectorAll(".Titleimg").forEach(el => {
            let y = 0;
            let x = 0;
            let velocity = -5;
            let vx = (Math.random() - 0.5) * 2;
            let gravity = 0.15;

            function fall() {
                velocity += gravity;
                y += velocity;
                x += vx;
                vx *= 0.999;

                el.style.transform = `translate(${x}px, ${y}px)`;

                if (y < window.innerHeight + 200) {
                    requestAnimationFrame(fall);
                    
                }else{
                    el.style.opacity = 0;
                    el.style.transform = `translate(200px, 000px)`;
                    el.style.pointerEvents = "none"
                }
            }

            requestAnimationFrame(fall);
        });
    }
}
let gel = [0, 70, 0];
let gels = [...gel];
let opsgel = 0.7;

const spotlight = document.querySelector(".spotlight");
const spotlights = document.querySelector(".spotlights");
let lightTimer;
let timeadad;

keys = false;
function keysss(){
    document.getElementsByClassName("key")[0].remove();
    
}
function door(){
    if(keys){
        localStorage.setItem("wallpaperoption", 7);
        location.reload();
    }
}
function spot() {
    let brek = new Audio("breaker.mp3");
    
    lighthumm = new Audio("short.mp3");
    lighthumm.volume = .1;
    lighthumm2 = new Audio("deum.mp3");
    lighthumm2.volume = 0.01;
    lighthumm2.play();
    lighthumm.play();
    brek.play();
    spotlight.style.opacity = spotlight.style.opacity === "1" ? "0" : "1";

    startLight();

    const backroom = document.getElementsByClassName("backroom")[0];
    backroom.style.opacity = 1;
    backroom.style.pointerEvents = "all";
    
    clearTimeout(timeadad);
    
    timeadad = setTimeout(() => {
        stopLight();
        backroom.style.opacity = 0;
        backroom.style.pointerEvents = "none";
        spotlight.style.opacity = "0";
        document.getElementsByClassName("gummy")[0].style.opacity = 0;
        document.getElementsByClassName("gummy")[0].style.pointerEvents = "none";
        spotlights.style.opacity = 0;
    }, 10000);
}

function updateLight() {
    gels = gels.map(value => Math.max(0, value - 5));
    opsgel = Math.max(0, opsgel + 0.05);

    spotlights.style.background = `rgb(${gels.map(Math.floor).join(", ")})`;
    spotlights.style.opacity = opsgel;
}

document.addEventListener("mousemove", e => {
    spotlight.style.setProperty("--x", e.clientX + "px");
    spotlight.style.setProperty("--y", e.clientY + "px");
});

document.addEventListener("click", () => {
    if(document.getElementsByClassName("backroom")[0].style.opacity == 1){
        let clasdadwadaw = new Audio("https://static.wikia.nocookie.net/doors-game/images/8/84/ShakeLight.mp3/revision/latest?cb=20230223205213");
        clasdadwadaw.play();
    }
    
    gels = gels.map((value, i) => Math.min(gel[i], value + 70));
    opsgel = Math.min(0.7, opsgel + 7.5);
});

function startLight() {
    if (lightTimer) return;
    lightTimer = setInterval(updateLight, 100);
    let key = document.createElement("div");
    key.className = "key";
    key.onclick = () => keysss();
    document.querySelector(".backroom").appendChild(key);
    key.style.left = Math.random() * 90 + "vw";
    key.style.top = Math.random() * 90 + "vh";
}

function stopLight() {
    clearInterval(lightTimer);
    lightTimer = null;
    spotlights.style.opacity = 0;
    lighthumm2.volume= 0;
    lighthumm.volume= 0;
}

let drones = [
    "https://static.wikia.nocookie.net/doors-game/images/4/4e/Black_Figure_%284%29.png/revision/latest/scale-to-width-down/267?cb=20260811152353",
    "https://static.wikia.nocookie.net/doors-game/images/e/eb/Drone2.gif/revision/latest?cb=20260829135048",
    "https://static.wikia.nocookie.net/doors-game/images/9/90/Black_Figure_%282%29.png/revision/latest/scale-to-width-down/267?cb=20260811152356",
    "https://static.wikia.nocookie.net/doors-game/images/3/3a/Black_Figure_%281%29.png/revision/latest/scale-to-width-down/267?cb=20260811152357",
    "https://static.wikia.nocookie.net/doors-game/images/0/0d/Black_Figure_%285%29.png/revision/latest/scale-to-width-down/268?cb=20260830165024",
    "https://static.wikia.nocookie.net/doors-game/images/4/48/Black_Figure_%286%29.png/revision/latest?cb=20260916182836",
    "https://static.wikia.nocookie.net/doors-game/images/e/e6/Black_Figure_%287%29.png/revision/latest/scale-to-width-down/268?cb=20260916181312",
    "https://static.wikia.nocookie.net/doors-game/images/7/79/Black_Figure_%288%29.png/revision/latest/scale-to-width-down/268?cb=20260916182601",
    "https://static.wikia.nocookie.net/doors-game/images/9/97/Black_Figure_%289%29.png/revision/latest/scale-to-width-down/268?cb=20260916182544",
    "https://static.wikia.nocookie.net/doors-game/images/5/52/Bigguy.png/revision/latest/scale-to-width-down/268?cb=20260828224054",
    "https://static.wikia.nocookie.net/doors-game/images/1/1b/RaredroneD.gif/revision/latest?cb=20260828225603",
    "https://static.wikia.nocookie.net/doors-game/images/7/74/ENA_Drone_Variant.png/revision/latest?cb=20260914214319",
    "https://static.wikia.nocookie.net/doors-game/images/1/12/Other_Drone_Variant_That_Might_Be_A_Refrence.png/revision/latest/scale-to-width-down/267?cb=20260914214600",
    "https://static.wikia.nocookie.net/doors-game/images/1/16/MIKUDRONE.gif/revision/latest/scale-to-width-down/268?cb=20260904173214",
    "https://static.wikia.nocookie.net/doors-game/images/8/8a/FLOWERYDRONE.png/revision/latest/scale-to-width-down/268?cb=20260916181725",
    "https://static.wikia.nocookie.net/doors-game/images/1/1e/16.png/revision/latest/scale-to-width-down/267?cb=20260915195048",
    "https://static.wikia.nocookie.net/doors-game/images/c/c9/17.png/revision/latest?cb=20260915195617" 
]

function rushhour() {
    let allDrones = [];
    chime = new Audio("https://static.wikia.nocookie.net/doors-game/images/0/04/Intercom_chime_lightsoff_high.ogg/revision/latest?cb=20260902233437");
    
    chime1 = new Audio("https://static.wikia.nocookie.net/doors-game/images/2/2b/Dronestampede.ogg/revision/latest?cb=20260918013621");
    chime2 = new Audio("https://static.wikia.nocookie.net/doors-game/images/7/79/Dronestampede_chatter.ogg/revision/latest?cb=20260918013622");
    chime.play();
    chime1.volume = 0;
    chime2.volume = 0;
    chime1.loop = false;
    chime1.play();
    chime2.play();

    let volume = 0;
    let direction = 1;

    let fade = setInterval(() => {
        volume += direction * 0.01;

        if (volume >= 1) {
            volume = 1;
            direction = -1;
        }

        chime1.volume = volume;
        chime2.volume = volume;

        if (volume <= 0 && direction === -1) {
            clearInterval(fade);
            chime1.pause();
            chime2.pause();
            chime1.currentTime = 0;
            chime2.currentTime = 0;
        }
    }, 30);
    let rush = setInterval(() => {
        for (let i = 0; i < 4; i++) {
            let drone = document.createElement("div");
            drone.className = "drone";
            drone.style.backgroundImage = `url("${drones[Math.floor(Math.random() * drones.length)]}")`;
            drone.style.top = Math.random() * 100 + "vh";
            drone.style.left = "-200px";
            document.querySelector(".droness").appendChild(drone);

            allDrones.push({
                element: drone,
                x: -200,
                speed: 30
            });
        }
    }, 1);
    setTimeout(() => {
        clearInterval(rush);
    }, 5000);

    setInterval(() => {
        allDrones.forEach((item, i) => {
            item.speed = Math.random()*2 +30;
            item.x += item.speed;
            item.element.style.transform = `translateX(${item.x}px)`;

            if (item.element.getBoundingClientRect().left > window.innerWidth + 200) {
                item.element.remove();
                allDrones.splice(i, 1);
            }
        });
    }, 1);
}
setInterval(rushhour, 300000);
