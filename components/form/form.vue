<template>
  <form @submit.prevent="submitForm" class="form">
    <div class="form-group bottom">
      <label class="form-group-label bottom">Фамилия</label>
      <input
        v-model="form.lastName"
        type="text"
        placeholder="Ваша фамилия"
        required
      />
    </div>

    <div class="form-group">
      <label class="form-group-label bottom">Имя</label>
      <input
        v-model="form.firstName"
        type="text"
        placeholder="Ваше имя"
        required
      />
    </div>

    <div class="form-group">
      <p class="form-group-title">Вы сможете присутствовать на свадьбе?</p>
      <label class="form-group-label radio">
        <input
          type="radio"
          value="Да! С нетерпением жду"
          v-model="form.attendance"
          required
        />
        Да! С нетерпением жду
      </label>
      <label class="form-group-label radio">
        <input
          type="radio"
          value="Пока не уверен(а), но постараюсь"
          v-model="form.attendance"
          required
        />
        Пока не уверен(а), но постараюсь
      </label>
      <label class="form-group-label radio">
        <input
          type="radio"
          value="К сожалению, не смогу"
          v-model="form.attendance"
          required
        />
        К сожалению, не смогу
      </label>
    </div>

    <div class="form-group">
      <label class="form-group-label bottom">
        <p>
          Какую песню вы хотели бы услышать на свадьбе?<br />
          <small>(для танцев / настроения)</small>
        </p>
      </label>
      <input v-model="form.song" type="text" placeholder="Ваше предпочтение" required/>
    </div>

    <div class="form-group">
      <label class="form-group-label bottom">
        <p>Что бы вы пожелали нам в трёх словах?</p>
      </label>
      <input v-model="form.wish" type="text" placeholder="Ваши пожелания"/>
    </div>

    <div class="form-group submit">
      <button class="submit-button" type="submit" :disabled="isSubmitting" :class="{'disabled': isSubmitting}">
        Отправить
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser'
import {SuccessNotification, FailedNotification} from "@/composables/notification";

const form = ref({
  lastName: "",
  firstName: "",
  attendance: "",
  song: "",
  wish: "",
});

const isSubmitting = ref(false);

const sanitize = (value: string) =>
  value
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const submitForm = async () => {
  isSubmitting.value = true;

  const templateParams = {
    last_name: sanitize(form.value.lastName.trim()),
    first_name: sanitize(form.value.firstName.trim()),
    attendance: form.value.attendance,
    song: sanitize(form.value.song.trim()),
    wish: sanitize(form.value.wish.trim()),
  };

  try {
    await emailjs.send(
      "service_kvmaxip",
      "template_ctp253p",
      templateParams,
      "L7--8H48Ru4Pg9WJu"
    );

    SuccessNotification("Ваши данные отправлены!");

    form.value = {
      lastName: "",
      firstName: "",
      attendance: "",
      song: "",
      wish: "",
    };
  } catch (err) {
    FailedNotification('Подключитесь к интернету')
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped lang="scss"></style>
