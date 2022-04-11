# html-entities-converter

## 功能 Features

替换选中部分的 HTML 实体字符

### 自定义配置 custom configuration

默认配置
```json
{
  "<": "&lt;",
  ">": "&gt;",
  "&": "&amp;",
  "\"": "&quot;",
  "'": "&#39;",
  "`": "&#96;",
  " ": "&nbsp;",
  "\t": "&nbsp;&nbsp;&nbsp;&nbsp;",
  "\n": "<br>"
}
```

在`setting.json`增加`html-entities-converter.overrides`字段  
键为字符，值为替换后的字符

```json
{
  "html-entities-converter.overrides": {
    "&": "&amp;"
  }
}
```
