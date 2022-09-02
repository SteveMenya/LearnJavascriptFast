function startApp() {

    document.getElementById("screen1").style.display = "block";
    document.getElementById("screen2a").style.display = "none";
    document.getElementById("screen2b").style.display = "none";
    document.getElementById("screen3").style.display = "none";
    
    document.getElementById("howManyPlayers").addEventListener("change", createTextInput);
}

startApp();

function createTextInput() {
    
    var p = document.getElementById("howManyPlayers").selectedIndex;
    
    var numberOfPlayers = document.getElementById("howManyPlayers").options[p].value;
    
    document.getElementById("howManyPlayers").style.display = "none";
    
    document.getElementById("question").innerHTML = "Enter Names of Players";
    
    var docFrag = document.createDocumentFragment();
    
    var inputElement, myButton;
    
    
    for (i = 0; i < numberOfPlayers; i = i + 1) {

        inputElement = document.createElement("INPUT");
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("class", "nameInput");
        inputElement.setAttribute("id", "playerName" + i);
        inputElement.setAttribute("value", "Name of Player " + (i + 1));

        inputElement.onclick = function (){
            this.value = "";
        }

        docFrag.appendChild(inputElement);
        docFrag.appendChild(document.createElement("BR"));
        docFrag.appendChild(document.createElement("BR"));

    }
    
    myButton = document.createElement("INPUT");
    myButton.setAttribute("type", "button");
    myButton.setAttribute("value", "Submit Names");
    myButton.setAttribute("id", "submitNames");
    
    myButton.onclick = function() {
        storePlayers(numberOfPlayers);
    }   
    
    docFrag.appendChild(myButton);
    
    document.getElementById("screen1").appendChild(docFrag);
    
}

function storePlayers(numberOfPlayers) {

    function Player(name) {
        this.name = name;
    }

    Player.prototype.setTime = function (bestTime, totalTime, numberOfRounds) {
        this.bestTime = bestTime;
        this.averageTime = totalTime / numberOfRounds;
    }

    var i, players = [];

    for (i = 0; i < numberOfPlayers; i++) {
        players[i] = new Player(document.getElementById("playerName" + i).value);
    }

    createGame(players, 10);
}

function createGame(players, roundsPerPlayer) {

    document.getElementById("screen1").style.display = "none";

    document.getElementById("screen2a").style.display = "block";

    document.getElementById("screen2b").style.display = "block";

    showAsButton("Start Game");

    var timesClicked = 1,
        oneSet = roundsPerPlayer + 1,
        createdTime, reactionTime, totalTime = 0,
        bestTime = 0,
        numberOfPlayers = players.length,
        playerNumber = 0,
        status = "button";

    document.getElementById("answer").onclick = function () {
        switch (status) {
            case "button":
                if (timesClicked === oneSet * numberOfPlayers + 1) {
                    displayResults(players);
                } else {
                    totalTime = 0;
                    reactionTime = 0;
                    bestTime = 0;

                    document.getElementById("besttime").innerHTML = 0;
                    document.getElementById("reactiontime").innerHTML = 0;
                    document.getElementById("averagetime").innerHTML = "-";

                    removeAllShapes();
                    createdTime = createAllShapes();

                    document.getElementById("answer").className = "shape";

                    status = "shape";

                }

                break;

            case "shape":
                reactionTime = (Date.now() - createdTime) / 1000;
                totalTime = totalTime + reactionTime;
                if (reactionTime < bestTime || bestTime === 0) {
                    bestTime = reactionTime;
                }

                document.getElementById("besttime").innerHTML = bestTime;
                document.getElementById("reactiontime").innerHTML = reactionTime;

                if (timesClicked % oneSet === 0) {
                    players[playerNumber].setTime(bestTime, totalTime, roundsPerPlayer);

                    document.getElementById("averagetime").innerHTML = players[playerNumber].averageTime;

                    document.getElementById("instructions").innerHTML = "End of Game";
                    playerNumber++;
                    status = "button";
                    removeAllShapes();
                    showAsButton("Click Here To Continue");

                } else {
                    removeAllShapes();
                    createdTime = createAllShapes();
                }

                break;
        }

        timesClicked++;

    };

}

function showAsButton(message) {
    document.getElementById("answer").className = "instructionbutton";
    document.getElementById("answer").style.display = "block";
    document.getElementById("answer").innerHTML = message;
}

function removeAllShapes() {

    var i;

    for (i = 1; i <= 10; i++) {
        document.getElementById("shape" + i).style.display = "none";
    }

    document.getElementById("answer").style.display = "none";
}

