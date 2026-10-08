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
        fire.classList.add("active");
        });
        setTimeout(reset2,3000)
    }
    function reset2(){
        localStorage.removeItem("clickedBadges");
        location.reload();
    }
    function wallpaper(x){
        if(x == 1){
            document.getElementsByClassName("body")[0].style = "background-image: url(Site-background-dark.webp)"
            
        }else if(x == 2){
            document.getElementsByClassName("body")[0].style = "background-image: url(NewHotel.webp)"
        }else if(x == 3){
            document.getElementsByClassName("body")[0].style = "background-image: url(https://static.wikia.nocookie.net/doors-game/images/d/dc/Archives_A-000_%281%29.png/revision/latest/scale-to-width-down/1000?cb=20260903083445)"
        }else if(x == 4){
            document.getElementsByClassName("body")[0].style = "background-image: url(Garden_Mill.webp)"
        }else if(x == 5){
            Ransom();
        }else if(x == 6){
            document.getElementsByClassName("body")[0].style = "background-image: url(Site-background-dark.webp)"
        }
            
        
    }


    function Ransom(){
    let Ransoms = document.getElementsByClassName("ransom")[0];
    let Rans1 = new Audio("https://static.wikia.nocookie.net/doors-game/images/a/a6/GEN_GLITCH_LOOP_(135402425939071).ogg");
    let Rans2 = new Audio("dragon-studio-glitch-effect-1-397982.mp3");
    Rans1.play();
    Rans2.play();

    Ransoms.style.display = "block";

    let ransomimages = [
        "https://static.wikia.nocookie.net/doors-game/images/f/f6/RansomJumpscarePopup.png/revision/latest/scale-to-width-down/185?cb=20260830203817",
        "https://static.wikia.nocookie.net/doors-game/images/a/ad/RansomFlowerPopup.png/revision/latest/scale-to-width-down/185?cb=20260830203759",
        "https://static.wikia.nocookie.net/doors-game/images/2/21/Images_errorscreen3.png/revision/latest/scale-to-width-down/185?cb=20261004165057",
        "https://static.wikia.nocookie.net/doors-game/images/a/ad/RansomFlowerPopup.png/revision/latest?cb=20260830203759",
        "https://static.wikia.nocookie.net/doors-game/images/d/df/RansomPopup5.png/revision/latest/scale-to-width-down/185?cb=20260929182145",
        "https://static.wikia.nocookie.net/doors-game/images/1/14/RansomPopup6.png/revision/latest/scale-to-width-down/185?cb=20260929182154",
        "https://static.wikia.nocookie.net/doors-game/images/9/97/RansomPopup4.png/revision/latest/scale-to-width-down/185?cb=20260929182131",
        "https://static.wikia.nocookie.net/doors-game/images/a/a4/Images_errorscreenstop.png/revision/latest/scale-to-width-down/185?cb=20261004165126",
        "https://static.wikia.nocookie.net/doors-game/images/f/f6/Images_ransomthanks.png/revision/latest/scale-to-width-down/185?cb=20261004165142"
    ];

    let rayx = 0;

    let ransomInterval = setInterval(() => {
        let raxy = Math.floor(Math.random() * ransomimages.length);

        Ransoms.style.backgroundImage = `url("${ransomimages[raxy]}")`;

        rayx++;
        

        if (rayx >= 500) {
            clearInterval(ransomInterval);
            Ransoms.style.backgroundImage = 'url("https://static.wikia.nocookie.net/doors-game/images/0/0d/Ransom_Sign.png/revision/latest/scale-to-width-down/174?cb=20260606184953")'
        }
        
    }, 2);


}
setInterval(omoris,1)
function omoris(){
    
    if(Math.round(Math.random()*1000) == 1){
        let omori = document.createElement("div");

        omori.className = "omori";

        omori.style.left = Math.random() * 100 + "vw";
        omori.style.top = Math.random() * 100 + "vh";

        omori.onclick = function(){
            alma();
            omori.remove();
            document.getElementsByClassName("dark")[0].style.opacity = "1";
};

        document.getElementsByClassName("body")[0].appendChild(omori);
    }
    

let alma2audio;

function alma(){
    let alma = new Audio("https://static.wikia.nocookie.net/doors-game/images/3/3d/Alma_crying_softer.ogg/revision/latest?cb=20260908081937");
    alma.loop = true;
    alma.volume = 0;
    alma.play();

    let dark = document.getElementsByClassName("dark")[0];
    dark.style.pointerEvents = "all";

    let volume = 0;

    let volumeLoader = setInterval(() => {
        volume += 0.01;
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

        if(volume >= 1){
            clearInterval(volumeLoader);
            alma2audio.pause();
        }
    }, 10);
}
}