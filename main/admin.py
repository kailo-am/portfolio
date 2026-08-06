from django.contrib import admin
from .models import project

# Register your models here.

@admin.register(project)
class projectAdmin(admin.ModelAdmin):
    list_display = ('title', 'technologies', 'created_at')
    search_fields = ('title', 'technologies')
    ordering = ('-created_at',)