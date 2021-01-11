const metas = [
  {
    property: "og:title",
    content: "Seasons",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://vsla.github.io/seasons/",
  },
  {
    property: "og:image",
    content:
      "https://static.boredpanda.com/blog/wp-content/uploads/2019/06/06_one-photo-four-seasons-shaman-rock-olkhon-island-russia-1-5d154a20ed161__880.jpg",
  },
];

metas.forEach(({ property, content }) => {
  var meta = document.createElement("meta");
  meta.propert = property;
  meta.content = content;
  document.getElementsByTagName("head")[0].appendChild(meta);
});
