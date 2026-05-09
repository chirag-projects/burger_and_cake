from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Count
from django.db.models.functions import TruncDate


from .models import Order

from datetime import datetime

@api_view(["POST"])
def buy_item(request):

    user = request.data.get("user")

    item = request.data.get("item")

    now = datetime.now()

    Order.objects.create(

        user_email=user["email"],

        item_id=item["id"],

        item_name=item["name"],

        item_price=item["price"],

        quantity=1,

        total_amount=item["price"],

        month=now.month,

        year=now.year,
    )

    return Response({
        "message": "Saved"
    })
# Create your views here.
# 🔥 PIE CHART DATA
@api_view(["GET"])
def item_analytics(request):
    data = (
        Order.objects
        .values("item_name")
        .annotate(count=Count("id"))
        .order_by("-count")
    )

    return Response(list(data))


# 🔥 LINE GRAPH DATA
@api_view(["GET"])
def daily_orders(request):
    data = (
        Order.objects
        .annotate(day=TruncDate("created_at"))
        .values("day")
        .annotate(total=Count("id"))
        .order_by("day")
    )

    return Response(list(data))