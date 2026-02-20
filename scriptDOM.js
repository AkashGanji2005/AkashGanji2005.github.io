/*
// Function to show the Filter menu and hide the Add form
function showFilter() {
    document.getElementById('filterContent').style.display = 'block';
    document.getElementById('newContent').style.display = 'none';
}

// Function to show the Add New Article form and hide the Filter menu
function showAddNew() {
    document.getElementById('filterContent').style.display = 'none';
    document.getElementById('newContent').style.display = 'flex';
}

// Function to hide/show articles based on checkbox status
function filterArticles() {
    const showOpinion = document.getElementById('opinionCheckbox').checked;
    const showRecipe = document.getElementById('recipeCheckbox').checked;
    const showUpdate = document.getElementById('updateCheckbox').checked;

    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        if (article.classList.contains('opinion')) {
            article.style.display = showOpinion ? 'block' : 'none';
        } else if (article.classList.contains('recipe')) {
            article.style.display = showRecipe ? 'block' : 'none';
        } else if (article.classList.contains('update')) {
            article.style.display = showUpdate ? 'block' : 'none';
        }
    });
}

// Function to create and add a new article to the page
function addNewArticle() {
    const title = document.getElementById('inputHeader').value;
    const text = document.getElementById('inputArticle').value;
    const list = document.getElementById('articleList');

    let typeClass = "";
    let typeLabel = "";

    // Checking which radio button is selected
    if (document.getElementById('opinionRadio').checked) {
        typeClass = "opinion";
        typeLabel = "Opinion";
    } else if (document.getElementById('recipeRadio').checked) {
        typeClass = "recipe";
        typeLabel = "Recipe";
    } else if (document.getElementById('lifeRadio').checked) {
        // Must use 'update' to match the CSS class .update
        typeClass = "update"; 
        typeLabel = "Update";
    }

    // Validation: Only add if title and text are not empty
    if (title !== "" && text !== "" && typeClass !== "") {
        const newArt = document.createElement('article');
        newArt.className = typeClass; // Applies the border style from 10_css.css
        
        // Matches the structure of your existing articles
        newArt.innerHTML = `
            <span class="marker">${typeLabel}</span>
            <h2>${title}</h2>
            <p>${text}</p>
            <p><a href="moreDetails.html">Read more...</a></p>
        `;

        list.appendChild(newArt);
        
        // Reset the form after adding
        document.getElementById('newContent').reset();
        
        // Ensure the new article follows the current filter rules
        filterArticles();
    } else {
        alert("Please fill out all fields and select an article type.");
    }
}
*/

// Toggle Filter Form
function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");

    if (filterForm.style.display === "none") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }

    newForm.style.display = "none";
}


// Toggle Add New Article Form
function showAddNew() {
    const newForm = document.getElementById("newContent");
    const filterForm = document.getElementById("filterContent");

    if (newForm.style.display === "none" || newForm.style.display === "") {
        newForm.style.display = "flex";
    } else {
        newForm.style.display = "none";
    }

    filterForm.style.display = "none";
}


// Filter Articles
function filterArticles() {
    const opinionChecked = document.getElementById("opinionCheckbox").checked;
    const recipeChecked = document.getElementById("recipeCheckbox").checked;
    const updateChecked = document.getElementById("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {

        if (article.classList.contains("opinion")) {
            article.style.display = opinionChecked ? "block" : "none";
        }

        if (article.classList.contains("recipe")) {
            article.style.display = recipeChecked ? "block" : "none";
        }

        if (article.classList.contains("update")) {
            article.style.display = updateChecked ? "block" : "none";
        }

    });
}


// Add New Article
function addNewArticle() {

    const title = document.getElementById("inputHeader").value;
    const text = document.getElementById("inputArticle").value;

    const opinionRadio = document.getElementById("opinionRadio");
    const recipeRadio = document.getElementById("recipeRadio");
    const lifeRadio = document.getElementById("lifeRadio");

    if (title.trim() === "" || text.trim() === "") {
        return;
    }

    let type = "";
    let markerText = "";

    if (opinionRadio.checked) {
        type = "opinion";
        markerText = "Opinion";
    } 
    else if (recipeRadio.checked) {
        type = "recipe";
        markerText = "Recipe";
    } 
    else if (lifeRadio.checked) {
        type = "update";
        markerText = "Update";
    } 
    else {
        return;
    }

    const articleList = document.getElementById("articleList");

    const newArticle = document.createElement("article");
    newArticle.classList.add(type);

    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.innerText = markerText;

    const header = document.createElement("h2");
    header.innerText = title;

    const paragraph = document.createElement("p");
    paragraph.innerText = text;

    const readMorePara = document.createElement("p");
    const link = document.createElement("a");
    link.href = "moreDetails.html";
    link.innerText = "Read more...";
    readMorePara.appendChild(link);

    newArticle.appendChild(marker);
    newArticle.appendChild(header);
    newArticle.appendChild(paragraph);
    newArticle.appendChild(readMorePara);

    articleList.appendChild(newArticle);

    // Reset form
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    opinionRadio.checked = false;
    recipeRadio.checked = false;
    lifeRadio.checked = false;

    // Hide form after adding
    document.getElementById("newContent").style.display = "none";
}
