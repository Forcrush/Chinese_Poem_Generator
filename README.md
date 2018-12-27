## 基于 RNN 的中国古诗词生成模型


### 运行环境

* Windows 8.1 64 位系统 

* Python 3.5.x ( 64 位)

* PyCharm 2018.1.3


### 项目结构

该项目是使用 python 语言，使用基于 Django 开发的 Web 界面，主要结构如下：

* `dataset` 文件夹，数据训练集，包含唐诗、宋词和诗经
* `log` 文件夹，存储训练好的模型
* `RNN_poem_gen` 包，基于 Django 框架的主要业务逻辑与后端处理
* `poem_generator` 包，项目的相关设置
* `static` 文件夹，网页端使用到的 css 样式和一些 js 代码，用于渲染网页
* `templates` 文件夹，html 网页代码，通过 Django 注入数据，作为前端 UI
* `db.sqlite3`，Django 默认的一个数据库设置
* `manage.py`，Django Web 运行的入口
* `poetry.py`，包含模型构建，数据处理，训练和测试调度接口


### 训练和测试

1. 若要重新训练模型，进入 `poetry.py` 运行 `begin_train()` 可指定训练神经单元 `Basic_RNN` 、 `LSTM` 、 `GRU` 

2. 训练完成后可运行 `begin_gen()`，其中默认参数为空字符串，即随机生成诗词；也可指定一段文字生成藏头诗


#### 程序运行方式

可以通过 PyCharm 打开（两种方式）：

* 直接运行 Django 项目

* 运行 `manage.py`，主要运行时需要将参数设置为 `runserver 8000`

通过命令行运行：

* `cd` 到 `manage.py` 目录下，执行指令 `python manage.py runserver 8000`


#### Web UI 演示运行

上述两种方式运行完毕后，若出现如下的提示，可以访问 <http://127.0.0.1:8000> ，看到项目的 UI 界面，根据内容直接在网页上操作即可

```
December 27, 2018 - 15:03:30
Django version 2.1.4, using settings 'poem_generator.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```