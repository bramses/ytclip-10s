// take this youtube share link and add 5 seconds for end= parameter and minus 5 seconds for start= parameter
// example: https://youtu.be/wHh3J3z8ezQ?t=175
const createClip = (shareLink) => {
    const link = shareLink.split('?t=');
    const start = parseInt(link[1]) - 5;
    const end = parseInt(link[1]) + 5;
    const newLink = `${link[0]}?start=${start}&end=${end}`;
    return newLink;
}

// transform result from createClip link in an embed
const shareToEmbed = (link) => {
    return link.replace('youtu.be', 'www.youtube.com/embed');
}

// insert embed link into an iframe
const embedClip = (link) => {
    return `<iframe width="560" height="315" src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

const wrapInDiv = (iframe) => {
    return `<div class="embed-youtube">${iframe}</div>`;
}

const main = (shareLink) => {

    const clip = createClip(shareLink);
    const embed = shareToEmbed(clip);
    const iframe = embedClip(embed);

    // wrap in div if you want to style it
    const shouldWrap = true;
    if (shouldWrap) {
        return wrapInDiv(iframe);
    }

    return iframe;
}
