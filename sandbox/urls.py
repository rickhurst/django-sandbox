from django.conf.urls.defaults import *
from sandbox import views
from django.views.generic.simple import direct_to_template

urlpatterns = patterns('',
   url(r'^to-do/$', 'sandbox.views.todo', name='to-do'),
   url(r'^to-do-2/$', 'sandbox.views.todo2', name='to-do-2'),
   url(r'^to-do-3/$', 'sandbox.views.todo3', name='to-do-3'),
)