function createAllShapes() {

    var i, createdTime, answerIndex, answerColor, width, height, top, left, shape, color, idName, maxWidth, maxHeight;

    maxWidth = document.getElementById("screen2b").clientWidth * 0.2;
    maxHeight = document.getElementById("screen2b").clientHeight * 0.5;

    answerIndex = Math.floor(Math.random() * 10) + 1;

    answerColor = getColor();

    for (i = 1; i <= 10; i = i + 1) {
        if (Math.random() > 0.3 || i === (answerIndex)) {
            //draw the shape        
            shape = getShape();
            width = getShapeWidth(maxWidth);
            height = getShapeHeight(maxHeight);

            if (shape === "Circle" || shape === "Square") {
                height = Math.min(width, height);
                width = height;
            }

            if (i === answerIndex) {
                left = getShapeLeft(answerIndex, maxWidth, width);
                top = getShapeTop(answerIndex, maxHeight, height);
                drawOneShape("answer", shape, answerColor, height, width, top, left);

                document.getElementById("instructions").innerHTML = answerColor + "<BR>" + shape;
                document.getElementById("answer").innerHTML = "";

                createdTime = Date.now();

            } else {
                left = getShapeLeft(i, maxWidth, width);
                top = getShapeTop(i, maxHeight, height);

                do {
                    color = getColor();
                } while (color === answerColor);

                idName = "shape" + i;

                drawOneShape(idName, shape, color, height, width, top, left);

            }
        }
    }

    return createdTime;

}


function getShape() {
    var shapes = ["Square", "Circle", "Rect", "Oval"];
    var i = Math.floor(Math.random() * 4);
    return shapes[i];
}

function getColor() {
    var colors = ["Green", "Blue", "Red", "Orange", "Pink", "Yellow", "Purple", "Black", "Gray", "Cyan"];

    var i = Math.floor(Math.random() * 10);

    return colors[i];

}

function getShapeWidth(maxWidth) {

    return Math.max(20, Math.floor(Math.random() * (maxWidth + 1)));
}

function getShapeHeight(maxHeight) {
    return Math.max(20, Math.floor(Math.random() * (maxHeight + 1)));
}

function getShapeLeft(index, maxWidth, width) {
    if (index > 5)
        index = index - 5;

    return Math.floor(Math.random() * (maxWidth - width + 1)) + ((index - 1) * maxWidth);
}

function getShapeTop(index, maxHeight, height) {
    if (index <= 5)
        return Math.floor(Math.random() * (maxHeight - height + 1));
    else
        return Math.floor(Math.random() * (maxHeight - height + 1)) + maxHeight;
}

function drawOneShape(idName, shape, color, height, width, top, left) {
    if (shape === "Circle") {
        //Border radius = 0.5 * width + "px"
        document.getElementById(idName).style.borderRadius = 0.5 * width + "px";
    } else if (shape === "Oval") {
        document.getElementById(idName).style.borderRadius = 0.5 * width + "px / " + 0.5 * height + "px";
        //Border radius = 0.5 * width + "px / " + 0.5 * height + "px"
    } else {
        document.getElementById(idName).style.borderRadius = 0;
        //Border radius = 0
    }

    document.getElementById(idName).style.top = top + "px";

    document.getElementById(idName).style.left = left + "px";

    document.getElementById(idName).style.width = width + "px";

    document.getElementById(idName).style.height = height + "px";


    document.getElementById(idName).style.backgroundColor = color;

    document.getElementById(idName).style.display = "block";

}

function displayResults(players) {
    var table, i, cell, tr, headercell;

    document.getElementById("screen2a").style.display = "none";
    document.getElementById("screen2b").style.display = "none";

    document.getElementById("screen3").style.display = "block";

    players.sort(function (a, b) {
        return a.averageTime - b.averageTime
    });

    table = document.getElementById("results");

    tr = document.createElement("TR");


    headercell = document.createElement("th");
    headercell.innerHTML = "Rank";
    tr.appendChild(headercell);

    headercell = document.createElement("th");
    headercell.innerHTML = "Name";
    tr.appendChild(headercell);

    headercell = document.createElement("th");
    headercell.innerHTML = "Best Time";
    tr.appendChild(headercell);

    headercell = document.createElement("th");
    headercell.innerHTML = "Average Time";
    tr.appendChild(headercell);

    table.appendChild(tr);

    for (i = 0; i < players.length; i = i + 1) {
        tr = document.createElement("TR");

        cell = document.createElement("td");
        cell.innerHTML = i + 1;
        tr.appendChild(cell);

        cell = document.createElement("td");
        cell.innerHTML = players[i].name;
        tr.appendChild(cell);

        cell = document.createElement("td");
        cell.innerHTML = players[i].bestTime.toFixed(3);
        tr.appendChild(cell);

        cell = document.createElement("td");
        cell.innerHTML = players[i].averageTime.toFixed(3);
        tr.appendChild(cell);

        table.appendChild(tr);
    }

}

