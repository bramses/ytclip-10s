# YT Clip 10s

Clip a YouTube Video 10 seconds and get an embed link.

## Running

- Grab YT share link e.g. https://youtu.be/wHh3J3z8ezQ with a start time e.g. https://youtu.be/wHh3J3z8ezQ?t=175
- run main on share link
- use `shouldWrap == true` if you want iframe surrounded by div

## Output

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/wHh3J3z8ezQ?start=170&end=180" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
```