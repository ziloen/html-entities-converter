# html-entities-converter README

## Features

替换选中部分的 HTML 实体字符

### 自定义配置 custom configuration

在`setting.json`增加`html-entities-converter.overrides`字段  
键为字符，值为替换后的字符

```json
{
  "html-entities-converter.overrides": {
    "&": "&amp;"
  }
}
```