(function () {

    function startApp() {

        document.getElementById("screen1").style.display = "block";
        document.getElementById("screen2a").style.display = "none";
        document.getElementById("screen2b").style.display = "none";
        document.getElementById("screen3").style.display = "none";

        document.getElementById("howManyPlayers").addEventListener("change", createTextInput);
    }

    startApp();

    function createTextInput() {

        var p = document.getElementById("howManyPlayers").selectedIndex;

        var numberOfPlayers = document.getElementById("howManyPlayers").options[p].value;

        document.getElementById("howManyPlayers").style.display = "none";

        document.getElementById("question").innerHTML = "Enter Names of Players";

        var docFrag = document.createDocumentFragment();

        var inputElement, myButton;


        for (i = 0; i < numberOfPlayers; i = i + 1) {

            inputElement = document.createElement("INPUT");
            inputElement.setAttribute("type", "text");
            inputElement.setAttribute("class", "nameInput");
            inputElement.setAttribute("id", "playerName" + i);
            inputElement.setAttribute("value", "Name of Player " + (i + 1));

            inputElement.onclick = function () {
                this.value = "";
            }

            docFrag.appendChild(inputElement);
            docFrag.appendChild(document.createElement("BR"));
            docFrag.appendChild(document.createElement("BR"));

        }

        myButton = document.createElement("INPUT");
        myButton.setAttribute("type", "button");
        myButton.setAttribute("value", "Submit Names");
        myButton.setAttribute("id", "submitNames");

        myButton.onclick = function () {
            storePlayers(numberOfPlayers);
        }

        docFrag.appendChild(myButton);

        document.getElementById("screen1").appendChild(docFrag);

    }

    function storePlayers(numberOfPlayers) {

        function Player(name) {
            this.name = name;
        }

        Player.prototype.setTime = function (bestTime, totalTime, numberOfRounds) {
            this.bestTime = bestTime;
            this.averageTime = totalTime / numberOfRounds;
        }

        var i, players = [];

        for (i = 0; i < numberOfPlayers; i++) {
            players[i] = new Player(document.getElementById("playerName" + i).value);
        }

        createGame(players, 10);
    }

    function createGame(players, roundsPerPlayer) {

        document.getElementById("screen1").style.display = "none";

        document.getElementById("screen2a").style.display = "block";

        document.getElementById("screen2b").style.display = "block";

        showAsButton("Start Game");

        var timesClicked = 1,
            oneSet = roundsPerPlayer + 1,
            createdTime, reactionTime, totalTime = 0,
            bestTime = 0,
            numberOfPlayers = players.length,
            playerNumber = 0,
            status = "button";

        document.getElementById("answer").onclick = function () {
            switch (status) {
                case "button":
                    if (timesClicked === oneSet * numberOfPlayers + 1) {
                        displayResults(players);
                    } else {
                        totalTime = 0;
                        reactionTime = 0;
                        bestTime = 0;

                        document.getElementById("besttime").innerHTML = 0;
                        document.getElementById("reactiontime").innerHTML = 0;
                        document.getElementById("averagetime").innerHTML = "-";

                        removeAllShapes();
                        createdTime = createAllShapes();

                        document.getElementById("answer").className = "shape";

                        status = "shape";

                    }

                    break;

                case "shape":
                    reactionTime = (Date.now() - createdTime) / 1000;
                    totalTime = totalTime + reactionTime;
                    if (reactionTime < bestTime || bestTime === 0) {
                        bestTime = reactionTime;
                    }

                    document.getElementById("besttime").innerHTML = bestTime;
                    document.getElementById("reactiontime").innerHTML = reactionTime;

                    if (timesClicked % oneSet === 0) {
                        players[playerNumber].setTime(bestTime, totalTime, roundsPerPlayer);

                        document.getElementById("averagetime").innerHTML = players[playerNumber].averageTime;

                        document.getElementById("instructions").innerHTML = "End of Game";
                        playerNumber++;
                        status = "button";
                        removeAllShapes();
                        showAsButton("Click Here To Continue");

                    } else {
                        removeAllShapes();
                        createdTime = createAllShapes();
                    }

                    break;
            }

            timesClicked++;

        };

    }

    function showAsButton(message) {
        document.getElementById("answer").className = "instructionbutton";
        document.getElementById("answer").style.display = "block";
        document.getElementById("answer").innerHTML = message;
    }

    function removeAllShapes() {

        var i;

        for (i = 1; i <= 10; i++) {
            document.getElementById("shape" + i).style.display = "none";
        }

        document.getElementById("answer").style.display = "none";
    }

    function createAllShapes() {

        var i, createdTime, answerIndex, answerColor, width, height, top, left, shape, color, idName, maxWidth, maxHeight;

        maxWidth = document.getElementById("screen2b").clientWidth * 0.2;
        maxHeight = document.getElementById("screen2b").clientHeight * 0.5;

        answerIndex = Math.floor(Math.random() * 10) + 1;

        answerColor = getColor();

        for (i = 1; i <= 10; i = i + 1) {
            if (Math.random() > 0.3 || i === (answerIndex)) {
                //draw the shape        
                shape = getShape();
                width = getShapeWidth(maxWidth);
                height = getShapeHeight(maxHeight);

                if (shape === "Circle" || shape === "Square") {
                    height = Math.min(width, height);
                    width = height;
                }

                if (i === answerIndex) {
                    left = getShapeLeft(answerIndex, maxWidth, width);
                    top = getShapeTop(answerIndex, maxHeight, height);
                    drawOneShape("answer", shape, answerColor, height, width, top, left);

                    document.getElementById("instructions").innerHTML = answerColor + "<BR>" + shape;
                    document.getElementById("answer").innerHTML = "";

                    createdTime = Date.now();

                } else {
                    left = getShapeLeft(i, maxWidth, width);
                    top = getShapeTop(i, maxHeight, height);

                    do {
                        color = getColor();
                    } while (color === answerColor);

                    idName = "shape" + i;

                    drawOneShape(idName, shape, color, height, width, top, left);

                }
            }
        }

        return createdTime;

    }

    function getShape() {
        var shapes = ["Square", "Circle", "Rect", "Oval"];
        var i = Math.floor(Math.random() * 4);
        return shapes[i];
    }

    function getColor() {
        var colors = ["Green", "Blue", "Red", "Orange", "Pink", "Yellow", "Purple", "Black", "Gray", "Cyan"];

        var i = Math.floor(Math.random() * 10);

        return colors[i];

    }

    function getShapeWidth(maxWidth) {

        return Math.max(20, Math.floor(Math.random() * (maxWidth + 1)));
    }

    function getShapeHeight(maxHeight) {
        return Math.max(20, Math.floor(Math.random() * (maxHeight + 1)));
    }

    function getShapeLeft(index, maxWidth, width) {
        if (index > 5)
            index = index - 5;

        return Math.floor(Math.random() * (maxWidth - width + 1)) + ((index - 1) * maxWidth);
    }

    function getShapeTop(index, maxHeight, height) {
        if (index <= 5)
            return Math.floor(Math.random() * (maxHeight - height + 1));
        else
            return Math.floor(Math.random() * (maxHeight - height + 1)) + maxHeight;
    }

    function drawOneShape(idName, shape, color, height, width, top, left) {
        if (shape === "Circle") {
            //Border radius = 0.5 * width + "px"
            document.getElementById(idName).style.borderRadius = 0.5 * width + "px";
        } else if (shape === "Oval") {
            document.getElementById(idName).style.borderRadius = 0.5 * width + "px / " + 0.5 * height + "px";
            //Border radius = 0.5 * width + "px / " + 0.5 * height + "px"
        } else {
            document.getElementById(idName).style.borderRadius = 0;
            //Border radius = 0
        }

        document.getElementById(idName).style.top = top + "px";

        document.getElementById(idName).style.left = left + "px";

        document.getElementById(idName).style.width = width + "px";

        document.getElementById(idName).style.height = height + "px";


        document.getElementById(idName).style.backgroundColor = color;

        document.getElementById(idName).style.display = "block";

    }

    function displayResults(players) {
        var table, i, cell, tr, headercell;

        document.getElementById("screen2a").style.display = "none";
        document.getElementById("screen2b").style.display = "none";

        document.getElementById("screen3").style.display = "block";

        players.sort(function (a, b) {
            return a.averageTime - b.averageTime
        });

        table = document.getElementById("results");

        tr = document.createElement("TR");


        headercell = document.createElement("th");
        headercell.innerHTML = "Rank";
        tr.appendChild(headercell);

        headercell = document.createElement("th");
        headercell.innerHTML = "Name";
        tr.appendChild(headercell);

        headercell = document.createElement("th");
        headercell.innerHTML = "Best Time";
        tr.appendChild(headercell);

        headercell = document.createElement("th");
        headercell.innerHTML = "Average Time";
        tr.appendChild(headercell);

        table.appendChild(tr);

        for (i = 0; i < players.length; i = i + 1) {
            tr = document.createElement("TR");

            cell = document.createElement("td");
            cell.innerHTML = i + 1;
            tr.appendChild(cell);

            cell = document.createElement("td");
            cell.innerHTML = players[i].name;
            tr.appendChild(cell);

            cell = document.createElement("td");
            cell.innerHTML = players[i].bestTime.toFixed(3);
            tr.appendChild(cell);

            cell = document.createElement("td");
            cell.innerHTML = players[i].averageTime.toFixed(3);
            tr.appendChild(cell);

            table.appendChild(tr);
        }
    }

})();