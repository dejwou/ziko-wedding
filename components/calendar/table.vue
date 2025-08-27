<template>
  <table class="calendar-table">
    <thead>
      <tr>
        <th>Пн</th>
        <th>Вт</th>
        <th>Ср</th>
        <th>Чт</th>
        <th>Пт</th>
        <th>Сб</th>
        <th>Вс</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
      <tr>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
      </tr>
      <tr>
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td class="highlight"><span v-html="heart"></span>20</td>
        <td>21</td>
      </tr>
      <tr>
        <td>22</td>
        <td>23</td>
        <td>24</td>
        <td>25</td>
        <td>26</td>
        <td>27</td>
        <td>28</td>
      </tr>
      <tr>
        <td>29</td>
        <td>30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import heart from "@/assets/icons/heart.svg?raw";
</script>

<style lang="scss" scoped>
.calendar-table {
  width: 100%;
  margin-top: 2rem;
  border-collapse: collapse;
  text-align: center;
  
  th,
  td {
    font-size: 2.4rem;
    font-weight: 400;
    padding: 1.6rem 0;
    text-align: center;
  }

  & th {
    border-bottom: 0.2rem solid #A8A8A8;
    padding-bottom: 2rem;
  }

  & td.highlight {
    position: relative;

    & span {
      width: 5.4rem;
      height: 5rem;
      position: absolute;
      top: 57.5%;
      left: 45%;
      transform: translate(-45%, -55%);

      & > svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
