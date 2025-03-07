export function getLink(link) {
  const id = link.match(/id=([^&]+)/);

  let href = "";
  let imgsrc = "";
  if (id) {
    href = `https://drive.google.com/file/d/${id[1]}/view`;
    imgsrc = `https://lh3.googleusercontent.com/d/${id[1]}?authuser=0`;
  }

  return { imgsrc, href };
}
