from django.conf.urls.defaults import *
from sandbox import views
from django.views.generic.simple import direct_to_template

urlpatterns = patterns('',

	url(r'^to-do/$', direct_to_template, {'template': 'to-do.html'}),
	url(r'^to-do-2/$', direct_to_template, {'template': 'to-do-2.html'}),
	url(r'^to-do-3/$', direct_to_template, {'template': 'to-do-3.html'}),

	# presentations
	url(r'^presentation-snippets/$', direct_to_template, {'template': 'presentation-snippets.html'}),
	url(r'^presentation-backbone/$', direct_to_template, {'template': 'presentation-backbone.html'}),

	#snippets demo
	url(r'^snippets-demo/$', direct_to_template, {'template': 'snippets-demo.html'}),
	(r'', include('snippets.urls')),

	# backbone demo
	url(r'^backbone-model/$', direct_to_template, {'template': 'backbone-model.html'}),
	url(r'^backbone-view/$', direct_to_template, {'template': 'backbone-view.html'}),
	url(r'^backbone-router/$', direct_to_template, {'template': 'backbone-router.html'}),
	url(r'^backbone-collection/$', direct_to_template, {'template': 'backbone-collection.html'}),
	url(r'^backbone-ajax/$', direct_to_template, {'template': 'backbone-ajax.html'}),
	url(r'^demo-api/$', views.demo_api, {}, name='demo-api'),

)