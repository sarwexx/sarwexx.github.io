
<?php
$birthdate = new DateTime('2004-01-27');
$today = new DateTime();
$age = $birthdate->diff($today)->y;
?>
    <div class="bg hidden" id="Bio">
        <div class="wrapper" id="wrapper">
            <div class="card" style="cursor: pointer;" onclick="zobrazitHomepage()">
                <div class="back"><-- Back</div>
            </div>
            <div class="card">
                <div class="card-title">@ItzPeto > About > More</div>
                <div class="activity-wrapper">
	    		    <div class="activity-images">
                        <div class="Profile-pic">
                            <img id="pfp2" src="assets/loader.gif" alt="">
                        </div>
                    </div>
                    <div class="activity-info">
	    			    <div id="activity-name">Hello! I'm ItzPeto!</div>
                        <div id="activity-state"><?php echo $age ?> years old</div>
                        <div id="activity-detail"><img src="/assets/sk.webp" alt="SK" height="19" style="vertical-align:middle" width="auto"/> Slovakian</div>
                    </div>
                </div>
                <p>
                    I'm a passionate web developer and a fan of anime, videogames and technology.
                </p>
                <p>
                    I started learning web development when I was in high school. I was fascinated by how websites work and how I could create my own. I learned HTML, CSS and PHP by following online tutorials 
                    and courses. I also picked up some JavaScript basics along the way. I enjoy creating dynamic and responsive websites that look good and function well.
                </p>
                <p>
                    One of my favorite projects is my own website, where I showcase my portfolio, share my thoughts and opinions and inform about my plans. I think of it as my own small internet place where 
                    I can express myself and connect with others who share my passions.
                </p>
                <p>
                    I'm a huge fan of anime. I started watching anime when I was a kid and I always considered it a way to escape the reality. It has inspired me to learn more about Japanese culture, history, 
                    and language. Anime has enriched my life in many ways. You can find out more on 
                    my <a title="AniList" style="color:white;" href="https://anilist.co/user/ItzPeto/">Anilist profile</a>.
                </p>
                <p>
                    Another hobby of mine is playing videogames. I think I'm very picky when it comes to videogames, nowadays I like to play different types of games, from RPGs to FPSs to puzzle games, even gacha 
                    games! Some of the games I'm currently playing are Azur Lane, Blue Archive and occasionally Minecraft. You can find more about my gaming activities on 
                    my <a title="Steam" style="color:white;" href="https://steamcommunity.com/id/itzpeto/">Steam profile</a>.
                </p>
                <p>
                    I'm also interested in technology in general. I like to keep up with the latest trends and innovations in the tech world. I'm especially interested in the development of Windows and I 
                    follow multiple channels that inform about news in the Insider Program.
                </p>
                <p>
                    In the future, I would like to learn more programming languages and expand my skills. I'm interested in learning C# and C because they are widely used and powerful languages.
                </p>
            </div>
        </div>
    </div>