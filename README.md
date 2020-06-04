## Learning ReactJS

* This is the Tutorial for React JS.
---
#### Task 1 ( Netflix Series List )
* This Site is Live [here](https://jovial-raman-8b81cb.netlify.app).
---
#### Task 2 ( Todo List App Using Local Storage )
* This Site is Live [here](https://ecstatic-clarke-0cfe41.netlify.app/).
---
#### Task 3 ( Github Profile Finder Using axios )
* This Site is Live [here](https://keen-heyrovsky-4203d6.netlify.app/).
---
#### Task 4 ( Github Profile Finder using Context API )
* This Site is Live [here](https://upbeat-wright-8e2629.netlify.app).
---
#### Task 5 ( Adaptive Pagination )
* Task added on Repo. This is built using React Hooks. I use [`JSONplaceholder`](https://jsonplaceholder.typicode.com/) api for dummy posts.
---
#### Task 6 ( Infinite Scroll Effect and MERN intro)
* Task added on Repo. This is built using React Hooks and `react-infinite-scroll-component`. I use [`Unsplash`](https://unsplash.com/) api for fetching Photos. For using `Unsplash` api we have to download [`unsplash-js`](https://www.npmjs.com/package/unsplash-js) module and `node-fetch`.
---
#### Task 7 (MERN Authentication using JWT)
* This Task is done by using `React Hooks` and `Context API`
* This is one kind of `Boilerplate code` which may included in any kind of MERN Stack website. 
* For Authentication I use JWT(JsonWebToken). 
* Here is a Secret Page called /home and it is secured by Private Route Setup
* ##### Private Route Setup:
```
// import Dependencies

const PrivateRoute = ({ component: Component, ...rest }) => {
    
    // Logics and Dependencies for Authentication

    return (
        <Route
            {...rest}
            render={props=>
            !isAuthenticated && !loading?
            (
                <Redirect to="/login" />
            ):
            (
                <Component {...props}/>
            )    
        }/>
    )
}
```
---
#### Task 8 ( [`Material UI`](https://material-ui.com/)  and Context API)
* Task added on Repo. This is built using React Hooks. I use [`Pixabay`](https://pixabay.com/) api for Searching Photos.
---