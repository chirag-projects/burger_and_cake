from django.urls import path

from . import views

urlpatterns = [
    path("buy/", views.buy_item),
    path("analytics/items/", views.item_analytics),
    path("analytics/daily/", views.daily_orders),
]
