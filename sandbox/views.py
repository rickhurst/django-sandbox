from django.http import HttpResponse
from django.template import Context, loader, RequestContext
from django.utils import simplejson as json
from django.conf import settings

common_template_vars = {}

def demo_api(request):
    """ RESTful api for demo """
    response_data = [ 
    	{"id":"1", "foo" : "bar" },
    	{"id":"2", "cheese" : "edam"}
    ]
        
    content = json.dumps(response_data)
    return HttpResponse(content, content_type='application/json')

