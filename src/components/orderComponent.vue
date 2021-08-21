<template>
    <div class="order">
        <h3>{{ order.Title }}</h3>
        <p>Адрес доставки: {{ getDeliveryAddress() }}</p>
        <p>Информация по доставке: {{ getShippingInfo() }}</p>
        <p>Цена доставки: {{ order.DeliveryPrice }}</p>
        <p>Цена без скидки: {{ order.Price }}</p>
        <p>Скидка: {{ order.DiscountTitle }}</p>
        <p>Итоговая цена: {{ order.TotalPrice }}</p>
    </div>
</template>

<script>
export default {
    name: "orderComponent",
    props: {
        order: {
            type: Object
        }
    },
    methods: {
        getDeliveryAddress() {
            return this.order.DeliveryAddress.AddressLine1 + this.order.DeliveryAddress.AddressLine2 + "," 
            + this.order.DeliveryAddress.City + 
            // Тернарные условия здесь, чтобы если у заказа не указана в доставке область или страна,
            // не выводилась нежелательная информация
            (this.order.DeliveryAddress.State ? "," + this.order.DeliveryAddress.State : "") +
            (this.order.DeliveryAddress.Country ? "," + this.order.DeliveryAddress.Country : "");
        },
        getShippingInfo() {
            // Здесь то же самое, что и сверху
            return (this.order.Shipping.Email ? (this.order.Shipping.Email + ",") : "")  
            + (this.order.Shipping.Phone ? this.order.Shipping.Phone : "0") + ","
            + this.order.Shipping.Title + "," +
            this.order.Shipping.Type;
        }
    }
}
</script>

<style scoped>
.order {
    background-color: aqua  ;
    margin-bottom: 10px;
}
</style>