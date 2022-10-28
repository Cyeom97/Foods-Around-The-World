# Foods Around The World

### By: Christopher Yeom

#### Links About Me

[Github](https://github.com/Cyeom97/Foods-Around-The-World) [Trello](https://trello.com/b/BCrxqu82/foods-around-the-world) [Component Heirarchy](https://lucid.app/lucidchart/8fb6d955-c341-4307-ad7c-81ef31cf3521/edit?beaconFlowId=56E923C1BE354759&invitationId=inv_69f5dce2-b1d2-4b2e-b2ff-0e288157c78c&page=0_0#) [Heroku](https://guarded-citadel-18473.herokuapp.com/)

---

![World](https://cdn.tasteatlas.com/static/map_entire2.png)

---

#### **Getting Started**

- `Fork` and `clone` this repository
- `Npm i create-react-app`
- `Npm i react-router-dom`

## **Overview**

---

Food is a necessity for survival. Delicious foods are a necessity for happiness. There are so many delicious dishes and delicacies that people miss out on. This application will allow users to see, search, and learn famous dishes from around the world. Users can input a country and a list will show all the famous dishes in that country. If a user believes a certain dish was left out, they can input them and the list would update.

---

## Technologies Used

---

- HTML
- CSS
- JS Front-End
- JS Back-End
- REACT
- MONGODB
- EXPRESS
- MONGOOSE

---

![ScreenShot](/screenshot/Screenshot%202022-10-28%20at%2011.57.02%20AM.png)

---

### _Back-End_

- I first made a schema file called country which made the `name` to a string and the `url` to a string and both are required.
- Then I made another schema file called `food` that had the `name`, `description`, and `url` to a string that is required. I lastly added a schema `ObjectId` that references the country schema and that is how I will link the two together.
- It is important to create an `index.js` that sets the schemas to `mongoose`. Then you have to export the modules.
- I made a `server.js` file which would show all the logic for my routes.
- I installed cors to connect to the front-end as well as a PORT 3001 so I can see it in `LocalHost3001`
- Then I created middleware functions, `express.json` as well as `cors`.
- Now to create routes. I made a get for all countries doing:

```
app.get('/countries', async (req, res) => {
  let allCountries = await Country.find({})
  res.json(allCountries)
})
```

- I followed the same format to read one country, create countries, update a country, update a food, delete a food, read all foods, and create a food. The only difference was to adjust the get to put, delete, and post
- To get all foods by one country was slightly different.

```
// read all foods by country --> GET
app.get('/country/:id', async (req, res) => {
  console.log('Params', req.params)
  const foodsCountry = await Food.find({ country: req.params.id })
  res.json(foodsCountry)
})
```

- Lasty in the server.js, I added a app.listen so the server listens to `localhost3001`.

---

### _Front-End_

---

#### HTML JS

- In your `index.js` import `ReactDOM`, `App`, and `BrowserRouter`
- Wrap `<BrowserRouter>` around the `<App />`
- In your `App.js`, import `React` and `{ Routes, Route}`
- Inside of the `<main>` added `<Routes>` and wrap `<Route>` inside of it.
- Create a page folder and inside of it, create a `Home.js` file. This is where you will display on the browser
- In the `Home.js` import `useState` and use `useEffect` as well as `axios`
- Inside your Home function, create a `countries`, `updateCountries` and set it equal to `useState([])`
- Set the `useEffect` with an `async` `await`. Then `axios.get('http://localhost:3001/countries/')`. Then store the variable associated with the axios.get in `updateCountries`. This stores all the data from the url, the countries data, to a `useState`.
- Then in the `return`, wrap another `div` inside of the main `div`. Then wrap a `h1` tag inside and set it to Famouse Foods From Around The World. Then create a `section` tag with the class of `container-grid`. Make a map function associated with the `countries` useState and create a `div` tag with a key of `country._id`. After that, create a `h2` tag with `{country.name}` wrap in it as well as an `img` tag with the src equal to `country.url`. What this does is show all the countries name and image. Finally `export default Home` in the bottom and everything should appear on the brower.
- Create a `FoodList.js` in the pages folder that would show all the foods in the browser. Follow the similar layout to the `Home.js`. The only difference would be the axios.get will be `foods` not `countries`. The other difference would be the `return` would have a `h2` tag with `{food.name}` and an `img` tag with the `src={food.url}`. This would make the page show all foods with the images.
- I then created a page to show all foods from a certain country. The first thing I did was create another file called `CountryFood` under the page folder. Then I imported `useEffect, useState, useParams, and useNavigate`. Then inside the CountryFood function, I set a useState to `food` and `setFood`. I `let {id} = useParams()` then `let navigate = useNavigate()`. What I am doing here is to set the id of the url to a variable called `id` and created a variable called `navigate` to the `useNavigate()` function. Then to call the `navigate`, I made a variable called `viewFood` and set the paramters to `foodie`. Then in the function I did `navigate(${foodie})`. For my useEffect, I set the axios.get to `http://localhost:3001/country/${id}`. The allows me to grab the backend of all the foods by country due to useParams. Finally in the return, I had the same format as the `FoodList.js` so it would show all food names and image.
- I made my last file called `ViewFood.js` which would go to a different page and show one specific food. I followed the same format as `CountryFoods.js` file.
- I then updated all `Routes` in my `App.js` to so it appears on the browser.

---

#### CSS

- I made the `.App` with a display of flex, justify-content set to `center`, and `text-align` set to center.
- For the header, I changed the background color to a black tone, with the display of `flex`, justify-content to `flex-end`, align-items to `center`, font-color to `white`, and the height, width, to `75px 100vw` respectively.
- I took out the underline in the link tags and made the font white.
- I made sure the input boxes were in the center and spaced them evenly.
- I set all the images and the names to a grid and made columns so it looks cleaner. Lastly, I made all the images to a width of 400px, and a height of 280px so they are all the same size.

### Credits

- [Foods around the World Pic](https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.tasteatlas.com%2Fstatic%2Fmap_entire2.png&imgrefurl=https%3A%2F%2Fwww.tasteatlas.com%2F&tbnid=i0CbtQsNU31JhM&vet=12ahUKEwiDvtzJke36AhWHmVMKHU2wBe4QMygBegUIARDsAQ..i&docid=jLTNouDQOj2a-M&w=1500&h=786&q=foods%20around%20the%20world&ved=2ahUKEwiDvtzJke36AhWHmVMKHU2wBe4QMygBegUIARDsAQ)
  [American Dishes](https://www.cnn.com/travel/article/american-food-dishes/index.html)
  [Canada Dishes](https://www.hostelworld.com/blog/best-traditional-canadian-food/)
- [Mexico Dishes](https://www.bbcgoodfood.com/howto/guide/top-10-foods-try-mexico)
  [Central America](https://www.spanish.academy/blog/11-traditional-foods-from-central-america-and-south-america/)
  [Venezuela](https://nomadparadise.com/venezuelan-food/)
- [Colombia](https://nomadparadise.com/colombian-food/)
  [Ecuador](https://traveladdicts.net/10-ecuadorian-food-dishes-not-to-miss/)
  [French Guiana](https://aroundtheworldin80cuisinesblog.wordpress.com/2018/12/23/76-guyana-suriname-and-french-guiana/)
- [Brazi](https://www.rainforestcruises.com/guides/traditional-brazilian-food)
  [Peru](https://www.seriouseats.com/essential-peruvian-cuisine)
  [Bolivia](https://www.rainforestcruises.com/guides/bolivian-food)
  [Paraguay](https://nomadparadise.com/paraguayan-food/)
- [Uruguay](https://nomadparadise.com/uruguayan-food/)
  [Argentina](https://www.bbcgoodfood.com/howto/guide/top-10-foods-try-argentina)
  [Chile](https://www.authenticfoodquest.com/10-popular-chilean-dishes-worth-trying/)
  [Ireland](https://www.bbcgoodfood.com/howto/guide/top-10-foods-try-ireland)
- [Scotland](https://www.bbcgoodfood.com/howto/guide/top-10-foods-try-scotland)
  [England](https://www.twinenglishcentres.com/blog/7-traditional-british-dishes-you-need-to-try)
  [Wales](https://www.bbcgoodfood.com/howto/guide/top-10-foods-try-wales)
- [Portugal](https://www.afar.com/magazine/iconic-portuguese-dishes-and-where-to-try-them)
  [Spain](https://www.bbcgoodfood.com/howto/guide/top-10-foods-try-spain)
  [France](https://learnfrenchinvancouver.com/blog/top-10-french-dishes/)
- [Belgium](https://traveltriangle.com/blog/belgium-food/#:~:text=Belgium%20is%20famous%20for%20waffles,go%20along%20with%20Belgian%20beer.)
  [Netherlands](https://www.eurotunnel.com/uk/holiday-ideas/top-ten-traditional-dutch-foods/)
  [Germany](https://www.expatrio.com/living-germany/german-culture/german-food)
  [Switzerland](https://studyinginswitzerland.com/swiss-cuisine-traditional-food-to-try/)
- [Italy](hotelmousai.com/blog/dining/top-10-traditional-foods-in-italy)
  [Greece](https://www.bbcgoodfood.com/howto/guide/top-10-dishes-try-greece)
  [Sweden](https://nomadparadise.com/swedish-food/)
- [China](https://www.hotelmousai.com/blog/dining/the-10-most-popular-dishes-in-china)
  [South Korea](https://www.hotels.com/go/south-korea/great-korean-dishes)
  [Japan](https://www.willflyforfood.net/the-ultimate-japanese-food-guide-what-to-eat-in-japan-and-where-to-try-them/)
- [Taiwan](https://www.chefspencil.com/most-popular-foods-in-taiwan/)
  [Philippines](https://wanderingwheatleys.com/best-food-to-eat-in-the-philippines/)
  [Indonesia](http://www.indochili.com/top-10-indonesian-food-that-you-must-try.html)
- [Singapore](https://www.hotels.com/go/singapore/best-singapore-dishes)
  [Thailand](https://www.flowermoundyummythai.com/top-7-most-popular-thai-foods/)
  [Malaysia](https://www.chefspencil.com/25-most-popular-malaysian-foods/)
- [Vietnam](https://www.rainforestcruises.com/guides/best-food-vietnam)
