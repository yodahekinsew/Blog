(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{9600:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8e8","images":{"fallback":{"src":"/blog/static/6ac3e0024482d6b5957e00a0534875a7/1096c/yodahe-games.png","srcSet":"/blog/static/6ac3e0024482d6b5957e00a0534875a7/1096c/yodahe-games.png 75w,\\n/blog/static/6ac3e0024482d6b5957e00a0534875a7/01986/yodahe-games.png 150w","sizes":"75px"},"sources":[{"srcSet":"/blog/static/6ac3e0024482d6b5957e00a0534875a7/26941/yodahe-games.avif 75w,\\n/blog/static/6ac3e0024482d6b5957e00a0534875a7/95309/yodahe-games.avif 150w","type":"image/avif","sizes":"75px"},{"srcSet":"/blog/static/6ac3e0024482d6b5957e00a0534875a7/a18cc/yodahe-games.webp 75w,\\n/blog/static/6ac3e0024482d6b5957e00a0534875a7/7ddcc/yodahe-games.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":75}')},9535:function(e,t,a){"use strict";var l=a(7294),i=a(5444),o=a(8590);t.Z=function(){var e,t,s=(0,i.useStaticQuery)("305633910"),n=null===(e=s.site.siteMetadata)||void 0===e?void 0:e.author,r=null===(t=s.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(o.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/yodahe-games.png",width:75,height:75,quality:95,alt:"Profile picture",__imageData:a(9600)}),(null==n?void 0:n.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,n.name)," ",(null==n?void 0:n.summary)||null," ",l.createElement("a",{href:"https://twitter.com/"+((null==r?void 0:r.twitter)||"")},"You should follow him on Twitter,"),l.createElement("a",{href:"https://youtube.com/"+((null==r?void 0:r.twitter)||"")},"check out his videos on Youtube,"),l.createElement("a",{href:"https://"+((null==r?void 0:r.itch)||"")+".itch.io"},"or play some of his games on Itch.io")))}},7704:function(e,t,a){"use strict";a.r(t);var l=a(7294),i=a(5444),o=a(9535),s=a(7198),n=a(3751);t.default=function(e){var t,a=e.data,r=e.location,c=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=a.allMarkdownRemark.nodes;return 0===m.length?l.createElement(s.Z,{location:r,title:c},l.createElement(n.Z,{title:"All posts"}),l.createElement(o.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(s.Z,{location:r,title:c},l.createElement(n.Z,{title:"All posts"}),l.createElement(o.Z,null),l.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-2965d7e6d68b2f6f8d94.js.map