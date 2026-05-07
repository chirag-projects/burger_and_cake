from django.db import models

class Order(models.Model):

    user_email = models.EmailField()

    item_id = models.IntegerField()

    item_name = models.CharField(max_length=100)

    item_price = models.FloatField()

    quantity = models.IntegerField(default=1)

    total_amount = models.FloatField()

    created_at = models.DateTimeField(auto_now_add=True)

    month = models.IntegerField()

    year = models.IntegerField()
# Create your models here.
