const endpoint='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
let cities=[]
fetch(endpoint)
.then(blob=>blob.json())
.then(data=>cities.push(...data))
function findMatch(tomatch,cities)
{
    return cities.filter(place=>
        {
            const regex=new RegExp(tomatch,'gi');
            return place.city.match(regex) || place.city.match(regex);
        })
}

  
  function display() {
    const matchArray = findMatch(this.value, cities);
    const html = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${place.population}</span>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
  }
  
const inputElem=document.querySelector('.search');
const suggestions=document.querySelector('.suggestions');
inputElem.addEventListener('onchange',findMatch(inputElem.nodeValue,cities));
inputElem.addEventListener('keyup',display);