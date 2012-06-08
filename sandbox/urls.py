from django.conf.urls.defaults import *
from sandbox import views
from django.views.generic.simple import direct_to_template

urlpatterns = patterns('',
   url(r'^to-do/$', 'sandbox.views.todo', name='to-do'),
)