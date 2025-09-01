<template>
    <div class="location">
        <h2 class="title">Место торжества</h2>
        <div class="location-wrapper">
            <h2 class="location-wrapper-title">Ресторан <br> "O'zbekiston"</h2>
            <p class="location-wrapper-desc">Адрес: г. Андижан<br> 3 микрор-н, проспект Амира Тимура 17 <br>Ориентир: 11 школа</p>
            <button class="location-wrapper-button" @click="openMap()">На карте</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const openMap = () => {
  const url = `https://yandex.uz/maps/org/95652754355/?display-text=%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD&ll=72.358388%2C40.747821&mode=search&sctx=ZAAAAAgBEAAaKAoSCXxfXKrSFlJAEapE2VvKX0RAEhIJqS9LOzWXaz8RTb1uERjrWz8iBgABAgMEBSgKOABA2VBIAWJGcmVhcnI9c2NoZW1lX0xvY2FsL0dlb3VwcGVyL0FkdmVydHMvUmVhcnJhbmdlQnlBdWN0aW9uL0NhY2hlL0VuYWJsZWQ9MWoCdXqdAc3MzD2gAQCoAQC9AVUt8DPCAR6PpeuTugSz5%2BSq5AL8y%2Fm%2FyALW%2B5mzogPO6PrQwgaCAhsoKGNhdGVnb3J5X2lkOigxODQxMDYzOTQpKSmKAgkxODQxMDYzOTSSAgCaAgxkZXNrdG9wLW1hcHOqAjEzOTYzMjc5NDU1NywyMzIyNDg3NzYyNiwxNTYyODIwNTQ4NjAsMTM1MjEzMTI1OTc5&sll=72.358388%2C40.747821&sspn=0.007704%2C0.006360&text=%7B%22text%22%3A%22%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184106394%22%5D%7D%5D%7D&z=16.76`;
  window.open(url, '_blank');
}
</script>

<style lang="scss" scoped></style>