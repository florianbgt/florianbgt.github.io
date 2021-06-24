---
title: Django email authentication using allauth
description: Simple Django project to help you setting up authentication the right way using allauth
image: 'django.png'
---

I love Django and I use for most of my projects. However, it uses username as authentication method. While it work great, it is a little bit outdated...   
Email authentication would be much better right? Fortunately, there is a easy solution, [Django Allauth](https://django-allauth.readthedocs.io) 
I will be using Python 3.9 for this tutorials   
You can find the final code on my Github: https://github.com/florianbgt   

## Virtual Environment

First, start by creating a folder with the name of your project. I will call mine "django_allauth"   
Then, let's create a virtual environment. This will help us to keep our dependencies nice and clean:   
```bash
python -m venv env
```

Now, we can activate our virtual environment. For Windows users:
````batch
env/scripts/activate
````   
And for Linux and Mac users:
```bash
source env/bin/activate
```

## Setting up your project

Before setting up our project, we need to first install Django inside our virtual environment:
```bash
pip install django
```

We can then set up our Django project   
```bash
django-admin startproject _project .
```

Let's spin up our project to make sure everything is working:   
```bash
python manage.py runserver
```

If you visit [http://localhost:8000](http://localhost:8000) you should see our dev server running:
<div><blog-img src="django_success.png" width="100%" height="auto" class="shadow mb-3"/></div>

## Creating a custom user model

Changing the user model inside a on going project can be very difficult. That is why Django's documentation highly recommends to setup a custom user model at the beginning of your project. That will save us a lot of time later on once we are going to modify that user model. https://docs.djangoproject.com/en/3.2/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project

***It is very important to do these steps before your first database migration.*** If you migrated your database already, then you better start over

let's start by creating a "users" app:
```bash
python manage.py startapp users
```

Next, register you new app in your `settings.py` file:
```python
#settings.py

...
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    #local		#new
    'users',		#new
]
...
```

For our custom user model, we will simply extend Django default user model:
```python
#user/models.py

from django.db import models
from django.contrib.auth.models import AbstractUser		#new


class CustomUser(AbstractUser):		#new
    pass		#new
```

We now can tell Django to use our custom user model:
```python
#settings.py

...
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

AUTH_USER_MODEL = 'users.CustomUser'		#new
...
```

We can now finally apply our migrations:
```bash
python manage.py makemigrations users
```
```bash
python manage.py migrate
```

You Django project is now using the custom model we have created!

## Customizing the admin interface

We will now customize our admin interface so we can access and modify our new user model

We will need a superuser for that:
```bash
python manage.py createsuperuser
```

If you spin up the dev server and try to access the admin, you will notice, our user model is missing
<div><blog-img src="django_admin.png" width="100%" height="auto" class="shadow mb-3"/></div>

That is because we no longer use the default user model. And thus, it is not displayed by default in the admin interface.   
Let's fix this!

We will first create the file `users/forms.py`:
```bash
#users/forms.py

from django.contrib.auth import get_user_model		#new
from django.contrib.auth.forms import UserCreationForm, UserChangeForm		#new

class CustomUserCreationForm(UserCreationForm):		#new
    class Meta:		#new
        model = get_user_model()		#new
        fields = ('email', 'username',)		#new


class CustomUserChangeForm(UserChangeForm):		#new
    class Meta:		#new
        model = get_user_model()		#new
        fields = ('email', 'username',)		#new
```

We can then modify the file `users/admin.py` to include these 2 forms in our admin interface:
```bash
#admin.py

from django.contrib import admin
from django.contrib.auth import get_user_model		#new
from django.contrib.auth.admin import UserAdmin		#new
from .forms import CustomUserCreationForm, CustomUserChangeForm		#new

CustomUser = get_user_model()		#new

class CustomUserAdmin(UserAdmin):		#new
    add_form = CustomUserCreationForm		#new
    form = CustomUserChangeForm		#new
    model = CustomUser		#new
    list_display = ['email', 'username',]		#new

admin.site.register(CustomUser, CustomUserAdmin)		#new
```

If you now go back to [http://localhost:8000/admin](http://localhost:8000/admin) you should now see the user model displayed correctly
<div><blog-img src="django_admin2.png" width="100%" height="auto" class="shadow mb-3"/></div>

You can now access our user model from the admin!

## Switching to Django Allauth

It is now time to switch to Allauth for email login!

First we will need to install it:
```bash
pip install django-allauth
```

Then, add the following to your `settings.py`:
```bash
# settings.py

...
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.sites',		#new
    'django.contrib.staticfiles',
    #local
    'users',
    #third party
    'allauth',		#new
    'allauth.account',			#new
    'allauth.socialaccount',		#new
]

SITE_ID = 1		#new
...
```

We will also add allauth to our urls:
```bash
from django.contrib import admin
from django.urls import path, include		#new

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),		#new
]
```