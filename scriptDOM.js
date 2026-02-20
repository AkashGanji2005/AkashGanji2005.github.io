
const filterForm = document.getElementById('filterContent');
const addForm = document.getElementById('newContent');
const articleList = document.getElementById('articleList');

function showFilter() {
    filterForm.style.display = 'block';
    addForm.style.display = 'none';
}

function showAddNew() {
    filterForm.style.display = 'none';
    addForm.style.display = 'flex';
}

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

function addNewArticle() {
    const title = document.getElementById('inputHeader').value;
    const text = document.getElementById('inputArticle').value;
    
    let type = "";
    let className = "";
    
    if (document.getElementById('opinionRadio').checked) {
        type = "Opinion";
        className = "opinion";
    } else if (document.getElementById('recipeRadio').checked) {
        type = "Recipe";
        className = "recipe";
    } else if (document.getElementById('lifeRadio').checked) {
        type = "Update";
        className = "update";
    }

    if (title && text && type) {
        const newArticle = document.createElement('article');
        newArticle.className = className;
        
        newArticle.innerHTML = `
            <span class="marker">${type}</span>
            <h2>${title}</h2>
            <p>${text}</p>
            <p><a href="moreDetails.html">Read more...</a></p>
        `;

        articleList.appendChild(newArticle);

        document.getElementById('newContent').reset();
        filterArticles();
    } else {
        alert("Please fill out all fields and select a type!");
    }
}
