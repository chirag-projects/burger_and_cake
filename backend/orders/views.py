from rest_framework.decorators import api_view
from rest_framework.response import Response

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
