---
title: Django REST starter project
description: Simple Django REST project to help you starting your project the right way
image: 'djangoREST.png'
---

In this article, I will explain how to setup a simple [Django](https://www.djangoproject.com/) project. I use this setup as a "starter template" for all my django projects

I will be using Python 3.9 However, any version of Python above 3.6 should work just fine.

You can find the final code of this article on my Github [https://github.com/florianbgt](https://github.com/florianbgt)

## Virtual Environment

It is highly recommended to create an isolated virtual environment for all of your python projects.
Such isolated environment will keep your dependencies organized and prevent dependencies conflict between your different projects.

Using your terminal, run the command below in your project folder to create the virtual environment:   
```bash
python3 -m venv env
```

A folder `/env` should have been created inside your project folder.   
To activate the virtual environment, run the command below according to your OS.

For Windows users:
````batch
env/scripts/activate
````   
For Linux users:
```bash
source env/bin/activate
```

## Setting up your Django project

Before setting up our project, we need to first install Django inside our virtual environment. For that, We will be using pip:   
```bash
pip install django
```

We can then set up our django project using the following command inside our project folder:   
```bash
django startproject _project.
```

You can test the Django project by running the following command in your project folder:   
```bash
python manage.py runserver
```

You can then go to [http://localhost:8000](http://localhost:8000) and you something as below:

Congratulation! Your Django project is up and running!

## Create a custom user model

If authentication is required in your app, you will be require to use a user model.
Django default user model is great! And it will be fine for most of your project.
However, modifying that default user model later on in your project can be very tricky.

That is why it is [Django official documentation](https://docs.djangoproject.com/en/3.2/topics/auth/customizing/#auth-custom-user) recommendation to create a custom user model after the project creation and before the first database migration.

We will start by modifying creating a new app for our user model. I like to call that app "user". We can create this app using the following command:
```bash
python manage.py startapp user
```

Once our new app is created we need to register it in our project. We can do so in our `settings.py` file:
```python
'user' #new
```

As I said before, the default Django user model is great. And it will fit your need most of the time. Thus, we can inherit that default user model for our custom user model. For demo purposes only, I will add a new field to that custom user model. A simple boolean field "user_notification" field. We can use this later to send email to users (notifications, newsletter...).
We will start by modifying our `user/model.py` file to create the model:
```python
import django #new


```

We will also change our `user/admin.py` file to display our user model nicely in the admin interface:
```python
import django #new

```