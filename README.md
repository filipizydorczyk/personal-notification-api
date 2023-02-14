This repository is my REST API for fetching diffrent notifications from web. These notifications can be returned from other APIs, RSS feeds or scraped from websites. This project was written just for me, so I dont think anyone is going to make a use of that. The reason why I created this API is that I am doing my notes and organising my shit with markdown files. So I wanted to have an option to display some notifications in it. The idea is to fetch the notification and create an image of that (can be created on fly or just a screenshot of the website segment) and expose that with an endpoint. Then all I have to do in my markdown file is to add an image tag

```md
![](http://localhost:3000/v1/vlr/today)
```

Now when I open my file it will triger this endpoint which will make a screenshot of a small segment of the website and display returned result.
