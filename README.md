#  第二版: Vue前台高仿 + Django3.1 + DjangoRestful Framework + Ant Design Pro V4 开发的在线教育网站及后台管理

[![Build Status](https://travis-ci.org/mtianyan/hexoBlog-Github.svg?branch=master)](https://travis-ci.org/mtianyan/hexoBlog-Github)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

后台管理使用TyAdmin(现代化的Xadmin替代品)生成管理后台前后端，并自动对接。

- v2版前台体验地址: https://imooc.funpython.cn
- v2版在线体验地址: https://imooc.funpython.cn/xadmin

- 第一版(master分支)前台体验地址: https://mooc.funpython.cn
- 第一版(master分支)后台体验地址:: https://mooc.funpython.cn/xadmin

Vue前台代码地址: https://github.com/mtianyan/vue-mooc

>账号: mtianyan
密码: 123456

## 运行指南:

### docker运行

```
git clone https://github.com/mtianyan/OnlineMooc.git
cd OnlineMooc
docker-compose up

# 导入数据
docker exec -it onlinemooc_mtianyan_mysql_1 bash
mysql -u root -p -D online_mooc < sql/online_mooc.sql
# 输入密码: mtianyanroot 
```

### 本地环境运行

后端项目运行:

```
git clone https://github.com/mtianyan/OnlineMooc.git
cd OnlineMooc
pipenv shell
pip install -r requirements.txt

# Navicat创建数据库，导入mxonline3.sql
# 修改settings.py 中数据库密码

python manage.py runserver
```

很高兴我的项目代码或许对你有帮助，请我吃包辣条或喝瓶可乐吧!

微信打赏:

![mark](http://myphoto.mtianyan.cn/blog/180302/i52eHgilfD.png?imageslim)




