const projects = [
    {
        "projectName": "Pizza Order Form",
        "projectImage": require("../Images/pizza.PNG").default,
        "projectDesc": "A really basic form that helped me with form fundamentals. Also, the 'instrustructions' typo was intentional.",
        "projectDate": "Oct 4, 2020",
        "projectRepo": "https://github.com/TheCapn-MEC/pizza_order",
        "projectLink": "https://thecapn-mec.github.io/pizza_order/"
    },
    {
        "projectName": "Hummus Recipe",
        "projectImage": require("../Images/baby'sFirst.PNG").default,
        "projectDesc": "This one is NOT here because I'm proud of it or anything. This is here to show my growth from this point to every other project on my portfolio (yes, this was my first website).",
        "projectDate": "Oct 4, 2020",
        "projectRepo": "https://github.com/TheCapn-MEC/Hummus-Recipe",
        "projectLink": "https://thecapn-mec.github.io/Hummus-Recipe/"
    },
    {
        "projectName": "Ace Attorney Fan Page",
        "projectImage": require("../Images/aceAttorney.PNG").default,
        "projectDesc": "This site demonstrated my web development fundamentals very well while being a cool tribute to the Ace Attorney franchise.",
        "projectDate": "Nov 1, 2020",
        "projectRepo": "https://github.com/TheCapn-MEC/Galley_Website_Add-on_Project",
        "projectLink": "https://thecapn-mec.github.io/Galley_Website_Add-on_Project/index.html"
    },
    {
        "projectName": "Rock Paper Scissors",
        "projectImage": require("../Images/rockPaperScissors.PNG").default,
        "projectDesc": "This project was more JS heavy, showing off some intermediate JS skills with some front end on there too",
        "projectDate": "Nov 29, 2020",
        "projectRepo": "https://github.com/TheCapn-MEC/rockpaperscissors",
        "projectLink": "https://thecapn-mec.github.io/rockpaperscissors/"
    },
    {
        "projectName": "Treasure Diver Site",
        "projectImage": require("../Images/treasure.PNG").default,
        "projectDesc": "This site shows my designer side with color schemes and logos along with a stronger grasp of web dev than with previous projects.",
        "projectDate": "Jan 3, 2021",
        "projectRepo": "https://github.com/TheCapn-MEC/BrandedSite",
        "projectLink": "https://thecapn-mec.github.io/BrandedSite/index.html"
    },
    {
        "projectName": "Updating List Project",
        "projectImage": require("../Images/updateList.PNG").default,
        "projectDesc": "This was another JS heavy project, showing my ability to manipulate and use arrays and other variables.",
        "projectDate": "Jan 17, 2021",
        "projectRepo": "https://github.com/TheCapn-MEC/UpdatingListAssignment",
        "projectLink": "https://thecapn-mec.github.io/UpdatingListAssignment/"
    },
    {
        "projectName": "Calculator",
        "projectImage": require("../Images/calculator.PNG").default,
        "projectDesc": "This was a real test of my JS skills, having to do every calculator function I saw on the windows calculator",
        "projectDate": "Jan 31, 2021",
        "projectRepo": "https://github.com/TheCapn-MEC/calculator",
        "projectLink": "https://thecapn-mec.github.io/calculator/"
    },
    {
        "projectName": "Nintendo Wii Site",
        "projectImage": require("../Images/wii.PNG").default,
        "projectDesc": "This was my first crack at project leadership as well as replication. I think it was a decent success on both fronts.",
        "projectDate": "Feb 14, 2021",
        "projectRepo": "https://github.com/Amakris12/Group-bootstrap",
        "projectLink": "https://amakris12.github.io/Group-bootstrap/index.html"
    },
    {
        "projectName": "Mock West-MEC Coding Site",
        "projectImage": require("../Images/codingHome.PNG").default,
        "projectDesc": "This is what happened when I began to play with some jQuery. I'm still very proud of this one to be honest.",
        "projectDate": "Mar 7, 2021",
        "projectRepo": "https://github.com/TheCapn-MEC/jQueryIndex",
        "projectLink": "https://thecapn-mec.github.io/jQueryIndex/"
    },
    {
        "projectName": "Stopwatch",
        "projectImage": require("../Images/stopwatch.PNG").default,
        "projectDesc": "Though very light on front end, this was another test of my JS. It's definitely a stopwatch.",
        "projectDate": "Mar 21, 2021",
        "projectRepo": "https://github.com/TheCapn-MEC/stopwatch",
        "projectLink": "https://thecapn-mec.github.io/stopwatch/"
    },
    {
        "projectName": "Portfolio 1.0",
        "projectImage": require("../Images/Portfolio1.0.PNG").default,
        "projectDesc": "Every portfolio has to start somewhere. A 'game' is not where I thought my first portfolio would go. This project really tested my JS, jQuery, and HTML implementation.",
        "projectDate": "Feb 28, 2021",
        "projectRepo": "https://github.com/TheCapn-MEC/PortfolioPage",
        "projectLink": "https://thecapn-mec.github.io/PortfolioPage/"
    },
    {
        "projectName": "My Summer of 2021",
        "projectImage": require("../Images/summer.PNG").default,
        "projectDesc": "I was asked what I did over the summer of 2021. This is how I responded (with a little sprinkle of bootstrap).",
        "projectDate": "Aug 1, 2021",
        "projectRepo": "https://github.com/TheCapn-MEC/summerEvent",
        "projectLink": "https://thecapn-mec.github.io/summerEvent/"
    },
    {
        "projectName": "MKWii Randomizer",
        "projectImage": require("../Images/mkwiirand.png").default,
        "projectDesc": "Mario Kart Wii is just too easy. That's why I made this randomizer. Playing with the not flame runner is actually challenging.",
        "projectDate": "Nov 28, 2021",
        "projectRepo": "https://github.com/TheCapn-MEC/MKWiiRNG/tree/master",
        "projectLink": "https://mkwiirandomizer.netlify.app/"
    },
    {
        "projectName": "Pokedex",
        "projectImage": require("../Images/pokedex.PNG").default,
        "projectDesc": "I found the Pokemon API and wondered what I could do with it. This is the result.",
        "projectDate": "Sep 12, 2021",
        "projectRepo": "https://github.com/TheCapn-MEC/loadingErrorContent",
        "projectLink": "https://pedantic-northcutt-0cd0d9.netlify.app/"
    },
    {
        "projectName": "MKWii API Docs",
        "projectImage": require("../Images/mkwiiapi.PNG").default,
        "projectDesc": "This is the start of a series of side projects based around Mario Kart Wii. This contains time trial records, vehicle stats, and character stats in Mario Kart Wii.",
        "projectDate": "Nov 7, 2021",
        "projectRepo": "https://github.com/TheCapn-MEC/marioKartWiiAPI",
        "projectLink": "https://thecapn-mec.github.io/marioKartWiiAPI/"
    },
    {
        "projectName": "Minesweeper",
        "projectImage": require("../Images/Minesweeper.PNG").default,
        "projectDesc": "I found a minesweeper api on rapidAPI. So I decided to take a crack at faithfully recreating minesweeper as best I can, with a formerly functional global high score system on top.",
        "projectDate": "Oct 10, 2021",
        "projectRepo": "https://github.com/TheCapn-MEC/Minesweeper",
        "projectLink": "https://roldanreactminesweeper.netlify.app/"
    },
].sort((a, b) => new Date(b.projectDate) - new Date(a.projectDate));
module.exports = projects;