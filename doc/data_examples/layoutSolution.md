# templates host location
http://git.keepwork.com/gitlab_rls_official/keepwork-template-v2

# new website select options
classes
```javascript
[
  {
    "id": 1,
    "name": "Basic",
    "templates": [
      {
        "id": 0,
        "name": "Basic",
        "screenShot": "abcd.png",
        "previewUrl": "#暂时没有",
        "folder": "basic"
      },
      {
        "id": 1,
        "name": "Basic Fullscreen",
        "screenShot": "abcd.png",
        "previewUrl": "#暂时没有",
        "folder": "basic_fullscreen"
      }
    ]
  },
  {
    "id": 1,
    "name": "Header",
    "templates": [
      {
        "id": 1,
        "name": "Header",
        "screenShot": "abcd.png",
        "previewUrl": "#暂时没有",
        "folder": "header"
      },
      {
        "id": 2,
        "name": "Header Sidebar",
        "screenShot": "abcd.png",
        "previewUrl": "#暂时没有",
        "folder": "header_sidebar"
      }
    ]
  }
]

```

# default website _config/layout
layout

```javascript
{
  "layoutConfig": {
    "defaultLayoutId": 0,
    "layouts": [
      {
        "id": 0,
        "name": "Basic",
        "styleName": "basic",
        "match": "",
        "content": {
          "footer": "footer.md",
          "header": "header.md",
          "sidebar": "sidebar.md"
        }
      }
    ]
  },
  "pages": {
    "index.md": {
      "layout": 0
    }
  }
}

```