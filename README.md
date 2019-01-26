This project is part of the course React Developer by Udacity.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This is an open source project, you can contribute to it if you want

## Readable App

This is a Post/Comment project. It allows you to post text related to specific categories.
Assuming you have NodeJS installed on your PC, in the project directory, you can run:

### `npm install`
This command will download all the libraries necessary to run this project

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### backend server
The configuration to access the backend web service is under the following path: 

```sh
/src/util/_DATA.js
```

There, you can set the configuration for the backend server url and also the port to access it. The default url is:

[http://localhost:3001](http://localhost:3001)

### project components tree view
```bash
src
└─┬ src/components/App/App
  ├── src/components/Categories/Categories
  ├─┬ src/components/Home/Home
  │ ├─┬ src/components/ContentList/ContentList
  │ │ └── src/components/ContentListItem/ContentListItem
  │ │   ├── src/components/CommentTemplate/CommentTemplate
  │ │   └── src/components/ContentRate/ContentRate
  │ └── src/components/SortContentList/SortContentList
  ├─┬ src/components/PostContainer/PostContainer
  │ ├─┬ src/components/ContentList/ContentList
  │ │ └─┬ src/components/ContentListItem/ContentListItem
  │ │   ├── src/components/CommentTemplate/CommentTemplate
  │ │   └── src/components/ContentRate/ContentRate
  │ ├─┬ src/components/PostContent/PostContent
  │ │ └── src/components/ContentRate/ContentRate
  │ └── src/components/PostNewComment/PostNewComment
  ├── src/components/PostForm/PostForm
  └─┬ src/components/PostsByCategory/PostsByCategory
    ├─┬ src/components/ContentList/ContentList
    │ └─┬ src/components/ContentListItem/ContentListItem
    │   ├── src/components/CommentTemplate/CommentTemplate
    │   └── src/components/ContentRate/ContentRate
    └── src/components/SortContentList/SortContentList
```

### project components hierarchy

[![N|Solid](https://cdn1.imggmi.com/uploads/2019/1/26/1ebee0e53c5d56e7575ea94bcef4c0b1-full.png)](https://nodesource.com/products/nsolid)

### project components description

| Component | Description |
| ------ | ------ |
| App | Start Component |
| Categories | List all the categories with a link to filter all posts related to clicked category |
| ContentList | This component renders a list of posts and comments |
| ContentListItem | This component renders a single item of a list (post or comment) |
| ContentRate | Component responsible to increase and decrease item score (post or comment) |
| CommentTemplate | Component responsible for render comment and  handling comment edit  |
| Home | This component renders a list of posts in the home screen |
| Nav | Component render nav options |
| PostByCategory | Component renders a list of posts based on a specific category selected on the list of categories |
| PostContainer | This components renders all related to a single post |
| PostContent | Renders the title and body of a post |
| PostNewComment | Renders forms and controls for edit comment  |
| PostForm | Component to render form to add and edit post |
| SortContentList | Component responsible to sort the items of a list |