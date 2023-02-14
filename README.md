This repository is my REST API for fetching diffrent notifications from web. These notifications can be returned from other APIs, RSS feeds or scraped from websites. This project is writtend just for me so I dont think anyone is going to make use of that. The reason why I created this API is that I am doing my notes and organising my shit with markdown notes and I wanted to have an option to display some notifications in it. The idea is to fetch the notification, create an image with giving information (can be created on fly or just a screenshot of a website segment) and expose that with an endpoint. Then all I have to do in my markdown file is to add an image tag

```md
![](http://localhost:3000/v1/vlr/today)
```

Now when I open my file it will triger this endpoint which will make a screenshot of a small segment of the website and display returned result.
