<template>
    <div class="content">
      <header class="header">
        <img src="../assets/images/wedding/xz.JPG" alt="Ziyoda and Hasanboy" >
        <div class="header-waiting">
          <p>Ждем вас</p>
          <h6>29/09/25</h6>
        </div>
        <div class="header-content">
          <span>&</span>
          <p>Хасанбой <br> Зиёда</p>
        </div>
      </header>
      <section class="content-calendar">
        <span v-html="patternTop"></span>
        <CalendarWrapper/>
        <span v-html="patternBottom"></span>
      </section>
      <section class="content-location">
        <Location/>
        <Marquee/>
      </section>
      <section class="content-gifts">
        <span v-html="patternTop"></span>
        <PresentsGifts/>
        <span v-html="patternBottom"></span>
      </section>
      <section class="content-form">
        <h4 class="title">Анкета гостя</h4>
        <p class="content-form-description">Чтобы нам было легче подготовить этот день и сделать его уютным для всех, пожалуйста, ответьте на пару коротких вопросов:</p>
        <Form/>
      </section>
      <footer class="footer">
        <h6 class="footer-title">Контакты</h6>
        <div class="footer-wrapper">
          <a class="footer-link" href="https://t.me/craftinglife" target="_blank" rel="noopener noreferrer">
            <span v-html="tg"></span>
          </a>
          <div class="footer-divider"></div>
          <a class="footer-link" href="https://instagram.com/radjapova_zi" target="_blank" rel="noopener noreferrer">
            <span v-html="ig"></span>
          </a>
          <div class="footer-divider"></div>
          <a class="footer-link" href="tel:+998 93 440 44 40">
            <span v-html="phone"></span>
          </a>
        </div>
      </footer>
    </div>
    <BackgroundMusic />
</template>

<script setup lang="ts">
import CalendarWrapper  from '~/components/calendar/wrapper.vue';
import Marquee from '~/components/ui/marquee.vue';
import Location from '~/components/location/address.vue';
import Form from '~/components/form/form.vue'
import patternTop from "@/assets/images/traceries/tracery-top.svg?raw";
import patternBottom from "@/assets/images/traceries/tracery-bottom.svg?raw";
import tg from "@/assets/icons/telegram.svg?raw";
import ig from "@/assets/icons/ig.svg?raw";
import phone from "@/assets/icons/phone.svg?raw";

definePageMeta({
  middleware: 'device-client'
})
</script>

<style setup lang="scss">
.content{
  &-calendar{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6rem;
  }
  
  &-location{
    margin-bottom: 6rem;
  }

  &-gifts{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6rem;
  }

  &-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;

    &-description{
      font-weight: 400;
      line-height: 110%;
      text-align: center;
      max-width: 70%;
      text-align: center;
    }
  }
}
</style>