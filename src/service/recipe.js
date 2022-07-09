class Recipe{
    constructor(key){
        this.key=key;
        this.getRequestOptions={
            method: 'GET',
            redirect: 'follow'
        }
    }

    getPopular(){
        fetch(`https://api.spoonacular.com/recipes/random?apiKey=${this.key}&number=9`, 
        this.getRequestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
}

export default Recipe;
