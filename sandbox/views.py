from django.http import HttpResponse
from django.template import Context, loader, RequestContext
from django.conf import settings

common_template_vars = {}


# static page views



def todo(request):

        t = loader.get_template('to-do.html')
            
        context = {}
        context.update(common_template_vars)

        c = RequestContext(request, context)
        return HttpResponse(t.render(c))


def todo2(request):

        t = loader.get_template('to-do-2.html')
            
        context = {}
        context.update(common_template_vars)

        c = RequestContext(request, context)
        return HttpResponse(t.render(c))

def todo3(request):

        t = loader.get_template('to-do-3.html')
            
        context = {}
        context.update(common_template_vars)

        c = RequestContext(request, context)
        return HttpResponse(t.render(c))
