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
