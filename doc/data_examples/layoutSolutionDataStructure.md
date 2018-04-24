# new website select options
classes

```javascript
[
  {
    name: "普通",
    templates: [
      {
        name: "默认",
        screenShot: "abcd.png",
        content: {
          "_config/pages/ft1.md": "empty.md",
          "_config/pages/ft2.md": "empty.md",
          "_config/pages/hd1.md": "empty.md",
          "_config/pages/hd2.md": "empty.md",
          "_config/pages/footer.md": "empty.md",
          "_config/layout.md": "layout.md",
          "index.md": "empty.md"
        }
      }
    ]
  }
]
```

# default website _config/layout
layout

```javascript
{
  layoutConfig: {
    layouts: [
      {
        id: "layout1"
        name: "网站布局1",
        style: "default",
        content: {
          footer: "ft1.md",
          header: "hd1.md",
          sidebar: "sdb1.md"
        }
      }
    ],
    files: {
      footers: ["ft1", "ft2"],
      headers: ["ft1", "ft2"],
      sidebars: ["ft1", "ft2"]
    }
  },
  pages: {
    "index.md": {
      layout: "layout1"
    }
  }
}
```